"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

const groups = [
  {
    key: "frontend" as const,
    icon: "⚡",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "shadcn/ui",
      "next-intl",
    ],
  },
  {
    key: "backend" as const,
    icon: "🛠️",
    items: ["Node.js", "Convex", "Java", "APIs REST", "SQL", "ORM", "jsPDF"],
  },
  {
    key: "tools" as const,
    icon: "🧩",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "POO",
      "Estructuras de datos",
      "Algoritmos",
      "Responsive Design",
      "SEO",
    ],
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="relative border-y border-[var(--color-border)] bg-[var(--color-bg-soft)]/50"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            {t.skills.kicker}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.skills.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal
              key={group.key}
              delay={i * 120}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/60 p-6 backdrop-blur transition-all hover:border-[var(--color-accent)]/50 hover:shadow-lg hover:shadow-[var(--color-accent)]/5"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-xl">
                  {group.icon}
                </span>
                <h3 className="text-lg font-semibold">{t.skills[group.key]}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-[var(--color-border)] bg-white/[0.03] px-3 py-1.5 text-sm text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)]/50 hover:text-[var(--color-text)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
