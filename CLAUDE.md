# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with Next.js configuration

## Project Architecture

This is a luxury equestrian facility website built with Next.js 15 and Tailwind CSS v4. The project uses a modern component-based architecture with custom luxury styling.

### Key Technologies
- **Next.js 15** with App Router (`src/app/`)
- **React 19** with TypeScript (strict mode disabled)
- **Tailwind CSS v4** with custom luxury theme system
- **next-themes** for dark/light mode support
- **Google Fonts**: PT Sans Narrow, Alex Brush, Great Vibes

### Directory Structure
- `src/app/` - Next.js App Router pages (about, blog, contact, facilities, pricing)
- `src/components/` - Reusable React components organized by feature
- `src/styles/index.css` - Global styles with luxury design system

### Component Organization
Components are organized by feature in dedicated directories:
- `About/` - About page sections
- `Blog/` - Blog components and data
- `Header/Footer/` - Layout components
- `Hero/` - Landing page hero sections
- `Contact/Pricing/Features/` - Service-specific components

### Styling System
The project uses a custom luxury design system built on Tailwind CSS v4:

#### Custom CSS Variables (Theme)
- Primary colors: `--color-primary` (#c4ab9f), `--color-secondary` (#b49383)
- Typography: PT Sans Narrow (body), Alex Brush/Great Vibes (headings)
- Custom luxury shadows and transitions defined in CSS variables

#### Luxury Component Classes
- `.luxury-button` - Primary button styling with hover effects
- `.luxury-card` - Elevated card components with shadows
- `.luxury-hero` - Full-height hero sections
- `.luxury-title/.luxury-subtitle` - Elegant typography with custom fonts

#### Layout Utilities
- `.luxury-container` - Max-width container (1200px)
- `.luxury-section` - Standard section padding (120px vertical)
- `.luxury-content-center` - Centered content with max-width

### TypeScript Configuration
- Base URL aliasing: `@/*` maps to `./src/*`
- Strict mode disabled for easier development
- Standard Next.js TypeScript setup with JSX preserve

### Theme System
- Uses `next-themes` with default dark theme
- Custom dark mode variants defined in CSS
- Theme provider in `src/app/providers.tsx`

### Image Handling
- Next.js Image optimization configured
- Remote patterns set up for Sanity CDN (cdn.sanity.io)

## Development Notes

- The project follows luxury equestrian branding with warm earth tones
- All components use the custom luxury styling system
- Typography hierarchy uses multiple Google Fonts for elegant appearance
- Mobile-responsive design with custom breakpoints
- Smooth transitions and hover effects throughout the UI