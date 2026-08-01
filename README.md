MRIDUL AGRAWAL — PORTFOLIO (static site, ready for Vercel)
=========================================================

HOMEPAGE: index.html  (this is what loads at your domain root "/")

FOLDER LAYOUT
-------------
/ (site root)
├─ index.html                 ← homepage (the portfolio)
├─ About.dc.html              ← About page
├─ FutureCard.dc.html         ← Future Card page (uses the visitor's camera)
├─ Project.dc.html            ← case-study page (opens as Project.dc.html?p=<slug>)
├─ support.js                 ← required runtime; every page loads ./support.js
├─ resume.html                ← résumé viewer page (opens in a new tab; has zoom + download)
├─ resume/
│  └─ resume.pdf              ← YOUR RÉSUMÉ lives here (see "UPDATING YOUR RÉSUMÉ" below)
└─ uploads/mridul-portfolio/public/opt/   ← all images (keep this exact path)
   ├─ logos/     (ion.png, techlive.jpg, images.png, moodale.png3.jpg)
   ├─ projects/  (moodale.jpg, googlesheetcrm.png, motimotors.jpeg, crm.jpeg, mqr.jpeg, irishgreen.png, sales.png)
   ├─ HOS.jpeg
   └─ mridul_img.jpeg

UPDATING YOUR RÉSUMÉ  (no code needed)
--------------------------------------
Every "Download Resume" / "résumé" button on the site opens  resume.html  in a new
tab — a viewer that shows your PDF (zoom, scroll, clickable links) plus a Download button.
The viewer always shows the file at:   resume/resume.pdf

To change your résumé:
  1. Put your new résumé PDF into the  resume/  folder.
  2. Rename it to exactly  resume.pdf  (replace the existing file).
  3. Commit & push to GitHub — the site picks it up automatically.
Keep the file name  resume.pdf  so none of the links ever need to change.
(The current resume/resume.pdf is a placeholder — replace it with your real résumé.)

NOTES
-----
- CSS: there are NO separate .css files — all styles are inline in the HTML (this is intentional; nothing to add).
- Fonts: loaded from Google Fonts via a <link> in each page (needs internet at runtime; no font files to ship).
- No build step, no Node, no package.json. It is a pure static site.

DEPLOY TO VERCEL
----------------
Option A — drag & drop: vercel.com → Add New → Project → drop THIS folder.
   Framework Preset = "Other", Build Command = (none), Output Directory = ./
Option B — CLI: install with  npm i -g vercel , then run  vercel  inside this folder.
That's it — index.html will be served at your domain root.
