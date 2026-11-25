/* Light theme: "overcast" — a calm grey-blue page with a hint of sky,
   the counterpart of the space tint in the dark theme.
   Fixed cloud layer behind every page: two faint watermark clouds, two sunlit
   corner clouds and one soft cloud shadow, each wandering slowly on its own
   random path (never a conveyor belt), plus a rare, quiet lightning flicker
   inside the storm cloud. Does nothing visible in the dark theme. */
(function () {
  if (window.__skyMounted) return;
  window.__skyMounted = true;

  var IMG = "/uploads/mridul-portfolio/public/opt/sky/";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var L = 'html [data-theme="light"]';

  var css = [
    /* tokens: slate ink on overcast paper, sun-orange accent shared with the space theme */
    L + "{",
    " --bg:#EEF2F6;--bg-2:rgba(255,255,255,.4);--panel:#FFFFFF;--panel-2:#F2F6FA;",
    " --text:#13202E;--muted:#44546A;--faint:#7A889A;--border:#DCE3EB;--ring:#DCE3EB;--body:#2A394A;",
    " --accent:#C2410C;--accent-2:#B45309;--accent-soft:#C2410C14;--accent-line:#C2410C40;",
    " --fill:linear-gradient(135deg,#C2410C,#E0560F);--fill-bd:transparent;--fill-fg:#fff;",
    " --c1:#3B6EA5;--c1s:#3B6EA514;--c1l:#3B6EA533;--c2:#C2410C;--c2s:#C2410C14;--c2l:#C2410C30;",
    " --c3:#B45309;--c3s:#B4530914;--c3l:#B4530930;--c4:#2F5D8A;--c4s:#2F5D8A14;--c4l:#2F5D8A30;",
    " --card-shadow:0 14px 34px -24px rgba(19,32,46,.42);--big-shadow:0 30px 70px -40px rgba(19,32,46,.46);",
    " --hero-glow:none;--quote-bg:linear-gradient(135deg,#FFFFFF,#F4F7FA);",
    " --nav-bg:rgba(255,255,255,.8);--page-mesh:none;--page-tex:none;--tex-op:0;",
    " background:transparent!important}",
    "html.sky-day,html.sky-day body{background:#EEF2F6!important}",
    "html.sky-day ::selection{background:#FFD8B8}",
    /* let the shared sky show through the big sections */
    L + " #home," + L + " #contact," + L + " #timeline{background:transparent!important}",
    L + ' [style*="var(--c1l),transparent"],' + L + ' [style*="var(--c2l),transparent"],' + L + ' [style*="var(--c3l),transparent"]{display:none!important}',
    L + " .tl-clouds," + L + " .tl-ground{display:none!important}",
    L + " .tl-years{color:#13202E!important;opacity:.05!important}",

    /* the sky layer */
    ".skyl{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;opacity:0;transition:opacity .7s ease;",
    " background:radial-gradient(38% 46% at 100% 0%,rgba(255,226,186,.55),transparent 70%),radial-gradient(42% 52% at 0% 100%,rgba(196,214,234,.55),transparent 70%)}",
    "html.sky-day .skyl{opacity:1}",
    ".sk{position:absolute;will-change:transform}",
    ".sk-in{position:relative;width:100%;height:100%}",
    ".sk img{display:block;width:100%;height:auto;user-select:none}",
    /* watermark clouds: flat tint, cut out with the cloud shape */
    ".sk-wm .sk-in{background:var(--tint);-webkit-mask:var(--m) center/contain no-repeat;mask:var(--m) center/contain no-repeat}",
    ".sk-a{left:4vw;top:14vh;width:min(980px,92vw);aspect-ratio:1000/391}",
    ".sk-a .sk-in{--m:url(" + IMG + "c1.webp);--tint:linear-gradient(180deg,#C2CDDA,#D7DFE8)}",
    ".sk-b{right:-2vw;top:56vh;width:min(760px,74vw);aspect-ratio:1100/318;opacity:.8}",
    ".sk-b .sk-in{--m:url(" + IMG + "c4.webp);--tint:linear-gradient(180deg,#D5DEE8,#E2E8EF)}",
    /* sunlit corner clouds */
    ".sk-tr{right:-9vw;top:-7vh;width:min(640px,58vw);opacity:.95}",
    ".sk-bl{left:-11vw;bottom:-9vh;width:min(560px,54vw);opacity:.9}",
    /* a soft cloud shadow passing over the page */
    ".sk-sh{left:26vw;top:30vh;width:min(900px,88vw);aspect-ratio:776/443;opacity:.05;filter:blur(28px)}",
    ".sk-sh .sk-in{background:#1E3550;-webkit-mask:url(" + IMG + "c2.webp) center/contain no-repeat;mask:url(" + IMG + "c2.webp) center/contain no-repeat}",
    /* lightning: light blooms inside the storm cloud, a faint thread below it */
    ".sk-flash{position:absolute;inset:0;opacity:0;-webkit-mask:var(--m) center/contain no-repeat;mask:var(--m) center/contain no-repeat;",
    " background:radial-gradient(42% 70% at var(--fx,46%) 58%,#FFFFFF 0,rgba(245,249,255,.95) 30%,rgba(225,236,250,.5) 62%,transparent 85%)}",
    ".sk-glow{position:absolute;left:var(--fx,46%);top:55%;width:70%;height:150%;transform:translate(-50%,-50%);border-radius:50%;opacity:0;",
    " background:radial-gradient(closest-side,rgba(236,243,255,.95),rgba(236,243,255,0))}",
    ".sk-bolt{position:absolute;left:var(--fx,46%);top:78%;width:46px;height:auto;transform:translateX(-50%);opacity:0;overflow:visible;filter:drop-shadow(0 0 6px rgba(190,212,245,.9))}",
    ".sk-a.strike .sk-flash{animation:skFlash 1.3s ease-out both}",
    ".sk-a.strike .sk-glow{animation:skGlow 1.3s ease-out both}",
    ".sk-a.strike .sk-bolt{animation:skBolt 1.3s ease-out both}",
    "@keyframes skFlash{0%{opacity:0}5%{opacity:.95}11%{opacity:.15}17%{opacity:.8}30%{opacity:.25}100%{opacity:0}}",
    "@keyframes skGlow{0%{opacity:0}5%{opacity:.7}11%{opacity:.1}17%{opacity:.55}100%{opacity:0}}",
    "@keyframes skBolt{0%,4%{opacity:0}6%{opacity:.7}11%{opacity:0}17%{opacity:.55}26%,100%{opacity:0}}",
    /* two small, faint distant clouds */
    ".sk-f{opacity:.5}.sk-f .sk-in{background:linear-gradient(180deg,#D3DCE6,#E3E9F0);-webkit-mask:url(" + IMG + "c3.webp) center/contain no-repeat;mask:url(" + IMG + "c3.webp) center/contain no-repeat}",
    ".sk-f1{left:58vw;top:34vh;width:min(340px,30vw);aspect-ratio:900/270}",
    ".sk-f2{left:14vw;top:72vh;width:min(300px,28vw);aspect-ratio:900/270;opacity:.4}",
    /* soft sun rays from the warm top-right corner */
    ".sk-rays{right:-30vmax;top:-30vmax;width:80vmax;height:80vmax;border-radius:50%;opacity:.55;",
    " background:repeating-conic-gradient(from 0deg,rgba(255,236,200,0) 0deg 7deg,rgba(255,236,200,.55) 9deg,rgba(255,236,200,0) 12deg 19deg);",
    " -webkit-mask:radial-gradient(circle,transparent 12%,#000 22%,transparent 62%);mask:radial-gradient(circle,transparent 12%,#000 22%,transparent 62%);",
    " animation:skRays 140s linear infinite,skRayB 9s ease-in-out infinite alternate}",
    "@keyframes skRays{to{transform:rotate(360deg)}}@keyframes skRayB{from{opacity:.3}to{opacity:.6}}",
    /* specks of light floating up */
    ".sk-mote{position:absolute;bottom:-10px;width:var(--s);height:var(--s);border-radius:50%;background:radial-gradient(circle,#fff 0,rgba(255,255,255,.7) 40%,rgba(255,255,255,0) 70%);opacity:0;animation:skMote var(--d) linear infinite;animation-delay:var(--dl)}",
    "@keyframes skMote{0%{transform:translate(0,0);opacity:0}10%{opacity:.85}50%{transform:translate(var(--sw),-55vh)}90%{opacity:.6}100%{transform:translate(0,-110vh);opacity:0}}",
    /* small flock of birds */
    ".sk-flock{position:absolute;left:0;top:0;will-change:transform}",
    ".sk-bird{position:absolute;width:18px;height:8px;overflow:visible}",
    ".sk-bird path{fill:none;stroke:#4C5C72;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;transform-origin:9px 6px;animation:skFlap var(--fl) ease-in-out infinite alternate}",
    "@keyframes skFlap{from{transform:scaleY(1)}to{transform:scaleY(-.45)}}",
    "@media (max-width:720px){.sk-f,.sk-rays{display:none}.sk-mote:nth-child(n+8){display:none}}",
    "@media (prefers-reduced-motion:reduce){.sk-rays,.sk-mote,.sk-bird path{animation:none!important}.sk-mote,.sk-flock{display:none}}",
    "@media (max-width:720px){.sk-b,.sk-sh{display:none}.sk-a{top:20vh;width:130vw;left:-15vw}.sk-tr{width:78vw}.sk-bl{width:74vw}}"
  ].join("\n");

  var st = document.createElement("style");
  st.id = "sky-day-css";
  st.textContent = css;
  (document.head || document.documentElement).appendChild(st);
  document.addEventListener("DOMContentLoaded", function () { document.head.appendChild(st); });

  var BOLT = '<svg class="sk-bolt" viewBox="0 0 46 120" aria-hidden="true"><path d="M26 0 L16 44 L27 46 L12 92 L20 93 L9 120" fill="none" stroke="#8AA2C0" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>';

  function el(cls, html) { var d = document.createElement("div"); d.className = "sk " + cls; d.innerHTML = html; return d; }

  function build() {
    var root = document.createElement("div");
    root.className = "skyl";
    root.setAttribute("aria-hidden", "true");
    var parts = [
      el("sk-sh", '<div class="sk-in"></div>'),
      el("sk-wm sk-b", '<div class="sk-in"></div>'),
      el("sk-wm sk-a", '<div class="sk-glow"></div><div class="sk-in"><div class="sk-flash"></div></div>' + BOLT),
      el("sk-tr", '<div class="sk-in"><img alt="" decoding="async" data-src="' + IMG + 'c2.webp"></div>'),
      el("sk-bl", '<div class="sk-in"><img alt="" decoding="async" data-src="' + IMG + 'c3.webp"></div>')
    ];
    parts[2].querySelector(".sk-flash").style.setProperty("--m", "url(" + IMG + "c1.webp)");
    var f1 = el("sk-f sk-f1", '<div class="sk-in"></div>'), f2 = el("sk-f sk-f2", '<div class="sk-in"></div>');
    var rays = el("sk-rays", "");
    root.appendChild(rays); root.appendChild(f1); root.appendChild(f2);
    parts.forEach(function (p) { root.appendChild(p); });
    var motes = "";
    for (var m = 0; m < 14; m++) {
      motes += '<span class="sk-mote" style="left:' + (Math.random() * 100).toFixed(1) + 'vw;--s:' + (2 + Math.random() * 3).toFixed(1) + 'px;--d:' + (18 + Math.random() * 16).toFixed(1) + 's;--dl:-' + (Math.random() * 30).toFixed(1) + 's;--sw:' + (Math.random() * 60 - 30).toFixed(0) + 'px"></span>';
    }
    var mo = document.createElement("div"); mo.className = "sk"; mo.style.inset = "0"; mo.innerHTML = motes; root.appendChild(mo);
    document.body.insertBefore(root, document.body.firstChild);
    return { root: root, sh: parts[0], b: parts[1], a: parts[2], tr: parts[3], bl: parts[4], f1: f1, f2: f2 };
  }

  // Each cloud wanders on its own path: a sum of slow sines with random
  // periods and phases per axis, so the motion never repeats or lines up.
  function wanderer(node, ampX, ampY, breathe) {
    function r(a, b) { return a + Math.random() * (b - a); }
    var w = {
      node: node, ax: ampX, ay: ampY, br: breathe,
      fx: [r(26, 48), r(60, 100)], fy: [r(30, 56), r(70, 110)], fs: r(36, 64),
      px: [r(0, 6.3), r(0, 6.3)], py: [r(0, 6.3), r(0, 6.3)], ps: r(0, 6.3)
    };
    w.at = function (t) {
      var x = Math.sin(t * 6.283 / w.fx[0] + w.px[0]) * 0.65 + Math.sin(t * 6.283 / w.fx[1] + w.px[1]) * 0.35;
      var y = Math.sin(t * 6.283 / w.fy[0] + w.py[0]) * 0.6 + Math.sin(t * 6.283 / w.fy[1] + w.py[1]) * 0.4;
      var s = 1 + Math.sin(t * 6.283 / w.fs + w.ps) * w.br;
      w.node.style.transform = "translate3d(" + (x * w.ax).toFixed(2) + "vw," + (y * w.ay).toFixed(2) + "vh,0) scale(" + s.toFixed(4) + ")";
    };
    return w;
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
    var day = false, loaded = false, mo = null;

    function sync() {
      if (!host || !host.isConnected) { var h = liveHost(); if (h && h !== host) watch(h); }
      day = !host || host.getAttribute("data-theme") !== "space";
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

    if (reduce) return;

    var ws = [
      wanderer(sky.a, 9, 5, 0.035),
      wanderer(sky.b, 11, 5, 0.04),
      wanderer(sky.sh, 15, 9, 0.05),
      wanderer(sky.tr, 4.5, 3.5, 0.03),
      wanderer(sky.bl, 4.5, 3.5, 0.03),
      wanderer(sky.f1, 14, 6, 0.04),
      wanderer(sky.f2, 16, 5, 0.04)
    ];
    var t0 = performance.now(), last = 0;
    (function frame(now) {
      if (day && !document.hidden && now - last > 33) {
        last = now;
        var t = (now - t0) / 1000 * (window.__skySpeed || 1) + 400;
        for (var i = 0; i < ws.length; i++) ws[i].at(t);
      }
      requestAnimationFrame(frame);
    })(t0);

    // Now and then a small flock of birds crosses the sky, in a random direction and height.
    var BIRD = '<svg class="sk-bird" viewBox="0 0 18 8"><path d="M1 2 Q5 7 9 5 Q13 7 17 2"/></svg>';
    function flock() {
      if (day && !document.hidden) {
        var n = 3 + Math.floor(Math.random() * 3), dirB = Math.random() < 0.5 ? -1 : 1;
        var VW = window.innerWidth, VH = window.innerHeight;
        var g = document.createElement("div"); g.className = "sk-flock";
        var html = "";
        for (var k = 0; k < n; k++) {
          var bx = -k * (14 + Math.random() * 8), by = (k % 2 ? 1 : -1) * Math.ceil(k / 2) * (8 + Math.random() * 6), sc = 0.7 + Math.random() * 0.5;
          html += '<div style="position:absolute;left:' + (dirB > 0 ? bx : -bx).toFixed(0) + 'px;top:' + by.toFixed(0) + 'px;transform:scale(' + sc.toFixed(2) + ');--fl:' + (0.22 + Math.random() * 0.12).toFixed(2) + 's">' + BIRD + "</div>";
        }
        g.innerHTML = html;
        sky.root.appendChild(g);
        var y0 = VH * (0.08 + Math.random() * 0.45), y1 = y0 + (Math.random() - 0.5) * VH * 0.25;
        var x0 = dirB > 0 ? -80 : VW + 80, x1 = dirB > 0 ? VW + 120 : -120;
        var dur = 14000 + Math.random() * 8000, t0b = performance.now(), ph = Math.random() * 6;
        (function fly(now) {
          var t = (now - t0b) / dur;
          if (t >= 1) { g.remove(); return; }
          var x = x0 + (x1 - x0) * t, y = y0 + (y1 - y0) * t + Math.sin(t * 9 + ph) * 10;
          g.style.transform = "translate3d(" + x.toFixed(1) + "px," + y.toFixed(1) + "px,0)";
          g.style.opacity = Math.min(1, t * 8, (1 - t) * 8).toFixed(2);
          requestAnimationFrame(fly);
        })(t0b);
      }
      setTimeout(flock, 16000 + Math.random() * 18000);
    }
    setTimeout(flock, 2500 + Math.random() * 3000);

    // A quiet storm: now and then the big cloud lights up from inside.
    function strike() {
      if (day && !document.hidden) {
        sky.a.style.setProperty("--fx", (30 + Math.random() * 40).toFixed(0) + "%");
        sky.a.classList.remove("strike"); void sky.a.offsetWidth; sky.a.classList.add("strike");
        setTimeout(function () { sky.a.classList.remove("strike"); }, 1400);
      }
      setTimeout(strike, 9000 + Math.random() * 14000);
    }
    setTimeout(strike, 3500 + Math.random() * 3000);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
