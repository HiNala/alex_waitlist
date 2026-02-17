import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata = {
  title: "Mobile App — Whisker",
};

const FEATURES = [
  "AI health assistant",
  "Real-time GPS tracking",
  "Activity dashboard",
  "Feeding management",
  "Behavior insights",
  "Safe zone alerts",
];

export default function MobileAppPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-50 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-5">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-900 leading-tight">
                The Whisker <span className="text-cocoa-700">companion app</span>
              </h1>
              <p className="text-warmgray-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                Pairs with the smart collar to give you complete insight into your pet&apos;s world. Included free with any collar purchase.
              </p>
              <div className="text-sm text-warmgray-600">
                Available on iOS and Android (coming soon)
              </div>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Image src="/images/app-store-badge.svg" alt="Download on the App Store" width={140} height={42} className="h-10 w-auto opacity-60" />
                <Image src="/images/google-play-badge.svg" alt="Get it on Google Play" width={140} height={42} className="h-10 w-auto opacity-60" />
              </div>
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden aspect-[4/3] md:aspect-video relative">
              <Image
                src="https://images.unsplash.com/photo-1551717743-49959800-b15e?w=1200&h=600&fit=crop"
                alt="Person with phone and pet"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-900 mb-2">
              Everything in one <span className="text-cocoa-700">place</span>
            </h2>
            <p className="text-warmgray-600 text-sm md:text-base">Your pet&apos;s data, insights, and controls at your fingertips.</p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="text-cocoa-500 font-bold">&mdash;</span>
                <span className="text-charcoal-900 font-medium">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-cream-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-900 mb-2">
              Get early <span className="text-cocoa-700">access</span>
            </h2>
            <p className="text-warmgray-600 text-sm md:text-base">
              Join the waitlist to be notified when the app launches. Or{" "}
              <Link href="/pre-order" className="text-cocoa-700 hover:text-cocoa-500 underline">reserve a collar</Link> to get the app free when it ships.
            </p>
          </div>
          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
