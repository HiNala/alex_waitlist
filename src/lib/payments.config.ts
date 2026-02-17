// Centralized payment configuration

export const PAYMENTS = {
  stripe: {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
    currency: "usd",
    unitAmount: 10000, // $100.00 deposit in cents
  },
  deposit: {
    amount: 100,
    retailPrice: 350,
    remainingBalance: 250,
    leadTime: "3-6 months",
    unitsPerProduct: 500,
  },
  products: {
    dogCollar: {
      id: "dog-collar",
      name: "Whisker Smart Dog Collar",
      price: 350,
      deposit: 100,
      description: "Smart collar with GPS tracking, health monitoring, and AI insights for your dog",
    },
    catBundle: {
      id: "cat-bundle",
      name: "Whisker Cat Collar + Smart Bowl",
      price: 350,
      deposit: 100,
      description: "GPS cat collar paired with RFID smart bowl for complete feline care",
    },
  },
};


