# 🐸 Team Blob — Fake Esports Team Website

[![Deployed on Vercel](https://img.shields.io/badge/deployed-Vercel-black?logo=vercel&style=flat)](https://team-blob.vercel.app)
[![Built with Svelte](https://img.shields.io/badge/built%20with-Svelte-orange?logo=svelte&logoColor=white&style=flat)](https://svelte.dev)
[![Tailwind CSS](https://img.shields.io/badge/styled%20with-TailwindCSS-38bdf8?logo=tailwindcss&logoColor=white&style=flat)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/code-TypeScript-3178c6?logo=typescript&logoColor=white&style=flat)](https://www.typescriptlang.org/)

Welcome to the **official fake website** of Team Blob — a satirical, lovingly overbuilt esports team site built with ⚡ **Svelte** and 🎨 **Tailwind CSS v4**.

This project is a frontend showcase and playground, simulating a professional esports org site while being... very not real.

---

## 📸 Preview

![Team Blob Screenshot](/screenshot.png)

---

## 📦 Tech Stack

- **Svelte** — Lightweight, fast, reactive.
- **Tailwind CSS v4** — Utility-first styling, customized for the dark theme.
- **TypeScript** — For strong typing and future-proofing.
- **Vercel** — Hosting the whole fake operation.

---

## 🧱 Site Structure

- **Navbar**: Sticky at the top. Includes team branding and fake sponsors.
- **Live Banner**: Shows Blob as “currently live in solo queue” with rotating messages.
- **Main Content**: Dynamic content slot per route.
- **Footer**: Only appears when you scroll to the bottom — says _"Yes this is clearly a fake team."_ 😊

---

## 🤝 Sponsors (Fake, but Clickable)

- [LegitCorp](https://legitcorp.com/) ![LegitCorp Logo](/static/sponsors/legitcorp.png)
- [Axis Order](https://axisorder.com) ![Axis Order Logo](/static/sponsors/axis-order.png)

Logos are displayed in the navbar next to the team name, fully clickable, and styled for maximum esports realism.

---

## 🎭 Features

- ✅ Scroll-to-bottom reveal footer
- ✅ Rotating live banner messages with animated typewriter effect
- ✅ Animated mobile dropdown menu (slide down on open)
- ✅ Sponsor logo integration with external links
- ✅ Fully responsive layout
- ✅ Parody tone, professional layout

---

## 🗂 Folder Structure (Key Files)

```bash
src/
├── routes/
│   └── +layout.svelte       # Main layout with nav, banner, footer
├── lib/
│   └── actions/
│       └── showOnScrollToBottom.ts  # Scroll-triggered footer visibility
static/
└── sponsors/
    ├── legitcorp.png
    └── axis-order.png
```
