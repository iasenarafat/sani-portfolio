# Easin Sani — Portfolio

A single, dependency-free static site: `index.html`, `style.css`, `script.js`, `assets/profile.jpg`.

## Run locally
Just open `index.html` in a browser, or serve it:
```
python3 -m http.server 8000
```

## Deploy (free) — pick one

### GitHub Pages
1. Create a repo (e.g. `sani-portfolio`) and push these files to the `main` branch.
2. Repo → Settings → Pages → Source: `main` branch, `/ (root)`.
3. Your site goes live at `https://<username>.github.io/sani-portfolio/`.
4. For `sani.dev.bd`: add a file named `CNAME` containing `sani.dev.bd` to the repo root, then in your domain's DNS add a `CNAME` record pointing to `<username>.github.io`.

### Netlify
1. Drag the project folder into Netlify's "Deploy manually" drop zone, or connect the GitHub repo.
2. Site settings → Domain management → Add custom domain → `sani.dev.bd`.
3. Point your domain's DNS (A/CNAME per Netlify's instructions) at Netlify.

### Vercel
1. `vercel` CLI or import the GitHub repo on vercel.com.
2. Project → Settings → Domains → add `sani.dev.bd`.
3. Update DNS as Vercel instructs.

## Editing content
- Text/links: edit `index.html` directly (sections are clearly commented: Hero, About, Education, Skills, Projects, Contact).
- Colors/fonts: edit the `:root` variables at the top of `style.css`.
- Photo: replace `assets/profile.jpg` with a new image of the same name, or update the `src` in `index.html`.
