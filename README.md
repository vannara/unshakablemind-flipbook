# Unshakable Mind — HTML flipbook

Author: Vannara Loch  
Suggested live URL: `https://book.vannaraloch.online` or `https://unshakable.vannaraloch.online`

## Local preview

From this folder:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`. Click **Open the book** so the browser allows page-turn sound.

## Free hosting on your subdomain

This is a static site. No paid flipbook platform is required.

### Option A — Cloudflare Pages (recommended)

1. Create a free Cloudflare account.
2. Workers & Pages → Create → Pages → Upload assets.
3. Upload this entire folder.
4. In Cloudflare: Custom domains → add `book.vannaraloch.online`.
5. At your domain DNS, add:

```
Type: CNAME
Name: book
Target: <your-project>.pages.dev
Proxy: on
```

HTTPS is issued automatically.

### Option B — GitHub Pages

1. Create a public repo, push this folder to `/` or `/docs`.
2. Settings → Pages → Deploy from branch.
3. Add custom domain `book.vannaraloch.online`.
4. DNS CNAME: `book` → `youruser.github.io`

### Option C — Netlify Drop

Drag this folder onto [https://app.netlify.com/drop](https://app.netlify.com/drop), then attach the subdomain under Domain settings.

You already own `vannaraloch.online`, so the only cost is the domain you already pay for. Hosting the book on a subdomain can stay at $0.
