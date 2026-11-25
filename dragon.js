/* Timeline easter egg: when an egg fully hatches, a small dragon climbs out of
   the shell, breathes a stream of fire, then flies off along a random curved path
   (any side, any height), breathing short bursts of fire as it goes.
   Fire is drawn on one canvas so the whole thing stays smooth.
   Call window.hatchDragon(rect) with the egg's bounding rect. */
(function () {
  if (window.hatchDragon) return;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var css = [
    ".dg-layer{position:fixed;inset:0;pointer-events:none;z-index:70;overflow:hidden}",
    ".dg-layer canvas{position:absolute;inset:0;width:100%;height:100%}",
    ".dg-glow{position:absolute;width:90px;height:90px;margin:-45px 0 0 -45px;border-radius:50%;mix-blend-mode:screen;",
    " background:radial-gradient(circle,rgba(255,226,170,.85) 0,rgba(255,150,60,.4) 35%,rgba(255,110,30,0) 70%);animation:dgGlow 1.1s ease-out both}",
    "@keyframes dgGlow{0%{transform:scale(.3);opacity:0}30%{transform:scale(1);opacity:1}100%{transform:scale(1.3);opacity:0}}",
    ".dg{position:absolute;left:0;top:0;will-change:transform,opacity;transform-origin:50% 50%}",
    ".dg svg{display:block;overflow:visible;filter:drop-shadow(0 6px 8px rgba(30,10,5,.35))}",
    ".dg .wing-near{transform-origin:92px 40px;animation:dgFlap .3s ease-in-out infinite alternate}",
    ".dg .wing-far{transform-origin:96px 38px;animation:dgFlap .3s ease-in-out infinite alternate;animation-delay:-.06s}",
    ".dg.hover .wing-near,.dg.hover .wing-far{animation-duration:.42s}",
    "@keyframes dgFlap{from{transform:rotate(-8deg) scaleY(1)}to{transform:rotate(14deg) scaleY(-.35)}}",
    ".dg .jaw{transform-origin:127px 31px;transition:transform .12s ease-out}",
    ".dg.breathing .jaw{transform:rotate(18deg)}"
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
  function rand(a, b) { return a + Math.random() * (b - a); }
  function bez(p0, p1, p2, p3, t) {
    var u = 1 - t;
    return u * u * u * p0 + 3 * u * u * t * p1 + 3 * u * t * t * p2 + t * t * t * p3;
  }
  function ease(t) { return 0.5 - Math.cos(Math.PI * t) / 2; }

  window.hatchDragon = function (rect) {
    if (reduce || !rect) return;
    ensureStyle();
    var VW = window.innerWidth, VH = window.innerHeight, dpr = Math.min(2, window.devicePixelRatio || 1);
    var layer = document.createElement("div");
    layer.className = "dg-layer";
    var cv = document.createElement("canvas");
    cv.width = VW * dpr; cv.height = VH * dpr;
    layer.appendChild(cv);
    document.body.appendChild(layer);
    var ctx = cv.getContext("2d");
    ctx.scale(dpr, dpr);

    var cx = rect.left + rect.width / 2, cy = rect.top + rect.height * 0.42;
    var glow = document.createElement("div");
    glow.className = "dg-glow";
    glow.style.left = cx + "px"; glow.style.top = cy + "px";
    layer.appendChild(glow);

    var small = VW < 640;
    var W = small ? 70 : 96, H = Math.round(W * 98 / 166);
    var d = document.createElement("div");
    d.className = "dg hover";
    d.innerHTML = DRAGON.replace('width="W"', 'width="' + W + '"').replace('height="H"', 'height="' + H + '"');
    d.style.opacity = "0";
    layer.appendChild(d);
    // mouth position relative to the sprite centre (viewBox -8 -12 166 98, mouth at 152,31)
    var MX = (152 + 8) / 166 * W - W / 2, MY = (31 + 12) / 98 * H - H / 2;

    // A fresh random route every time: any side, any height, a random curve.
    var dir = Math.random() < 0.5 ? -1 : 1;
    if (cx < VW * 0.22) dir = Math.random() < 0.75 ? 1 : -1;
    if (cx > VW * 0.78) dir = Math.random() < 0.75 ? -1 : 1;
    var endX = dir > 0 ? VW + W * 1.6 : -W * 1.6;
    var endY = Math.random() < 0.25 ? -H * 1.6 : rand(VH * -0.05, VH * 0.85);
    if (endY < 0) endX = cx + dir * rand(VW * 0.25, VW * 0.6);
    var P = {
      x: [cx, cx + dir * rand(40, 160), rand(VW * 0.15, VW * 0.85), endX],
      y: [cy - 10, cy - rand(70, 190), rand(VH * 0.05, VH * 0.75), endY]
    };
    var flyDur = rand(2600, 3600);
    var breathAngle = (dir > 0 ? 0 : Math.PI) + dir * -rand(0.25, 0.6);   // first breath: forward and upward

    var parts = [], born = performance.now(), last = born;
    var phase = "emerge", breathingUntil = 0, nextPuff = 0, flyStart = 0;
    var pose = { x: cx, y: cy, rot: 0, s: 0.4, face: dir, op: 0 };

    function mouth() {
      var ox = MX * pose.face * pose.s, oy = MY * pose.s, c = Math.cos(pose.rot), sn = Math.sin(pose.rot);
      return [pose.x + ox * c - oy * sn, pose.y + ox * sn + oy * c];
    }
    function noseAngle() { return pose.face > 0 ? pose.rot : Math.PI + pose.rot; }
    function emit(n, ang, power) {
      var m = mouth();
      for (var k = 0; k < n; k++) {
        var a = ang + rand(-0.12, 0.12), sp = rand(5.5, 7) * power, j = Math.random() * 0.8;
        // spread new puffs along the first stretch so the flame is one continuous tongue
        parts.push({ x: m[0] + Math.cos(a) * sp * j, y: m[1] + Math.sin(a) * sp * j, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
          life: 0, max: rand(340, 520), r: rand(4.2, 6.2) * (small ? 0.85 : 1) });
      }
    }
    function breathe(ms) {
      breathingUntil = performance.now() + ms;
      d.classList.add("breathing");
    }
    function draw(dt) {
      ctx.clearRect(0, 0, VW, VH);
      // older (outer, redder) puffs first, newest (hottest) on top
      for (var i = parts.length - 1; i >= 0; i--) {
        var p = parts[i];
        p.life += dt;
        if (p.life >= p.max) { parts.splice(i, 1); continue; }
        var f = dt / 16;
        p.x += p.vx * f; p.y += p.vy * f;
        p.vx *= Math.pow(0.955, f); p.vy = p.vy * Math.pow(0.955, f) - 0.06 * f;   // slows and rises like hot air
      }
      for (var q = 0; q < parts.length; q++) {
        var o = parts[q], k = o.life / o.max, r = o.r * (1 + k * 2.6), a = Math.pow(1 - k, 1.3);
        var g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, r);
        if (k < 0.28) {
          g.addColorStop(0, "rgba(255,240,180," + a + ")");
          g.addColorStop(0.35, "rgba(255,190,60," + a + ")");
          g.addColorStop(0.75, "rgba(245,120,30," + (a * 0.8) + ")");
          g.addColorStop(1, "rgba(230,90,20,0)");
        } else if (k < 0.6) {
          g.addColorStop(0, "rgba(255,170,58," + a + ")");
          g.addColorStop(0.55, "rgba(236,92,24," + (a * 0.85) + ")");
          g.addColorStop(1, "rgba(200,52,14,0)");
        } else {
          g.addColorStop(0, "rgba(214,70,20," + (a * 0.8) + ")");
          g.addColorStop(0.6, "rgba(120,40,20," + (a * 0.35) + ")");
          g.addColorStop(1, "rgba(80,30,20,0)");
        }
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(o.x, o.y, r, 0, 6.2832); ctx.fill();
      }
    }
    (function frame(now) {
      var dt = Math.min(40, now - last); last = now;
      var el = now - born;
      if (phase === "emerge") {
        // climbs out of the shell and rears its head
        var e = Math.min(1, el / 420);
        pose.s = 0.4 + 0.3 * e; pose.op = Math.min(1, el / 160);
        pose.x = cx; pose.y = cy - 18 * ease(e); pose.face = dir;
        pose.rot = (dir > 0 ? breathAngle : breathAngle - Math.PI) * ease(e);
        if (el > 420) { phase = "breath"; breathe(650); }
      } else if (phase === "breath") {
        // the first big breath of fire, straight from the mouth
        if (now < breathingUntil) emit(6, noseAngle(), 1.15);
        pose.y = cy - 18 + Math.sin(el / 90) * 1.5;
        if (now >= breathingUntil + 120) { phase = "fly"; flyStart = now; nextPuff = now + rand(650, 1000); d.classList.remove("hover"); }
      } else {
        var t = Math.min(1, (now - flyStart) / flyDur), te = ease(t);
        var x = bez(P.x[0], P.x[1], P.x[2], P.x[3], te), y = bez(P.y[0], P.y[1], P.y[2], P.y[3], te);
        var t2 = Math.min(1, te + 0.01);
        var dx = bez(P.x[0], P.x[1], P.x[2], P.x[3], t2) - x, dy = bez(P.y[0], P.y[1], P.y[2], P.y[3], t2) - y;
        var face = dx >= 0 ? 1 : -1;
        var head = Math.atan2(dy, dx);
        var rot = face > 0 ? head : head - Math.PI * (head > 0 ? 1 : -1);
        rot = Math.max(-0.6, Math.min(0.6, rot));
        pose.face = face;
        pose.rot += (rot - pose.rot) * 0.18;                       // turn smoothly
        pose.x = x; pose.y = y + Math.sin((now - flyStart) / 110) * 3; // gentle wing-beat bob
        pose.s = 0.7 + 0.3 * Math.min(1, t * 4);
        if (now > nextPuff && t < 0.85) { breathe(rand(220, 340)); nextPuff = now + rand(800, 1300); }
        if (now < breathingUntil) emit(4, noseAngle(), 1);
        if (t >= 1 && !parts.length) { layer.remove(); return; }
      }
      if (now >= breathingUntil) d.classList.remove("breathing");
      d.style.opacity = pose.op.toFixed(3);
      d.style.transform = "translate3d(" + (pose.x - W / 2).toFixed(2) + "px," + (pose.y - H / 2).toFixed(2) + "px,0) rotate(" + pose.rot.toFixed(4) + "rad) scaleX(" + pose.face + ") scale(" + pose.s.toFixed(3) + ")";
      draw(dt);
      requestAnimationFrame(frame);
    })(born);
  };
})();
