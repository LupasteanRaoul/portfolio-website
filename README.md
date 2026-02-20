<div align="center">

# 🚀 Lupăștean Raoul — Portfolio 2026

**Aspiring Full-Stack Developer** | React • Python • FastAPI • MongoDB

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Viziteaz%C4%83_Site-000?style=for-the-badge&logo=vercel&logoColor=white)](https://lupastean-raoul-cv.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/raul-lupastean-a66705244/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/LupasteanRaoul)

<img src="https://raw.githubusercontent.com/LupasteanRaoul/portfolio-website/main/public/preview.png" alt="Previzualizare site" width="100%">

</div>

---

## ⚡ Overview

A cutting-edge, performance-optimized portfolio showcasing **50+ projects**, **9 certifications**, and a unique blend of **technical expertise** and **business acumen**. Built with modern technologies and featuring stunning animations, this portfolio represents the pinnacle of web development in 2026.

### ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🌐 **Bilingual Support** | Full RO/EN translation with real-time language switching |
| 🎨 **GSAP Animations** | Smooth scroll-triggered reveals, parallax effects, and micro-interactions |
| 📊 **Interactive Canvas** | Custom-built tech universe visualization with WebGL-like performance |
| 📱 **Fully Responsive** | Pixel-perfect on all devices from mobile to 4K displays |
| ⚡ **Performance First** | 95+ Lighthouse score, optimized bundle size, lazy loading |
| 🎯 **Accessibility** | WCAG 2.1 compliant, keyboard navigation, screen reader friendly |

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=black)

### Backend & Database
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)

### Tools & Deployment
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

</div>

---

## 📁 Project Structure

```
lupastean-raoul-portfolio/
├── public/
│   ├── Lupastean_Raoul_CV_RO.pdf    # CV in Romanian
│   ├── Lupastean_Raoul_CV_EN.pdf    # CV in English
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx               # Navigation with language toggle
│   │   ├── HeroSection.jsx          # Animated hero with stats
│   │   ├── AboutSection.jsx         # Personal info & languages
│   │   ├── ExperienceSection.jsx    # Work history & education
│   │   ├── SkillsSection.jsx        # Technical skills grid
│   │   ├── ProjectsSection.jsx      # Portfolio showcase
│   │   ├── CertificationsSection.jsx # Certifications display
│   │   ├── ContactSection.jsx       # Contact information
│   │   ├── ParallaxReveal.jsx       # Scroll-triggered parallax
│   │   ├── ScrollSequence.jsx       # Interactive canvas animation
│   │   ├── InfiniteMarquee.jsx      # Skills marquee animation
│   │   ├── CVModal.jsx              # CV download modal
│   │   └── Footer.jsx               # Footer component
│   ├── context/
│   │   └── LanguageContext.js       # i18n context provider
│   ├── data/
│   │   ├── translations.js          # RO/EN translations
│   │   └── mock.js                  # Legacy data (deprecated)
│   ├── App.js                       # Main application
│   ├── App.css                      # Global styles & animations
│   └── index.js                     # Entry point
├── tailwind.config.js               # Tailwind configuration
├── package.json                     # Dependencies
└── README.md                        # You are here
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/LupasteanRaoul/lupastean-raoul-portfolio.git

# Navigate to project directory
cd lupastean-raoul-portfolio

# Install dependencies
npm install
# or
yarn install

# Start development server
npm start
# or
yarn start
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
```

---

## 🌐 Internationalization (i18n)

The portfolio supports **Romanian** and **English** with a seamless language toggle:

```javascript
// Using translations in components
import { useLanguage } from '../context/LanguageContext';

const MyComponent = () => {
  const { t, personalInfo, language, toggleLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t.experienceTitle}</h1>
      <p>{personalInfo.description}</p>
      <button onClick={toggleLanguage}>
        {language === 'ro' ? '🇬🇧 EN' : '🇷🇴 RO'}
      </button>
    </div>
  );
};
```

### Translation Structure

| Key | Romanian | English |
|-----|----------|---------|
| `available` | Disponibil pentru oportunități | Available for opportunities |
| `experienceTitle` | Experiență Profesională | Professional Experience |
| `projectsTitle` | Proiecte | Projects |
| `contactSubtitle` | Hai să construim ceva | Let's build something |

---

## 🎨 Design Philosophy

### Visual Identity
- **Color Palette**: Monochromatic with high contrast (Black #000, White #FFF, Gray gradients)
- **Typography**: Inter font family — clean, modern, highly legible
- **Spacing**: Generous whitespace for premium feel
- **Animations**: Purposeful micro-interactions that enhance UX

### Animation System
```javascript
// GSAP ScrollTrigger configuration
gsap.fromTo(element,
  { y: 60, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  }
);
```

---

## 📊 Performance Metrics

| Metric | Score |
|--------|-------|
| ⚡ Performance | 95+ |
| ♿ Accessibility | 100 |
| 🔍 SEO | 100 |
| ✅ Best Practices | 100 |

### Optimizations Applied
- [x] Code splitting with React.lazy
- [x] Image lazy loading
- [x] CSS purging with Tailwind
- [x] GZIP compression
- [x] Efficient GSAP animations
- [x] Canvas optimization with requestAnimationFrame

---

## 📜 Certifications

### FreeCodeCamp (9 Certificates)
- Responsive Web Design (v9)
- JavaScript Algorithms & Data Structures (v9)
- Scientific Computing with Python
- Relational Databases (v9)
- Foundational C# with Microsoft
- B1 English for Developers
- A2 English for Developers
- Responsive Web Design (Legacy)
- Relational Database (v8)

### Professional
- Google Digital Marketing (2022)
- Frontend Developer — Frontend Simplified (2022)
- EF SET English Certificate

---

## 🔗 Featured Projects

| Project | Description | Tech Stack |
|---------|-------------|------------|
| [TaskFlow](https://task-manager-gamma-taupe-32.vercel.app) | Full-stack task management with Kanban board | React, FastAPI, MongoDB, JWT |
| [CSS Portfolio](https://lupasteanraoul.github.io/my-css-projects/) | 6 projects showcasing modern CSS | HTML5, CSS3, JavaScript |
| [JavaScript Portfolio](https://lupasteanraoul.github.io/javascript-portfolio/) | Interactive apps with ES6+ | JavaScript, APIs, Async/Await |
| [Frontend Projects](https://lupasteanraoul.github.io/my-frontend-projects/) | React applications | React, TypeScript |
| [Python Projects](https://lupasteanraoul.github.io/python-projects/) | Backend & automation | Python, Algorithms |
| [SQL Portfolio](https://github.com/LupasteanRaoul/sql-database-portfolio) | Database design & queries | SQL, PostgreSQL |

---

## 📞 Contact

<div align="center">

| Channel | Link |
|---------|------|
| 📧 Email | [lupasteanraoul@gmail.com](mailto:lupasteanraoul@gmail.com) |
| 💼 LinkedIn | [raul-lupastean](https://www.linkedin.com/in/raul-lupastean-a66705244/) |
| 🐙 GitHub | [LupasteanRaoul](https://github.com/LupasteanRaoul) |
| 📍 Location | Timișoara, România |
| 📱 Phone | +40 745 766 431 |

</div>

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ and ☕ by Lupăștean Raoul**

*Acest proiect este în continuă evoluție, la fel ca și parcursul meu profesional. Feedback-ul și sugestiile sunt întotdeauna binevenite!*

*"Building modern web experiences with passion and precision"*

© 2026 All Rights Reserved

</div>
