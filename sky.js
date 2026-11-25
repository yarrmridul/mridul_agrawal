/* Daytime sky for the light theme: the counterpart of the space dark theme.
   Re-tints the light colour tokens, paints a sky gradient behind the page and
   lets real cumulus clouds (pre-rendered WebP) drift past. Loaded on every
   themed page; does nothing visible in the dark theme. */
(function () {
  if (window.__skyMounted) return;
  window.__skyMounted = true;

  var IMG = "uploads/mridul-portfolio/public/opt/sky/";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var css = [
    /* tokens: navy ink on blue sky, sun-orange accent shared with the space theme */
    'html [data-theme="light"]{',
    ' --bg:#DCEBF7;--bg-2:rgba(255,255,255,.2);--panel:rgba(255,255,255,.93);--panel-2:#EEF5FC;',
    ' --text:#0E2135;--muted:#2C4258;--faint:#557089;--border:#C9DAEA;--ring:#C9DAEA;--body:#1F3448;',
    ' --accent:#C2410C;--accent-2:#B45309;--accent-soft:#EA580C1f;--accent-line:#C2410C4d;',
    ' --fill:linear-gradient(135deg,#C2410C,#E8590C);--fill-bd:transparent;--fill-fg:#fff;',
    ' --c1:#1D6FC2;--c1s:#1D6FC21a;--c1l:#1D6FC23d;--c2:#C2410C;--c2s:#C2410C1a;--c2l:#EA580C3d;',
    ' --c3:#B45309;--c3s:#B453091c;--c3l:#D977063d;--c4:#155E9E;--c4s:#155E9E1a;--c4l:#155E9E3d;',
    ' --card-shadow:0 18px 38px -24px rgba(18,52,96,.6);--big-shadow:0 36px 80px -40px rgba(18,52,96,.62);',
    ' --hero-glow:radial-gradient(circle at 86% 7%,rgba(255,253,244,.95) 0,rgba(255,244,214,.6) 3.5%,rgba(255,236,196,.22) 14%,transparent 34%);',
    ' --quote-bg:linear-gradient(135deg,rgba(255,255,255,.9),rgba(238,245,252,.9));',
    ' --nav-bg:rgba(255,255,255,.76);--page-mesh:none;--page-tex:none;--tex-op:0;',
    ' background:transparent!important}',
    /* the sky itself scrolls with the page: vivid at the top, hazy where reading happens */
        'html.sky-day,html.sky-day body{background-color:#B4D5F1!important}',
    'html.sky-day body{background:linear-gradient(180deg,#5A9BD8 0,#7DB2E3 36vh,#A0C8EC 90vh,#B2D4F0 160vh,#B9D8F2 100%)!important}',
    'html.sky-day ::selection{background:#FFD8B8}',
    /* drifting cloud layer, behind all content */
    '.skyl{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;opacity:0;transition:opacity .6s ease}',
    'html.sky-day .skyl{opacity:1}',
    'html.sky-day.sky-read .skyl{opacity:.38}',
    '.skyl-layer{position:absolute;inset:0;will-change:transform}',
    '.skyl-c{position:absolute;left:0;display:block;height:auto;animation:skyDrift linear infinite;will-change:transform;user-select:none}',
    '.skyl-far .skyl-c{opacity:.55;filter:blur(1.2px)}',
    '.skyl-mid .skyl-c{opacity:.9}',
    '@keyframes skyDrift{from{transform:translateX(-45vw)}to{transform:translateX(115vw)}}',
    '@media (max-width:720px){.skyl-c.wide{display:none}.skyl-far .skyl-c{opacity:.45}}',
    '@media (prefers-reduced-motion:reduce){.skyl-c{animation:none!important}}',
    /* home hero: "Hi, I\'m Mridul" floats above a sea of clouds */
    'html [data-theme="light"] #home{background:',
    ' url(' + IMG + 'bank.webp) 38% calc(100% + 18px)/max(2200px,150%) auto no-repeat,',
    ' url(' + IMG + 'bank2.webp) 62% calc(100% + 64px)/max(1900px,130%) auto no-repeat,',
    ' linear-gradient(180deg,transparent 78%,rgba(226,238,249,.85) 100%),',
    ' var(--hero-glow)!important}',
    /* contact: land back on the clouds at the end of the page */
    'html [data-theme="light"] #contact{background:',
    ' url(' + IMG + 'bank2.webp) 30% calc(100% + 40px)/max(1900px,140%) auto no-repeat,',
    ' radial-gradient(40% 60% at 50% 0%,rgba(255,232,170,.45),transparent 70%)!important}',
    /* coloured glow blobs turn muddy over blue: make them sunlit haze */
    'html [data-theme="light"] [style*="var(--c1l),transparent"],html [data-theme="light"] [style*="var(--c2l),transparent"],html [data-theme="light"] [style*="var(--c3l),transparent"]{background:radial-gradient(circle,rgba(255,255,255,.55),transparent 64%)!important}',
    'html [data-theme="light"] #timeline{background:rgba(255,255,255,.14)!important}',
    'html [data-theme="light"] .tl-years{color:#fff!important;opacity:.5!important}',
    /* timeline: swap the blurry blobs and green hills for real clouds */
    'html [data-theme="light"] .tl-cloud{background:url(' + IMG + 'c3.webp) center/contain no-repeat!important;filter:none!important;height:auto!important;aspect-ratio:900/270}',
    'html [data-theme="light"] .tl-cloud:nth-child(even){background-image:url(' + IMG + 'c4.webp)!important;aspect-ratio:1100/318}',
    'html [data-theme="light"] .tl-ground{filter:none!important;opacity:.95!important;height:170px!important;background:url(' + IMG + 'bank.webp) 50% 100%/max(1600px,130%) auto no-repeat!important;-webkit-mask-image:none!important;mask-image:none!important}'
  ].join("\n");

  var st = document.createElement("style");
  st.id = "sky-day-css";
  st.textContent = css;
  (document.head || document.documentElement).appendChild(st);
  // keep the override last in <head>, after each page's own theme styles
  document.addEventListener("DOMContentLoaded", function () { document.head.appendChild(st); });

  // name, layer, top (vh), width (px), duration (s), start offset (0..1), extra class
  var CLOUDS = [
    ["c3", "far", 6, 300, 150, 0.10, ""],
    ["c4", "far", 30, 380, 175, 0.62, "wide"],
    ["c2", "far", 58, 260, 165, 0.35, "wide"],
    ["c1", "mid", 12, 520, 105, 0.78, ""],
    ["c2", "mid", 44, 380, 120, 0.22, "wide"],
    ["c4", "mid", 74, 480, 112, 0.50, ""]
  ];

  function build() {
    var root = document.createElement("div");
    root.className = "skyl";
    root.setAttribute("aria-hidden", "true");
    var layers = {};
    ["far", "mid"].forEach(function (k) {
      var l = document.createElement("div");
      l.className = "skyl-layer skyl-" + k;
      root.appendChild(l);
      layers[k] = l;
    });
    CLOUDS.forEach(function (c) {
      var im = document.createElement("img");
      im.alt = "";
      im.decoding = "async";
      im.className = "skyl-c " + c[6];
      im.style.top = c[2] + "vh";
      im.style.width = "min(" + c[3] + "px," + Math.round(c[3] / 6.2) + "vw)";
      im.style.animationDuration = c[4] + "s";
      im.style.animationDelay = -(c[4] * c[5]).toFixed(1) + "s";
      im.dataset.src = IMG + c[0] + ".webp";
      layers[c[1]].appendChild(im);
    });
    document.body.insertBefore(root, document.body.firstChild);
    return { root: root, layers: layers };
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
    var sky = build();
    var loaded = false, mo = null;
    function sync() {
      if (!host || !host.isConnected) { var h = liveHost(); if (h && h !== host) watch(h); }
      var day = !host || host.getAttribute("data-theme") !== "space";
      document.documentElement.classList.toggle("sky-day", day);
      if (day && !loaded) {
        loaded = true;
        Array.prototype.forEach.call(sky.root.querySelectorAll("img[data-src]"), function (im) { im.src = im.dataset.src; });
      }
    }
    function watch(h) {
      host = h;
      if (mo) mo.disconnect();
      mo = new MutationObserver(sync);
      mo.observe(h, { attributes: true, attributeFilter: ["data-theme"] });
    }
    watch(host);
    sync();
    setInterval(sync, 600);

    // gentle vertical parallax: far clouds lag behind, near clouds move a bit more
    var reading = !!document.querySelector(".cs-sec");
    if (!reduce) {
      var ticking = false;
      window.addEventListener("scroll", function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          var y = Math.min(window.scrollY, window.innerHeight * 1.6);
          if (reading) document.documentElement.classList.toggle("sky-read", window.scrollY > window.innerHeight * 0.7);
          sky.layers.far.style.transform = "translate3d(0," + (-y * 0.04).toFixed(1) + "px,0)";
          sky.layers.mid.style.transform = "translate3d(0," + (-y * 0.1).toFixed(1) + "px,0)";
          ticking = false;
        });
      }, { passive: true });
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
