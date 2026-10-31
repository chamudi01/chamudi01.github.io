# Chamudi Bhawanthi — Static Portfolio

A responsive, GitHub Pages-ready portfolio built with **HTML, CSS and vanilla JavaScript**. No Node.js, npm, React, Vite or build step is required.

## Run locally

Open `index.html` in Chrome/Edge, or use the VS Code Live Server extension (right-click `index.html` → Open with Live Server).

## Customize

1. **Photo:** Put your real photo at `assets/profile.jpg` (JPEG format). Until then, the page displays a CB placeholder.
2. **CV:** Put your PDF at `assets/Chamudi_Bhawanthi_CV.pdf`. Until then, the Download CV button will not work.
3. **Project links:** Open `script.js`. For each project in the `projects` array, change `github: ''` to your real GitHub repository URL and `demo: ''` to a real live-demo URL if available. Empty links are not shown.
4. **Contact/profile details:** Edit `index.html` to change your phone, email, location, GitHub or LinkedIn URLs.
5. **Project descriptions:** Edit the project entries in `script.js`.
6. **Styling:** Edit `style.css`.

## Publish with GitHub Pages

If you have an existing clone of `chamudi01.github.io`:

1. **Back up** your old React project outside the repository, or commit it on a separate branch before replacing it.
2. Delete the old React/Vite site files from the clone (e.g., `src/`, `package.json`, `vite.config.js`, `dist/`, `node_modules/`, and any old deployment workflow). Do not delete the `.git` folder.
3. Copy `index.html`, `style.css`, `script.js`, `assets/`, and this `README.md` into the **root** of your cloned repository.
4. In GitHub, open repository **Settings → Pages**. Under **Build and deployment**, set **Source: Deploy from a branch**, **Branch: main**, **Folder: / (root)** and Save.
5. In the VS Code terminal inside the cloned repo:

```bash
git status
git add -A
git commit -m "Replace React portfolio with static HTML CSS JS site"
git push origin main
```

6. Wait a few minutes, then open **https://chamudi01.github.io/**.

### Troubleshooting

- Blank page or JSX MIME error: ensure the root `index.html` is the one in this package and that no `<script type="module" src="/src/main.jsx">` remains. Also ensure Pages is set to **Deploy from a branch**, not **GitHub Actions**.
- Missing CV/photo: check exact case-sensitive filenames in `assets/`.
- No project GitHub buttons: add real repository URLs in `script.js`.
- Old website still showing: allow deployment to finish and hard-refresh with Ctrl+Shift+R.

## Notes

- The portfolio uses Google Fonts when online and falls back to system fonts offline.
- The source does not contain your personal photograph or CV; add those yourself.
- Academic references are intentionally omitted from the public webpage for privacy.
