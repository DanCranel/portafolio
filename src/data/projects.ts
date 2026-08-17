import type { Lang } from "@/i18n/translations";

export type Project = {
  slug: string;
  title: string;
  featured: boolean;
  tags: string[];
  repo?: string;
  live?: string;
  emoji: string;
  gradient: string;
  description: Record<Lang, string>;
};

export const projects: Project[] = [
  {
    slug: "d20-heroes",
    title: "D20 Heroes: Creator",
    featured: true,
    tags: ["JavaScript", "Vite", "Tailwind v4", "Capacitor", "Android"],
    live: "https://creador-dnd-2024.vercel.app",
    emoji: "🎲",
    gradient: "from-purple-500/25 to-rose-500/25",
    description: {
      es: "Creador de personajes de rol de mesa (sistema d20, reglas 2024), mobile-first y 100% offline. Construido en JavaScript vanilla sin frameworks, con un sistema de render reactivo propio y todas las estadísticas calculadas en vivo desde una única fuente de verdad. Empaquetado para Android con Capacitor.",
      en: "Tabletop RPG character creator (d20 system, 2024 rules), mobile-first and 100% offline. Built in vanilla JavaScript with no frameworks, featuring a custom reactive rendering system and all stats derived live from a single source of truth. Packaged for Android with Capacitor.",
    },
  },
  {
    slug: "tejiendo-redes",
    title: "Tejiendo Redes",
    featured: true,
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "next-intl"],
    repo: "https://github.com/DanCranel/tejiendo-redes",
    live: "https://tejiendo-redes-iota.vercel.app/es",
    emoji: "🧠",
    gradient: "from-violet-500/25 to-fuchsia-500/25",
    description: {
      es: "Sitio web bilingüe (ES/EN) para un centro psicopedagógico en Ecuador. Diseño responsive mobile-first, cambio de idioma con next-intl, carrusel de testimonios, integración con Instagram y llamados a la acción por WhatsApp. Renderizado estático para máximo rendimiento y SEO.",
      en: "Bilingual (ES/EN) website for an educational psychology center in Ecuador. Mobile-first responsive design, language switching with next-intl, a testimonial carousel, Instagram integration and WhatsApp call-to-actions. Static rendering for top performance and SEO.",
    },
  },
  {
    slug: "junta-agua-yunguilla",
    title: "Junta de Agua Yunguilla",
    featured: true,
    tags: ["Next.js", "TypeScript", "Convex", "shadcn/ui", "jsPDF"],
    repo: "https://github.com/DanCranel/junta-agua-yunguilla",
    live: "https://junta-agua-yunguilla.vercel.app",
    emoji: "💧",
    gradient: "from-cyan-500/25 to-blue-500/25",
    description: {
      es: "Sistema web de facturación para juntas de agua rurales. Los socios consultan su saldo e historial con su cédula; el tesorero registra lecturas y confirma pagos desde un panel seguro. Cálculo automático de consumo, facturas en PDF y diseño accesible pensado para usuarios mayores.",
      en: "Billing web system for rural water cooperatives. Members check their balance and history with their ID; the treasurer records readings and confirms payments from a secure panel. Automatic consumption calculation, PDF invoices and an accessible design tailored for elderly users.",
    },
  },
  {
    slug: "la-casa-del-aventurero",
    title: "La Casa del Aventurero",
    featured: false,
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    live: "https://la-casa-del-aventurero.vercel.app",
    emoji: "🍺",
    gradient: "from-amber-500/25 to-yellow-500/25",
    description: {
      es: "Sitio web a medida para una taberna temática (negocio real): menú digital, eventos, equipo, ubicación y contacto. Diseñado y desarrollado de principio a fin, desplegado en Vercel.",
      en: "Custom website for a themed tavern (a real business): digital menu, events, team, location and contact. Designed and developed end-to-end, deployed on Vercel.",
    },
  },
  {
    slug: "venta-paquetes-orm",
    title: "Venta de Paquetes Educativos (ORM)",
    featured: false,
    tags: ["Java", "ORM", "POO", "Base de datos"],
    repo: "https://github.com/DanCranel/VentaPaquetesEducativosORM",
    emoji: "📦",
    gradient: "from-amber-500/25 to-orange-500/25",
    description: {
      es: "Aplicación en Java para la gestión y venta de paquetes educativos usando un mapeo objeto-relacional (ORM) para persistir los datos. Aplica principios de programación orientada a objetos y separación de capas.",
      en: "Java application for managing and selling educational packages using object-relational mapping (ORM) for data persistence. Applies object-oriented programming principles and layered separation.",
    },
  },
  {
    slug: "gestor-de-tareas",
    title: "Gestor de Tareas",
    featured: false,
    tags: ["Java", "Estructuras de datos", "Algoritmos"],
    repo: "https://github.com/DanCranel/Gestor-de-Tareas",
    emoji: "🗂️",
    gradient: "from-emerald-500/25 to-teal-500/25",
    description: {
      es: "Gestor de tareas desarrollado para la asignatura de Algoritmos y Estructuras de Datos. Implementa estructuras propias para organizar y priorizar tareas de forma eficiente.",
      en: "Task manager built for the Algorithms and Data Structures course. Implements custom data structures to organize and prioritize tasks efficiently.",
    },
  },
  {
    slug: "buscaminas-poo",
    title: "Buscaminas (POO)",
    featured: false,
    tags: ["Java", "POO", "Lógica"],
    repo: "https://github.com/DanCranel/Examen-Buscaminas-POO",
    emoji: "💣",
    gradient: "from-rose-500/25 to-pink-500/25",
    description: {
      es: "Implementación del clásico juego Buscaminas en Java, aplicando programación orientada a objetos: encapsulamiento del tablero, manejo de estados y lógica de descubrimiento recursivo de celdas.",
      en: "Implementation of the classic Minesweeper game in Java, applying object-oriented programming: board encapsulation, state handling and recursive cell-reveal logic.",
    },
  },
];
