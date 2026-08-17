import type { Lang } from "@/i18n/translations";

export type Job = {
  company: string;
  role: Record<Lang, string>;
  period: Record<Lang, string>;
  current?: boolean;
  tags: string[];
  description: Record<Lang, string>;
};

export const experience: Job[] = [
  {
    company: "Tejiendo Redes",
    current: true,
    role: {
      es: "Cofundador y Desarrollador Web",
      en: "Co-founder & Web Developer",
    },
    period: { es: "2025 – Actualidad", en: "2025 – Present" },
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description: {
      es: "Cofundador de un centro de apoyo psicopedagógico con clases virtuales y presenciales, refuerzo académico y control de tareas. Diseñé y desarrollé su plataforma web bilingüe de principio a fin, y participo en la operación académica del centro.",
      en: "Co-founder of a psychopedagogical support center offering virtual and in-person classes, academic tutoring and task tracking. I designed and built its bilingual web platform end-to-end and take part in the center's academic operations.",
    },
  },
  {
    company: "UIX Studio",
    role: {
      es: "Auxiliar en Desarrollo Web",
      en: "Web Development Assistant",
    },
    period: { es: "2023 – 2025", en: "2023 – 2025" },
    tags: ["HTML", "CSS", "WordPress", "JavaScript"],
    description: {
      es: "Desarrollo y mantenimiento de páginas web para empresas privadas, manejando HTML y WordPress en proyectos para clientes reales.",
      en: "Development and maintenance of websites for private companies, working with HTML and WordPress on projects for real clients.",
    },
  },
];
