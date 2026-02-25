RAHA LAB — Silicon-grade multilingual static site (EN/FA/AR) with catalogue + filters

Run:
  npm install
  npm run dev

Content lives here:
  src/content/ingredients/{en|fa|ar}/*.md
  src/content/formulations/{en|fa|ar}/*.md
  src/content/news/{en|fa|ar}/*.md
  src/content/downloads/{en|fa|ar}/*.md

Deploy:
  npm run build
  upload /dist to any static host (or use Netlify/Cloudflare Pages).

CMS (optional):
  /admin uses Decap CMS. Update public/admin/config.yml repo field and deploy to Netlify with Identity + Git Gateway.
