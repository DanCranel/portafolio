export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      resume: "CV",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Desarrollador Web",
      student: "Estudiante de Ingeniería en Software · Universidad Politécnica Salesiana",
      tagline:
        "Construyo aplicaciones web reales, rápidas y accesibles con Next.js, React y TypeScript, con bases sólidas en programación orientada a objetos y estructuras de datos.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contáctame",
      available: "Disponible para trabajar",
      basedIn: "Cuenca, Ecuador",
    },
    about: {
      title: "Sobre mí",
      kicker: "Quién soy",
      p1: "Soy Daniel Morales, desarrollador de software apasionado por transformar ideas en productos digitales útiles. Me enfoco en el desarrollo web moderno con el ecosistema de React y Next.js, cuidando el rendimiento, la accesibilidad y una experiencia de usuario impecable.",
      p2: "He entregado aplicaciones reales en producción: desde un sitio bilingüe para un centro psicopedagógico hasta un sistema de facturación para juntas de agua rurales. Además, tengo una base fuerte en Java y programación orientada a objetos, lo que me permite razonar con claridad sobre la lógica y las estructuras de datos.",
      p3: "Aprendo rápido, me gusta el trabajo bien hecho y busco unirme a un equipo donde pueda crecer y aportar valor desde el primer día.",
      stat1: "Apps en producción",
      stat2: "Proyectos en GitHub",
      stat3: "Tecnologías dominadas",
    },
    experience: {
      title: "Experiencia",
      kicker: "Mi trayectoria",
      current: "Actual",
    },
    skills: {
      title: "Habilidades",
      kicker: "Lo que uso",
      frontend: "Frontend",
      backend: "Backend y Datos",
      tools: "Herramientas y Bases",
    },
    projects: {
      title: "Proyectos",
      kicker: "Mi trabajo",
      subtitle:
        "Una selección de proyectos reales y académicos. Cada uno con su código en GitHub y, cuando aplica, una demo en vivo.",
      featured: "Destacado",
      live: "Ver demo",
      code: "Código",
      viewAll: "Ver todos en GitHub",
    },
    contact: {
      title: "Trabajemos juntos",
      kicker: "Contacto",
      subtitle:
        "¿Tienes una oportunidad o proyecto en mente? Estoy abierto a ofertas de trabajo y colaboraciones. Escríbeme por el canal que prefieras.",
      emailBtn: "Enviar email",
      whatsappBtn: "WhatsApp",
      linkedinBtn: "LinkedIn",
      githubBtn: "GitHub",
      copy: "Copiar",
      copied: "¡Copiado!",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      built: "Hecho con Next.js y Tailwind CSS",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Web Developer",
      student: "Software Engineering student · Universidad Politécnica Salesiana",
      tagline:
        "I build real, fast and accessible web applications with Next.js, React and TypeScript, backed by solid fundamentals in object-oriented programming and data structures.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      available: "Available for work",
      basedIn: "Cuenca, Ecuador",
    },
    about: {
      title: "About me",
      kicker: "Who I am",
      p1: "I'm Daniel Morales, a software developer passionate about turning ideas into useful digital products. I focus on modern web development with the React and Next.js ecosystem, caring about performance, accessibility and a flawless user experience.",
      p2: "I've shipped real applications to production: from a bilingual website for an educational psychology center to a billing system for rural water cooperatives. I also have a strong foundation in Java and object-oriented programming, which lets me reason clearly about logic and data structures.",
      p3: "I learn fast, I care about doing things well, and I'm looking to join a team where I can grow and add value from day one.",
      stat1: "Apps in production",
      stat2: "Projects on GitHub",
      stat3: "Technologies mastered",
    },
    experience: {
      title: "Experience",
      kicker: "My track record",
      current: "Current",
    },
    skills: {
      title: "Skills",
      kicker: "What I use",
      frontend: "Frontend",
      backend: "Backend & Data",
      tools: "Tools & Fundamentals",
    },
    projects: {
      title: "Projects",
      kicker: "My work",
      subtitle:
        "A selection of real-world and academic projects. Each one with its code on GitHub and, where available, a live demo.",
      featured: "Featured",
      live: "Live demo",
      code: "Code",
      viewAll: "See all on GitHub",
    },
    contact: {
      title: "Let's work together",
      kicker: "Contact",
      subtitle:
        "Have an opportunity or a project in mind? I'm open to job offers and collaborations. Reach me through whichever channel you prefer.",
      emailBtn: "Send email",
      whatsappBtn: "WhatsApp",
      linkedinBtn: "LinkedIn",
      githubBtn: "GitHub",
      copy: "Copy",
      copied: "Copied!",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with Next.js & Tailwind CSS",
    },
  },
} as const;

type Base = (typeof translations)["es"];

// Widen the literal string values so both languages share one structural type.
export type Dictionary = {
  [Section in keyof Base]: {
    [Key in keyof Base[Section]]: string;
  };
};
