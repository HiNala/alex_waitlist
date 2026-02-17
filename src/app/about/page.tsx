import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "About — Whisker" };

export default function AboutPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[280px] md:h-[400px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1450778869180-e77d3c79de28?w=1200&h=500&fit=crop"
            alt="Person with dog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal-900/40" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="font-serif text-3xl md:text-5xl text-white mb-4">
            Digital Studio Labs, LLC
          </h1>
          <p className="font-serif text-xl md:text-2xl text-cream-50 max-w-2xl leading-relaxed">
            Building the most thoughtful pet technology on the planet—bridging the gap between pet owners and their pets&apos; inner lives.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="container mx-auto max-w-2xl py-16 px-6">
        <h2 className="font-serif text-2xl text-charcoal-900 mb-4">Our Vision</h2>
        <p className="text-warmgray-600 leading-relaxed">
          A world where every pet owner truly understands their pet&apos;s health, happiness, and needs through smart, beautiful technology.
        </p>
      </section>

      {/* Values */}
      <section className="bg-sand-200/60 border-t border-sand-200">
        <div className="container mx-auto max-w-2xl py-16 px-6">
          <h2 className="font-serif text-2xl text-charcoal-900 mb-4">Our Approach</h2>
          <p className="text-warmgray-600 leading-relaxed">
            We are a small team, passionate about pets and technology. We believe the best products come from people who care deeply—and we care about helping you connect with your pet in meaningful new ways.
          </p>
          <Link
            href="/"
            className="inline-block mt-8 text-cocoa-700 hover:text-cocoa-500 font-medium transition-colors"
          >
            Back to home
          </Link>
        </div>
      </section>
    </div>
  );
}
