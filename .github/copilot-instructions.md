# Copilot Instructions for Softaro Labs Website

## Project Overview
This is a Next.js 15 company portfolio website for Softaro Labs built on **Firebase App Hosting** with **AI-powered contact form analysis** using Google's Genkit. The site showcases services, projects, blog posts, and handles contact forms with intelligent customer analysis.

## Architecture & Key Technologies

### Core Stack
- **Next.js 15** with TypeScript, App Router, and Turbopack dev mode (port 9002)
- **Firebase App Hosting** for deployment (configured in `apphosting.yaml`)
- **Tailwind CSS** with custom design system and shadcn/ui components
- **Google Genkit** for AI flows and contact form analysis
- **Zod** for schema validation across the application

### AI Integration Pattern
- **AI flows** are in `src/ai/flows/` and use Genkit's `defineFlow` and `definePrompt`
- Contact form analysis (`contact-form-analysis.ts`) analyzes customer fit and suggests replies
- AI development server: `npm run genkit:dev` or `npm run genkit:watch`
- Server actions in `src/app/contact/actions.ts` handle form submission and AI analysis

## Development Workflows

### Getting Started
```bash
npm run dev          # Start Next.js dev server (port 9002, with Turbopack)
npm run genkit:dev   # Start Genkit AI development server
npm run build        # Production build
npm run typecheck    # TypeScript checking
```

### Project Structure Patterns
- **Static data** is centralized in `src/lib/data.ts` with TypeScript interfaces in `src/lib/types.ts`
- **UI components** follow shadcn/ui patterns in `src/components/ui/`
- **Layout components** (Header/Footer) are in `src/components/layout/`
- **Page components** use Next.js App Router structure (`src/app/`)
- **Server actions** are co-located with pages (e.g., `src/app/contact/actions.ts`)

## Key Conventions

### Styling & Design System
- Uses **HSL color system** defined in `tailwind.config.ts` and CSS variables
- Custom color palette: Primary blue (`#4787FF`), background (`#F0F2F7`), accent turquoise (`#29A6A6`)
- **Inter font** for both body and headlines via Google Fonts
- Component variants use `class-variance-authority` (cva) pattern
- Responsive design with Tailwind mobile-first approach

### Data Flow Patterns
- **Static content** (services, projects, blog posts, team) is defined in `src/lib/data.ts`
- **Placeholder images** system in `src/lib/placeholder-images.json` with typed interface
- **Form state management** uses React Server Actions with Zod validation
- **AI analysis results** are typed with Zod schemas and returned in form state

### Component Architecture
- **Layout wrapper** in `src/app/layout.tsx` includes global navigation and toast notifications
- **shadcn/ui components** are customized with project's design tokens
- **Server components** by default, client components explicitly marked with 'use client'
- **Error handling** uses Next.js error boundaries and form validation patterns

## Configuration Notes
- **TypeScript & ESLint** errors are ignored during builds (`ignoreBuildErrors: true`)
- **Image domains** for placeholders: `placehold.co`, `images.unsplash.com`, `picsum.photos`
- **Firebase App Hosting** with single instance configuration
- **Development port 9002** to avoid conflicts

## AI-Specific Patterns
When working with AI flows:
- Import and configure flows in `src/ai/dev.ts` 
- Use Genkit's `definePrompt` for structured prompts with input/output schemas
- Server actions should handle AI errors gracefully and return typed form states
- AI responses follow the pattern: `{customerFitAnalysis, suggestedReply, relevantExperts}`

## File Naming & Organization
- React components use PascalCase (e.g., `ContactForm.tsx`)
- Server actions and utilities use camelCase (e.g., `actions.ts`)
- Page routes follow Next.js App Router conventions
- AI flows use descriptive kebab-case (e.g., `contact-form-analysis.ts`)