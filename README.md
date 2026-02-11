# RailX Landing Page

> The Global Liquidity Layer for Stablecoins

A modern, production-ready landing page for RailX - an instant, capital-efficient stablecoin bridge protocol powered by Solana-speed liquidity pools.

## 🚀 Features

- **Modern Design**: Premium dark theme with glassmorphism effects and smooth animations
- **Responsive**: Fully responsive design optimized for all devices
- **Performance**: Built with Vite for lightning-fast load times
- **Type-Safe**: Written in TypeScript for reliability
- **Accessible**: WCAG-compliant components with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **State Management**: TanStack Query (React Query)

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm (or use [nvm](https://github.com/nvm-sh/nvm))

### Setup

```bash
# Clone the repository
git clone https://github.com/railx-ai/landing-page.git
cd landing-page

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Preview production build
npm run preview

# Run linter
npm run lint

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch
```

### Project Structure

```
landing/
├── src/
│   ├── components/          # React components
│   │   ├── sections/        # Page sections (Hero, Features, etc.)
│   │   └── ui/              # Reusable UI components
│   ├── pages/               # Page components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   └── index.css           # Global styles and theme
├── public/                  # Static assets
└── tailwind.config.ts       # Tailwind configuration
```

## 🎨 Design System

The landing page uses a custom design system with:

- **Primary Color**: Electric cyan-blue (`hsl(187 100% 42%)`)
- **Accent Color**: Bright blue (`hsl(200 100% 52%)`)
- **Theme**: Dark-first with glassmorphism effects
- **Typography**: Inter font family
- **Spacing**: Consistent 8px grid system

## 📱 Sections

- **Hero**: Main value proposition with CTA
- **Problem**: Challenges in current stablecoin bridges
- **Solution**: How RailX solves these problems
- **Solana**: Solana-first architecture benefits
- **Liquidity Providers**: Benefits for LPs
- **Developers**: SDK and integration guide
- **Vision**: Long-term roadmap
- **Roadmap**: Development milestones
- **CTA**: Final call-to-action

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory, ready to be deployed to any static hosting service.

### Recommended Hosting

- **Vercel**: Automatic deployments from GitHub
- **Netlify**: Continuous deployment with previews
- **Cloudflare Pages**: Global CDN with edge computing
- **GitHub Pages**: Free hosting for public repos

## 📄 License

Copyright © 2024 RailX. All rights reserved.

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for more information.

## 📧 Contact

- **Website**: [railx.ai](https://railx.ai)
- **GitHub**: [@railx-ai](https://github.com/railx-ai)
- **Twitter**: [@RailX](https://twitter.com/RailX)

---

Built with ❤️ by the RailX team
