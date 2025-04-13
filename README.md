# WhiskerAI - Pet Health AI Companion

A modern landing page and waitlist application for WhiskerAI, an AI-powered pet health companion that provides personalized guidance, nutritional insights, and preventative care for pets.

## Overview

WhiskerAI combines veterinary knowledge with artificial intelligence to deliver personalized care for your unique pets. This repository contains the landing page and waitlist application built with Next.js 15 and Tailwind CSS.

## Features

- **Modern UI**: Built with Next.js 15 and Tailwind CSS
- **Full Responsiveness**: Optimized for all device sizes from mobile to desktop
- **Interactive UI Components**:
  - Mobile device mockups for app previews
  - Animated hero section with image carousel
  - Interactive UI screens showcasing app functionality
- **Waitlist Signup**: Multiple email capture forms with validation
- **Performance Optimized**: Fast loading and rendering
- **TypeScript**: Type safety throughout the codebase

## Live Demo

[View Live Demo](https://whiskerai.vercel.app)

## Prerequisites

- Node.js 18.17 or later
- npm or yarn

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/HiNala/alex_waitlist.git
cd alex_waitlist
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
.
├── public/                  # Static files
├── src/                     # Source code
│   ├── app/                 # Next.js app router pages
│   │   ├── api/             # API routes
│   │   │   └── waitlist/    # Waitlist API endpoint
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   └── components/          # Reusable components
│       ├── Header.tsx       # Header component
│       ├── FeaturesSection.tsx # Features section
│       ├── WaitlistForm.tsx # Waitlist form component
│       ├── HeroImageCarousel.tsx # Hero carousel
│       ├── TestUI.tsx       # UI demo wrapper
│       └── ui-screens/      # App UI screen mockups
│           ├── HomeScreen.tsx
│           ├── HealthChatScreen.tsx
│           ├── HealthTimelineScreen.tsx
│           └── NutritionScreen.tsx
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Technology Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://reactjs.org/) - UI library

## Key Components

- **UI Screens**: Interactive mockups showing different app functionality
  - HomeScreen - Main pet dashboard
  - HealthChatScreen - AI health chat interface
  - HealthTimelineScreen - Pet health history timeline
  - NutritionScreen - Nutritional guidance and meal planning
- **HeroImageCarousel**: Engaging image showcase in the hero section
- **TestUI**: Mobile device mockup container for previewing app screens

## Mobile Responsiveness

The site implements a comprehensive mobile-first approach with:
- Responsive typography (`sm`, `md`, `lg` breakpoints)
- Mobile-optimized layouts that adapt to different screen sizes
- Touch-friendly UI elements
- Optimized image loading for different devices

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## Customization

### Tailwind Theme

The site uses a custom color palette based on natural tones:

- `cream`: Light background color
- `charcoal`: Primary text color
- `terracotta`: Primary brand/accent color
- `sage`: Secondary accent color

These can be modified in the `tailwind.config.js` file.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Project Link: [https://github.com/HiNala/alex_waitlist](https://github.com/HiNala/alex_waitlist)
