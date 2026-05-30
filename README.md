# N7 Banking Landing Page

A responsive React + Vite landing page for a modern digital banking platform. The project focuses on a pixel-focused marketing website for N7 Banking with sections for core banking, digital banking, solutions, trusted brands, insights, case studies, and call-to-action panels.

## Project Overview

This project was built as a frontend implementation using React, Vite, and Tailwind CSS. It includes reusable UI components, custom mockups, responsive layouts, hover states, smooth transitions, and a dark banking-focused visual style.

## Features

- Responsive landing page for desktop, tablet, and mobile screens
- Fixed glass-style navigation bar with mobile menu support
- Hero section with banking product messaging and CTA buttons
- Trusted-by brand strip with reusable SVG brand marks
- Solutions section for Core Banking, Digital Banking, Open Banking, Loan Origination, and Loan Management
- Core Banking section with dashboard mockups and feature checklist
- Digital Banking section with phone mockup and feature groups
- Insights and case study sections
- Reusable CTA panel and button components
- Tailwind-based custom theme, colors, shadows, gradients, and responsive spacing
- Lucide React icons for clean UI visuals

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Lucide React
- ESLint

## Folder Structure

```txt
Codelinear-SDE-Full-Stack-Technical-Assignment-Neha-main/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── hero-banking.jpg
│   ├── components/
│   │   ├── BrandMarks.jsx
│   │   ├── Button.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── CoreBanking.jsx
│   │   ├── CtaPanel.jsx
│   │   ├── DigitalBanking.jsx
│   │   ├── FloatingCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Insights.jsx
│   │   ├── MarqueeStrip.jsx
│   │   ├── Mockups.jsx
│   │   ├── Navbar.jsx
│   │   ├── PatternTile.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── SolutionCard.jsx
│   │   ├── SolutionIcons.jsx
│   │   ├── Solutions.jsx
│   │   └── TrustedBy.jsx
│   ├── data/
│   │   ├── solutions.js
│   │   └── trustedLogos.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd Codelinear-SDE-Full-Stack-Technical-Assignment-Neha-main
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```txt
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```

Runs the project locally with Vite.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint checks for the project.

## Main Components

- `Navbar.jsx` - fixed responsive navigation with desktop and mobile layouts
- `Hero.jsx` - top landing section with CTA buttons and banking image
- `Solutions.jsx` - solution cards rendered from `src/data/solutions.js`
- `CoreBanking.jsx` - CB7 product section with feature checklist and mockups
- `DigitalBanking.jsx` - N7 digital banking section with grouped feature content
- `CtaPanel.jsx` - reusable call-to-action block
- `Footer.jsx` - footer with address blocks and product links
- `Button.jsx` - reusable button component with variant-based styling
- `Mockups.jsx` - custom UI mockups used across the landing page

## Styling Notes

The design is styled with Tailwind CSS and a custom theme defined in `tailwind.config.js`. The theme includes custom colors such as `ink`, `mist`, and `n7`, plus custom shadows and gradients for the banking UI.

Global styles are managed in `src/index.css`, including base font rendering, smooth scrolling, page background, and focus/selection styling.

## Deployment

To prepare the project for deployment, run:

```bash
npm run build
```

The final production-ready files will be generated inside the `dist/` folder. This folder can be deployed on platforms like Vercel, Netlify, or any static hosting service.
