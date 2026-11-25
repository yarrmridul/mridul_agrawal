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
    ".lmp.pull .lmp-cord{animation:lmpCord .62s cubic-bezier(.3,.6,.3,1) both}",
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
    ".lmp-hand{position:absolute;left:50%;width:22px;margin-left:-11px;font-size:20px;line-height:1;text-align:center;opacity:0;pointer-events:none;filter:drop-shadow(0 2px 3px rgba(0,0,0,.25))}",
    ".lmp.pull .lmp-hand{animation:lmpHand .95s cubic-bezier(.35,.6,.3,1) both}",
    "@keyframes lmpCord{0%,30%{transform:none}62%{transform:scaleY(var(--lmp-stretch))}100%{transform:none}}",
    "@keyframes lmpHand{0%{opacity:0;transform:translate(30px,-10px) rotate(14deg)}28%{opacity:1;transform:translate(0,0) rotate(0)}58%{opacity:1;transform:translate(0,var(--lmp-drop))}68%{opacity:1;transform:translate(6px,calc(var(--lmp-drop) - 4px))}100%{opacity:0;transform:translate(30px,0) rotate(10deg)}}",
    "@media (prefers-reduced-motion:reduce){.lmp.pull .lmp-cord,.lmp.pull .lmp-hand{animation:none}}"
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
      '<span class="lmp-arm" aria-hidden="true"><span class="lmp-cord"></span>' +
      '<span class="lmp-bulb"><span class="lmp-halo"></span>' + BULB + "</span></span>" +
      '<span class="lmp-hand" aria-hidden="true">✊</span>';
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

    function layout() {
      cord.style.height = cordLen + "px";
      cord.style.transformOrigin = "50% 0";
      var bulbTop = 5 + cordLen;
      el.style.height = bulbTop + 46 + "px";
      pool.style.top = bulbTop + 30 - 170 + "px";
      hand.style.top = Math.max(4, bulbTop - 20) + "px";
      var stretch = (cordLen + 16) / cordLen;
      el.style.setProperty("--lmp-stretch", stretch.toFixed(3));
      el.style.setProperty("--lmp-drop", "16px");
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
      syncLabel();
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);

    var busy = false;
    el.addEventListener("click", function () {
      if (busy) return;
      if (reduce) { btn.click(); syncLabel(); return; }
      busy = true;
      th *= 0.2; w = 0;
      el.classList.remove("pull"); void el.offsetWidth; el.classList.add("pull");
      setTimeout(function () { btn.click(); setTimeout(syncLabel, 30); }, 560);
      setTimeout(function () { w += (Math.random() < 0.5 ? -1 : 1) * 2.4; }, 620);
      setTimeout(function () { el.classList.remove("pull"); busy = false; }, 980);
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
