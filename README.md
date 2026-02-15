# Lupăștean Raoul — Developer Portfolio

Landing page personal pentru CV, construit cu React, Tailwind CSS și GSAP.

## Features

- Design minimalist Apple-style (negru/alb)
- Animații GSAP cu ScrollTrigger
- Vizualizare interactivă pe canvas (constelație tech skills, controlată de scroll)
- Secțiune parallax cu text pinned
- Infinite marquee pentru skill-uri
- Carduri 3D cu efect tilt pe hover
- Efect shiny pe text (Apple-style)
- CV PDF descărcabil
- Fully responsive

## Quick Start

```bash
npm install
npm start
```

Sau cu yarn:

```bash
yarn install
yarn start
```

Deschide [http://localhost:3000](http://localhost:3000) în browser.

## Build & Deploy

```bash
npm run build
```

Folder-ul `build/` poate fi deploiat pe:
- **Vercel**: `vercel --prod`
- **Netlify**: drag & drop build/
- **GitHub Pages**: `npm install gh-pages`, adaugă script deploy

## Tech Stack

- React 19
- Tailwind CSS 3
- GSAP 3 (ScrollTrigger)
- Lucide React Icons
- Canvas API

## Structură

```
src/
  components/     # Toate componentele (Header, Hero, About, etc.)
  data/mock.js    # Datele CV-ului (editează aici)
  App.js          # Layout principal
  App.css         # Stiluri custom (shiny text, scrollbar)
  index.css       # Tailwind base + CSS variables
public/
  Lupastean_Raoul_CV_2026.pdf   # CV-ul PDF
```

## Personalizare

Editează `src/data/mock.js` pentru a modifica:
- Informații personale
- Experiență de lucru
- Educație
- Skill-uri
- Proiecte
- Certificări

---

© 2026 Lupăștean Raoul
