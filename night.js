/* Dark theme: "ember night" — the moment just after sunset.
   A dark sky with faint twinkling stars and a thin crescent moon, an ember
   horizon glowing low on the screen, black cloud silhouettes that wander on
   their own slow paths, and two layers of fog rolling along the bottom.
   Each page gets its own arrangement (moon, horizon height, clouds) so the
   site feels like one evening seen from different spots. Light theme untouched. */
(function () {
  if (window.__nightMounted) return;
  window.__nightMounted = true;

  var IMG = "/uploads/mridul-portfolio/public/opt/sky/";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var D = 'html [data-theme="space"]';

  // Per-page arrangement. h = horizon stops (% of screen height): sky ends,
  // red begins, ember, brightest line, dark below.
  var PROFILES = {
    home: {
      moon: { right: "13vw", top: "12vh", size: 46 },
      h: [45, 66, 82, 88, 92], low: 1,
      clouds: [["c1", "1000/391", "left:-8vw;top:60vh;width:min(900px,78vw)", "#110809"],
               ["c4", "1100/318", "right:-6vw;top:66vh;width:min(760px,66vw)", "#150909"],
               ["c3", "900/270", "left:22vw;top:75vh;width:min(700px,60vw)", "#0D0707"]]
    },
    about: {
      moon: { left: "7vw", top: "17vh", size: 40 },
      h: [52, 71, 86, 91, 95], low: 0.9,
      clouds: [["c4", "1100/318", "left:-10vw;top:70vh;width:min(800px,70vw)", "#130909"],
               ["c1", "1000/391", "right:-12vw;top:62vh;width:min(860px,74vw)", "#100808"],
               ["c3", "900/270", "left:38vw;top:81vh;width:min(560px,50vw)", "#0D0707"]]
    },
    work: {
      moon: { right: "21vw", top: "9vh", size: 34 },
      h: [56, 75, 89, 93.5, 96.5], low: 0.72,
      clouds: [["c3", "900/270", "left:-6vw;top:75vh;width:min(640px,56vw)", "#120909"],
               ["c4", "1100/318", "right:-8vw;top:73vh;width:min(700px,60vw)", "#140909"],
               ["c1", "1000/391", "left:30vw;top:83vh;width:min(680px,60vw)", "#0E0707"]]
    }
  };
  var path = location.pathname.toLowerCase();
  var P = /^\/work\//.test(path) || /project\.dc\.html/.test(path) ? PROFILES.work
        : /^\/about/.test(path) || /about\.dc\.html/.test(path) ? PROFILES.about
        : PROFILES.home;
  var h = P.h;

  function stars(seed, n, alpha) {
    var s = seed, out = [];
    function r() { s = (s * 9301 + 49297) % 233280; return s / 233280; }
    for (var i = 0; i < n; i++) {
      var size = (0.7 + r() * 0.9).toFixed(2);
      var c = r() < 0.3 ? "255,226,200" : "255,250,244";
      out.push("radial-gradient(" + size + "px " + size + "px at " + (r() * 100).toFixed(1) + "% " + (r() * 100).toFixed(1) + "%,rgba(" + c + "," + alpha + "),transparent)");
    }
    return out.join(",");
  }

  var moon = P.moon, mpos = (moon.left ? "left:" + moon.left : "right:" + moon.right) + ";top:" + moon.top;
  var css = [
    D + "{--bg-2:rgba(14,10,12,.42);background:transparent!important;" +
      "--accent:#FF7A22;--accent-2:#FFC24D;--accent-soft:#FF7A2229;--accent-line:#FF8A3A66;" +
      "--c1:#FF7A22;--c1s:#FF7A2226;--c1l:#FF7A2257;--c2:#FFC24D;--c2s:#FFC24D26;--c2l:#FFC24D57;" +
      "--c3:#FF9E2C;--c3s:#FF9E2C22;--c3l:#FF9E2C57;--c4:#FF5E3A;--c4s:#FF5E3A22;--c4l:#FF5E3A57;" +
      "--panel:#170F12;--panel-2:#120C10;--border:#33261F;--text:#F6EFE7;--muted:#BDAE9F;--faint:#8A7B6F}",
    "html.sky-night,html.sky-night body{background:#060506!important}",
    D + " #home," + D + " #contact," + D + " #timeline{background:transparent!important}",
    D + " .sky-stars," + D + " .sky-neb," + D + " .sky-crescent," + D + " .sky-comet," + D + " .tl-stars," + D + " .tl-ground{display:none!important}",
    D + ' [style*="var(--c1l),transparent"],' + D + ' [style*="var(--c2l),transparent"],' + D + ' [style*="var(--c3l),transparent"]{display:none!important}',

    ".nightl{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;opacity:0;transition:opacity .7s ease;background:#060506}",
    "html.sky-night .nightl{opacity:1}",
    ".nl{position:absolute;pointer-events:none}",
    /* sky + ember horizon */
    ".nl-low{inset:0;opacity:" + P.low + ";transition:opacity 1.2s ease;background:linear-gradient(180deg,#060506 0%,#0A0708 " + h[0] + "%,#2A0C07 " + h[1] + "%,#A33A0E " + h[2] + "%,#FF8A2A " + h[3] + "%,#3A1208 " + h[4] + "%,#0B0606 100%)}",
    "html.night-read .nl-low{opacity:" + (P.low * 0.5).toFixed(2) + "}",
    /* stars: two fields twinkling out of step */
    ".nl-st{left:0;right:0;top:0;height:" + (h[1] + 4) + "%;-webkit-mask:linear-gradient(#000 50%,transparent);mask:linear-gradient(#000 50%,transparent)}",
    ".nl-st1{background:" + stars(7, 34, 1) + ";animation:nlTw 5.5s ease-in-out infinite alternate}",
    ".nl-st2{background:" + stars(23, 30, .9) + ";animation:nlTw 7.5s ease-in-out infinite alternate-reverse}",
    "@keyframes nlTw{from{opacity:.35}to{opacity:.95}}",
    /* crescent moon */
    ".nl-moon{" + mpos + ";width:" + moon.size + "px;aspect-ratio:1;border-radius:50%;box-shadow:inset -" + Math.round(moon.size * .22) + "px " + Math.round(moon.size * .09) + "px 0 0 #F6D9B8;filter:drop-shadow(0 0 12px rgba(255,200,150,.45));opacity:.9}",
    /* black cloud silhouettes against the glow */
    ".nl-c{-webkit-mask:var(--m) center/contain no-repeat;mask:var(--m) center/contain no-repeat;will-change:transform}",
    /* fog rolling along the bottom, two layers in opposite directions */
    ".nl-fog{left:-1600px;right:-1600px;bottom:-2vh;height:26vh;opacity:.85;will-change:transform;",
    " background:linear-gradient(180deg,rgba(80,36,20,0) 0%,rgba(92,42,22,.55) 45%,rgba(38,17,11,.92) 100%);",
    " -webkit-mask:url(" + IMG + "bank.webp) 0 100%/1600px auto repeat-x;mask:url(" + IMG + "bank.webp) 0 100%/1600px auto repeat-x;animation:nlFogA 95s linear infinite}",
    ".nl-fog2{bottom:3vh;height:22vh;opacity:.55;-webkit-mask-image:url(" + IMG + "bank2.webp);mask-image:url(" + IMG + "bank2.webp);animation:nlFogB 130s linear infinite}",
    "@keyframes nlFogA{to{transform:translateX(1600px)}}",
    "@keyframes nlFogB{to{transform:translateX(-1600px)}}",
    "@media (max-width:720px){.nl-c{width:96vw!important}.nl-fog{height:18vh}.nl-fog2{height:15vh}.nl-moon{width:" + Math.round(moon.size * .75) + "px}}",
    "@media (prefers-reduced-motion:reduce){.nl-st1,.nl-st2,.nl-fog{animation:none!important}}"
  ];
  P.clouds.forEach(function (c, i) {
    css.push(".nl-c" + i + "{" + c[2] + ";aspect-ratio:" + c[1] + ";background:" + c[3] + ";--m:url(" + IMG + c[0] + ".webp)}");
  });

  var st = document.createElement("style");
  st.id = "night-css";
  st.textContent = css.join("\n");

  // Which dark theme? Mridul picks it for everyone at /admin ("ember" or "classic").
  // The last known choice is remembered so the page never flashes the wrong one;
  // ?dark=classic or ?dark=ember previews a theme on this browser only.
  var KEY = "om-dark-style", enabled = false, root = null, preview = null;
  try { preview = new URLSearchParams(location.search).get("dark"); } catch (e) {}
  if (preview !== "classic" && preview !== "ember") preview = null;
  function cached() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  var style = preview || cached() || "ember";
  function setEnabled(on) {
    enabled = on;
    if (on) { if (!st.parentNode) (document.head || document.documentElement).appendChild(st); }
    else if (st.parentNode) st.parentNode.removeChild(st);
    if (root) root.style.display = on ? "" : "none";
    if (!on) document.documentElement.classList.remove("sky-night", "night-read");
  }
  setEnabled(style === "ember");
  document.addEventListener("DOMContentLoaded", function () { if (enabled) document.head.appendChild(st); });
  if (!preview && window.fetch) {
    fetch("/api/site-config", { headers: { Accept: "application/json" } })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d || (d.darkStyle !== "ember" && d.darkStyle !== "classic")) return;
        try { localStorage.setItem(KEY, d.darkStyle); } catch (e) {}
        if ((d.darkStyle === "ember") !== enabled) setEnabled(d.darkStyle === "ember");
      })
      .catch(function () {});
  }

  function build() {
    var root = document.createElement("div");
    root.className = "nightl";
    root.setAttribute("aria-hidden", "true");
    var html = '<div class="nl nl-low"></div><div class="nl nl-st nl-st1"></div><div class="nl nl-st nl-st2"></div><div class="nl nl-moon"></div>';
    P.clouds.forEach(function (c, i) { html += '<div class="nl nl-c nl-c' + i + '"></div>'; });
    html += '<div class="nl nl-fog nl-fog2"></div><div class="nl nl-fog"></div>';
    root.innerHTML = html;
    document.body.insertBefore(root, document.body.firstChild);
    return root;
  }

  function wanderer(node, ax, ay) {
    function r(a, b) { return a + Math.random() * (b - a); }
    var fx = [r(40, 70), r(85, 140)], fy = [r(50, 90), r(100, 160)], px = [r(0, 6.3), r(0, 6.3)], py = [r(0, 6.3), r(0, 6.3)];
    return function (t) {
      var x = Math.sin(t * 6.283 / fx[0] + px[0]) * .65 + Math.sin(t * 6.283 / fx[1] + px[1]) * .35;
      var y = Math.sin(t * 6.283 / fy[0] + py[0]) * .6 + Math.sin(t * 6.283 / fy[1] + py[1]) * .4;
      node.style.transform = "translate3d(" + (x * ax).toFixed(2) + "vw," + (y * ay).toFixed(2) + "vh,0)";
    };
  }

  function liveHost() {
    var all = document.querySelectorAll("[data-theme]");
    for (var i = 0; i < all.length; i++) {
      var v = all[i].getAttribute("data-theme");
      if ((v === "light" || v === "space") && all[i].isConnected) return all[i];
    }
    return null;
  }

  function start() {
    var host = liveHost();
    if (!host) return setTimeout(start, 120);
    root = build();
    if (!enabled) root.style.display = "none";
    var night = false, mo = null;
    function sync() {
      if (!host || !host.isConnected) { var hh = liveHost(); if (hh && hh !== host) watch(hh); }
      night = enabled && !!host && host.getAttribute("data-theme") === "space";
      document.documentElement.classList.toggle("sky-night", night);
    }
    function watch(x) {
      host = x;
      if (mo) mo.disconnect();
      mo = new MutationObserver(sync);
      mo.observe(x, { attributes: true, attributeFilter: ["data-theme"] });
    }
    watch(host);
    sync();
    setInterval(sync, 600);

    // Past the first screen the horizon dims so long text stays easy to read.
    function onScroll() { document.documentElement.classList.toggle("night-read", enabled && window.scrollY > window.innerHeight * 0.6); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (reduce) return;
    var walkers = [];
    Array.prototype.forEach.call(root.querySelectorAll(".nl-c"), function (n, i) { walkers.push(wanderer(n, 4 + i, 1.5)); });
    walkers.push(wanderer(root.querySelector(".nl-moon"), 0.6, 0.8));
    var t0 = performance.now(), last = 0;
    (function frame(now) {
      if (night && !document.hidden && now - last > 33) {
        last = now;
        var t = (now - t0) / 1000 * (window.__skySpeed || 1) + 300;
        for (var i = 0; i < walkers.length; i++) walkers[i](t);
      }
      requestAnimationFrame(frame);
    })(t0);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
