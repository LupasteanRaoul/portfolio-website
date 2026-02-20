export const translations = {
  ro: {
    // Header
    navItems: [
      { label: "Despre", href: "#about" },
      { label: "Experiență", href: "#experience" },
      { label: "Competențe", href: "#skills" },
      { label: "Proiecte", href: "#projects" },
      { label: "Certificări", href: "#certifications" },
      { label: "Contact", href: "#contact" }
    ],
    contact: "Contact",
    
    // Hero
    available: "Disponibil pentru oportunități",
    hello: "Salut, sunt",
    downloadCV: "Descarcă CV",
    viewProjects: "Vezi Proiecte",
    scroll: "Derulează",
    
    // About
    aboutTitle: "Despre Mine",
    aboutSubtitle: "O combinație unică de",
    technicalSkills: "competențe tehnice",
    and: "și",
    businessVision: "viziune business",
    aboutParagraph1: "Sunt un developer la început de drum în tech, cu un Master în Marketing și experiență ca Manager de Vânzări. Aduc o perspectivă unică în dezvoltarea software — înțeleg atât codul cât și utilizatorul.",
    aboutParagraph2: "Am construit peste 50 de proiecte, obținut 9 certificări FreeCodeCamp, dezvoltat 5 portfolio-uri comprehensive și o aplicație full-stack. Sunt pasionat de tehnologie, învățare continuă și construirea de experiențe web elegante.",
    personalDetails: "Date Personale",
    birthDate: "Data nașterii",
    nationality: "Naționalitate",
    drivingLicense: "Permis conducere",
    languages: "Limbi",
    
    // Experience
    experienceTitle: "Experiență Profesională",
    experienceSubtitle: "Unde am lucrat",
    educationTitle: "Educație",
    grade: "Nota",
    
    // Skills
    skillsTitle: "Competențe Tehnice",
    skillsSubtitle: "Expertiză tehnică",
    skillCategories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Baze de Date",
      tools: "Instrumente Developer & Platforme",
      business: "Business & Analytics"
    },
    
    // Projects
    projectsTitle: "Proiecte",
    projectsSubtitle: "Lucrări selectate",
    projectsDescription: "TaskFlow (Full-Stack) + 5 portfolio-uri comprehensive cu peste 50 de proiecte",
    liveDemo: "Demo Live",
    viewCode: "Vezi Codul",
    
    // Certifications
    certificationsTitle: "Certificări",
    certificationsSubtitle: "Învățare continuă",
    viewAllCertificates: "Vezi toate certificatele",
    
    // Contact
    contactTitle: "Contact",
    contactSubtitle: "Hai să construim ceva",
    contactSubtitleHighlight: "împreună",
    email: "Email",
    phone: "Telefon",
    location: "Locație",
    
    // Footer
    footerRights: "Toate drepturile rezervate",
    footerBuiltWith: "Construit cu React, GSAP & pasiune",
    
    // CV Modal
    selectCVLanguage: "Selectează limba CV-ului",
    downloadRO: "Descarcă CV - Română",
    downloadEN: "Descarcă CV - Engleză",
    cancel: "Anulează",

    // Parallax Reveal
    parallaxLine1: "Pasiunea întâlnește",
    parallaxLine2: "precizia.",
    parallaxDescription: "Fiecare proiect este o oportunitate de a crea ceva remarcabil. De la concept la cod, fiecare detaliu contează.",

    // Scroll Sequence
    scrollSequenceLabel: "Vizualizare interactivă",
    scrollSequenceTitle: "Universul Meu Tech",
    scrollSequenceDescription: "Scroll în cadrul acestei componente pentru a explora o vizualizare interactivă a skill-urilor mele tehnice.",
    scrollSequenceHint: "Scroll în interior",
    scrollSequenceCenterText: "Full-Stack Developer",
    scrollSequenceStats: "50+ Proiecte  •  9 Certificate  •  5 Portofolii",

    // Stats
    stats: [
      { number: "5", label: "Portofolii" },
      { number: "50+", label: "Proiecte" },
      { number: "9", label: "Certificate" },
      { number: "3", label: "Limbi" }
    ],

    // Experience data
    experience: [
      {
        id: 1,
        role: "Coordonator Logistic",
        company: "ZKW Group",
        location: "Wieselburg, Austria",
        period: "Mai 2023 — Iul. 2025",
        description: [
          "Coordonare operațiuni supply chain internațional în industria automotive, optimizând sincronizarea dintre planificarea producției și livrare, crescând rata on-time delivery cu 25%",
          "Colaborare cu echipe cross-funcționale pentru analizarea fluxurilor operaționale, identificarea riscurilor și prevenirea întreruperilor de proces",
          "Utilizare și optimizare sisteme software enterprise pentru monitorizare inventar și transport în timp real, contribuind la automatizarea raportării și reducerea introducerii manuale a datelor cu 35%",
          "Tranziție către dezvoltare software aplicând abordare orientată spre eficiență, automatizare și soluții scalabile"
        ]
      },
      {
        id: 2,
        role: "Manager Vânzări",
        company: "OVB Allfinanz",
        location: "Timișoara, România",
        period: "Sept. 2020 — Mar. 2023",
        description: [
          "Aplicare analiză de date și automatizare pentru optimizarea proceselor comerciale, utilizând Microsoft Power Platform (Power BI, Power Query, Power Automate)",
          "Proiectare și implementare dashboard-uri automatizate și soluții BI în Excel (macro-uri, formule complexe, modelare date), reducând timpul de raportare cu 40%",
          "Leadership pentru echipă de 10+ membri, introducând metodologii agile pentru tracking KPI și optimizare performanță",
          "Avansare rapidă de la Consultant la Group Manager în 6 luni, pe baza rezultatelor cuantificabile și a impactului organizațional"
        ]
      }
    ],

    // Education data
    education: [
      {
        id: 1,
        degree: "Master — Marketing și Managementul Vânzărilor",
        institution: "Universitatea de Vest din Timișoara",
        period: "2020 — 2022",
        grade: "10.00"
      },
      {
        id: 2,
        degree: "Licență — Marketing",
        institution: "Universitatea de Vest din Timișoara",
        period: "2017 — 2020",
        grade: "8.83"
      }
    ],

    // Projects data
    projects: [
      {
        id: 1,
        num: "01",
        title: "CSS Projects Portfolio",
        description: "6 proiecte demonstrând CSS modern, responsive design și principii UI/UX",
        tech: ["HTML5", "CSS3", "JavaScript"],
        liveUrl: "https://lupasteanraoul.github.io/my-css-projects/",
        githubUrl: "https://github.com/LupasteanRaoul/my-css-projects"
      },
      {
        id: 2,
        num: "02",
        title: "JavaScript Portfolio",
        description: "Aplicații interactive cu DOM manipulation, ES6+, async programming și APIs",
        tech: ["JavaScript", "APIs", "Async/Await"],
        liveUrl: "https://lupasteanraoul.github.io/javascript-portfolio/",
        githubUrl: "https://github.com/LupasteanRaoul/javascript-portfolio"
      },
      {
        id: 3,
        num: "03",
        title: "Frontend Projects",
        description: "Aplicații React cu TypeScript, componente UI moderne și state management",
        tech: ["React", "TypeScript", "Components"],
        liveUrl: "https://lupasteanraoul.github.io/my-frontend-projects/",
        githubUrl: "https://github.com/LupasteanRaoul/my-frontend-projects"
      },
      {
        id: 4,
        num: "04",
        title: "Python Projects",
        description: "Backend scripts, automatizare, procesare date și implementări de algoritmi",
        tech: ["Python", "Algorithms", "Backend"],
        liveUrl: "https://lupasteanraoul.github.io/python-projects/",
        githubUrl: "https://github.com/LupasteanRaoul/python-projects"
      },
      {
        id: 5,
        num: "05",
        title: "SQL Database Portfolio",
        description: "Database design, query-uri complexe, scheme și managementul datelor relaționale",
        tech: ["SQL", "PostgreSQL", "Design"],
        githubUrl: "https://github.com/LupasteanRaoul/sql-database-portfolio"
      },
      {
        id: 6,
        num: "06",
        title: "TaskFlow - Task Management Platform",
        description: "Full-stack task management cu React, FastAPI, MongoDB. Kanban board, JWT auth, dashboard analytics",
        tech: ["React", "FastAPI", "MongoDB", "JWT"],
        liveUrl: "https://task-manager-gamma-taupe-32.vercel.app",
        githubUrl: "https://github.com/LupasteanRaoul/task-manager"
      }
    ],

    // Certifications data
    certifications: [
      {
        id: 1,
        category: "FreeCodeCamp",
        items: [
          "Responsive Web Design (v9)",
          "JavaScript Algorithms & Data Structures (v9)",
          "Scientific Computing with Python",
          "Relational Databases (v9)",
          "Foundational C# with Microsoft",
          "B1 English for Developers",
          "A2 English for Developers",
          "Responsive Web Design (Legacy)",
          "Relational Database (v8)"
        ],
        link: "https://www.freecodecamp.org/lupastean"
      },
      {
        id: 2,
        category: "Certificate Profesionale",
        items: [
          "Google Digital Marketing (2022)",
          "Frontend Developer — Frontend Simplified (2022)",
          "EF SET English Certificate"
        ]
      }
    ]
  },
  
  en: {
    // Header
    navItems: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Certifications", href: "#certifications" },
      { label: "Contact", href: "#contact" }
    ],
    contact: "Contact",
    
    // Hero
    available: "Available for opportunities",
    hello: "Hello, I'm",
    downloadCV: "Download CV",
    viewProjects: "View Projects",
    scroll: "Scroll",
    
    // About
    aboutTitle: "About Me",
    aboutSubtitle: "A unique combination of",
    technicalSkills: "technical skills",
    and: "and",
    businessVision: "business vision",
    aboutParagraph1: "I'm a developer at the beginning of my tech journey, with a Master's in Marketing and experience as a Sales Manager. I bring a unique perspective to software development — I understand both the code and the user.",
    aboutParagraph2: "I've built over 50 projects, earned 9 FreeCodeCamp certifications, developed 5 comprehensive portfolios and a full-stack application. I'm passionate about technology, continuous learning and building elegant web experiences.",
    personalDetails: "Personal Details",
    birthDate: "Birth Date",
    nationality: "Nationality",
    drivingLicense: "Driving License",
    languages: "Languages",
    
    // Experience
    experienceTitle: "Professional Experience",
    experienceSubtitle: "Where I've worked",
    educationTitle: "Education",
    grade: "Grade",
    
    // Skills
    skillsTitle: "Technical Skills",
    skillsSubtitle: "Technical expertise",
    skillCategories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Developer Tools & Platforms",
      business: "Business & Analytics"
    },
    
    // Projects
    projectsTitle: "Projects",
    projectsSubtitle: "Featured work",
    projectsDescription: "TaskFlow (Full-Stack) + 5 comprehensive portfolios with over 50 projects",
    liveDemo: "Live Demo",
    viewCode: "View Code",
    
    // Certifications
    certificationsTitle: "Certifications",
    certificationsSubtitle: "Continuous learning",
    viewAllCertificates: "View all certificates",
    
    // Contact
    contactTitle: "Contact",
    contactSubtitle: "Let's build something",
    contactSubtitleHighlight: "together",
    email: "Email",
    phone: "Phone",
    location: "Location",
    
    // Footer
    footerRights: "All rights reserved",
    footerBuiltWith: "Built with React, GSAP & passion",
    
    // CV Modal
    selectCVLanguage: "Select CV language",
    downloadRO: "Download CV - Romanian",
    downloadEN: "Download CV - English",
    cancel: "Cancel",

    // Parallax Reveal
    parallaxLine1: "Passion meets",
    parallaxLine2: "precision.",
    parallaxDescription: "Every project is an opportunity to create something remarkable. From concept to code, every detail matters.",

    // Scroll Sequence
    scrollSequenceLabel: "Interactive visualization",
    scrollSequenceTitle: "My Tech Universe",
    scrollSequenceDescription: "Scroll inside this component to explore an interactive visualization of my technical skills.",
    scrollSequenceHint: "Scroll down inside",
    scrollSequenceCenterText: "Full-Stack Developer",
    scrollSequenceStats: "50+ Projects  •  9 Certificates  •  5 Portfolios",

    // Stats
    stats: [
      { number: "5", label: "Portfolios" },
      { number: "50+", label: "Projects" },
      { number: "9", label: "Certificates" },
      { number: "3", label: "Languages" }
    ],

    // Experience data
    experience: [
      {
        id: 1,
        role: "Logistics Coordinator",
        company: "ZKW Group",
        location: "Wieselburg, Austria",
        period: "May 2023 — Jul. 2025",
        description: [
          "Coordinated international supply chain operations in the automotive industry, optimizing synchronization between production planning and delivery, increasing on-time delivery rate by 25%",
          "Collaborated with cross-functional teams to analyze operational flows, identify risks and prevent process disruptions",
          "Used and optimized enterprise software systems for real-time inventory and transport monitoring, contributing to reporting automation and reducing manual data entry by 35%",
          "Transitioning to software development applying an approach oriented towards efficiency, automation and scalable solutions"
        ]
      },
      {
        id: 2,
        role: "Sales Manager",
        company: "OVB Allfinanz",
        location: "Timișoara, Romania",
        period: "Sept. 2020 — Mar. 2023",
        description: [
          "Applied data analysis and automation to optimize commercial processes, using Microsoft Power Platform (Power BI, Power Query, Power Automate)",
          "Designed and implemented automated dashboards and BI solutions in Excel (macros, complex formulas, data modeling), reducing reporting time by 40%",
          "Led a team of 10+ members, introducing agile methodologies for KPI tracking and performance optimization",
          "Rapid advancement from Consultant to Group Manager in 6 months, based on quantifiable results and organizational impact"
        ]
      }
    ],

    // Education data
    education: [
      {
        id: 1,
        degree: "Master — Marketing and Sales Management",
        institution: "West University of Timișoara",
        period: "2020 — 2022",
        grade: "10.00"
      },
      {
        id: 2,
        degree: "Bachelor — Marketing",
        institution: "West University of Timișoara",
        period: "2017 — 2020",
        grade: "8.83"
      }
    ],

    // Projects data
    projects: [
      {
        id: 1,
        num: "01",
        title: "CSS Projects Portfolio",
        description: "6 projects demonstrating modern CSS, responsive design and UI/UX principles",
        tech: ["HTML5", "CSS3", "JavaScript"],
        liveUrl: "https://lupasteanraoul.github.io/my-css-projects/",
        githubUrl: "https://github.com/LupasteanRaoul/my-css-projects"
      },
      {
        id: 2,
        num: "02",
        title: "JavaScript Portfolio",
        description: "Interactive applications with DOM manipulation, ES6+, async programming and APIs",
        tech: ["JavaScript", "APIs", "Async/Await"],
        liveUrl: "https://lupasteanraoul.github.io/javascript-portfolio/",
        githubUrl: "https://github.com/LupasteanRaoul/javascript-portfolio"
      },
      {
        id: 3,
        num: "03",
        title: "Frontend Projects",
        description: "React applications with TypeScript, modern UI components and state management",
        tech: ["React", "TypeScript", "Components"],
        liveUrl: "https://lupasteanraoul.github.io/my-frontend-projects/",
        githubUrl: "https://github.com/LupasteanRaoul/my-frontend-projects"
      },
      {
        id: 4,
        num: "04",
        title: "Python Projects",
        description: "Backend scripts, automation, data processing and algorithm implementations",
        tech: ["Python", "Algorithms", "Backend"],
        liveUrl: "https://lupasteanraoul.github.io/python-projects/",
        githubUrl: "https://github.com/LupasteanRaoul/python-projects"
      },
      {
        id: 5,
        num: "05",
        title: "SQL Database Portfolio",
        description: "Database design, complex queries, schemas and relational data management",
        tech: ["SQL", "PostgreSQL", "Design"],
        githubUrl: "https://github.com/LupasteanRaoul/sql-database-portfolio"
      },
      {
        id: 6,
        num: "06",
        title: "TaskFlow - Task Management Platform",
        description: "Full-stack task management with React, FastAPI, MongoDB. Kanban board, JWT auth, dashboard analytics",
        tech: ["React", "FastAPI", "MongoDB", "JWT"],
        liveUrl: "https://task-manager-gamma-taupe-32.vercel.app",
        githubUrl: "https://github.com/LupasteanRaoul/task-manager"
      }
    ],

    // Certifications data
    certifications: [
      {
        id: 1,
        category: "FreeCodeCamp",
        items: [
          "Responsive Web Design (v9)",
          "JavaScript Algorithms & Data Structures (v9)",
          "Scientific Computing with Python",
          "Relational Databases (v9)",
          "Foundational C# with Microsoft",
          "B1 English for Developers",
          "A2 English for Developers",
          "Responsive Web Design (Legacy)",
          "Relational Database (v8)"
        ],
        link: "https://www.freecodecamp.org/lupastean"
      },
      {
        id: 2,
        category: "Professional Certificates",
        items: [
          "Google Digital Marketing (2022)",
          "Frontend Developer — Frontend Simplified (2022)",
          "EF SET English Certificate"
        ]
      }
    ]
  }
};

