export const PRODUCTS = {
  dogCollar: {
    id: "dog-collar",
    slug: "dog-collar",
    name: "Whisker Smart Dog Collar",
    shortName: "Dog Collar",
    retailPrice: 350,
    deposit: 100,
    depositCents: 10000,
    remainingBalance: 250,
    description:
      "GPS tracking, biometric sensors, activity monitoring, and AI-powered health insights — all in one lightweight, water-resistant collar.",
    features: [
      "Real-time GPS tracking",
      "Heart rate & temperature monitoring",
      "Activity & sleep tracking",
      "AI behavioral insights",
      "Geofencing & safe zone alerts",
      "7-day battery life",
      "Water-resistant (IP67)",
      "Companion app included",
    ],
    sizes: [
      { id: "small", name: "Small", range: "10–14 in", forBreeds: "Toy & small breeds" },
      { id: "medium", name: "Medium", range: "14–20 in", forBreeds: "Medium breeds" },
      { id: "large", name: "Large", range: "20–26 in", forBreeds: "Large & giant breeds" },
    ],
    colors: [
      { id: "charcoal", name: "Midnight Black", tailwind: "bg-charcoal-900" },
      { id: "cocoa", name: "Cocoa Brown", tailwind: "bg-cocoa-700" },
      { id: "sand", name: "Desert Sand", tailwind: "bg-sand-200" },
    ],
    specs: {
      battery: "Up to 7 days",
      weight: "38 g (S) / 42 g (M) / 48 g (L)",
      waterResistance: "IP67",
      connectivity: "Bluetooth 5.3 + LTE-M",
      sensors: "GPS, accelerometer, gyroscope, heart rate, temperature",
      charging: "Magnetic USB-C dock",
      compatibility: "iOS 16+ / Android 12+",
    },
    whatsIncluded: [
      "Whisker Smart Dog Collar",
      "Magnetic USB-C charging dock",
      "Quick start guide",
      "1-year limited warranty",
    ],
  },
  catBundle: {
    id: "cat-collar",
    slug: "cat-collar",
    name: "Whisker Cat Collar + Smart Bowl",
    shortName: "Cat Collar + Bowl",
    retailPrice: 350,
    deposit: 100,
    depositCents: 10000,
    remainingBalance: 250,
    description:
      "A GPS-enabled cat collar with RFID identification paired with a smart bowl that controls portions, tracks meals, and only opens for the right cat.",
    features: [
      "GPS tracking for indoor & outdoor cats",
      "RFID-enabled collar identification",
      "Smart bowl with automatic lid",
      "Portion sensing & meal tracking",
      "Timed feeding schedules",
      "Multi-cat household support",
      "Lightweight breakaway collar design",
      "Companion app included",
    ],
    collarSpecs: {
      battery: "Up to 5 days",
      weight: "22 g",
      waterResistance: "IP65",
      connectivity: "Bluetooth 5.3 + LTE-M",
      sensors: "GPS, accelerometer, RFID",
      charging: "Magnetic USB-C dock",
      safety: "Breakaway buckle",
    },
    bowlSpecs: {
      capacity: "400 ml dry food / 300 ml wet food",
      power: "USB-C rechargeable, 30-day battery",
      sensors: "RFID reader, load cell (weight sensor)",
      lid: "Motorized automatic lid",
      materials: "Food-safe stainless steel + BPA-free housing",
      compatibility: "iOS 16+ / Android 12+",
    },
    whatsIncluded: [
      "Whisker GPS Cat Collar",
      "Whisker Smart Bowl with automatic lid",
      "2x Magnetic USB-C charging docks",
      "Quick start guide",
      "1-year limited warranty",
    ],
  },
} as const;

export type ProductSlug = "dog-collar" | "cat-collar";

export function getProductBySlug(slug: string) {
  return Object.values(PRODUCTS).find((p) => p.slug === slug) || null;
}

// Legacy export for backward compatibility
export const PAYMENTS = {
  stripe: {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
    currency: "usd" as const,
    unitAmount: 10000, // $100 deposit in cents
  },
  product: {
    name: "Whisker Pre-Order Deposit",
    price: 100,
    description: "$100 refundable deposit toward your Whisker product (retail $350)",
  },
};
