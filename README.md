# Noir Coffee

![Noir Coffee](https://img.shields.io/badge/Next.js-15.2.4-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC) ![License](https://img.shields.io/badge/License-MIT-green)

Noir Coffee is a modern coffee shop website built with Next.js 15, TypeScript, and Tailwind CSS. This project showcases a complete digital experience for a coffee shop with interactive features, elegant design, and comprehensive content management including menu catalog, event management, gallery showcase, and customer testimonials with a warm coffee-themed aesthetic.

## Main Features

- **Interactive Landing Page**: Hero carousel with automatic slides and layered image animations
- **About Us**: Company story, vision & mission, team showcase, and unique features highlight
- **Menu System**: Product catalog with category filtering, sorting options, and detailed item pages
- **Gallery**: Tab-based photo categorization (Interior, Barista, Customer, Events) with modal view
- **Events**: Event listings with detailed pages including schedules, guests, and FAQ sections
- **Testimonials**: Customer reviews showcase with rating system and animated cards
- **Contact**: Contact information, interactive form, social media links, and location details
- **FAQ**: Frequently asked questions with smooth accordion animation
- **Privacy & Terms**: Policy pages with organized content structure
- **Navigation**: Responsive header with mobile sheet navigation
- **Animation**: Motion-based animations with reveal, fade, slide, stagger, and hover effects

## Technologies Used

- **Next.js 15.2.4**
- **TypeScript 5**
- **Tailwind CSS 3.4.17** & custom Tailwind config
- **Motion 12.23.6** for animations
- **Radix UI** & **Lucide React** icons
- **React Hook Form** & **Zod** for form validation
- **Shadcn/UI** components
- **Embla Carousel** for carousels
- **PostCSS** & **Autoprefixer**
- **Others**: clsx, tailwind-merge, class-variance-authority, etc.

## Directory Structure

```
/app — Main pages (homepage, about, menu, gallery, events, contact, etc.) and global styles.
/components — UI components, layout templates, animations, and utilities.
/public/assets — Images, menu photos, gallery images, team photos, event pictures.
/hooks — Custom React hooks.
/lib — Utility functions.
tailwind.config.ts — Custom Tailwind configuration.
postcss.config.mjs — PostCSS configuration.
```

## Installation & Development

**Clone the repository**

```bash
git clone https://github.com/glassesboyy/LandingPage-CoffeShop.git
cd coffee-shop-website
```

**Install dependencies**

```bash
pnpm install
# or
npm install
```

**Run the development server**

```bash
pnpm dev
# or
npm run dev
```

**Access the application**
Open http://localhost:3000 in your browser.

## Build & Deploy

**Build for production**

```bash
pnpm build
```

**Start production server**

```bash
pnpm start
```

## Customization

- **Tailwind Configuration**: Edit `tailwind.config.ts` to add colors, fonts, animations, etc.
- **Assets**: Replace images/logos in `/public/assets`.
- **Content**: Edit data in template files under `/app/data/`.

## Contact

For question or suppor, please contact [suryazulfikar22@gmail.com].
