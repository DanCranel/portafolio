"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon, ArrowDownIcon } from "./Icons";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-[var(--color-accent)]/20 blur-[120px] animate-float" />
        <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-[var(--color-accent-2)]/20 blur-[120px] animate-float [animation-delay:2s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[var(--color-accent-3)]/15 blur-[120px] animate-float [animation-delay:4s]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/5 px-4 py-1.5 text-xs font-medium text-[var(--color-muted)] backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t.hero.available} · {t.hero.basedIn}
          </div>

          <p className="mb-3 text-lg font-medium text-[var(--color-muted)]">
            {t.hero.greeting}
          </p>
          <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Daniel <span className="text-gradient">Morales</span>
          </h1>
          <h2 className="mt-4 text-xl font-semibold text-[var(--color-text)]/90 sm:text-2xl">
            {t.hero.role}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            {t.hero.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-accent)]/25 transition-transform hover:scale-[1.03]"
            >
              {t.hero.ctaProjects}
              <ArrowDownIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white/5 px-6 py-3 text-sm font-semibold text-[var(--color-text)] backdrop-blur transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              {t.hero.ctaContact}
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border)] bg-white/5 text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border)] bg-white/5 text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
      >
        <ArrowDownIcon className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
