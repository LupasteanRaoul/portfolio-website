export const personalInfo = {
  name: "Lupăștean Raoul",
  title: "Junior Developer",
  tagline: "Building modern web experiences with passion and precision",
  description: "Aspiring Full-Stack Developer cu o combinație unică de competențe tehnice și experiență în business. Am construit peste 50 de proiecte, am obținut 8 certificări FreeCodeCamp și transform idei complexe în aplicații web elegante.",
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
};

export const stats = [
  { number: "5", label: "Portfolios" },
  { number: "50+", label: "Projects" },
  { number: "8", label: "Certificates" },
  { number: "3", label: "Languages" }
];

export const experience = [
  {
    id: 1,
    role: "Coordonator Logistic",
    company: "ZKW Group",
    location: "Wieselburg, Austria",
    period: "Mai 2023 — Iul. 2025",
    description: [
      "Coordonat activitățile de transport intern și extern, optimizând fluxul de livrare și producție",
      "Analizat procesele de producție pentru anticiparea nevoilor de materiale și prevenirea întârzierilor",
      "Colaborare constantă cu furnizorii pentru gestionarea eficientă a comenzilor",
      "Implementat soluții logistice care au redus timpul de livrare și crescut eficiența operațională"
    ]
  },
  {
    id: 2,
    role: "Manager Vânzări",
    company: "OVB Allfinanz",
    location: "Timișoara, România",
    period: "Sept. 2020 — Mar. 2023",
    description: [
      "Coordonat o echipă de peste 10 membri, asigurând atingerea obiectivelor lunare",
      "Promovat din consultant în Manager de Grup în doar 6 luni",
      "Recunoscut lunar ca 'Best Seller of the Month'",
      "Utilizat avansat instrumente Microsoft și Google pentru automatizarea raportărilor",
      "Dezvoltat competențe Front-End Development (HTML, CSS, JavaScript)"
    ]
  }
];

export const education = [
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
];

export const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript ES6+", "React", "TypeScript", "Responsive Design", "Tailwind CSS"],
  backend: ["Python", "SQL", "PostgreSQL", "C#", "Node.js", "Database Design"],
  tools: ["Git & GitHub", "VS Code", "Power BI", "Excel Advanced", "Power Automate", "SharePoint"],
  marketing: ["Google Ads", "SEO", "Analytics", "Digital Marketing", "CRM"]
};

export const skillsMarquee = [
  "HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Python", "SQL",
  "PostgreSQL", "C#", "Git", "Node.js", "Tailwind CSS", "Power BI",
  "REST APIs", "Responsive Design", "GSAP", "Figma"
];

export const projects = [
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
  }
];

export const certifications = [
  {
    id: 1,
    category: "FreeCodeCamp",
    items: [
      "Responsive Web Design (v9)",
      "JavaScript Algorithms & Data Structures (v9)",
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
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" }
];
