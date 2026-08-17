"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { value: "2", label: t.about.stat1 },
    { value: "12", label: t.about.stat2 },
    { value: "8+", label: t.about.stat3 },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <Reveal>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          {t.about.kicker}
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t.about.title}
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <Reveal delay={100} className="space-y-5 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </Reveal>

        <Reveal delay={200} className="flex flex-col gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/60 p-6 backdrop-blur transition-colors hover:border-[var(--color-accent)]/50"
            >
              <div className="text-4xl font-black text-gradient">{s.value}</div>
              <div className="mt-1 text-sm text-[var(--color-muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
