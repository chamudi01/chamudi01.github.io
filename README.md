# Chamudi Bhawanthi — Portfolio

A responsive, premium dark-themed personal portfolio built with **React + Vite**, custom CSS and Lucide icons. Includes project category filters, responsive navigation, achievements, skills, and a GitHub Pages deployment workflow.

## 1. Run locally

Install Node.js 20.19+ or 22.12+, then open a terminal in this folder:

```bash
npm install
npm run dev
```

Open the localhost address shown in the terminal.

## 2. Customize your details

**Edit `src/data.js`**:

- `profile.email`: your real contact email (currently blank; email buttons are hidden until set).
- `profile.github`, `profile.linkedin`: verify your public profile URLs.
- `profile.cvUrl`: set to `/Chamudi_Bhawanthi_CV.pdf` after putting that file in `public/`.
- `profile.portraitUrl`: set to `/profile.jpg` after adding your photo to `public/`.
- Each project's `github` and `demo`: fill in verified URLs. Empty values intentionally do not create broken links.
- Review all project descriptions, skills, metrics and achievements for accuracy and update as needed.

To change the appearance, edit `src/styles.css`. Update SEO title/description in `index.html`.

## 3. Build locally

```bash
npm run build
npm run preview
```

The production-ready site is generated in `dist/`.

## 4. Host free at https://chamudi01.github.io/

1. Sign into GitHub as `chamudi01`.
2. Create a **public, empty** repository named **`chamudi01.github.io`** (do not initialize it with README).
3. In this project directory run:

```bash
git init
git add .
git commit -m "Launch portfolio"
git branch -M main
git remote add origin https://github.com/chamudi01/chamudi01.github.io.git
git push -u origin main
```

4. Open your GitHub repository → **Settings** → **Pages** → **Build and deployment** → set **Source: GitHub Actions**.
5. Go to the **Actions** tab and verify that **Deploy portfolio to GitHub Pages** completes successfully. If you enabled Pages after the initial push and no deployment started, use Actions → Deploy portfolio to GitHub Pages → Run workflow, or push another commit.
6. Open **https://chamudi01.github.io/**. First publication may take a few minutes.

Every subsequent push to `main` triggers an automatic deployment:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

### Important deployment notes

- This project uses `base: '/'` in `vite.config.js`, which is correct for the **username.github.io** repository. If you publish in a different repository such as `portfolio`, change `base` to `'/portfolio/'` and use the corresponding project URL.
- This is a static website; no backend or paid hosting is required.
- Do not commit sensitive information, credentials, private datasets, or personal contact details you do not want publicly visible.
- If Git reports a remote already exists, use `git remote -v` to inspect it before changing anything.

## Project structure

```text
chamudi-portfolio/
├── .github/workflows/deploy.yml  # GitHub Pages CI/CD
├── public/favicon.svg
├── src/
│   ├── data.js                    # Profile, projects, skills, achievements
│   ├── main.jsx                   # React sections and interactions
│   └── styles.css                 # Responsive dark theme
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## License

Personal portfolio template. You may customize and publish it under your own account.

> Note: The build was not executed in the creation environment because npm registry access timed out. Run `npm install && npm run build` locally before publishing. The workflow uses `npm install` so a lockfile is not required.
