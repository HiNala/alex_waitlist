# Whisker - Pet Health AI Companion

A modern landing page and waitlist application for Whisker, an AI-powered pet health companion that provides personalized guidance, nutritional insights, and preventative care for pets.

## Overview

Whisker combines veterinary knowledge with artificial intelligence to deliver personalized care for your unique pets. This repository contains the landing page and waitlist application built with Next.js 15 and Tailwind CSS.

## Features

- **Modern UI**: Built with Next.js 15 and Tailwind CSS
- **Full Responsiveness**: Optimized for all device sizes from mobile to desktop
- **Interactive UI Components**:
  - Mobile device mockups for app previews
  - Animated hero section with image carousel
  - Interactive UI screens showcasing app functionality
- **Ecommerce Integration**: Full Stripe payment processing with Apple Pay & Google Pay
- **Waitlist Signup**: Multiple email capture forms with validation
- **A/B Testing Ready**: Two different pre-order experiences
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

Create a `.env.local` file in the project root:

```bash
# Stripe Configuration (Required for pre-order payments)
STRIPE_SECRET_KEY=sk_test_... # or sk_live_... for production
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_... # or pk_live_... for production
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Routes

### Public Pages
- **`/`** - Main landing page with hero, features, roadmap, and waitlist signup
- **`/pre-order`** - Standard ecommerce pre-order page with product gallery and Stripe checkout
- **`/collar-funnel`** - Fun funnel ordering experience with step-by-step personalization (A/B testing)
- **`/privacy`** - Privacy policy page
- **`/terms`** - Terms of service page  
- **`/support`** - Support and contact information

### API Endpoints
- **`/api/checkout`** - Stripe Checkout Session creation for payments
- **`/api/waitlist`** - Waitlist signup handling and storage
- **`/api/kit`** - Kit integration testing endpoint

### Development/Testing
- **`/test-kit`** - UI component testing and kit integration demos

## Project Structure

```
.
├── public/                  # Static files
├── src/                     # Source code
│   ├── app/                 # Next.js app router pages
│   │   ├── api/             # API routes
│   │   │   ├── checkout/    # Stripe payment endpoint
│   │   │   ├── waitlist/    # Waitlist API endpoint
│   │   │   └── kit/         # Kit integration endpoint
│   │   ├── pre-order/       # Standard ecommerce page
│   │   ├── collar-funnel/   # Fun funnel experience (A/B)
│   │   ├── privacy/         # Privacy policy
│   │   ├── terms/           # Terms of service
│   │   ├── support/         # Support page
│   │   ├── test-kit/        # Component testing
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable components
│   │   ├── Header.tsx       # Header component
│   │   ├── Footer.tsx       # Footer component
│   │   ├── WaitlistForm.tsx # Waitlist form component
│   │   ├── SectionPanel.tsx # Reusable panel component
│   │   ├── Timeline.tsx     # Timeline component
│   │   ├── StripeCheckout.tsx # Stripe checkout integration
│   │   ├── PaymentButtons.tsx # Apple/Google Pay buttons
│   │   ├── TestUI.tsx       # UI demo wrapper
│   │   └── ui-screens/      # App UI screen mockups
│   │       ├── HomeScreen.tsx
│   │       ├── HealthChatScreen.tsx
│   │       ├── HealthTimelineScreen.tsx
│   │       └── NutritionScreen.tsx
│   └── lib/                 # Utilities and configuration
│       ├── utils.ts         # Utility functions
│       ├── site.ts          # Site configuration
│       └── payments.config.ts # Payment configuration
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

## Pre-Order Ecommerce Pages

Two beautiful, mobile-responsive ecommerce experiences are included:

- `/pre-order` – Standard ecommerce product detail + checkout
- `/collar-funnel` – Fun funnel ordering flow with soft pastel aesthetics (for A/B testing)

### Payment Integration (Stripe)

We use Stripe Checkout Sessions for payments. Apple Pay, Google Pay, Link, and cards are enabled by default (Stripe automatically exposes them when available).

Setup steps:

1) Install dependencies (already added)

```
npm i stripe
```

2) Add environment variable

Create an environment variable in your hosting platform (Vercel, etc.):

- `STRIPE_SECRET_KEY` – your live or test secret key (e.g., `sk_live_...` or `sk_test_...`)

3) Configure allowed domains in Stripe

In your Stripe Dashboard → Settings → Checkout → Domains, add your site domain so Checkout can redirect back correctly.

4) How it works

- Client components call our API route: `POST /api/checkout`
- API route creates a Stripe Checkout Session with the product details
- User is redirected to `session.url`
- On success/cancel, Stripe redirects back to:
  - Success: `/pre-order?status=success`
  - Cancel: `/pre-order?status=cancelled`

5) Customizing

You can pass extra metadata and custom success/cancel URLs via the `StripeCheckout` component props:

```
<StripeCheckout
  data={{
    productName: "Whisker Smart Collar",
    color: "Charcoal Black",
    size: "Medium",
    quantity: 1,
    price: 199,
    success_url: "https://yourdomain.com/pre-order?status=success",
    cancel_url: "https://yourdomain.com/pre-order?status=cancelled",
    metadata: { campaign: "ab_test_funnel_a" }
  }}
>
  Pre-Order Now
</StripeCheckout>
```

6) Testing

- Use Stripe test keys and cards (e.g., `4242 4242 4242 4242`) to verify flows locally.
- Run locally: `npm run dev` and visit `/pre-order`.

7) Notes

- Our API route is at `src/app/api/checkout/route.ts`
- It sets allowed countries for shipping and allows promotion codes
- It uses price passed from the client (in cents)
- Apple Pay, Google Pay, and Link are automatically available where supported

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

## Kit Email Integration

The website now features complete Kit integration for all email collection forms. This integration includes:

1. **Global Scripts**: Kit's required scripts have been integrated into the app layout
2. **Custom Components**:
   - `KitWaitlistForm.tsx` - A styled component that matches the Whisker design system
   - `KitIntegrationTest.tsx` - A test component demonstrating different integration methods

3. **Key Integration Points**:
   - Main page waitlist form
   - Hero waitlist form
   - WhiskerCta component
   
4. **Form Features**:
   - Email collection
   - Pet type tagging
   - Custom styling matching the Whisker brand
   - Success messages
   
5. **Testing**: A dedicated test page at `/test-kit` showcases all Kit integration methods

For detailed documentation on how to use the Kit integration, see `src/lib/kit-integration.md`.
