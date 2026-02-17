import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Package, Zap, BookOpen, Check, Battery, Wifi, Shield, MapPin, Cat, Utensils } from "lucide-react";

export const metadata: Metadata = {
  title: "Cat Collar + Smart Bowl — Whisker",
  description: "The ultimate ecosystem for your cat. GPS tracking collar paired with an RFID smart bowl for complete health and nutrition management.",
};

export default function CatCollarPage() {
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
                The smart collar <span className="text-cocoa-700">cats actually love.</span>
              </h1>
              
              <p className="text-xl text-warmgray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                GPS tracking collar paired with an RFID smart bowl. Monitor location, activity, and nutrition in one seamless system.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <Link href="/pre-order" className="btn-primary w-full sm:w-auto text-center px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  Reserve Bundle for $100
                </Link>
                <div className="text-sm text-warmgray-500 font-medium">
                  Total price $350 · Ships in 3–6 months
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700 border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=1200&h=900&fit=crop"
                  alt="Cat with Whisker collar and smart bowl"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating feature cards */}
              <div className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl hidden md:flex items-center gap-4 animate-float border border-sand-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Wifi className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-warmgray-500 font-medium uppercase tracking-wider">Connectivity</div>
                  <div className="font-bold text-charcoal-900 text-lg">GPS + WiFi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: The Collar */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative aspect-square rounded-[2.5rem] overflow-hidden bg-sand-100 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=800&fit=crop"
                alt="Close up of cat wearing collar"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="w-16 h-16 bg-cocoa-100 rounded-3xl flex items-center justify-center text-cocoa-700 mb-6 shadow-sm">
                <Cat className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-900 leading-tight">
                Featherlight GPS.
              </h2>
              <p className="text-lg text-warmgray-600 leading-relaxed">
                Most GPS trackers are too heavy for cats. Ours weighs just 28 grams and is curved to fit comfortably. Plus, it features a safety breakaway mechanism for peace of mind.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Weighs only 28g (less than a AA battery)",
                  "Safety breakaway release",
                  "10-day battery life",
                  "Curved design for feline comfort"
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

      {/* Feature 2: The Bowl */}
      <section className="py-24 lg:py-32 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-blue-100 rounded-3xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                <Utensils className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-900 leading-tight">
                Nutrition, managed.
              </h2>
              <p className="text-lg text-warmgray-600 leading-relaxed">
                The included Smart Bowl pairs with the collar via RFID. The lid opens only for the right cat—perfect for multi-cat households or special diets.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-bold text-charcoal-900 mb-1 text-lg">RFID Access</div>
                  <p className="text-sm text-warmgray-600">Keeps food stealers out</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-bold text-charcoal-900 mb-1 text-lg">Portion Tracking</div>
                  <p className="text-sm text-warmgray-600">Know exactly how much they eat</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-bold text-charcoal-900 mb-1 text-lg">Freshness</div>
                  <p className="text-sm text-warmgray-600">Sealed lid keeps food fresh</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-bold text-charcoal-900 mb-1 text-lg">Easy Clean</div>
                  <p className="text-sm text-warmgray-600">Dishwasher safe stainless bowl</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-sand-100 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=800&h=800&fit=crop"
                alt="Cat eating from bowl"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Ecosystem */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden bg-sand-100 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1519052537078-e6302a4968ef?w=800&h=800&fit=crop"
                alt="Cat lounging in sun"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="w-16 h-16 bg-purple-100 rounded-3xl flex items-center justify-center text-purple-600 mb-6 shadow-sm">
                <Shield className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-900 leading-tight">
                Complete peace of mind.
              </h2>
              <p className="text-lg text-warmgray-600 leading-relaxed">
                From their morning meal to their midnight adventures, Whisker covers it all. The app brings location, activity, and nutrition data together into one holistic health view.
              </p>
              <ul className="space-y-6 pt-4">
                <li className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sand-100 flex items-center justify-center text-sm font-bold text-charcoal-900 border border-sand-200">1</div>
                  <div>
                    <h4 className="font-bold text-charcoal-900 text-lg">Territory Mapping</h4>
                    <p className="text-warmgray-600">See exactly where your outdoor cat roams.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sand-100 flex items-center justify-center text-sm font-bold text-charcoal-900 border border-sand-200">2</div>
                  <div>
                    <h4 className="font-bold text-charcoal-900 text-lg">Behavior Insights</h4>
                    <p className="text-warmgray-600">Spot changes in sleep or activity that signal illness.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sand-100 flex items-center justify-center text-sm font-bold text-charcoal-900 border border-sand-200">3</div>
                  <div>
                    <h4 className="font-bold text-charcoal-900 text-lg">Diet Management</h4>
                    <p className="text-warmgray-600">Correlate food intake with activity levels.</p>
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
            &quot;Finally, a tracker small enough for my cat that actually works. And the smart bowl stopped my other cat from stealing his food!&quot;
          </blockquote>
          <cite className="not-italic text-lg text-cocoa-200 font-medium">
            — Emily & Luna (Tabby)
          </cite>
        </div>
      </section>

      {/* Specs Grid */}
      <section className="py-24 bg-charcoal-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Technical Specifications</h2>
            <p className="text-white/60 text-lg">Details for the collar and bowl.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="space-y-8">
              <h3 className="font-serif text-2xl text-white/90 border-b border-white/10 pb-4">Smart Collar</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">Weight</div>
                  <div className="font-medium text-lg">28 grams</div>
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">Battery</div>
                  <div className="font-medium text-lg">10 days</div>
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">Connectivity</div>
                  <div className="font-medium text-lg">GPS + WiFi</div>
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">Safety</div>
                  <div className="font-medium text-lg">Breakaway Clasp</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="font-serif text-2xl text-white/90 border-b border-white/10 pb-4">Smart Bowl</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">Capacity</div>
                  <div className="font-medium text-lg">400ml (Dry/Wet)</div>
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">Power</div>
                  <div className="font-medium text-lg">USB-C + Battery</div>
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">Material</div>
                  <div className="font-medium text-lg">Stainless Steel</div>
                </div>
                <div>
                  <div className="text-sm text-white/50 mb-1 uppercase tracking-wider">Technology</div>
                  <div className="font-medium text-lg">RFID Reader</div>
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
              { name: "Whisker Cat Collar", icon: <Cat className="w-10 h-10 text-cocoa-500" strokeWidth={1.5} /> },
              { name: "Smart Bowl Base", icon: <Utensils className="w-10 h-10 text-cocoa-500" strokeWidth={1.5} /> },
              { name: "Stainless Insert", icon: <Package className="w-10 h-10 text-cocoa-500" strokeWidth={1.5} /> }
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
              { q: "Is the collar safe for outdoor cats?", a: "Yes, it features a specially designed breakaway mechanism that releases if the collar gets snagged on a branch or fence." },
              { q: "Can I use the bowl for multiple cats?", a: "The bowl is designed for one cat at a time to prevent food stealing. For multiple cats, we recommend one bowl per cat." },
              { q: "Does it work with microchips?", a: "The bowl works with the included Whisker collar RFID tag. We are working on universal microchip compatibility for a future update." },
              { q: "How long does the battery last?", a: "The collar battery lasts about 10 days. The bowl plugs into the wall but has a battery backup for power outages." }
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
            Upgrade their life.
          </h2>
          <p className="text-xl text-warmgray-600 mb-10 max-w-2xl mx-auto">
            Give your cat the freedom they crave and the health monitoring they need.
          </p>
          <Link href="/pre-order" className="btn-primary inline-flex items-center justify-center px-12 py-5 text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            Reserve Bundle Now
          </Link>
          <p className="mt-6 text-sm text-warmgray-500 font-medium">Fully refundable deposit · Limited availability</p>
        </div>
      </section>
    </div>
  );
}
