# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with Next.js configuration

## LUXURY DESIGN STANDARDS (CRITICAL - FOLLOW EXACTLY)

### Core Design Principles
1. **MINIMALISM FIRST** - Remove all unnecessary elements, decorations, and clutter
2. **TYPOGRAPHY IS KING** - Georgia serif throughout, consistent with logo
3. **WHITE SPACE** - Generous padding and margins for breathing room
4. **SUBTLE ELEGANCE** - No flashy animations or aggressive gradients
5. **FUNCTIONALITY** - Every element must serve a clear purpose

### Typography Standards
```css
/* ALL text uses Georgia serif - NO EXCEPTIONS */
font-family: Georgia, "Times New Roman", serif;

/* Heading sizes */
h1: 56px, font-weight: 400
h2: 40px, font-weight: 400
h3: 28px, font-weight: 500
h4: 22px, font-weight: 500
body: 17px, line-height: 1.8

/* Hero specific */
Hero title: text-5xl to text-8xl
Hero subtitle: tracking-[0.25em] uppercase
```

### Color Palette
```css
Primary: #c4ab9f (warm taupe)
Secondary: #b49383 (deeper taupe)
Text Dark: #232323
Text Body: #636363
White: #ffffff
Background: Clean white/off-white gradients
```

### Navigation Standards
- **Fixed transparent header** becoming solid white on scroll
- **Simple horizontal menu** - no dropdowns or complex interactions
- **Georgia serif, uppercase, tracked spacing**
- **Single "Book Now" CTA** with border, no fill
- **Mobile menu**: Full screen overlay, centered links

### Hero Section Standards
- **Full height (min-h-screen)**
- **Centered content**
- **Minimal decoration** - only subtle gradient orbs
- **Clear hierarchy**: Small subtitle → Large title → Description → CTAs
- **Two CTA buttons max** with distinct styling

### What to REMOVE
- ❌ All generic template SVG decorations
- ❌ Complex geometric patterns
- ❌ Unnecessary animations beyond simple hovers
- ❌ Multiple CTAs and redundant buttons
- ❌ Lorem ipsum or placeholder text
- ❌ Overly complex component structures
- ❌ Social media icon arrays (keep max 2-3 if needed)

### Component Standards
- **Features**: Simple grid, icon + title + description only
- **Footer**: Minimal - logo, essential links, copyright
- **Cards**: Clean borders, subtle shadows, no heavy effects
- **Buttons**: Border-based primary, solid secondary
- **Forms**: Simple, clean inputs with subtle focus states

## Project Architecture

Luxury equestrian facility website built with Next.js 15 and Tailwind CSS v4.

### Key Technologies
- **Next.js 15** with App Router (`src/app/`)
- **React 19** with TypeScript
- **Tailwind CSS v4** with custom theme
- **Georgia serif typography** throughout

### Directory Structure
- `src/app/` - Next.js App Router pages
- `src/components/` - Reusable React components
- `src/styles/index.css` - Global styles with luxury design system

### Component Guidelines
When modifying components:
1. Start by removing unnecessary elements
2. Simplify structure to essentials only
3. Apply Georgia serif typography
4. Use generous white space
5. Ensure mobile responsiveness
6. Test dark mode compatibility

### TypeScript Configuration
- Base URL aliasing: `@/*` maps to `./src/*`
- Strict mode disabled for easier development

### Image Handling
- Custom logo SVGs in `/public/images/logo/`
- Next.js Image optimization configured
- Prefer minimal, high-quality imagery

## Development Notes

- **ALWAYS** prioritize simplicity over complexity
- **NEVER** add decorative elements without clear purpose
- **MAINTAIN** consistency with the Hero and Nav design
- **TEST** all changes on mobile devices
- **ENSURE** fast load times by removing unnecessary code