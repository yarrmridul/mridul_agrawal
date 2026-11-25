/* Timeline easter egg: when an egg fully hatches, a warm glow and a small flame
   flicker in the shell, then a little dragon climbs out, flaps off to the left or
   right of the screen breathing short bursts of fire, and disappears.
   Call window.hatchDragon(rect) with the egg's bounding rect. */
(function () {
  if (window.hatchDragon) return;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var css = [
    ".dg-layer{position:fixed;inset:0;pointer-events:none;z-index:70;overflow:hidden}",
    ".dg-glow{position:absolute;width:120px;height:120px;margin:-60px 0 0 -60px;border-radius:50%;",
    " background:radial-gradient(circle,rgba(255,236,190,.95) 0,rgba(255,170,70,.65) 22%,rgba(255,110,30,.25) 45%,rgba(255,90,20,0) 70%);",
    " animation:dgGlow .9s ease-out both;mix-blend-mode:screen}",
    "@keyframes dgGlow{0%{transform:scale(.2);opacity:0}25%{transform:scale(1);opacity:1}45%{opacity:.7}60%{opacity:1}100%{transform:scale(1.25);opacity:0}}",
    ".dg-flame{position:absolute;width:22px;height:34px;margin:-30px 0 0 -11px;transform-origin:50% 100%;animation:dgFlame .8s ease-out both}",
    "@keyframes dgFlame{0%{transform:scaleY(.1);opacity:0}20%{opacity:1;transform:scaleY(1) skewX(4deg)}40%{transform:scaleY(.85) skewX(-5deg)}60%{transform:scaleY(1.05) skewX(3deg)}100%{transform:scaleY(.2);opacity:0}}",
    ".dg{position:absolute;left:0;top:0;will-change:transform}",
    ".dg svg{display:block;overflow:visible;filter:drop-shadow(0 6px 8px rgba(30,10,5,.35))}",
    ".dg .wing-near{transform-origin:92px 40px;animation:dgFlap .32s ease-in-out infinite alternate}",
    ".dg .wing-far{transform-origin:96px 38px;animation:dgFlap .32s ease-in-out infinite alternate;animation-delay:-.05s}",
    "@keyframes dgFlap{from{transform:rotate(-8deg) scaleY(1)}to{transform:rotate(14deg) scaleY(-.35)}}",
    ".dg .jaw{transform-origin:127px 31px;transition:transform .12s}",
    ".dg.breathing .jaw{transform:rotate(16deg)}",
    ".dg-fire{position:absolute;left:0;top:0;border-radius:50%;pointer-events:none;mix-blend-mode:screen;",
    " background:radial-gradient(circle,#FFF6D8 0,#FFD166 25%,#FF8A2A 55%,rgba(230,60,20,.6) 75%,rgba(200,40,10,0) 100%)}"
  ].join("\n");

  var DRAGON =
    '<svg viewBox="-8 -12 166 98" width="W" height="H">' +
    '<defs>' +
    '<linearGradient id="dgBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4A0F07"/><stop offset=".5" stop-color="#9A2A0B"/><stop offset="1" stop-color="#D9651C"/></linearGradient>' +
    '<linearGradient id="dgBelly" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E8A55C"/><stop offset="1" stop-color="#F7CF8F"/></linearGradient>' +
    '<linearGradient id="dgWing" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5E1508" stop-opacity=".92"/><stop offset=".6" stop-color="#A8360E" stop-opacity=".82"/><stop offset="1" stop-color="#E07A2E" stop-opacity=".7"/></linearGradient>' +
    '<pattern id="dgScale" width="5" height="4" patternUnits="userSpaceOnUse"><path d="M0 4 Q2.5 0 5 4" fill="none" stroke="#3A0C05" stroke-width=".55" opacity=".45"/></pattern>' +
    '<radialGradient id="dgEye"><stop offset="0" stop-color="#FFF6C8"/><stop offset=".55" stop-color="#FFC24D"/><stop offset="1" stop-color="#D9480F"/></radialGradient>' +
    '</defs>' +
    /* far wing */
    '<g class="wing-far"><path d="M96 38 L84 6 L50 -6 Q58 6 56 15 Q64 18 68 27 Q74 28 78 35 Z" fill="#4A1208" opacity=".9"/>' +
    '<path d="M96 38 L84 6 M84 6 L50 -6 M84 6 L56 15 M84 6 L68 27" stroke="#2A0904" stroke-width=".8" fill="none"/></g>' +
    /* tail, tapering, with spikes and a spade tip */
    '<path d="M58 47 C46 45 34 50 24 57 C16 62 8 64 1 60 C8 61 15 58 22 53 C33 45 46 42 58 43 Z" fill="url(#dgBody)"/>' +
    '<path d="M2 60 L-6 54 L-2 61 L-6 68 Z" fill="#4A0F07"/>' +
    '<path d="M44 44 l2 -4 l2 3.6 M34 47.5 l1.8 -3.6 l1.8 3.2 M24 53 l1.6 -3.2 l1.6 2.8" fill="#4A0F07" stroke="#4A0F07" stroke-width=".5" stroke-linejoin="round"/>' +
    /* hind leg, tucked back */
    '<path d="M66 54 C62 62 66 70 76 72 L80 70.5 C73 68 70 63 72 57 Z" fill="#7A1E0A"/>' +
    '<path d="M77 71.5 l3 2.4 M79 71 l3.4 1.2 M76 72 l1.4 3" stroke="#1E0703" stroke-width="1" stroke-linecap="round"/>' +
    /* body */
    '<path d="M116 49 C111 39 97 35 83 37 C71 39 61 43 55 49 C61 57 75 61 89 60 C102 59 112 56 116 49 Z" fill="url(#dgBody)"/>' +
    '<path d="M116 49 C111 39 97 35 83 37 C71 39 61 43 55 49 C61 57 75 61 89 60 C102 59 112 56 116 49 Z" fill="url(#dgScale)"/>' +
    '<path d="M60 52 C70 58 86 59 100 56 C107 54 112 52 115 50 C111 56 102 60 89 61 C76 62 66 58 60 52 Z" fill="url(#dgBelly)"/>' +
    '<path d="M68 56.5 L69 59.5 M76 58 L76.5 61 M84 58.8 L84 61.6 M92 58.4 L91.6 61.2 M100 57 L99 59.8" stroke="#B9703A" stroke-width=".7" opacity=".8"/>' +
    /* spine ridge */
    '<path d="M62 42 l2.4 -4.4 l2 3.8 l2.6 -4.6 l2 4 l2.6 -4.4 l2 4 l2.6 -4.2 l2 3.8 l2.6 -3.8 l2 3.4 l2.4 -3.2 l1.6 3" fill="#3A0C05" stroke="#3A0C05" stroke-width=".5" stroke-linejoin="round"/>' +
    /* fore leg */
    '<path d="M104 55 C104 61 101 65 97 67 L96 65 C99 63 100 60 99 56 Z" fill="#7A1E0A"/>' +
    '<path d="M96.5 66 l-2.6 1.6 M97.4 66.6 l-1.2 2.6" stroke="#1E0703" stroke-width=".9" stroke-linecap="round"/>' +
    /* neck */
    '<path d="M104 43 C111 37 117 31 123 26 L130 30 C124 36 118 44 113 51 Z" fill="url(#dgBody)"/>' +
    '<path d="M104 43 C111 37 117 31 123 26 L130 30 C124 36 118 44 113 51 Z" fill="url(#dgScale)"/>' +
    '<path d="M112 50 C117 44 122 37 128 31.5" stroke="#E8A55C" stroke-width="1.6" fill="none" opacity=".75"/>' +
    '<path d="M110 38 l-3 -3 l4 .4 M115 33 l-3 -3.2 l4.2 .6 M120 28.5 l-2.8 -3.4 l4 .8" fill="#3A0C05"/>' +
    /* horns */
    '<path d="M125 22 C120 14 113 10 104 9 C112 13 117 17 120 23.5 Z" fill="#26100A"/>' +
    '<path d="M130.5 21 C128 14 124 11 118 9.5 C123.5 13.5 126 17 127 21.6 Z" fill="#3A1A0E"/>' +
    /* head and jaw */
    '<path d="M121 25 C127 19.5 135 19 141 21.5 L153 26.6 C155 27.6 154.4 29.6 152.4 29.8 L140 30.6 C134 32.4 127 32.2 123 30 Z" fill="url(#dgBody)"/>' +
    '<path d="M121 25 C127 19.5 135 19 141 21.5 L153 26.6 C155 27.6 154.4 29.6 152.4 29.8 L140 30.6 C134 32.4 127 32.2 123 30 Z" fill="url(#dgScale)"/>' +
    '<path d="M133 22.4 C138 21.6 142 22.4 146 24.4" stroke="#2A0904" stroke-width=".9" fill="none" opacity=".7"/>' +
    '<g class="jaw"><path d="M127 31 L150 30.4 C148 33.4 141 35.4 133 35 C130 34.6 128 33 127 31 Z" fill="#6E1A09"/><path d="M139 31.2 l.8 1.6 M143 31 l.8 1.5 M147 30.8 l.6 1.3" stroke="#F6E6CC" stroke-width=".7"/></g>' +
    '<circle cx="151.2" cy="27.4" r=".8" fill="#1A0603"/>' +
    '<path d="M134.6 24.6 C136.2 23.2 138.6 23 140.4 24.2 C138.8 25.6 136.4 25.8 134.6 24.6 Z" fill="url(#dgEye)"/>' +
    '<path d="M137.6 23.3 L137.4 25.5" stroke="#140502" stroke-width=".8"/>' +
    '<circle cx="137.6" cy="24.4" r="4.4" fill="#FFB04A" opacity=".16"/>' +
    /* near wing: arm, finger bones and a scalloped membrane */
    '<g class="wing-near"><path d="M92 40 L72 2 L26 -9 Q38 4 34 15 Q44 17 48 27 Q56 28 60 36 Q66 36 70 42 Z" fill="url(#dgWing)"/>' +
    '<path d="M92 40 L72 2" stroke="#2A0904" stroke-width="1.8" stroke-linecap="round"/>' +
    '<path d="M72 2 L26 -9 M72 2 L34 15 M72 2 L48 27 M72 2 L60 36" stroke="#2A0904" stroke-width=".8" fill="none" stroke-linecap="round"/>' +
    '<path d="M72 2 l-2.4 -3.2" stroke="#1A0603" stroke-width="1" stroke-linecap="round"/></g>' +
    '</svg>';

  var styled = false;
  function ensureStyle() {
    if (styled) return;
    var st = document.createElement("style");
    st.textContent = css;
    document.head.appendChild(st);
    styled = true;
  }

  function flameSvg() {
    return '<svg class="dg-flame" viewBox="0 0 22 34"><path d="M11 0 C15 8 21 12 20 21 C19 29 15 34 11 34 C7 34 2 29 2 21 C2 15 7 12 8 6 C10 10 11 10 11 0 Z" fill="#FF8A2A"/><path d="M11 12 C13 17 16 20 15 25 C14 30 12 32 11 32 C9 32 6 29 6 25 C6 21 9 19 11 12 Z" fill="#FFD166"/><path d="M11 22 C12 25 13 27 12.5 29 C12 31 11.5 31 11 31 C10 31 9.5 30 9.5 28 C9.5 26 10.5 25 11 22 Z" fill="#FFF6D8"/></svg>';
  }

  window.hatchDragon = function (rect) {
    if (reduce || !rect) return;
    ensureStyle();
    var layer = document.createElement("div");
    layer.className = "dg-layer";
    document.body.appendChild(layer);
    var cx = rect.left + rect.width / 2, cy = rect.top + rect.height * 0.45;

    // 1) glow and a small flame inside the shell
    var glow = document.createElement("div");
    glow.className = "dg-glow";
    glow.style.left = cx + "px"; glow.style.top = cy + "px";
    layer.appendChild(glow);
    var fl = document.createElement("div");
    fl.innerHTML = flameSvg();
    var flame = fl.firstChild;
    flame.style.position = "absolute"; flame.style.left = cx + "px"; flame.style.top = cy + "px";
    layer.appendChild(flame);

    // 2) the dragon climbs out and flies off one side
    var small = window.innerWidth < 640;
    var W = small ? 70 : 96, H = Math.round(W * 98 / 166);
    var dir = Math.random() < 0.5 ? -1 : 1;
    var d = document.createElement("div");
    d.className = "dg";
    d.innerHTML = DRAGON.replace('width="W"', 'width="' + W + '"').replace('height="H"', 'height="' + H + '"');
    d.style.opacity = "0";
    layer.appendChild(d);

    var travel = (dir > 0 ? window.innerWidth - cx : cx) + W * 2;
    var rise = Math.min(160, cy - 40) * (0.6 + Math.random() * 0.4);
    var dur = 3000 + Math.random() * 600, t0 = 0, lastPuff = 0, start = performance.now() + 650;
    var mouthX = (152 + 8) / 166 * W, mouthY = (31 + 12) / 98 * H;

    function puff(x, y, vx, vy) {
      var n = 9;
      for (var k = 0; k < n; k++) {
        var p = document.createElement("div");
        p.className = "dg-fire";
        var s = 6 + Math.random() * 8;
        p.style.width = p.style.height = s + "px";
        layer.appendChild(p);
        var ang = (Math.random() - 0.5) * 0.5, sp = 2.6 + Math.random() * 2.4, life = 420 + Math.random() * 260;
        (function (p, s, ang, sp, life) {
          var born = performance.now();
          (function step(now) {
            var a = (now - born) / life;
            if (a >= 1) { p.remove(); return; }
            var dist = sp * (now - born) / 16;
            var px = x + Math.cos(ang) * dist * vx - s / 2, py = y + Math.sin(ang) * dist + vy * dist * 0.3 - s / 2 - a * 10;
            var grow = 1 + a * 2.4;
            p.style.transform = "translate(" + px.toFixed(1) + "px," + py.toFixed(1) + "px) scale(" + grow.toFixed(2) + ")";
            p.style.opacity = (1 - a).toFixed(2);
            requestAnimationFrame(step);
          })(born);
        })(p, s, ang, sp, life);
      }
    }

    (function frame(now) {
      if (now < start) { requestAnimationFrame(frame); return; }
      if (!t0) t0 = now;
      var t = Math.min(1, (now - t0) / dur);
      var e = t < 0.18 ? 0 : (t - 0.18) / 0.82;          // first: climb out, then fly
      var ease = e * e * (3 - 2 * e);
      var x = cx + dir * travel * ease;
      var y = cy - (t < 0.18 ? (t / 0.18) * 26 : 26 + rise * Math.sin(Math.min(1, e * 1.3) * Math.PI / 2)) + Math.sin(t * 22) * 5;
      var scale = t < 0.18 ? 0.25 + (t / 0.18) * 0.75 : 1;
      var tilt = t < 0.18 ? -10 : -8 + Math.cos(t * 22) * 4;
      d.style.opacity = Math.min(1, t / 0.08).toFixed(2);
      d.style.transform = "translate(" + (x - W / 2).toFixed(1) + "px," + (y - H / 2).toFixed(1) + "px) scaleX(" + dir + ") scale(" + scale.toFixed(3) + ") rotate(" + tilt.toFixed(1) + "deg)";
      // fire bursts: one as it leaves the shell, then every ~0.9s in flight
      if (t > 0.2 && now - lastPuff > 900) {
        lastPuff = now;
        d.classList.add("breathing");
        setTimeout(function () { d.classList.remove("breathing"); }, 380);
        var mx = x - W / 2 + (dir > 0 ? mouthX : W - mouthX), my = y - H / 2 + mouthY;
        puff(mx, my, dir, -0.2);
        setTimeout(function () { puff(mx + dir * 6, my, dir, -0.2); }, 140);
      }
      if (t < 1) requestAnimationFrame(frame);
      else setTimeout(function () { layer.remove(); }, 900);
    })(performance.now());
  };
})();
