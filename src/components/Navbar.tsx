"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

const links = [
  { href: "#about", key: "about" },
  { href: "#skills", key: "skills" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
] as const;

export default function Navbar() {
  const { t, lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="group flex items-center gap-2 font-bold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-2)] text-sm font-black text-white shadow-lg shadow-[var(--color-accent)]/30">
            DM
          </span>
          <span className="hidden text-sm tracking-tight text-[var(--color-text)] sm:inline">
            Daniel Morales
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-[var(--color-muted)] transition-colors hover:bg-white/5 hover:text-[var(--color-text)]"
            >
              {t.nav[l.key]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/CV-Daniel-Morales.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-3 py-2 text-xs font-semibold text-white transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            {t.nav.resume}
          </a>
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-white/5 px-3 py-2 text-xs font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <span className={lang === "es" ? "text-[var(--color-accent)]" : ""}>
              ES
            </span>
            <span className="text-[var(--color-border)]">/</span>
            <span className={lang === "en" ? "text-[var(--color-accent)]" : ""}>
              EN
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-white/5 md:hidden"
          >
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-4 bg-[var(--color-text)] transition-transform ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 bg-[var(--color-text)] transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 bg-[var(--color-text)] transition-transform ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {links.map((l) => (
              <a
                key={l.key}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-[var(--color-muted)] transition-colors hover:bg-white/5 hover:text-[var(--color-text)]"
              >
                {t.nav[l.key]}
              </a>
            ))}
            <a
              href="/CV-Daniel-Morales.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-3 py-3 text-center text-sm font-semibold text-white"
            >
              {t.nav.resume}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
