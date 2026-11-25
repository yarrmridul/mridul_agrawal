/* Hanging Edison bulb theme switch.
   Finds the page's own theme button ("Switch to … theme"), hides it, and hangs
   a bulb in its place. Pulling the cord clicks the original button, so each
   page keeps its own theme logic. Lit bulb = light theme, dark bulb = dark theme. */
(function () {
  if (window.__lampMounted) return;
  window.__lampMounted = true;

  var SEL = 'button[aria-label^="Switch to"][aria-label$="theme"]:not(.lmp)';
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var css = [
    SEL + "{visibility:hidden!important}",
    ".lmp{position:fixed;top:0;left:0;z-index:60;width:46px;padding:0;margin:0;border:0;background:none;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation;will-change:transform}",
    ".lmp:focus{outline:none}",
    ".lmp-pool{position:absolute;left:50%;width:340px;height:340px;margin-left:-170px;border-radius:50%;pointer-events:none;opacity:0;transition:opacity .7s ease;",
    " background:radial-gradient(circle,rgba(255,176,72,.20) 0%,rgba(255,176,72,.09) 34%,rgba(255,176,72,0) 66%)}",
    ".lmp.on .lmp-pool{opacity:1;transition-delay:.12s}",
    ".lmp-rose{position:absolute;left:50%;top:0;width:16px;height:6px;margin-left:-8px;border-radius:0 0 5px 5px;background:linear-gradient(180deg,#8A6A3E,#C9A46A 70%,#A8844F);box-shadow:0 1px 2px rgba(0,0,0,.25)}",
    ".lmp-arm{position:absolute;left:50%;top:5px;width:30px;margin-left:-15px;transform-origin:50% 0;display:flex;flex-direction:column;align-items:center}",
    ".lmp-cord{width:3px;border-radius:2px;background:repeating-linear-gradient(155deg,#5A473A 0 2px,#2C221C 2px 4px)}",
    ".lmp-bulb{position:relative;width:30px;height:46px;margin-top:-1px;transition:transform .25s ease}",
    ".lmp:hover .lmp-bulb{transform:scale(1.07)}",
    ".lmp:focus-visible .lmp-bulb{outline:2px solid #FF8A3D;outline-offset:4px;border-radius:40%}",
    ".lmp-bulb svg{position:relative;display:block;overflow:visible}",
    ".lmp-halo{position:absolute;left:50%;top:66%;width:84px;height:84px;margin:-42px 0 0 -42px;border-radius:50%;pointer-events:none;opacity:0;transition:opacity .9s ease;",
    " background:radial-gradient(circle,rgba(255,200,110,.75) 0%,rgba(255,170,70,.28) 36%,rgba(255,170,70,0) 68%)}",
    ".lmp.on .lmp-halo{opacity:1;transition:opacity .45s ease .14s}",
    ".lmp .gl{fill:rgba(255,255,255,.07);stroke:rgba(230,236,240,.45);stroke-width:1.2;transition:fill .8s ease,stroke .8s ease}",
    ".lmp.on .gl{fill:#FFE8B4;stroke:#D79A3E;transition:fill .35s ease .1s,stroke .35s ease .1s}",
    ".lmp .sh{fill:none;stroke:rgba(255,255,255,.55);stroke-width:1.4;stroke-linecap:round}",
    ".lmp .fl{fill:none;stroke:rgba(200,190,180,.45);stroke-width:1.1;stroke-linecap:round;stroke-linejoin:round;transition:stroke 1.1s ease,filter 1.1s ease}",
    ".lmp.on .fl{stroke:#F27A12;filter:drop-shadow(0 0 2px rgba(255,150,40,.9));transition:stroke .3s ease,filter .3s ease}",
    ".lmp .br{fill:url(#lmpBrass)}",
    ".lmp .rg{fill:none;stroke:rgba(60,40,20,.35);stroke-width:.9}",
    ".lmp-hand{position:absolute;left:0;top:0;width:52px;height:42px;opacity:0;pointer-events:none;will-change:transform,opacity;filter:drop-shadow(0 3px 4px rgba(20,14,10,.28))}",
    ".lmp-hand svg{display:block;overflow:visible}",
    ".lmp-hand .fg{transition:transform .14s ease-out;transform-origin:30px 26px}",
    ".lmp-hand .tb{transition:transform .14s ease-out;transform-origin:40px 20px}",
    ".lmp-hand.open .fg{transform:rotate(-38deg) translate(2px,-2px)}",
    ".lmp-hand.open .tb{transform:rotate(26deg)}"
  ].join("\n");

  var BULB =
    '<svg width="30" height="46" viewBox="0 0 30 46" aria-hidden="true">' +
    '<defs><linearGradient id="lmpBrass" x1="0" x2="1"><stop offset="0" stop-color="#8A6A3E"/><stop offset=".45" stop-color="#E3C58C"/><stop offset="1" stop-color="#9C7A48"/></linearGradient></defs>' +
    '<rect class="br" x="9.5" y="0" width="11" height="11" rx="2"/>' +
    '<path class="rg" d="M9.5 3.5h11M9.5 6.5h11M9.5 9.5h11"/>' +
    '<path class="gl" d="M10.5 11h9v2.2c0 2.6 8.5 6.4 8.5 15.8a13 13 0 1 1-26 0c0-9.4 8.5-13.2 8.5-15.8z"/>' +
    '<path class="fl" d="M13 14v12M17 14v12M13 26l1-3 1 3 1-3 1 3"/>' +
    '<path class="sh" d="M7.5 25.5c.4-3 1.8-5.2 3.6-6.6"/>' +
    "</svg>";

  var HAND_INNER =
    '<defs><linearGradient id="lmpSkin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F4CFAE"/><stop offset="1" stop-color="#D49B74"/></linearGradient>' +
    '<linearGradient id="lmpSleeve" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A4C66"/><stop offset="1" stop-color="#22303F"/></linearGradient></defs>' +
    '<path d="M47 15 L66 13 L66 43 L47 41 Z" fill="url(#lmpSleeve)"/><path d="M48 15.5 L48 40.5" stroke="#18222E" stroke-width="2"/>' +
    '<path d="M24 16 C32 13 42 14 48 16 L48 40 C42 42 32 42 24 39 Z" fill="url(#lmpSkin)"/>' +
    '<path d="M30 33 C36 35 42 35 47 34" stroke="#C28862" stroke-width=".8" fill="none" opacity=".7"/>' +
    '<g class="fg">' +
      '<rect x="7" y="16.5" width="23" height="6.6" rx="3.3" fill="url(#lmpSkin)" stroke="#B97C55" stroke-width=".6"/>' +
      '<rect x="6.5" y="22.8" width="23.5" height="6.6" rx="3.3" fill="url(#lmpSkin)" stroke="#B97C55" stroke-width=".6"/>' +
      '<rect x="7" y="29.1" width="23" height="6.4" rx="3.2" fill="url(#lmpSkin)" stroke="#B97C55" stroke-width=".6"/>' +
      '<rect x="8.5" y="35.1" width="20" height="5.6" rx="2.8" fill="url(#lmpSkin)" stroke="#B97C55" stroke-width=".6"/>' +
      '<path d="M10 19.8 h2 M9.5 26.1 h2 M10 32.3 h2 M11.5 37.9 h1.6" stroke="#B97C55" stroke-width=".7" stroke-linecap="round"/>' +
    '</g>' +
    '<g class="tb"><path d="M42 18 C34 12.5 24 11 15 13.2 C13.4 13.6 13.4 16.2 15.2 16.6 C23 17.6 30 18.6 36 21.5 Z" fill="url(#lmpSkin)" stroke="#B97C55" stroke-width=".6"/>' +
    '<path d="M16 14 C17.4 13.6 18.6 14 19 15" stroke="#E9B996" stroke-width=".8" fill="none"/></g>';

  function mount(btn) {
    var st = document.createElement("style");
    st.textContent = css;
    document.head.appendChild(st);

    var el = document.createElement("button");
    el.type = "button";
    el.className = "lmp";
    el.innerHTML =
      '<span class="lmp-pool" aria-hidden="true"></span>' +
      '<span class="lmp-rose" aria-hidden="true"></span>' +
      '<span class="lmp-arm" aria-hidden="true"><span class="lmp-cord"></span><span class="lmp-hand open"></span>' +
      '<span class="lmp-bulb"><span class="lmp-halo"></span>' + BULB + "</span></span>" +
      '';
    document.body.appendChild(el);

    var arm = el.querySelector(".lmp-arm");
    var cord = el.querySelector(".lmp-cord");
    var pool = el.querySelector(".lmp-pool");
    var hand = el.querySelector(".lmp-hand");

    // Is the original button pinned to the viewport (fixed/sticky ancestor)?
    var pinned = false;
    for (var n = btn; n && n !== document.body; n = n.parentElement) {
      var pos = getComputedStyle(n).position;
      if (pos === "fixed" || pos === "sticky") { pinned = true; break; }
    }
    var r0 = btn.getBoundingClientRect();
    var baseTop = pinned ? r0.top : r0.top + window.scrollY;
    var cordLen = Math.round(Math.max(18, baseTop + r0.height * 0.5 + 4));

    var pullY = 0, pv = 0;              // how far the cord is pulled down, and its spring speed
    var mirror = false, cordX = 11.4;   // where the cord passes through the drawn fist
    function placeHand() {
      mirror = el.getBoundingClientRect().left + 23 > window.innerWidth / 2;
      hand.innerHTML = '<svg viewBox="0 0 64 52" width="52" height="42">' + (mirror ? '<g transform="translate(64,0) scale(-1,1)">' + HAND_INNER + '</g>' : HAND_INNER) + '</svg>';
      cordX = (mirror ? 64 - 14 : 14) * 52 / 64;
    }
    function layout() {
      var len = cordLen + pullY;
      cord.style.height = len.toFixed(2) + "px";
      var bulbTop = 5 + len;
      el.style.height = (5 + cordLen + 46) + "px";
      pool.style.top = bulbTop + 30 - 170 + "px";
    }
    layout();

    function themeIsLight() {
      var host = btn.closest("[data-theme]") || document.documentElement;
      return (host.getAttribute("data-theme") || "light") !== "space";
    }
    function syncLabel() {
      var on = themeIsLight();
      el.classList.toggle("on", on);
      var lbl = btn.getAttribute("aria-label") || "Switch theme";
      if (el.getAttribute("aria-label") !== lbl) { el.setAttribute("aria-label", lbl); el.title = lbl; }
    }
    syncLabel();

    // Pendulum: breeze + cursor wind + pull impulse.
    var th = 0, w = 0, last = performance.now(), t0 = last;
    var px = null, py = null, pt = 0;
    function cx() { var r = el.getBoundingClientRect(); return [r.left + r.width / 2, r.top + 5 + cordLen + 28]; }
    window.addEventListener("pointermove", function (e) {
      if (reduce) return;
      var now = performance.now();
      if (px !== null && now - pt < 80) {
        var c = cx(), dx = e.clientX - c[0], dy = e.clientY - c[1];
        var d = Math.sqrt(dx * dx + dy * dy);
        if (d < 190) {
          var vx = (e.clientX - px) / Math.max(8, now - pt);
          w += vx * 0.9 * (1 - d / 190);
        }
      }
      px = e.clientX; py = e.clientY; pt = now;
    }, { passive: true });

    var visible = true;
    document.addEventListener("visibilitychange", function () { visible = !document.hidden; last = performance.now(); });

    function frame(now) {
      var dt = Math.min(0.033, (now - last) / 1000); last = now;
      var r = btn.getBoundingClientRect();
      if (r.width) {
        var dy = pinned ? 0 : r.top - baseTop;
        el.style.transform = "translate(" + Math.round(r.left + r.width / 2 - 23) + "px," + Math.round(dy) + "px)";
      }
      if (visible && !reduce) {
        var t = (now - t0) / 1000;
        var breeze = 0.55 * Math.sin(t * 0.63) + 0.32 * Math.sin(t * 1.71 + 1.3) + 0.18 * Math.sin(t * 3.07 + 0.4);
        var acc = -26 * th - 1.5 * w + breeze;
        w += acc * dt; th += w * dt;
        if (th > 0.6) { th = 0.6; w *= -0.4; } else if (th < -0.6) { th = -0.6; w *= -0.4; }
        arm.style.transform = "rotate(" + (th * 57.2958).toFixed(2) + "deg)";
      }
      if (P) step(now, dt);
      syncLabel();
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);

    // The pull: a hand reaches in, grips the cord, pulls it down (cord stretches,
    // bulb dips), the theme switches at the bottom, the hand lets go and the bulb
    // springs back up, bouncing and swinging.
    var P = null;
    function easeIO(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
    var DEPTH = 30, GRIP = 16;          // pull distance; grip point above the bulb
    function step(now, dt) {
      var t = now - P.t0, hx = 0, hy = 0, op = 1;
      if (t < 320) {                                     // reach in
        var a = easeOut(t / 320);
        hx = (mirror ? -1 : 1) * 46 * (1 - a); hy = -10 * (1 - a); op = a;
        th *= 0.92; w *= 0.85;                          // steady the swinging bulb
      } else if (t < 430) {                              // grip
        if (!P.gripped) { P.gripped = true; hand.classList.remove("open"); }
        th *= 0.85; w *= 0.8;
      } else if (t < 860) {                              // pull down
        var k = easeIO((t - 430) / 430);
        pullY = DEPTH * k + Math.sin((t - 430) / 40) * 0.6 * k;
        th *= 0.9; w *= 0.8;
      } else if (t < 980) {                              // hold at the bottom; the switch clicks
        pullY = DEPTH;
        if (!P.clicked) { P.clicked = true; btn.click(); setTimeout(syncLabel, 30); }
      } else {                                           // let go
        if (!P.released) {
          P.released = true; hand.classList.add("open");
          pv = -0.2; w += (Math.random() < 0.5 ? -1 : 1) * (1.8 + Math.random());
        }
        var r = Math.min(1, (t - 980) / 420);
        hx = (mirror ? -1 : 1) * 34 * easeOut(r); hy = 14 * easeOut(r); op = 1 - r;
        var f = dt * 60;                                 // damped spring back to rest
        for (var i = 0; i < 2; i++) {
          var acc = -0.11 * pullY - 0.16 * pv;
          pv += acc * f / 2; pullY += pv * f / 2;
        }
        if (pullY < -9) { pullY = -9; pv *= -0.5; }
        if (t > 1500 && Math.abs(pullY) < 0.25 && Math.abs(pv) < 0.05) { pullY = 0; pv = 0; P = null; hand.style.opacity = "0"; layout(); return; }
      }
      layout();
      var gy = 5 + cordLen + pullY - GRIP - 21;          // fist centre sits on the cord just above the bulb
      hand.style.opacity = op.toFixed(3);
      hand.style.transform = "translate3d(" + (15 - cordX + hx).toFixed(2) + "px," + (gy - 5 + hy).toFixed(2) + "px,0)";
    }
    el.addEventListener("click", function () {
      if (P) return;
      if (reduce) { btn.click(); syncLabel(); return; }
      placeHand();
      hand.classList.add("open");
      P = { t0: performance.now() };
    });
    window.addEventListener("resize", function () {
      var rr = btn.getBoundingClientRect();
      baseTop = pinned ? rr.top : rr.top + window.scrollY;
      cordLen = Math.round(Math.max(18, baseTop + rr.height * 0.5 + 4));
      layout();
    });
  }

  var tries = 0;
  (function find() {
    var b = document.querySelector(SEL);
    if (b && b.getBoundingClientRect().width) return mount(b);
    if (++tries < 80) setTimeout(find, 150);
  })();
})();
