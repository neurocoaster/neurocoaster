# NeuroCoaster (React + Vite)

A React implementation of the "NeuroCoaster" action potential learning game, styled to match the provided HTML/CSS design.

## Quick start

```bash
npm install
npm run dev
```

Then open the URL Vite prints (e.g., http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy

```bash
npm run build
copy dist → docs (/docs folder should be a copy of /dist folder after build is run, plus 404.html file)
git commit
git push
```

## Notes
- Uses Font Awesome via CDN (see `index.html`).
- Single Player is wired; Multiplayer can reuse the same `Board` with turn logic.
