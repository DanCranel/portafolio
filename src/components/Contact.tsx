"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { site, whatsappLink } from "@/data/site";
import Reveal from "./Reveal";
import {
  MailIcon,
  WhatsappIcon,
  LinkedinIcon,
  GithubIcon,
  CopyIcon,
  CheckIcon,
} from "./Icons";

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const cards = [
    {
      label: t.contact.emailBtn,
      value: site.email,
      href: `mailto:${site.email}`,
      icon: <MailIcon className="h-5 w-5" />,
    },
    {
      label: t.contact.whatsappBtn,
      value: site.whatsappDisplay,
      href: whatsappLink(
        "Hola Daniel, vi tu portafolio y me gustaría conversar.",
      ),
      icon: <WhatsappIcon className="h-5 w-5" />,
    },
    {
      label: t.contact.linkedinBtn,
      value: "in/daniel-morales",
      href: site.linkedin,
      icon: <LinkedinIcon className="h-5 w-5" />,
    },
    {
      label: t.contact.githubBtn,
      value: "@DanCranel",
      href: site.github,
      icon: <GithubIcon className="h-5 w-5" />,
    },
  ];

  return (
    <section
      id="contact"
      className="relative border-t border-[var(--color-border)] bg-[var(--color-bg-soft)]/50"
    >
      <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:py-32">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            {t.contact.kicker}
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            {t.contact.subtitle}
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12 grid gap-4 sm:grid-cols-2">
          {cards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/60 p-5 text-left backdrop-blur transition-all hover:border-[var(--color-accent)]/60 hover:shadow-lg hover:shadow-[var(--color-accent)]/5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent-2)]/20 text-[var(--color-accent)] transition-colors group-hover:from-[var(--color-accent)] group-hover:to-[var(--color-accent-2)] group-hover:text-white">
                {c.icon}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-[var(--color-text)]">
                  {c.label}
                </span>
                <span className="block truncate text-sm text-[var(--color-muted)]">
                  {c.value}
                </span>
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal delay={220} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-accent)]/25 transition-transform hover:scale-[1.03]"
          >
            <MailIcon className="h-4 w-4" />
            {site.email}
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white/5 px-4 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            {copied ? (
              <>
                <CheckIcon className="h-4 w-4 text-emerald-400" />
                {t.contact.copied}
              </>
            ) : (
              <>
                <CopyIcon className="h-4 w-4" />
                {t.contact.copy}
              </>
            )}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
