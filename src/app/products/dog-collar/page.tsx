import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Dog Collar — Whisker",
};

const features = [
  "GPS tracking",
  "Health monitoring (temperature, heart rate)",
  "Activity tracking",
  "AI behavior insights",
  "Safe zone alerts",
  "Waterproof (IP67)",
  "7-day battery life",
];

const specs = [
  { label: "Weight", value: "42g" },
  { label: "Battery", value: "7 days" },
  { label: "Water resistance", value: "IP67" },
  { label: "Connectivity", value: "BLE + LTE" },
  { label: "Sizes", value: "S / M / L" },
];

const colors = ["Charcoal", "Cocoa Brown", "Desert Sand"];

export default function DogCollarPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-warmgray-600 mb-8">
          <Link href="/" className="hover:text-cocoa-500 transition-colors">Home</Link>
          <span>—</span>
          <Link href="/products" className="hover:text-cocoa-500 transition-colors">Products</Link>
          <span>—</span>
          <span className="text-charcoal-900">Dog Collar</span>
        </nav>

        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-sand-200">
            <Image
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=600&fit=crop"
              alt="Dog wearing smart collar outdoors"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-3">
              Smart Dog Collar
            </h1>
            <p className="text-warmgray-600 mb-4">
              GPS, health, and activity tracking in one elegant collar. Peace of mind for you and your pet.
            </p>
            <div className="text-charcoal-900 font-semibold mb-2">
              $350 total · $100 refundable deposit
            </div>
            <p className="text-sm text-warmgray-600 mb-4">Ships in 3–6 months</p>
            <p className="text-sm text-warmgray-600 mb-6">
              Colors: {colors.join(", ")}
            </p>
            <Link href="/pre-order" className="btn-primary inline-block">
              Pre-Order Now
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-6">Features</h2>
          <ul className="grid sm:grid-cols-2 gap-2 text-warmgray-600">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-cocoa-500">•</span>
                {f}
              </li>
            ))}
          </ul>
        </section>

        {/* Specs */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-6">Specifications</h2>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {specs.map(({ label, value }) => (
              <div key={label} className="flex justify-between py-2 border-b border-sand-200">
                <span className="text-warmgray-600">{label}</span>
                <span className="text-charcoal-900 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-sand-200 rounded-xl p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-charcoal-900 mb-3">
            Ready to give your dog smarter care?
          </h2>
          <p className="text-warmgray-600 mb-6">Reserve yours today with a $100 refundable deposit.</p>
          <Link href="/pre-order" className="btn-primary inline-block">
            Pre-Order Now
          </Link>
        </section>
      </div>
    </div>
  );
}
