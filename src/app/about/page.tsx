import { SITE } from "@/lib/site";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About — Whisker",
  description: "Meet the team behind Whisker — smart pet technology that helps you understand your pet like never before.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream-50 to-white section-padding">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-cocoa-700/10 text-cocoa-700 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-6">
            Our Story
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] leading-tight mb-6">
            Every pet deserves to be <span className="text-cocoa-700">understood</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto font-sans">
            Whisker was born from a simple belief: the bond between people and their pets is one of the most important relationships in life. Technology should deepen that connection, not complicate it.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] leading-tight mb-6">
                Our mission
              </h2>
              <div className="space-y-4 text-[#6B6B6B] leading-relaxed font-sans">
                <p>
                  We&apos;re building the most thoughtful pet technology on the planet — hardware and software that works seamlessly together to translate what your pet can&apos;t tell you into insights you can act on.
                </p>
                <p>
                  Our smart collars don&apos;t just track location. They monitor heart rate, temperature, activity patterns, and behavioral changes — then our AI turns that raw data into meaningful, personalized guidance.
                </p>
                <p>
                  For cat owners, we went further. The Whisker Smart Bowl uses RFID to ensure each cat eats from their own bowl, tracks portions, and supports timed feeding — solving real problems in multi-cat households.
                </p>
              </div>
            </div>
            <div className="bg-cream-50 rounded-lg p-8 border border-sand-200">
              <div className="space-y-6">
                {[
                  { label: "Products in development", value: "3" },
                  { label: "Pre-sale units available", value: "1,000" },
                  { label: "Sensors per dog collar", value: "5" },
                  { label: "Battery life (dog collar)", value: "7 days" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-[#6B6B6B] font-sans">{stat.label}</span>
                    <span className="font-serif text-2xl text-cocoa-700">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] leading-tight">
              What we <span className="text-cocoa-700">stand for</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "Pet-first design",
                description: "Every decision starts with the question: is this good for the pet? Comfort, safety, and wellbeing come before features.",
              },
              {
                title: "Privacy by default",
                description: "Your pet's data belongs to you. We encrypt everything, never sell data, and give you full control over what's collected.",
              },
              {
                title: "Transparent honesty",
                description: "We're building something new. We'll always be upfront about what works, what's in progress, and what's coming next.",
              },
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-lg p-6 sm:p-8 shadow-card border border-[#E5E5E5]">
                <div className="w-10 h-10 rounded-lg bg-cocoa-700/10 flex items-center justify-center text-cocoa-700 mb-4">
                  <span className="font-bold font-serif text-lg">{i + 1}</span>
                </div>
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-3">{value.title}</h3>
                <p className="text-[#6B6B6B] leading-relaxed font-sans">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <Image src="/logo/Whisker_button_logo.svg" alt="Whisker" width={64} height={64} className="mx-auto mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] mb-4">Built by {SITE.company}</h2>
          <p className="text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
            Whisker is developed by {SITE.company}, a product studio focused on building thoughtful technology for the people and pets who matter most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products/dog-collar" className="btn-primary inline-flex items-center justify-center py-4 px-8">
              Explore Products
            </Link>
            <Link href="/support" className="btn-secondary inline-flex items-center justify-center py-4 px-8">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
