"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { experience } from "@/data/experience";
import Reveal from "./Reveal";

export default function Experience() {
  const { t, lang } = useLanguage();

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <Reveal>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          {t.experience.kicker}
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t.experience.title}
        </h2>
      </Reveal>

      <div className="mt-12 max-w-3xl">
        <ol className="relative border-l border-[var(--color-border)]">
          {experience.map((job, i) => (
            <Reveal
              key={job.company}
              as="li"
              delay={i * 120}
              className="relative mb-8 ml-6 last:mb-0"
            >
              {/* Node */}
              <span className="absolute -left-[31px] flex h-4 w-4 items-center justify-center">
                <span
                  className={`h-3 w-3 rounded-full ring-4 ring-[var(--color-bg)] ${
                    job.current
                      ? "bg-[var(--color-accent-2)]"
                      : "bg-[var(--color-accent)]"
                  }`}
                />
                {job.current && (
                  <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-[var(--color-accent-2)] opacity-75" />
                )}
              </span>

              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/60 p-6 backdrop-blur transition-colors hover:border-[var(--color-accent)]/50">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold">{job.role[lang]}</h3>
                  {job.current && (
                    <span className="rounded-full border border-[var(--color-accent-2)]/40 bg-[var(--color-accent-2)]/10 px-2.5 py-0.5 text-xs font-semibold text-[var(--color-accent-2)]">
                      {t.experience.current}
                    </span>
                  )}
                </div>
                <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm">
                  <span className="font-semibold text-[var(--color-accent)]">
                    {job.company}
                  </span>
                  <span className="text-[var(--color-muted)]">
                    · {job.period[lang]}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  {job.description[lang]}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-[var(--color-muted)]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
