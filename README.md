# Portafolio — Daniel Morales

Portafolio personal bilingüe (ES/EN) de **Daniel Morales**, desarrollador de software full-stack.
Construido con el mismo stack moderno que uso en producción.

🔗 **Demo en vivo:** _(pendiente de desplegar en Vercel)_

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)

---

## ✨ Características

- **Bilingüe ES/EN** con cambio de idioma instantáneo (persiste la preferencia y detecta el idioma del navegador).
- **Diseño oscuro y moderno** con degradados animados, efectos glass y animaciones de aparición al hacer scroll.
- **100% responsive**, mobile-first.
- **Optimizado para SEO** con metadatos Open Graph y Twitter Card.
- **Sin dependencias de UI externas**: iconos SVG propios, cero peso extra.
- Secciones: Hero · Sobre mí · Habilidades · Proyectos · Contacto.

## 🛠️ Stack

| Área        | Tecnologías                          |
| ----------- | ------------------------------------ |
| Framework   | Next.js 16 (App Router)              |
| UI          | React 19                             |
| Lenguaje    | TypeScript                           |
| Estilos     | Tailwind CSS v4                      |
| Despliegue  | Vercel                               |

## 🚀 Desarrollo local

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

```bash
# Compilar para producción
npm run build
npm run start
```

## 📁 Estructura

```
src/
├── app/
│   ├── layout.tsx        # Layout raíz + metadatos SEO
│   ├── page.tsx          # Ensamble de secciones
│   └── globals.css       # Tema y animaciones
├── components/           # Navbar, Hero, About, Skills, Projects, Contact, Footer, Icons
├── data/
│   ├── projects.ts       # Datos de los proyectos
│   └── site.ts           # Datos de contacto
└── i18n/
    ├── translations.ts   # Diccionario ES/EN
    └── LanguageProvider.tsx
```

## 📬 Contacto

- **Email:** danielmoralestrelles96@gmail.com
- **LinkedIn:** [daniel-morales](https://www.linkedin.com/in/daniel-morales-777640276/)
- **GitHub:** [@DanCranel](https://github.com/DanCranel)

---

<p align="center">Hecho con ❤️ usando Next.js y Tailwind CSS</p>
