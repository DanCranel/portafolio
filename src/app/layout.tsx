import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://dancranel.github.io/portafolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Daniel Morales — Desarrollador Web",
  description:
    "Portafolio de Daniel Morales, desarrollador de software full-stack. Aplicaciones web con Next.js, React, TypeScript y bases sólidas en Java y estructuras de datos.",
  keywords: [
    "Daniel Morales",
    "desarrollador",
    "developer",
    "Next.js",
    "React",
    "TypeScript",
    "Java",
    "Full-Stack",
    "Ecuador",
    "portafolio",
    "portfolio",
  ],
  authors: [{ name: "Daniel Morales" }],
  creator: "Daniel Morales",
  openGraph: {
    title: "Daniel Morales — Desarrollador Web",
    description:
      "Aplicaciones web reales con Next.js, React y TypeScript. Bases sólidas en Java y estructuras de datos.",
    type: "website",
    locale: "es_EC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Morales — Desarrollador Web",
    description:
      "Aplicaciones web reales con Next.js, React y TypeScript. Bases sólidas en Java y estructuras de datos.",
  },
};

export const viewport: Viewport = {
  themeColor: "#070711",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
