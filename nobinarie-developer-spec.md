# Developer Specification: nobinarie.com

_A site for tools and advocacy in inclusive Spanish spelling_

---

## 🎯 Purpose
nobinarie.com is a static site that promotes and distributes inclusive Spanish spell-check dictionaries. It serves activists, educators, and allies who want to write in non-binary Spanish using "-e" forms, not "x" or "@". It also explains, justifies, and educates around the use of inclusive language.

---

## 🧩 Core Requirements

### Functional Requirements
- Homepage with clear call-to-action: “¡Vos podés escribir no binarie ahora!”
- Pages for each platform with tutorials for dictionary installation (e.g., /tutoriales/windows, /tutoriales/android)
- Downloadable dictionaries (AFF/DIC format, ZIPs) with versioning and changelog
- Pages with:
  - What is inclusive Spanish
  - Why we use “-e”
  - Glosario de términos
  - Manifiesto político del proyecto
  - Ejemplos de binario vs inclusivo
  - Enseñar lengua inclusiva (materials for educators)
  - Recursos externos (link collection)
  - Preguntas frecuentes (FAQ)
  - Historia del proyecto
  - Prensa y medios
  - Créditos y agradecimientos
  - Contribuir via GitHub Issues
- Mini interactive demo: write and see live spellcheck feedback
- Downloadable printable content (e.g., guide PDFs, pamphlets, flyers)
- Optional newsletter signup via MailerLite (future)
- Donation button via Open Collective

### Non-Functional Requirements
- Written entirely in Spanish inclusivo (-e, not -x/@)
- Fully responsive (mobile, tablet, desktop)
- Light/dark mode respecting user/browser preferences
- Accessible by design (WCAG-compliant): keyboard nav, color contrast, alt text, readable typography, font-size toggle
- Lightweight analytics via Cloudflare only
- All code and dictionaries published open source (CC0/MIT)

---

## 🏗️ Architecture & Tech Stack
- **Framework:** Next.js (static export mode)
- **Hosting:** Cloudflare Pages (static hosting on Cloudflare Worker Sites)
- **Styles:** TailwindCSS
- **Content:** Markdown or MDX for easy authoring
- **Assets:** Images, PDFs, ZIPs served via Cloudflare CDN
- **Repository:** GitHub (public, open source)

---

## 📁 File Structure (Example)
```
/
├── public/
│   ├── downloads/
│   │   ├── v1.0.0/
│   │   │   ├── diccionario.aff
│   │   │   ├── diccionario.dic
│   │   │   ├── README.md
│   ├── pdfs/
│   │   ├── guia-rapida.pdf
│   │   ├── glosario.pdf
├── pages/
│   ├── index.tsx
│   ├── tutoriales/
│   ├── que-es-lengua-inclusiva.tsx
│   ├── por-que-usamos-la-e.tsx
│   ├── contribuye.tsx
│   ├── creditos.tsx
├── styles/
├── data/
│   ├── glossary.json
│   ├── changelog.json
```

---

## 🛡️ Data Handling & Privacy
- No user accounts or login system
- No personal data collected
- No cookies used
- All downloads are anonymous
- Optional newsletter signup (future) via MailerLite with clear opt-in

---

## 🚨 Error Handling Strategy
- 404 page with inclusive language and helpful links
- Graceful fallback if downloads or assets are missing
- All form or interactive components (in the future) must validate inputs client-side
- Clear copy in inclusivo for all errors, warnings, and alerts

---

## ✅ Testing Plan

### Manual Testing
- Mobile, tablet, and desktop viewports
- Dark/light mode
- Keyboard-only navigation
- Screen reader compatibility
- Test install instructions on each platform
- Test all download links

### Automated Testing
- Linting with ESLint and Prettier
- Static type-checking with TypeScript
- Lighthouse performance and accessibility audits

### Accessibility Testing
- Use axe-core or Lighthouse to scan for WCAG violations
- Manual screen reader tests (NVDA, VoiceOver)
- Ensure correct aria attributes for all interactive components

---

## 🔜 Future Features
- Search bar for terms/tutorials
- Community-led translations
- Site packaged for offline use (nobinarie-to-go.zip)
- Favicon and brand assets
- Interactive demo block with spell-check simulation
- Print-optimized CSS
- Media sharing and auto-generated social cards
- Multi-language support (with select intro pages in EN/PT)
- Embedded videos and tutorials

---

This document is the developer-facing version of the project. Content is authored in inclusive Spanish, but technical elements (comments, docs) can follow conventional English if needed.

All contributions, issues, and updates via:
🔗 https://github.com/rabble/nobinarie