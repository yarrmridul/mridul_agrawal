// Site-wide settings that Mridul can change from /admin without a code push.
// Right now there is one setting: which dark theme every visitor sees.
//   GET  /api/site-config            -> { darkStyle: "ember" | "classic" }   (public, cached briefly)
//   POST /api/site-config {password, darkStyle} -> saves it (password protected)
// Stored in a Vercel Global Config store. Environment variables in the Vercel project:
//   GLOBAL_CONFIG_ID  - the store's ID (Storage -> your Global Config -> ID)
//   VERCEL_API_TOKEN  - an access token from Account Settings -> Tokens
//   ADMIN_PASSWORD    - the password for /admin
//   VERCEL_TEAM_ID    - optional, only if the store belongs to a team
// Until these exist the site simply uses the default below.

const crypto = require("crypto");

const DEFAULT = { darkStyle: "ember" };
const STYLES = ["ember", "classic"];
const KEY = "darkStyle";

const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 15 * 60 * 1000);
  list.push(now);
  hits.set(ip, list);
  return list.length > 8;
}

function samePassword(given, expected) {
  const a = crypto.createHash("sha256").update(String(given || "")).digest();
  const b = crypto.createHash("sha256").update(String(expected || "")).digest();
  return crypto.timingSafeEqual(a, b);
}

function apiUrl(path) {
  const team = process.env.VERCEL_TEAM_ID ? "?teamId=" + encodeURIComponent(process.env.VERCEL_TEAM_ID) : "";
  return "https://api.vercel.com/v1/global-config/" + encodeURIComponent(process.env.GLOBAL_CONFIG_ID) + path + team;
}

async function readStyle() {
  if (!process.env.GLOBAL_CONFIG_ID || !process.env.VERCEL_API_TOKEN) return DEFAULT.darkStyle;
  try {
    const r = await fetch(apiUrl("/items"), { headers: { Authorization: "Bearer " + process.env.VERCEL_API_TOKEN } });
    if (!r.ok) return DEFAULT.darkStyle;
    const data = await r.json();
    // The API returns either a list of {key, value} or a plain object, depending on version.
    let v;
    if (Array.isArray(data)) { const it = data.find((x) => x && x.key === KEY); v = it && it.value; }
    else if (data && typeof data === "object") v = data[KEY];
    return STYLES.includes(v) ? v : DEFAULT.darkStyle;
  } catch (e) {
    return DEFAULT.darkStyle;
  }
}

async function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") { try { return JSON.parse(req.body); } catch (e) { return {}; } }
  return {};
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.method === "GET") {
    const darkStyle = await readStyle();
    // Cached at Vercel's edge for 2 minutes, so a busy day costs only a few hundred reads.
    res.setHeader("Cache-Control", "public, max-age=0, s-maxage=120, stale-while-revalidate=600");
    return res.status(200).end(JSON.stringify({ darkStyle }));
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).end(JSON.stringify({ ok: false, error: "Use GET or POST." }));
  }

  res.setHeader("Cache-Control", "no-store");
  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
  if (limited(ip)) return res.status(429).end(JSON.stringify({ ok: false, error: "Too many tries. Wait 15 minutes." }));

  if (!process.env.ADMIN_PASSWORD || !process.env.GLOBAL_CONFIG_ID || !process.env.VERCEL_API_TOKEN) {
    return res.status(500).end(JSON.stringify({ ok: false, error: "The switch isn't set up yet: add GLOBAL_CONFIG_ID, VERCEL_API_TOKEN and ADMIN_PASSWORD in Vercel, then redeploy." }));
  }

  const body = await readBody(req);
  if (!samePassword(body.password, process.env.ADMIN_PASSWORD)) {
    return res.status(401).end(JSON.stringify({ ok: false, error: "Wrong password." }));
  }

  // A password-only check lets /admin show the current setting after login.
  if (body.check) return res.status(200).end(JSON.stringify({ ok: true, darkStyle: await readStyle() }));

  if (!STYLES.includes(body.darkStyle)) {
    return res.status(400).end(JSON.stringify({ ok: false, error: "Unknown theme." }));
  }

  try {
    const r = await fetch(apiUrl("/items"), {
      method: "PATCH",
      headers: { Authorization: "Bearer " + process.env.VERCEL_API_TOKEN, "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ operation: "upsert", key: KEY, value: body.darkStyle }] }),
    });
    if (!r.ok) {
      const detail = await r.text().catch(() => "");
      return res.status(502).end(JSON.stringify({ ok: false, error: "Vercel refused the change (" + r.status + "). " + detail.slice(0, 200) }));
    }
    return res.status(200).end(JSON.stringify({ ok: true, darkStyle: body.darkStyle }));
  } catch (e) {
    return res.status(502).end(JSON.stringify({ ok: false, error: "Couldn't reach Vercel. Try again." }));
  }
};
