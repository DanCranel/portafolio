"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { value: "3", label: t.about.stat1 },
    { value: "12", label: t.about.stat2 },
    { value: "8+", label: t.about.stat3 },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-stretch">
        <div>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              {t.about.kicker}
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.about.title}
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-8 space-y-5 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </Reveal>
        </div>

        <Reveal delay={200} className="flex justify-center lg:justify-end">
          <div className="group relative w-full max-w-[340px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[var(--color-bg)]/50 to-transparent" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/daniel.jpg"
              alt="Daniel Morales"
              className="aspect-[4/5] h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 lg:aspect-auto"
            />
          </div>
        </Reveal>
      </div>

      <Reveal delay={150} className="mt-8 grid grid-cols-3 gap-3 sm:gap-5">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/60 p-4 text-center backdrop-blur transition-colors hover:border-[var(--color-accent)]/50 sm:p-6 sm:text-left"
          >
            <div className="text-3xl font-black text-gradient sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs text-[var(--color-muted)] sm:text-sm">
              {s.label}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
