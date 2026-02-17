import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Package, Zap, BookOpen, Check, Battery, Shield, Heart, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Smart Dog Collar — Whisker",
  description: "The world's most advanced smart dog collar. GPS tracking, health monitoring, and AI behavior insights.",
};

export default function DogCollarPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-cream-50 pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cocoa-100 text-cocoa-800 text-sm font-medium animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cocoa-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cocoa-500"></span>
                </span>
                Pre-order now available
              </div>
              
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-charcoal-900 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                The collar your dog <span className="text-cocoa-700">deserves.</span>
              </h1>
              
              <p className="text-xl text-warmgray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                GPS tracking, health monitoring, and AI insights in one elegant, comfortable design. Peace of mind has never looked this good.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <Link href="/pre-order" className="btn-primary w-full sm:w-auto text-center px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  Reserve for $100
                </Link>
                <div className="text-sm text-warmgray-500 font-medium">
                  Total price $350 · Ships in 3–6 months
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-2">
                <a href="#dog-gps" className="text-xs px-3 py-1 rounded-full border border-sand-200 text-warmgray-600 hover:text-cocoa-700 hover:border-cocoa-300 transition-colors">01 GPS</a>
                <a href="#dog-health" className="text-xs px-3 py-1 rounded-full border border-sand-200 text-warmgray-600 hover:text-cocoa-700 hover:border-cocoa-300 transition-colors">02 Health</a>
                <a href="#dog-comfort" className="text-xs px-3 py-1 rounded-full border border-sand-200 text-warmgray-600 hover:text-cocoa-700 hover:border-cocoa-300 transition-colors">03 Comfort</a>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700 border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=900&fit=crop"
                  alt="Dog wearing Whisker smart collar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating feature cards */}
              <div className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl hidden md:flex items-center gap-4 animate-float border border-sand-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Battery className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-warmgray-500 font-medium uppercase tracking-wider">Battery Life</div>
                  <div className="font-bold text-charcoal-900 text-lg">7 Days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: GPS */}
      <section id="dog-gps" className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative aspect-square rounded-[2.5rem] overflow-hidden bg-sand-100 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1551717743-49959800-b15e?w=800&h=800&fit=crop"
                alt="Tracking dog location on phone"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="w-16 h-16 bg-cocoa-100 rounded-3xl flex items-center justify-center text-cocoa-700 mb-6 shadow-sm">
                <MapPin className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-900 leading-tight">
                Always know where they are.
              </h2>
              <p className="text-lg text-warmgray-600 leading-relaxed">
                Whether they're in the backyard or miles away, Whisker's LTE-enabled GPS keeps you connected. Set custom safe zones and get instant alerts if your dog wanders off.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Real-time location tracking",
                  "Custom safe zones (Geofencing)",
                  "Escape alerts within seconds",
                  "Location history & heatmaps"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-warmgray-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Health */}
      <section id="dog-health" className="py-24 lg:py-32 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-red-100 rounded-3xl flex items-center justify-center text-red-600 mb-6 shadow-sm">
                <Heart className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-900 leading-tight">
                Veterinary insights, <br/> decoded by AI.
              </h2>
              <p className="text-lg text-warmgray-600 leading-relaxed">
                Your dog can't tell you when they're not feeling well, but Whisker can. We monitor key biometrics to catch potential health issues early.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-bold text-charcoal-900 mb-1 text-lg">Heart Rate</div>
                  <p className="text-sm text-warmgray-600">Resting & active monitoring</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-bold text-charcoal-900 mb-1 text-lg">Temperature</div>
                  <p className="text-sm text-warmgray-600">Heatstroke prevention alerts</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-bold text-charcoal-900 mb-1 text-lg">Activity</div>
                  <p className="text-sm text-warmgray-600">Steps, calories, and sleep</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-bold text-charcoal-900 mb-1 text-lg">Behavior</div>
                  <p className="text-sm text-warmgray-600">Scratching & licking detection</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-sand-100 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&h=800&fit=crop"
                alt="Active dog running"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Comfort */}
      <section id="dog-comfort" className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden bg-sand-100 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=800&fit=crop"
                alt="Dog sleeping comfortably"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="w-16 h-16 bg-blue-100 rounded-3xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                <Shield className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-900 leading-tight">
                Designed for daily life.
              </h2>
              <p className="text-lg text-warmgray-600 leading-relaxed">
                We built Whisker to be the most comfortable smart collar ever made. It's lightweight, waterproof, and tough enough for any adventure.
              </p>
              <ul className="space-y-6 pt-4">
                <li className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sand-100 flex items-center justify-center text-sm font-bold text-charcoal-900 border border-sand-200">1</div>
                  <div>
                    <h4 className="font-bold text-charcoal-900 text-lg">Featherlight Design</h4>
                    <p className="text-warmgray-600">Weighs just 42g, perfect for dogs of all sizes.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sand-100 flex items-center justify-center text-sm font-bold text-charcoal-900 border border-sand-200">2</div>
                  <div>
                    <h4 className="font-bold text-charcoal-900 text-lg">Waterproof (IP67)</h4>
                    <p className="text-warmgray-600">Ready for swimming, rain, and mud.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sand-100 flex items-center justify-center text-sm font-bold text-charcoal-900 border border-sand-200">3</div>
                  <div>
                    <h4 className="font-bold text-charcoal-900 text-lg">7-Day Battery</h4>
                    <p className="text-warmgray-600">Spend more time playing and less time charging.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-cocoa-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots"></div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <div className="text-cocoa-300 mb-8">
            <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H11.983C10.8784 16 9.983 16.8954 9.983 18L9.983 21H14.017ZM8 21L8 18C8 15.7909 9.79086 14 12 14H12.017C14.2261 14 16.017 15.7909 16.017 18L16.017 21H20L20 10.6627C20 10.229 19.721 9.83906 19.313 9.69977L12.663 7.42977C12.235 7.28377 11.765 7.28377 11.337 7.42977L4.687 9.69977C4.279 9.83906 4 10.229 4 10.6627L4 21H8Z" /></svg>
          </div>
          <blockquote className="font-serif text-3xl md:text-4xl leading-relaxed mb-8">
            &quot;I never realized how much I didn&apos;t know about my dog&apos;s health until I put this collar on him. It&apos;s a game changer.&quot;
          </blockquote>
          <cite className="not-italic text-lg text-cocoa-200 font-medium">
            — Sarah & Max (Golden Retriever)
          </cite>
        </div>
      </section>

      {/* Specs Grid */}
      <section className="py-24 bg-charcoal-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Technical Specifications</h2>
            <p className="text-white/60 text-lg">Everything you need to know.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="space-y-8">
              <h3 className="font-serif text-2xl text-white/90 border-b border-white/10 pb-4">Hardware</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">Weight</div>
                  <div className="font-medium text-lg">42 grams</div>
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">Dimensions</div>
                  <div className="font-medium text-lg">1.5&quot; x 2.2&quot; x 0.5&quot;</div>
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">Battery</div>
                  <div className="font-medium text-lg">Li-Po 500mAh (7 days)</div>
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">Charging</div>
                  <div className="font-medium text-lg">Magnetic Snap (2 hrs)</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="font-serif text-2xl text-white/90 border-b border-white/10 pb-4">Connectivity & Durability</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">GPS</div>
                  <div className="font-medium text-lg">Multi-band GNSS</div>
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">Cellular</div>
                  <div className="font-medium text-lg">LTE-M (Global)</div>
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">Waterproof</div>
                  <div className="font-medium text-lg">IP67 Rated</div>
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">Bluetooth</div>
                  <div className="font-medium text-lg">BLE 5.2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In the Box */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 mb-16">What&apos;s in the box</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { name: "Whisker Smart Collar", icon: <Package className="w-10 h-10 text-cocoa-500" strokeWidth={1.5} /> },
              { name: "Magnetic Charger", icon: <Zap className="w-10 h-10 text-cocoa-500" strokeWidth={1.5} /> },
              { name: "Quick Start Guide", icon: <BookOpen className="w-10 h-10 text-cocoa-500" strokeWidth={1.5} /> }
            ].map((item) => (
              <div key={item.name} className="p-8 rounded-3xl bg-cream-50 border border-sand-200 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="mb-6 bg-white p-5 rounded-2xl shadow-sm border border-sand-100">{item.icon}</div>
                <div className="font-bold text-charcoal-900 text-lg">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Does it require a subscription?", a: "Yes, a cellular subscription is required for GPS tracking. Plans start at $5/month." },
              { q: "Will it fit my dog?", a: "The collar comes in S, M, and L sizes and is adjustable. It fits dogs from 10lbs to 120lbs." },
              { q: "Is it really waterproof?", a: "Yes! It's IP67 rated, meaning it can be submerged in 1 meter of water for 30 minutes." },
              { q: "How does the deposit work?", a: "You pay $100 today to reserve your unit. The remaining $250 is charged when we ship." }
            ].map((item, idx) => (
              <details key={idx} className="group bg-white rounded-2xl border border-sand-200 overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-charcoal-900 hover:bg-sand-50 transition-colors">
                  {item.q}
                  <span className="transform group-open:rotate-180 transition-transform duration-300">
                    <svg className="w-5 h-5 text-cocoa-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-warmgray-600 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Bottom CTA (Mobile only) or Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-6xl text-charcoal-900 mb-8">
            Join the pack.
          </h2>
          <p className="text-xl text-warmgray-600 mb-10 max-w-2xl mx-auto">
            Secure your Whisker Smart Collar today and be the first to experience the future of pet care.
          </p>
          <Link href="/pre-order" className="btn-primary inline-flex items-center justify-center px-12 py-5 text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            Reserve Yours Now
          </Link>
          <p className="mt-6 text-sm text-warmgray-500 font-medium">Fully refundable deposit · Limited availability</p>
        </div>
      </section>
    </div>
  );
}
