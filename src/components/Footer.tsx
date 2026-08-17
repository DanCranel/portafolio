"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <p className="text-sm text-[var(--color-muted)]">
          © {year} {site.name}. {t.footer.rights}
        </p>

        <div className="flex items-center gap-2">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-white/5 text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-white/5 text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-white/5 text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-[var(--color-muted)]/70">{t.footer.built}</p>
      </div>
    </footer>
  );
}
