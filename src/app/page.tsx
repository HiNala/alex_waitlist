import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import { Check, ArrowRight, MapPin, Activity, Heart, Smartphone, Shield, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 bg-cream-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cocoa-100 text-cocoa-800 text-sm font-medium animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cocoa-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cocoa-500"></span>
                </span>
                Pre-sales now open
              </div>
              
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-charcoal-900 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Understand your pet <span className="text-cocoa-700">like never before.</span>
              </h1>
              
              <p className="text-xl text-warmgray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Whisker combines a smart collar with AI-powered insights to give you a complete picture of your pet&apos;s health, behavior, and location.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <Link href="/pre-order" className="btn-primary w-full sm:w-auto text-center px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  Reserve Yours — $100 Deposit
                </Link>
                <Link href="#products" className="text-cocoa-700 font-medium hover:text-cocoa-500 transition-colors flex items-center gap-2">
                  View Products <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <p className="text-sm text-warmgray-500 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
                $100 refundable deposit · $250 at shipment · Ships in 3-6 months
              </p>
              
              <div className="flex flex-wrap gap-6 pt-6 text-sm text-warmgray-600 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cocoa-500" /> GPS Tracking
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cocoa-500" /> Health Monitoring
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cocoa-500" /> AI Insights
                </span>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700 border-4 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=1000&fit=crop" 
                  alt="Happy dog wearing Whisker collar" 
                  fill 
                  className="object-cover"
                  priority 
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute top-10 -right-4 bg-white p-4 rounded-2xl shadow-xl animate-float hidden md:block border border-sand-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cocoa-100 rounded-full flex items-center justify-center text-cocoa-600">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-warmgray-500 font-medium uppercase tracking-wider">Activity</div>
                    <div className="font-bold text-charcoal-900">High Energy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-900 leading-tight mb-6">
              The Whisker <span className="text-cocoa-700">Ecosystem</span>
            </h2>
            <p className="text-xl text-warmgray-600 max-w-2xl mx-auto">
              Everything your pet needs, designed to work together seamlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Smart Dog Collar",
                desc: "GPS tracking, health monitoring, and AI behavior insights for your dog.",
                price: "$350",
                deposit: "$100 deposit",
                tag: "Dog",
                image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop",
                href: "/products/dog-collar",
                cta: "View Dog Collar"
              },
              {
                title: "Cat Collar + Smart Bowl",
                desc: "GPS collar with RFID-linked smart bowl for portion control and feeding schedules.",
                price: "$350",
                deposit: "$100 deposit",
                tag: "Cat",
                image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop",
                href: "/products/cat-collar",
                cta: "View Cat Bundle"
              },
              {
                title: "Whisker App",
                desc: "Your AI companion for comprehensive pet care, powered by collar data.",
                price: "Included",
                deposit: "with any collar",
                tag: "App",
                image: "https://images.unsplash.com/photo-1551717743-49959800-b15e?w=600&h=400&fit=crop",
                href: "/app",
                cta: "Explore App"
              }
            ].map((product, idx) => (
              <Link key={idx} href={product.href} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-sand-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="relative h-64 overflow-hidden bg-sand-50">
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <span className="inline-flex w-fit text-[11px] uppercase tracking-wider font-semibold bg-cream-50 text-cocoa-700 border border-sand-200 rounded-full px-2.5 py-1 mb-3">
                    {product.tag}
                  </span>
                  <h3 className="font-serif text-2xl text-charcoal-900 mb-3">{product.title}</h3>
                  <p className="text-warmgray-600 leading-relaxed mb-6 flex-1">{product.desc}</p>
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between border-t border-sand-100 pt-4">
                      <span className="text-xl font-bold text-charcoal-900">{product.price}</span>
                      <span className="text-sm text-warmgray-500">{product.deposit}</span>
                    </div>
                    <div className="flex items-center text-cocoa-700 font-medium group-hover:text-cocoa-500 transition-colors">
                      {product.cta} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 lg:py-32 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-900 leading-tight mb-6">
              Why choose <span className="text-cocoa-700">Whisker</span>
            </h2>
            <p className="text-xl text-warmgray-600 max-w-2xl mx-auto">
              Smart hardware meets AI to create insights you can&apos;t get anywhere else.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="w-8 h-8 text-cocoa-500" />,
                title: "Real-time insights",
                desc: "Collar sensors feed live data to AI models for instant behavior understanding."
              },
              {
                icon: <Heart className="w-8 h-8 text-cocoa-500" />,
                title: "Preventive care",
                desc: "Early health detection and timely checkup reminders based on vitals."
              },
              {
                icon: <MapPin className="w-8 h-8 text-cocoa-500" />,
                title: "GPS Tracking",
                desc: "Real-time location tracking with custom safe zones and escape alerts."
              },
              {
                icon: <Smartphone className="w-8 h-8 text-cocoa-500" />,
                title: "Seamless App",
                desc: "All your pet's data in one beautiful, easy-to-use application."
              },
              {
                icon: <Shield className="w-8 h-8 text-cocoa-500" />,
                title: "Data Privacy",
                desc: "Your data is encrypted and you maintain full ownership and control."
              },
              {
                icon: <Zap className="w-8 h-8 text-cocoa-500" />,
                title: "Long Battery",
                desc: "Optimized power management for up to 10 days of battery life."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-sand-200 hover:shadow-lg hover:border-cocoa-200 transition-all duration-300">
                <div className="w-14 h-14 bg-cream-50 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl text-charcoal-900 mb-3">{feature.title}</h3>
                <p className="text-warmgray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP PREVIEW (Dark Mode) */}
      <section className="py-24 lg:py-32 bg-charcoal-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <p className="text-sm uppercase tracking-[0.18em] text-cocoa-300/80 font-semibold">Mobile Experience</p>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
                The <span className="text-cocoa-300">Whisker App</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed max-w-xl">
                Your AI companion for comprehensive pet care. Monitor activity, track location, and get personalized health insights—all in one place.
              </p>
              
              <div className="space-y-6 pt-4">
                {[
                  "AI-Powered Health Assistant",
                  "Real-time Location Tracking",
                  "Activity & Sleep Analysis",
                  "Veterinary-Grade Insights"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-cocoa-300" />
                    </div>
                    <span className="text-lg text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <Image src="/images/app-store-badge.svg" alt="Download on the App Store" width={140} height={42} className="h-11 w-auto opacity-75" />
                <Image src="/images/google-play-badge.svg" alt="Get it on Google Play" width={140} height={42} className="h-11 w-auto opacity-75" />
              </div>
            </div>

            <div className="relative order-1 lg:order-2 flex justify-center">
              <div className="relative w-[300px] h-[600px] bg-white rounded-[3rem] p-3 shadow-2xl border-8 border-charcoal-800">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-charcoal-800 rounded-b-2xl z-20"></div>
                <div className="w-full h-full bg-cream-50 rounded-[2.5rem] overflow-hidden relative">
                  {/* Mock App UI */}
                  <div className="p-6 pt-12 space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="w-8 h-8 bg-cocoa-200 rounded-full"></div>
                      <div className="w-8 h-8 bg-white rounded-full shadow-sm"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-8 w-3/4 bg-charcoal-900/10 rounded-lg"></div>
                      <div className="h-4 w-1/2 bg-charcoal-900/5 rounded-lg"></div>
                    </div>
                    <div className="h-48 bg-white rounded-2xl shadow-sm p-4 space-y-3">
                      <div className="h-4 w-1/3 bg-charcoal-900/5 rounded"></div>
                      <div className="flex-1 bg-cocoa-50 rounded-xl flex items-end justify-between p-2 pb-0 gap-2">
                        {[40, 60, 45, 70, 50, 80, 65].map((h, i) => (
                          <div key={i} className="w-full bg-cocoa-400 rounded-t-sm" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 bg-white rounded-2xl shadow-sm"></div>
                      <div className="h-32 bg-white rounded-2xl shadow-sm"></div>
                    </div>
                  </div>
                  {/* Bottom Nav */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-sand-100 flex justify-around items-center px-6">
                    <div className="w-6 h-6 bg-cocoa-500 rounded-full"></div>
                    <div className="w-6 h-6 bg-sand-200 rounded-full"></div>
                    <div className="w-6 h-6 bg-sand-200 rounded-full"></div>
                    <div className="w-6 h-6 bg-sand-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.16em] text-cocoa-700/80 font-semibold mb-3">Simple Process</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-900 leading-tight mb-6">
              How it <span className="text-cocoa-700">works</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 border-t border-dashed border-sand-300 -z-10"></div>
            
            {[
              { step: "1", title: "Choose your product", desc: "Pick the smart collar and accessories that fit your pet." },
              { step: "2", title: "Secure your spot", desc: "Place a $100 refundable deposit to reserve your unit." },
              { step: "3", title: "Track everything", desc: "Get your collar, download the app, and start understanding your pet." }
            ].map((item, idx) => (
              <div key={idx} className="text-center bg-white rounded-3xl border border-sand-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-24 rounded-full bg-cream-50 border-4 border-white shadow-lg flex items-center justify-center mx-auto mb-8 relative z-10">
                  <span className="font-serif text-3xl font-bold text-cocoa-700">{item.step}</span>
                </div>
                <h3 className="font-serif text-2xl text-charcoal-900 mb-4">{item.title}</h3>
                <p className="text-warmgray-600 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST / CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-cocoa-900">
        <div className="absolute inset-0 opacity-30">
          <Image src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1600&h=900&fit=crop" alt="Group of pets" fill className="object-cover mix-blend-overlay" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900 via-cocoa-900/80 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl lg:text-6xl text-white mb-6 leading-tight">
              Limited to 500 units per product
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Be first to know when new spots open and get early access pricing.
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.16em] text-cocoa-700/80 font-semibold mb-3">Pre-Order Questions</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-900 leading-tight mb-6">
              Frequently Asked <span className="text-cocoa-700">Questions</span>
            </h2>
            <p className="text-warmgray-600">Everything you need to know before placing your deposit.</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "How does the deposit model work?",
                answer: "You place a $100 refundable deposit to reserve your unit. The remaining $250 is charged when your collar ships, within 3-6 months."
              },
              {
                question: "Is Whisker a substitute for a veterinarian?",
                answer: "No, Whisker provides educational guidance only. For medical emergencies, always contact a licensed veterinarian immediately."
              },
              {
                question: "When will the collar ship?",
                answer: "We expect to ship within 3-6 months of your pre-order. Exact timing will be communicated to all pre-order customers."
              },
              {
                question: "What's included with the cat bundle?",
                answer: "The cat bundle includes the smart GPS collar and the RFID-linked smart bowl. The bowl only opens for the cat wearing the matched collar."
              },
              {
                question: "Can I get a refund on my deposit?",
                answer: "Yes, deposits are fully refundable at any time before your collar ships."
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-white rounded-2xl border border-sand-200 overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-lg text-charcoal-900 hover:bg-sand-50 transition-colors">
                  {faq.question}
                  <span className="transform group-open:rotate-180 transition-transform duration-300">
                    <svg className="w-5 h-5 text-cocoa-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-warmgray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