// Personal info in both languages
export const personalInfoTranslated = {
  ro: {
    name: "Lupăștean Raoul",
    title: "Junior Developer",
    tagline: "Construiesc experiențe web moderne cu pasiune și precizie",
    description: "Aspiring Full-Stack Developer cu o combinație unică de competențe tehnice și experiență în business. Am construit peste 50 de proiecte, am obținut 9 certificări FreeCodeCamp și transform idei complexe în aplicații web elegante.",
    email: "lupasteanraoul@gmail.com",
    phone: "+40 745 766 431",
    location: "Timișoara, România",
    github: "https://github.com/LupasteanRaoul",
    linkedin: "https://www.linkedin.com/in/raul-lupastean-a66705244/",
    birthDate: "22.05.1998",
    nationality: "Român",
    drivingLicense: "Categoria A/B",
    languages: [
      { name: "Română", level: "Nativ" },
      { name: "Engleză", level: "Fluent" },
      { name: "Germană", level: "De bază" }
    ]
  },
  en: {
    name: "Lupăștean Raoul",
    title: "Junior Developer",
    tagline: "Building modern web experiences with passion and precision",
    description: "Aspiring Full-Stack Developer with a unique combination of technical skills and business experience. I've built over 50 projects, earned 9 FreeCodeCamp certifications and transform complex ideas into elegant web applications.",
    email: "lupasteanraoul@gmail.com",
    phone: "+40 745 766 431",
    location: "Timișoara, Romania",
    github: "https://github.com/LupasteanRaoul",
    linkedin: "https://www.linkedin.com/in/raul-lupastean-a66705244/",
    birthDate: "22.05.1998",
    nationality: "Romanian",
    drivingLicense: "Category A/B",
    languages: [
      { name: "Romanian", level: "Native" },
      { name: "English", level: "Fluent" },
      { name: "German", level: "Basic" }
    ]
  }
};

// Skills (same in both languages - technical terms)
export const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript ES6+", "React", "TypeScript", "Responsive Design", "Tailwind CSS", "React 19", "React Router v7", "Radix UI", "Recharts", "Zod", "Axios"],
  backend: ["Python", "Node.js", "FastAPI", "Express", "Uvicorn", "Pydantic", "JWT", "bcrypt", "Bash"],
  tools: ["Git", "GitHub (Actions)", "VS Code", "Vercel", "Render", "npm/yarn", "Postman", "Docker (basic)", "CI/CD", "CORS", "Environment Variables"],
  database: ["MongoDB (Motor)", "PostgreSQL", "SQL", "Database Design"],
  business: ["Power BI", "Power Automate", "Advanced Excel", "Leadership (10+ members)", "Agile", "Data Analysis", "KPI Tracking", "Google Analytics", "SEO", "Google Ads", "CRM"]
};

export const skillsMarquee = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React 19", "Python", "Node.js",
  "FastAPI", "MongoDB", "PostgreSQL", "SQL", "Git", "Tailwind CSS", "Power BI",
  "REST APIs", "JWT", "Docker", "CI/CD", "Vercel", "Render"
];
