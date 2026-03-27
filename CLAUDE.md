# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Mind Over Matter" is a retro arcade-styled promotional website for a fictional fighting game where famous scientists battle using their real-world discoveries as powers. It's a single-page React app — not an actual game.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview the production build
- `npm run lint` — ESLint (flat config, JS/JSX only)

## Tech Stack

- **React 19** with JSX (no TypeScript)
- **Vite 7** for build/dev
- **Tailwind CSS 3** via PostCSS (configured in `tailwind.config.js`, `postcss.config.js`)
- **ESLint 9** flat config with react-hooks and react-refresh plugins

## Architecture

This is a small single-component app. All UI lives in `src/App.jsx`:

- Character data (scientists array) is defined inline at the top of the file
- Two tabs: "Overview" (game poster, description, stats, screenshot placeholders) and "Characters" (scientist cards in a grid)
- `StatBar` and `CharCard` are local components within App.jsx
- Fonts loaded via Google Fonts in an inline `<style>` tag: "Press Start 2P" (`.font-pixel`) and "VT323" (`.font-vt`)
- Character portrait images are in `src/assets/` (PNG files)

## Styling Conventions

- Dark theme with neon accent colors per character (defined as hex + Tailwind class pairs in the scientists array)
- Heavy use of inline `style` props for glows (`textShadow`, `boxShadow`) alongside Tailwind utility classes
- Retro CRT effects: scanline overlay and vignette are fixed-position divs with CSS gradients
- Font sizes often set via inline `style` with pixel values rather than Tailwind size classes

## ESLint Notes

- `no-unused-vars` rule ignores variables starting with uppercase or underscore (`varsIgnorePattern: '^[A-Z_]'`)
