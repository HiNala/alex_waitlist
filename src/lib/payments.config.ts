// Centralized payment configuration
// Fill in your publishable keys in the environment for runtime safety.

export const PAYMENTS = {
  // Stripe settings
  stripe: {
    // Loaded from env at runtime in the browser for @stripe/stripe-js
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
    // Server secret key is STRIPE_SECRET_KEY (never expose on client)
    currency: "usd",
    unitAmount: 20000, // $200.00 in cents
  },
  product: {
    name: "Whisker Smart Collar - Pre-Order",
    price: 200, // $200
    description: "Smart collar with GPS tracking, health monitoring, and AI insights for your pet",
  },
};


