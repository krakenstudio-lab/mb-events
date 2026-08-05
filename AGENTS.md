<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# 🚀 MB Events - Riepilogo Progetto & Linee Guida Layout Grafico

## 📋 Info Generale Progetto
- **Nome Progetto**: `mb-events`
- **Descrizione**: Sito web ufficiale per **MB Events** (*Service Audio, Luci, Video e Allestimenti per Eventi*).
- **Tech Stack**: Next.js 16 (App Router), React 19, TypeScript, Vanilla CSS Modules + CSS Custom Properties (`globals.css`).
- **Dev Server**: `npm run dev` (`http://localhost:3000`).

---

## 🎨 Design System & Palette Colori

### 🖌️ Colori Principali
- **Sfondo Scuro Principale (`--bg-primary`)**: `#070d10` (Hero, Partner Section, Ultimi Lavori)
- **Sfondo Ardesia Secondario (`--bg-secondary`)**: `#0c161b` (Servizi, Footer)
- **Sfondo CTA Banner (`.ctaSection`)**: `#0b181b` con trama a micro-punti bianchi (`radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)` a `24px 24px`) e aloni di luce radiali Cyan/Oro.
- **Accento Cyan/Turchese**: `#2bd0c6` / `#1fc5be` / `#23c7be`
- **Accento Oro/Ambra**: `#f4bf39` / `#f9a620`
- **Bordi**: `rgba(255, 255, 255, 0.05)` fino a `rgba(255, 255, 255, 0.18)`

### 🌈 Gradiente Titoli Multicolor (Spettro Continuo)
Utilizzato su tutte le sezioni per le parole chiave dei titoli (`Service Audio, Luci e Video`, `Eventi di Successo`, `Servizi`, `Lavori`, `Evento Perfetto?`):
```css
background: linear-gradient(90deg, #26d0ce 0%, #2bd0c6 30%, #5ad8a1 55%, #f4bf39 75%, #f9a620 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
display: inline-block;
```

### 🔘 Bottoni & Sizing
- **Padding Globale Tutti i Bottoni**: **`padding: .3rem 1rem;`**
- **Border Radius**: `8px`
- **Bottoni Primari Cyan** (`.btnPrimary`, `.portfolioBtn`, `.ctaBtn`):
  - Sfondo: `#1fc5be` / `#23c7be`
  - Testo: `#ffffff` (`font-weight: 600`) con freccia `→`
  - Ombra brillante: `box-shadow: 0 4px 20px rgba(31, 197, 190, 0.35)` o `0 0 25px rgba(35, 199, 190, 0.45)`
- **Bottoni Secondari Glassmorphic** (`.btnSecondary`, `.partnerBtn`, `.servicesBtn`):
  - Sfondo: `rgba(15, 25, 35, 0.7)` (`backdrop-filter: blur(10px)`)
  - Bordo: `1px solid rgba(255, 255, 255, 0.18)`
  - Testo: `#ffffff` (`font-weight: 500`)

---

## 📐 Struttura e Layout delle Sezioni (Homepage `src/app/page.tsx`)

### 1. Hero Section (`.hero`)
- **Altezza**: Full height (`min-height: calc(100vh - var(--header-height))`), contenuto centrato.
- **Sfondo**: Immagine `public/images/stage_lights.png` con overlay gradiente sfumato (`.heroOverlay`) che dissolve l'immagine nel colore nero scuro `#070d10` in basso.
- **Titolo**: `Service Audio, Luci e Video` (Gradiente) + `per Eventi di Successo` (Bianco).
- **Bottoni**: `Richiedi Preventivo →` (Cyan) e `Scopri i Nostri Lavori` (Glassmorphism).

### 2. Partner Section (`.partnerSection`)
- **Sfondo**: `#070d10` (transizione fluida senza bordi dalla Hero).
- **Layout**: 2 colonne.
  - *Sinistra*: Titolo "Il Tuo Partner per Eventi di Successo" (con gradiente), 2 paragrafi, bottone `Scopri di più su di noi →`.
  - *Destra*: Immagine rettangolare `stage_lights.png` (`aspect-ratio: 16 / 10`, `border-radius: 16px`) con alone di retroilluminazione sfumato cyan/oro (`.partnerImageWrapper::before`).

### 3. Services Grid Section (`.servicesSection`)
- **Sfondo**: `#0c161b` (colore ardesia scuro per creare contrasto tra sezioni con bordi sottili).
- **Titolo**: "I Nostri Servizi" (gradiente su "Servizi").
- **Griglia**: 4 schede (`.serviceCard`) in vetro scuro (`rgba(12, 22, 27, 0.65)`), icone turchesi `#2bd0c6` in box arrotondato per Audio, Luci, Video e Strutture.
- **Pulsante**: `Esplora tutti i servizi →` (Glassmorphism centrato).

### 4. Ultimi Lavori Section (`.worksSection`)
- **Sfondo**: `#070d10` (nero profondo solido).
- **Titolo**: "Ultimi Lavori" (gradiente su "Lavori").
- **Griglia**: 3 schede progetti (`.workCard`, altezza `295px`, `border-radius: 16px`), overlay scuro dal basso, etichetta categoria turchese maiuscola (`CONCERTI`, `CORPORATE`, `MATRIMONI`) e titolo progetto bianco.
- **Pulsante**: `Vedi tutto il Portfolio →` (Turchese brillante centrato).

### 5. Call To Action Section (`.ctaSection`)
- **Sfondo**: `#0b181b` con trama a micro-punti bianchi e aloni di luce radiali.
- **Titolo**: "Pronto a Creare il Tuo Evento Perfetto?" (gradiente su "Evento Perfetto?").
- **Pulsante**: `Richiedi un Preventivo Gratuito →` (Turchese con bagliore neon).

### 6. Footer Component (`src/components/Footer.tsx`)
- **Sfondo**: `#0c161b` (uguale alla sezione Servizi).
- **4 Colonne**: Logo MB Events & Descrizione, Link Rapidi, Servizi, Contatti (con icone turchesi e link social SVG piatti `#2bd0c6`).
- **Linea di Divisione**: Linea orizzontale (`border-top: 1px solid rgba(255, 255, 255, 0.08)`) contenuta **esclusivamente all'interno della larghezza del contenuto** (`.bottomContainer`).

