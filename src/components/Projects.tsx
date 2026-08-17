"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import { GithubIcon, ExternalIcon } from "./Icons";

export default function Projects() {
  const { t, lang } = useLanguage();

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <Reveal>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          {t.projects.kicker}
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t.projects.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
          {t.projects.subtitle}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            key={p.slug}
            delay={(i % 2) * 100}
            as="article"
            className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/60 backdrop-blur transition-all hover:border-[var(--color-accent)]/50 hover:shadow-xl hover:shadow-[var(--color-accent)]/5 ${
              p.featured ? "md:col-span-1" : ""
            }`}
          >
            {/* Cover */}
            <div
              className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${p.gradient} overflow-hidden`}
            >
              <span className="text-6xl drop-shadow-lg transition-transform duration-500 group-hover:scale-110">
                {p.emoji}
              </span>
              {p.featured && (
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  ★ {t.projects.featured}
                </span>
              )}
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                {p.description[lang]}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-[var(--color-muted)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-3">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                  >
                    <ExternalIcon className="h-4 w-4" />
                    {t.projects.live}
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-white/5 px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    <GithubIcon className="h-4 w-4" />
                    {t.projects.code}
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100} className="mt-10 flex justify-center">
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white/5 px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          <GithubIcon className="h-5 w-5" />
          {t.projects.viewAll}
        </a>
      </Reveal>
    </section>
  );
}
