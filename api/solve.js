// "Solve a Problem" (FutureCard.dc.html) -> email to Mridul.
// Vercel serverless function. Needs two environment variables in the Vercel project:
//   RESEND_API_KEY  - the Resend key (same one the old contact form used)
//   SOLVE_TO_EMAIL  - the inbox that receives the problems
// It sends from Resend's shared address, so SOLVE_TO_EMAIL must be the Resend account's own email.

const FROM = "Solve a Problem <onboarding@resend.dev>";

const KINDS = ["Product", "Automation", "Website / CRM", "Hiring"];
const REPLIES = {
  "Quick": "Quick (reply within 24 hours)",
  "Considered": "Considered (reply this week)",
  "Deep dive": "Deep dive (written plan or a call)",
};

const MAX_FILES = 4;
const MAX_FILE_BYTES = 3 * 1024 * 1024; // all attachments together
const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]{2,}$/;

// Best-effort limit per IP (resets when the function instance restarts).
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  list.push(now);
  hits.set(ip, list);
  return list.length > 5;
}

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const clean = (s, max) => String(s == null ? "" : s).replace(/\r\n?/g, "\n").trim().slice(0, max);

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (e) { body = null; }
  }
  if (!body || typeof body !== "object") return res.status(400).json({ ok: false, error: "Bad request" });

  // Honeypot: bots fill the hidden field. Pretend it worked.
  if (body.website) return res.status(200).json({ ok: true });

  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
  if (limited(ip)) return res.status(429).json({ ok: false, error: "Too many messages. Try again in a few minutes." });

  const name = clean(body.name, 100).replace(/\n/g, " ");
  const email = clean(body.email, 200);
  const problem = clean(body.problem, 5000);
  const kind = KINDS.includes(body.kind) ? body.kind : "Other";
  const reply = REPLIES[body.reply] ? body.reply : "Quick";

  if (problem.length < 3) return res.status(400).json({ ok: false, error: "Describe the problem first." });
  if (!EMAIL_RE.test(email)) return res.status(400).json({ ok: false, error: "That email doesn't look right." });

  const files = Array.isArray(body.files) ? body.files.slice(0, MAX_FILES) : [];
  let total = 0;
  const attachments = [];
  for (const f of files) {
    if (!f || typeof f.data !== "string" || !/^[A-Za-z0-9+/=\s]+$/.test(f.data)) continue;
    total += Buffer.byteLength(f.data, "base64");
    if (total > MAX_FILE_BYTES) return res.status(413).json({ ok: false, error: "Attachments are too big (3 MB max)." });
    const filename = clean(f.name, 120).replace(/[\\/:*?"<>|\n]/g, "_") || "attachment";
    attachments.push({ filename, content: f.data.replace(/\s/g, "") });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.SOLVE_TO_EMAIL;
  if (!key || !to) {
    console.error("RESEND_API_KEY or SOLVE_TO_EMAIL is not set");
    return res.status(500).json({ ok: false, error: "Email isn't set up yet." });
  }

  const who = name || email;
  const subject = `New problem · ${kind} · from ${who}`.slice(0, 180);
  const fileList = attachments.length ? attachments.map((a) => a.filename).join(", ") : "none";
  const text =
    `From: ${name || "(no name)"} <${email}>\n` +
    `Type: ${kind}\n` +
    `Reply time: ${REPLIES[reply]}\n` +
    `Attachments: ${fileList}\n\n` +
    `${problem}\n\n- Sent from the Solve a Problem card on your portfolio`;
  const row = (k, v) =>
    `<tr><td style="padding:6px 14px 6px 0;color:#6b7280;font-size:13px;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:6px 0;font-size:14px;color:#111827">${v}</td></tr>`;
  const html =
    `<div style="font-family:Arial,Helvetica,sans-serif;max-width:620px;margin:0 auto;color:#111827">` +
    `<div style="font-size:12px;letter-spacing:.14em;color:#0e7490;font-weight:bold">SOLVE A PROBLEM</div>` +
    `<h2 style="margin:6px 0 16px;font-size:20px">New problem from ${esc(who)}</h2>` +
    `<table style="border-collapse:collapse;margin-bottom:16px">` +
    row("From", `${esc(name || "(no name)")} &lt;${esc(email)}&gt;`) +
    row("Type", esc(kind)) +
    row("Reply time", esc(REPLIES[reply])) +
    row("Attachments", esc(fileList)) +
    `</table>` +
    `<div style="white-space:pre-wrap;font-size:15px;line-height:1.6;background:#f3f6fb;border-left:3px solid #57C6FF;padding:14px 16px;border-radius:6px">${esc(problem)}</div>` +
    `<p style="font-size:12px;color:#6b7280;margin-top:18px">Hit reply to answer ${esc(who)} directly.</p></div>`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: FROM, to: [to], reply_to: email, subject, text, html, attachments }),
    });
    if (!r.ok) {
      console.error("Resend error", r.status, await r.text());
      return res.status(502).json({ ok: false, error: "The email service didn't accept it." });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(502).json({ ok: false, error: "Couldn't reach the email service." });
  }
};
