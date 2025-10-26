# PC Mechanix - Computer Repair Website

## Project Overview

## Framework & Dependency Versions

*Last updated: 2025-10-26*

- **React**: `^19.2.0`
- **Next.js**: `^16.0.0`
- **Tailwind CSS**: `^4.1.16`
- **TypeScript**: `^5.9.3`



**PC Mechanix** is a comprehensive IT services and computer repair website built with Next.js 13+, serving Toronto and the Greater Toronto Area (GTA). The site provides business IT solutions, residential computer repair services, and industry-specific technology solutions.

**Repository**: https://github.com/jtgsystems/computer-repair
**Framework**: Next.js 13.4.19 (App Router)
**Language**: TypeScript
**Styling**: Tailwind CSS + shadcn/ui components
**Theme**: Light mode only (forced)

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Key Features](#key-features)
4. [Development Setup](#development-setup)
5. [Architecture](#architecture)
6. [Components](#components)
7. [Routing & Pages](#routing--pages)
8. [Styling System](#styling-system)
9. [SEO & Metadata](#seo--metadata)
10. [Deployment](#deployment)
11. [Maintenance Scripts](#maintenance-scripts)
12. [Best Practices](#best-practices)

---

## Tech Stack

### Core Framework
- **Next.js**: 13.4.19 (App Router with experimental appDir)
- **React**: 18.2.0
- **TypeScript**: 5.8.3
- **Node.js**: 22.14.1

### UI & Styling
- **Tailwind CSS**: 3.x with custom configuration
- **shadcn/ui**: 50+ pre-built accessible components
- **Radix UI**: Headless UI primitives
- **Framer Motion**: 12.7.4 (animations)
- **Lucide React**: 0.501.0 (icons)
- **next-themes**: 0.4.6 (theme management)

### Component Libraries
- **Embla Carousel**: 8.6.0 (carousels)
- **class-variance-authority**: 0.7.1 (component variants)
- **clsx** + **tailwind-merge**: Class name utilities

### Build Tools
- **SWC**: Rust-based compiler (swcMinify enabled)
- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js linting configuration

---

## Project Structure

```
computer-repair/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with ThemeProvider
│   ├── page.tsx                  # Homepage (29,438 lines - comprehensive)
│   ├── globals.css               # Global styles + Tailwind directives
│   ├── compiled.css              # Compiled Tailwind output (104KB)
│   │
│   ├── services/                 # Service pages (11 services)
│   │   ├── page.tsx              # Services overview
│   │   ├── desktop-repair/
│   │   ├── laptop-repair/
│   │   ├── mac-repair/
│   │   ├── mobile-repair/
│   │   ├── virus-removal/
│   │   ├── data-recovery/
│   │   ├── hardware-upgrades/
│   │   ├── software-troubleshooting/
│   │   ├── network-setup/
│   │   └── _/                    # Catch-all service route
│   │
│   ├── business/                 # Business IT services (12 services)
│   │   ├── layout.tsx            # Business section layout
│   │   ├── page.tsx              # Business services overview
│   │   ├── managed-it/           # Includes metadata.ts
│   │   ├── network-solutions/    # Includes metadata.ts
│   │   ├── it-consulting/        # Includes metadata.ts
│   │   ├── cybersecurity/
│   │   ├── cloud-services/
│   │   ├── backup-recovery/
│   │   ├── email-collaboration/
│   │   ├── vdi/
│   │   ├── security-systems/
│   │   ├── desktop-repair/
│   │   └── procurement/
│   │
│   ├── industries/               # Industry-specific pages (5 industries)
│   │   ├── layout.tsx
│   │   ├── metadata.ts
│   │   ├── page.tsx              # Industries overview
│   │   ├── healthcare/
│   │   ├── retail/
│   │   ├── logistics/
│   │   ├── warehousing/
│   │   └── real-estate/
│   │
│   ├── service-areas/            # Geographic service areas (8 cities)
│   │   ├── page.tsx              # Service areas overview
│   │   ├── toronto/              # Includes 5 neighborhoods
│   │   │   ├── page.tsx
│   │   │   ├── downtown-toronto/
│   │   │   ├── north-york/
│   │   │   ├── scarborough/
│   │   │   ├── etobicoke/
│   │   │   ├── east-york/
│   │   │   └── york/
│   │   ├── brampton/             # Includes 3 neighborhoods
│   │   │   ├── page.tsx
│   │   │   ├── bramalea/
│   │   │   ├── springdale/
│   │   │   └── castlemore/
│   │   ├── mississauga/
│   │   ├── markham/
│   │   ├── vaughan/
│   │   ├── richmond-hill/
│   │   ├── oakville/
│   │   └── burlington/
│   │
│   ├── blog/                     # Blog section
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Dynamic blog post pages
│   │
│   ├── contact/                  # Contact page
│   ├── about/                    # About page
│   └── modern-menu/              # Menu testing/preview page
│
├── components/                   # Custom React components
│   ├── ui/                       # shadcn/ui components (50 components)
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── alert.tsx
│   │   ├── aspect-ratio.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── chart.tsx
│   │   ├── checkbox.tsx
│   │   ├── collapsible.tsx
│   │   ├── command.tsx
│   │   ├── context-menu.tsx
│   │   ├── dialog.tsx
│   │   ├── drawer.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── form.tsx
│   │   ├── hover-card.tsx
│   │   ├── input.tsx
│   │   ├── input-otp.tsx
│   │   ├── label.tsx
│   │   ├── menubar.tsx
│   │   ├── mobile-nav.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── pagination.tsx
│   │   ├── popover.tsx
│   │   ├── progress.tsx
│   │   ├── radio-group.tsx
│   │   ├── resizable.tsx
│   │   ├── scroll-area.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── sidebar.tsx
│   │   ├── skeleton.tsx
│   │   ├── slider.tsx
│   │   ├── sonner.tsx
│   │   ├── switch.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   ├── toggle.tsx
│   │   ├── toggle-group.tsx
│   │   ├── tooltip.tsx
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   │
│   ├── BlogLayout.tsx            # Blog page wrapper
│   ├── IndustryCTA.tsx           # Industry-specific CTAs
│   ├── ModernMenu.tsx            # Main navigation menu
│   ├── NewMenu.tsx               # Alternative menu component
│   ├── PageLayout.tsx            # Generic page wrapper
│   ├── ServiceCTA.tsx            # Service call-to-action
│   ├── ServiceFeatures.tsx       # Service features grid
│   ├── ServiceHeader.tsx         # Service page headers
│   ├── ServiceHero.tsx           # Service hero sections
│   ├── ServiceLayout.tsx         # Service page wrapper
│   ├── Testimonials.tsx          # Customer testimonials
│   └── theme-provider.tsx        # next-themes wrapper
│
├── lib/                          # Utility libraries
│   ├── utils.ts                  # cn() utility for class merging
│   └── posts.ts                  # Blog post utilities
│
├── hooks/                        # Custom React hooks
│   ├── use-mobile.tsx            # Mobile detection hook
│   ├── useMobile.tsx             # Alternative mobile hook
│   ├── useScroll.ts              # Scroll position tracking
│   └── use-toast.ts              # Toast notification hook
│
├── public/                       # Static assets
│   ├── images/
│   │   ├── logo.png
│   │   ├── datacenter-bg.jpg
│   │   ├── server-racks.jpeg
│   │   └── SoftwareSupport.webp
│   ├── placeholder.svg
│   ├── placeholder.jpg
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   ├── placeholder-user.jpg
│   └── manifest.json             # PWA manifest
│
├── scripts/                      # Build/analysis scripts
│   └── analyze-bundle.js         # Bundle size analyzer
│
├── Root-level utility scripts/   # Development utilities (24 files)
│   ├── check-explore-buttons.js
│   ├── clean-setup.js
│   ├── dev-server.js
│   ├── direct-launch.js
│   ├── direct-next.js
│   ├── fix-all-navigation.js
│   ├── fix-consultation-buttons.js
│   ├── fix-explore-buttons.js
│   ├── fix-navigation-issues.js
│   ├── fix-next-path.js
│   ├── link-checker.js
│   ├── next-dev.js
│   ├── resolve-and-run.js
│   ├── resolve-conflict.js
│   ├── setup-new-project.js
│   ├── simple-nextjs-fix.js
│   ├── start-nextjs.js
│   ├── static-link-checker.js
│   ├── system-fix.js
│   ├── universal-link-checker.js
│   └── update-from-temp.js
│
├── Configuration Files
│   ├── next.config.js            # Next.js configuration
│   ├── tailwind.config.ts        # Tailwind CSS configuration
│   ├── tsconfig.json             # TypeScript configuration
│   ├── components.json           # shadcn/ui configuration
│   ├── package.json              # Dependencies
│   ├── .gitignore                # Git exclusions
│   └── banner.png                # Repository banner (480KB)
│
└── Documentation
    └── link-checker-report.md    # Link validation report (118KB)
```

---

## Key Features

### 1. Comprehensive Service Coverage
- **11 Residential Services**: Desktop, laptop, Mac, mobile repair, virus removal, data recovery, etc.
- **12 Business IT Services**: Managed IT, network solutions, cybersecurity, cloud services, etc.
- **5 Industry Verticals**: Healthcare, retail, logistics, warehousing, real estate

### 2. Geographic Targeting
- **8 Major Cities**: Toronto, Brampton, Mississauga, Markham, Vaughan, Richmond Hill, Oakville, Burlington
- **8 Toronto Neighborhoods**: Downtown, North York, Scarborough, Etobicoke, East York, York
- **3 Brampton Neighborhoods**: Bramalea, Springdale, Castlemore

### 3. Modern UI/UX
- **50+ shadcn/ui Components**: Fully accessible, customizable
- **Framer Motion Animations**: Smooth page transitions
- **Responsive Design**: Mobile-first approach with custom breakpoints
- **Dark Mode Support**: (Disabled - forced light mode)

### 4. SEO Optimization
- **Per-Page Metadata**: Custom titles, descriptions, keywords
- **Structured Data**: Schema.org markup for services and locations
- **PWA Support**: Progressive Web App with manifest.json
- **Mobile Optimization**: Touch-friendly, fast loading

### 5. Developer Experience
- **TypeScript**: Full type safety
- **Component Library**: Reusable, composable components
- **Hot Module Replacement**: Fast development feedback
- **Link Validation**: Automated link checking scripts

---

## Development Setup

### Prerequisites
- Node.js 22+ (project uses 22.14.1)
- npm or yarn package manager
- Git for version control

### Installation

```bash
# Clone repository
git clone git@github.com:jtgsystems/computer-repair.git
cd computer-repair

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Development Server
- **URL**: http://localhost:3000
- **Hot Reload**: Enabled
- **TypeScript**: Incremental compilation

### Environment Configuration
No environment variables required for basic operation. The site is primarily static with client-side interactivity.

---

## Architecture

### Next.js App Router
Uses the new App Router architecture (experimental in Next.js 13.4):

- **File-based Routing**: Each folder in `app/` creates a route
- **Layouts**: Nested layouts for shared UI (root, business, industries)
- **Server Components**: Default rendering mode
- **Client Components**: Used for interactive elements (marked with 'use client')

### Component Architecture

```
Root Layout (app/layout.tsx)
├── ThemeProvider (forced light mode)
├── Global Styles (compiled.css + custom.css)
│
├── Page-Specific Layouts
│   ├── BusinessLayout (app/business/layout.tsx)
│   ├── IndustriesLayout (app/industries/layout.tsx)
│   └── ServiceLayout (components/ServiceLayout.tsx)
│
└── Reusable Components
    ├── Navigation (ModernMenu, NewMenu)
    ├── Service Components (ServiceHero, ServiceHeader, ServiceFeatures)
    ├── CTAs (ServiceCTA, IndustryCTA)
    ├── Content (BlogLayout, Testimonials)
    └── UI Components (50+ shadcn/ui components)
```

### Data Flow
- **Static Generation**: Most pages are statically generated at build time
- **Client-Side State**: React hooks for UI state (mobile menu, modals, etc.)
- **No External APIs**: Content is hardcoded in components (no CMS)

### File Structure Conventions
- **page.tsx**: Route endpoint (renders at the URL)
- **layout.tsx**: Shared layout for route segments
- **metadata.ts**: SEO metadata exports
- **loading.tsx**: Loading UI (if needed)
- **error.tsx**: Error boundaries (if needed)

---

## Components

### Custom Components

#### Navigation
- **ModernMenu**: Main navigation with dropdowns, mobile support
- **NewMenu**: Alternative navigation implementation
- **MobileNav**: Mobile-specific navigation (in ui/)

#### Service Pages
- **ServiceLayout**: Wrapper for all service pages
- **ServiceHero**: Hero section with background images
- **ServiceHeader**: Page headers with breadcrumbs
- **ServiceFeatures**: Feature grid with icons
- **ServiceCTA**: Call-to-action sections

#### Industry Pages
- **IndustryCTA**: Industry-specific call-to-action blocks
- **PageLayout**: Generic page wrapper with consistent spacing

#### Blog
- **BlogLayout**: Blog listing and post wrapper

#### Social Proof
- **Testimonials**: Customer testimonial carousel

#### Theme
- **theme-provider**: next-themes wrapper (forced light mode)

### shadcn/ui Components (50 total)

All components follow shadcn/ui patterns:
- Located in `components/ui/`
- Built on Radix UI primitives
- Styled with Tailwind CSS
- Fully TypeScript typed
- Accessible by default

**Component Categories**:
1. **Layout**: Card, Separator, Scroll Area, Resizable
2. **Navigation**: Navigation Menu, Breadcrumb, Pagination, Tabs
3. **Forms**: Input, Textarea, Select, Checkbox, Radio Group, Switch, Form, Label
4. **Buttons**: Button, Toggle, Toggle Group
5. **Overlays**: Dialog, Alert Dialog, Sheet, Drawer, Popover, Hover Card, Tooltip
6. **Feedback**: Alert, Toast, Toaster, Sonner, Progress, Skeleton
7. **Data Display**: Table, Badge, Avatar, Chart, Carousel
8. **Interactive**: Accordion, Collapsible, Command, Context Menu, Dropdown Menu, Menubar
9. **Advanced**: Calendar, Sidebar, Input OTP, Aspect Ratio, Slider

### Custom Hooks

Located in `hooks/`:

1. **use-mobile.tsx / useMobile.tsx**: Detects mobile viewport
   ```typescript
   const isMobile = useMobile();
   ```

2. **useScroll.ts**: Tracks scroll position
   ```typescript
   const { scrollY, scrollDirection } = useScroll();
   ```

3. **use-toast.ts**: Toast notification management
   ```typescript
   const { toast } = useToast();
   toast({ title: "Success", description: "Action completed" });
   ```

### Utility Functions

**lib/utils.ts**:
```typescript
import { cn } from "@/lib/utils";

// Merge Tailwind classes intelligently
<div className={cn("base-class", condition && "conditional-class")} />
```

---

## Routing & Pages

### Route Structure

#### Public Routes
- `/` - Homepage
- `/about` - About page
- `/contact` - Contact page
- `/modern-menu` - Menu preview/testing page

#### Service Routes
- `/services` - Services overview
- `/services/desktop-repair`
- `/services/laptop-repair`
- `/services/mac-repair`
- `/services/mobile-repair`
- `/services/virus-removal`
- `/services/data-recovery`
- `/services/hardware-upgrades`
- `/services/software-troubleshooting`
- `/services/network-setup`
- `/services/_` - Catch-all service route

#### Business Routes
- `/business` - Business services overview
- `/business/managed-it`
- `/business/network-solutions`
- `/business/it-consulting`
- `/business/cybersecurity`
- `/business/cloud-services`
- `/business/backup-recovery`
- `/business/email-collaboration`
- `/business/vdi`
- `/business/security-systems`
- `/business/desktop-repair`
- `/business/procurement`

#### Industry Routes
- `/industries` - Industries overview
- `/industries/healthcare`
- `/industries/retail`
- `/industries/logistics`
- `/industries/warehousing`
- `/industries/real-estate`

#### Service Area Routes
- `/service-areas` - Service areas overview
- `/service-areas/toronto`
  - `/service-areas/toronto/downtown-toronto`
  - `/service-areas/toronto/north-york`
  - `/service-areas/toronto/scarborough`
  - `/service-areas/toronto/etobicoke`
  - `/service-areas/toronto/east-york`
  - `/service-areas/toronto/york`
- `/service-areas/brampton`
  - `/service-areas/brampton/bramalea`
  - `/service-areas/brampton/springdale`
  - `/service-areas/brampton/castlemore`
- `/service-areas/mississauga`
- `/service-areas/markham`
- `/service-areas/vaughan`
- `/service-areas/richmond-hill`
- `/service-areas/oakville`
- `/service-areas/burlington`

#### Blog Routes
- `/blog` - Blog listing
- `/blog/[slug]` - Dynamic blog post pages

### Navigation Patterns

**Internal Links**: Use Next.js `<Link>` component
```typescript
import Link from 'next/link';

<Link href="/services/desktop-repair">Desktop Repair</Link>
```

**External Links**: Standard `<a>` tags with security attributes
```typescript
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  External Site
</a>
```

---

## Styling System

### Tailwind CSS Configuration

**Custom Breakpoints** (tailwind.config.ts):
```typescript
screens: {
  'xs': '375px',   // Extra small mobile
  'sm': '640px',   // Mobile
  'md': '768px',   // Tablet
  'lg': '1024px',  // Desktop
  'xl': '1280px',  // Large desktop
  '2xl': '1536px', // Extra large desktop
}
```

**Container Settings**:
- Centered by default
- Responsive padding: 1rem (mobile) → 6rem (2xl)
- Max-width constraints per breakpoint

**Custom Animations**:
1. **Accordion**: Smooth expand/collapse
   ```typescript
   'accordion-down': '0.2s ease-out'
   'accordion-up': '0.2s ease-out'
   ```

2. **Jitter**: Attention-grabbing shake
   ```typescript
   'jitter': '0.3s infinite'
   ```

### Color System

**Brand Colors** (CSS variables):
```css
--primary: [HSL value]          /* Main brand color: #1D4D84 */
--secondary: [HSL value]        /* Secondary brand color */
--accent: [HSL value]           /* Accent highlights */
--muted: [HSL value]            /* Muted backgrounds */
--destructive: [HSL value]      /* Error/warning states */
```

**Semantic Colors**:
- `background` / `foreground`
- `card` / `card-foreground`
- `popover` / `popover-foreground`
- `border`, `input`, `ring`

**Chart Colors**: 5 predefined chart colors for data visualization

**Sidebar Colors**: Complete sidebar theming variables

### CSS Files

1. **app/globals.css** (2.5KB)
   - Tailwind directives (@tailwind base, components, utilities)
   - CSS variable definitions
   - Global font imports

2. **app/compiled.css** (104KB)
   - Compiled Tailwind output
   - All generated utility classes
   - Component styles

3. **app/styles/custom.css**
   - Additional custom styles
   - Override styles

### Component Styling Patterns

**Using cn() utility**:
```typescript
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "base-styles",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        outline: "border border-primary",
      },
      size: {
        sm: "px-3 py-1",
        lg: "px-6 py-3",
      },
    },
  }
);

<Button className={cn(buttonVariants({ variant, size }), customClass)} />
```

---

## SEO & Metadata

### Root Metadata (app/layout.tsx)

```typescript
export const metadata: Metadata = {
  title: 'PC Mechanix - Toronto IT Services & Solutions',
  description: 'Expert IT services in Toronto and the GTA. Network solutions, managed IT, cybersecurity, cloud services, and more.',
  keywords: 'IT services, Toronto, GTA, PC repair, computer repair, network solutions, managed IT, cybersecurity, cloud services, tech support, IT consulting, business IT solutions',
  generator: 'Next.js',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'PC Mechanix',
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
}
```

### Viewport Configuration

```typescript
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  themeColor: '#1D4D84',
}
```

### Page-Specific Metadata

Some pages include separate `metadata.ts` files:
- `app/business/managed-it/metadata.ts`
- `app/business/network-solutions/metadata.ts`
- `app/business/it-consulting/metadata.ts`
- `app/industries/metadata.ts`

**Example**:
```typescript
// app/business/managed-it/metadata.ts
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Managed IT Services Toronto | PC Mechanix',
  description: 'Comprehensive managed IT services for Toronto businesses...',
  keywords: 'managed IT, Toronto, IT support, proactive monitoring...',
};
```

### PWA Support

**manifest.json** configuration:
```json
{
  "name": "PC Mechanix",
  "short_name": "PC Mechanix",
  "description": "Expert IT services in Toronto and the GTA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1D4D84",
  "icons": [ /* 192x192 and 512x512 icons */ ]
}
```

### Best Practices

1. **Unique Titles**: Each page has a unique, descriptive title
2. **Meta Descriptions**: 150-160 characters, compelling, keyword-rich
3. **Keywords**: Relevant, localized keywords (Toronto, GTA, etc.)
4. **Open Graph**: Add OG tags for social media sharing (if needed)
5. **Schema Markup**: Consider adding LocalBusiness schema

---

## Deployment

### Build Process

```bash
# Production build
npm run build

# Generates:
# - .next/ directory with optimized bundles
# - Static HTML for all pages
# - Optimized assets (images, CSS, JS)
```

### Next.js Configuration

**next.config.js**:
```javascript
const nextConfig = {
  reactStrictMode: true,      // Enables React strict mode
  swcMinify: true,            // SWC-based minification (faster)
  experimental: {
    appDir: true              // Enable App Router
  }
};
```

### Deployment Platforms

**Recommended**: Vercel (optimized for Next.js)
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Preview deployments for pull requests

**Alternative Platforms**:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Node.js

### Deployment Steps (Vercel)

1. **Connect Repository**:
   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Deploy
   vercel
   ```

2. **Configure Project**:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Environment Variables**: None required for this project

4. **Custom Domain**: Configure in Vercel dashboard

### Performance Optimization

- **Image Optimization**: Use Next.js `<Image>` component (not currently used)
- **Code Splitting**: Automatic with Next.js
- **Bundle Analysis**: Run `node scripts/analyze-bundle.js`
- **Lazy Loading**: Components load on demand

---

## Maintenance Scripts

The project includes 24+ utility scripts for maintenance and debugging:

### Link Validation
- **link-checker.js**: Comprehensive link validation
- **static-link-checker.js**: Static file link checker
- **universal-link-checker.js**: Universal link validation
- **link-checker-report.md**: Generated link validation report (118KB)

### Development Servers
- **dev-server.js**: Custom development server
- **direct-launch.js**: Direct Next.js launcher
- **direct-next.js**: Alternative Next.js launcher
- **next-dev.js**: Next.js development wrapper
- **start-nextjs.js**: Production server starter
- **resolve-and-run.js**: Dependency resolver + runner

### Navigation Fixes
- **fix-navigation-issues.js**: Navigation debugging
- **fix-all-navigation.js**: Comprehensive navigation fixes
- **fix-explore-buttons.js**: Explore button fixes
- **fix-consultation-buttons.js**: Consultation button fixes
- **check-explore-buttons.js**: Button validation

### Setup & Configuration
- **clean-setup.js**: Clean install process
- **setup-new-project.js**: New project initialization
- **simple-nextjs-fix.js**: Quick Next.js fixes
- **system-fix.js**: System-level repairs
- **resolve-conflict.js**: Dependency conflict resolver
- **fix-next-path.js**: Next.js path resolution
- **update-from-temp.js**: Update from temporary files

### Usage Examples

```bash
# Validate all links
node link-checker.js

# Start development server
node dev-server.js

# Fix navigation issues
node fix-navigation-issues.js

# Analyze bundle size
node scripts/analyze-bundle.js
```

---

## Best Practices

### Code Organization

1. **Component Structure**:
   ```typescript
   // component-name.tsx
   import { ... } from 'react';

   interface ComponentProps {
     // Props definition
   }

   export function Component({ ...props }: ComponentProps) {
     // Component logic
     return (
       // JSX
     );
   }
   ```

2. **File Naming**:
   - Components: PascalCase (`ServiceHero.tsx`)
   - Utilities: camelCase (`utils.ts`)
   - Routes: lowercase (`page.tsx`, `layout.tsx`)

3. **Import Order**:
   ```typescript
   // External dependencies
   import React from 'react';
   import Link from 'next/link';

   // Internal components
   import { Button } from '@/components/ui/button';

   // Local imports
   import { ServiceFeatures } from './ServiceFeatures';

   // Types
   import type { ServiceProps } from './types';
   ```

### TypeScript Guidelines

1. **Use Type Inference**: Let TypeScript infer types when obvious
2. **Define Interfaces**: For component props and data structures
3. **Avoid `any`**: Use `unknown` or specific types
4. **Enable Strict Mode**: Already enabled in tsconfig.json

### Component Best Practices

1. **Keep Components Small**: Single responsibility principle
2. **Extract Reusable Logic**: Use custom hooks
3. **Use Composition**: Prefer composition over inheritance
4. **Accessibility**: Use semantic HTML and ARIA attributes
5. **Performance**: Memoize expensive computations

### Styling Best Practices

1. **Use Tailwind Utilities**: Prefer Tailwind over custom CSS
2. **Component Variants**: Use CVA for component variations
3. **Responsive Design**: Mobile-first approach
4. **Consistent Spacing**: Use Tailwind spacing scale
5. **Theme Colors**: Use CSS variables for colors

### SEO Best Practices

1. **Unique Metadata**: Each page has unique title/description
2. **Semantic HTML**: Use proper heading hierarchy (h1 → h6)
3. **Alt Text**: All images should have descriptive alt text
4. **Internal Linking**: Link related content together
5. **Mobile Optimization**: Ensure mobile-friendly design

### Git Workflow

1. **Commit Messages**: Use conventional commits format
   ```
   feat: add new service page
   fix: resolve navigation issue
   docs: update README
   style: improve button styling
   refactor: restructure component
   ```

2. **Branch Strategy**:
   - `main`: Production-ready code
   - Feature branches: `feature/service-pages`
   - Bug fixes: `fix/navigation-menu`

3. **Pull Requests**:
   - Descriptive title and description
   - Reference related issues
   - Request reviews before merging

---

## Performance Considerations

### Current Performance

- **Homepage Size**: 29,438 lines (large, consider splitting)
- **Compiled CSS**: 104KB (consider purging unused styles)
- **Component Count**: 50+ shadcn/ui components (tree-shake unused)
- **Image Assets**: Several large images (optimize with Next.js Image)

### Optimization Opportunities

1. **Code Splitting**:
   - Break up large homepage component
   - Lazy load below-fold sections
   - Dynamic imports for heavy components

2. **Image Optimization**:
   - Convert to Next.js `<Image>` component
   - Use WebP format
   - Implement responsive images
   - Add lazy loading

3. **CSS Optimization**:
   - Enable Tailwind CSS purging
   - Remove unused shadcn/ui components
   - Minimize custom CSS

4. **Bundle Size**:
   - Analyze with `scripts/analyze-bundle.js`
   - Remove unused dependencies
   - Use dynamic imports

5. **Caching**:
   - Implement ISR (Incremental Static Regeneration) if needed
   - Add Cache-Control headers
   - Enable CDN caching

---

## Troubleshooting

### Common Issues

1. **Module Not Found**:
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules .next
   npm install
   ```

2. **TypeScript Errors**:
   ```bash
   # Regenerate types
   npm run build
   ```

3. **Styling Issues**:
   - Check Tailwind config paths
   - Verify CSS import order in layout.tsx
   - Clear browser cache

4. **Navigation Issues**:
   - Run `node fix-navigation-issues.js`
   - Check route file structure
   - Verify Link component usage

### Development Tips

1. **Fast Refresh**: Save files to see changes instantly
2. **Error Overlay**: Development errors show in browser overlay
3. **TypeScript**: Use VSCode for IntelliSense and type checking
4. **Debugging**: Use React DevTools browser extension
5. **Link Checking**: Run link-checker.js before deployment

---

## Additional Resources

### Official Documentation
- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com
- **Radix UI**: https://www.radix-ui.com

### Project-Specific Resources
- **Repository**: https://github.com/jtgsystems/computer-repair
- **Link Checker Report**: See `link-checker-report.md` (118KB)
- **Component Library**: Browse `components/ui/` for all available components

### Community & Support
- **Next.js Discord**: https://discord.gg/nextjs
- **React Community**: https://react.dev/community
- **Tailwind Discord**: https://discord.gg/tailwindcss

---

## Project Roadmap

### Potential Improvements

1. **Performance**:
   - Implement Next.js Image component
   - Optimize bundle size
   - Add performance monitoring

2. **Features**:
   - Contact form integration
   - Live chat widget
   - Service booking system
   - Customer testimonial submission

3. **Content**:
   - Blog post creation workflow
   - CMS integration (Contentful, Sanity, etc.)
   - Newsletter signup

4. **SEO**:
   - Add structured data (Schema.org)
   - Implement sitemap.xml
   - Add robots.txt
   - Open Graph images

5. **Analytics**:
   - Google Analytics integration
   - Conversion tracking
   - Heat mapping

6. **Accessibility**:
   - WCAG 2.1 AA compliance audit
   - Keyboard navigation improvements
   - Screen reader testing

---

## Conclusion

This project is a comprehensive IT services website built with modern web technologies. The Next.js App Router provides excellent performance and SEO, while shadcn/ui components ensure accessibility and maintainability.

**Key Strengths**:
- Comprehensive service and location coverage
- Modern, maintainable codebase
- Excellent TypeScript support
- Rich component library
- SEO-optimized structure

**Areas for Growth**:
- Performance optimization (images, bundle size)
- Content management system integration
- Enhanced interactivity (forms, booking)
- Analytics and conversion tracking

**Development Workflow**:
1. Run `npm run dev` for development
2. Use `link-checker.js` to validate links
3. Run `npm run build` before deployment
4. Deploy to Vercel or similar platform

For questions or contributions, refer to the official documentation links above.

---

**Last Updated**: 2025-10-26
**Project Version**: 0.1.0
**Maintained By**: JTGSYSTEMS (https://github.com/jtgsystems)
