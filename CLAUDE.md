# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

UI2Someone is a React UI component library for social media display cards and contact information sharing. Built as a monorepo with Turborepo, it includes a component library (`@ui2someone/react`) and documentation applications.

## Development Commands

### Core Development

```bash
# Install dependencies
pnpm install

# Start all development servers
pnpm dev

# Build all packages
pnpm build

# Run linting
pnpm lint

# Check TypeScript types
pnpm check-types

# Format code
pnpm format
```

### Component Library (packages/react)

```bash
# Build the library
pnpm build

# Generate new component
pnpm generate:component

# Generate Storybook stories
pnpm generate:stories

# Watch for changes and auto-generate stories
pnpm watch:stories

# Start Storybook
pnpm storybook

# Publish to NPM
pnpm publish:ui
```

### Recommended Development Workflow

```bash
# Terminal 1: Auto-generate stories
cd packages/react && pnpm watch:stories

# Terminal 2: Run Storybook
cd packages/react && pnpm storybook
```

## Architecture Overview

### Monorepo Structure

- `apps/docs/` - Documentation site (Next.js, port 3001)
- `apps/web/` - Main web application (Next.js, port 3000)
- `packages/react/` - Core UI component library
- `packages/eslint-config/` - Shared ESLint configurations
- `packages/typescript-config/` - Shared TypeScript configurations

### Component Library (`packages/react/`)

- `src/components/` - Base UI components
- `src/[platform]/` - Platform-specific components (wechat, x, linkedin, etc.)
- `src/styles/` - Global CSS and semantic color system
- `src/utils/` - Utility functions and helpers
- `src/types/` - TypeScript type definitions

### Key Technologies

- React 19.1.0 with TypeScript 5.8.2
- Tailwind CSS 3.4.17 + DaisyUI 5.0.43
- TSUP for bundling
- Storybook for component documentation
- Turborepo for monorepo management
- PNPM for package management

## Development Guidelines

### Component Development

- Use DaisyUI for UI components
- Export all social display components from `packages/react`
- Follow semantic color system defined in CSS variables
- Use lazy loading for Iconify icons with Suspense wrapper

### Code Style

- No `import { type ComponentProps } from "react";`
- Use Iconify icons with lazy loading pattern:

  ```tsx
  import { lazy, Suspense } from "react";
  const Icon = lazy(() => import("@iconify/react").then(mod => ({ default: mod.Icon })));

  <Suspense fallback={<div className="h-8 w-8" />}>
    <Icon icon="simple-icons:jike" className="h-8 w-8 opacity-80" />
  </Suspense>;
  ```

### Storybook

- Use auto-generation scripts for creating stories
- Import pattern: `import type { Meta, StoryObj } from "@storybook/react-vite";`
- Stories are automatically generated from component props

### Available Components

- **Social Media Cards**: WeChat, X/Twitter, LinkedIn, Facebook, Weibo, Bilibili, YouTube, Twitch, WhatsApp, Line, Jike
- **E-commerce Cards**: Taobao Store, Stripe Product
- **Contact Cards**: vCard Contact
- **Utility Components**: Base cards with semantic colors

## Quality Tools

### Pre-commit Hooks

- ESLint with custom configurations
- Stylelint for CSS/SCSS
- Prettier for code formatting
- TypeScript type checking

### Testing

- Vitest for unit testing
- Playwright for browser testing
- Storybook for component testing

## Publishing

The library is published to NPM as `@ui2someone/react`. Use `pnpm publish:ui` to build and publish the package.
