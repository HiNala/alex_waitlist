import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import SectionPanel from "@/components/SectionPanel";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white pt-2 pb-12 sm:pt-4 sm:pb-16 md:pt-6 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal-900 leading-tight">
                Understand your pet <span className="text-cocoa-700">like never before</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-warmgray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Whisker combines a smart collar with AI-powered insights to give you a complete picture of your pet&apos;s health, behavior, and location.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center lg:justify-start">
                <Link href="/pre-order" className="btn-primary inline-flex items-center justify-center text-sm sm:text-base py-3 sm:py-3 px-6 sm:px-8">
                  Reserve Yours &mdash; $100 Deposit
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 sm:pt-6 text-xs sm:text-sm text-warmgray-600 justify-center lg:justify-start">
                <span className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-cocoa-500 rounded-full"></div>
                  GPS + health sensors
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-cocoa-500 rounded-full"></div>
                  AI-powered insights
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-cocoa-500 rounded-full"></div>
                  Dog &amp; cat collars
                </span>
              </div>
            </div>
            
            <div className="relative order-first lg:order-last">
              <div className="relative aspect-[4/5] w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-md mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                <Image src="/images/pet1.jpg" alt="Happy pet wearing Whisker collar" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-900 leading-tight mb-3 sm:mb-4">
              The Whisker <span className="text-cocoa-700">Ecosystem</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-warmgray-600 leading-relaxed max-w-2xl mx-auto">
              Everything your pet needs, designed to work together seamlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Smart Dog Collar",
                desc: "GPS tracking, health monitoring, and AI behavior insights for your dog.",
                price: "$350",
                deposit: "$100 deposit",
                image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
                href: "/products/dog-collar"
              },
              {
                title: "Cat Collar + Smart Bowl",
                desc: "GPS collar with RFID-linked smart bowl for portion control and feeding schedules.",
                price: "$350",
                deposit: "$100 deposit",
                image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop",
                href: "/products/cat-collar"
              },
              {
                title: "Whisker App",
                desc: "Your AI companion for comprehensive pet care, powered by collar data.",
                price: "Included",
                deposit: "with any collar",
                image: "https://images.unsplash.com/photo-1551717743-49959800-b15e?w=600&h=400&fit=crop",
                href: "/app"
              }
            ].map((product, idx) => (
              <Link key={idx} href={product.href} className="group bg-white rounded-2xl overflow-hidden border border-sand-200 hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image src={product.image} alt={product.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-charcoal-900 mb-2">{product.title}</h3>
                  <p className="text-sm text-warmgray-600 leading-relaxed mb-4">{product.desc}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-charcoal-900">{product.price}</span>
                      <span className="text-xs text-warmgray-500 ml-2">{product.deposit}</span>
                    </div>
                    <span className="text-cocoa-500 text-sm font-medium group-hover:translate-x-1 transition-transform">Learn more &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DEVICE PREVIEW */}
      <section id="device" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-none mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                <Image src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Smart collar device technology" fill className="object-cover" />
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-1 lg:order-2">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-900 leading-tight">
                  Meet the <span className="text-cocoa-700">Whisker Collar</span>
                </h2>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-warmgray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  A breakthrough companion device that combines GPS tracking, activity monitoring, and health sensors &mdash; giving you complete insight into your pet&apos;s world.
                </p>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {[
                  { 
                    title: "Real-time GPS tracking", 
                    desc: "Know where your pet is, always. Set custom safe zones and get instant alerts."
                  },
                  { 
                    title: "Activity & behavior insights", 
                    desc: "Understand your pet's daily patterns, energy levels, and behavioral changes."
                  },
                  { 
                    title: "Health monitoring", 
                    desc: "Temperature tracking and wellness indicators to catch health issues early."
                  },
                  { 
                    title: "Seamless app integration", 
                    desc: "All collar data syncs instantly to your phone for easy access and insights."
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                      <span className="text-cocoa-500 font-bold">&mdash;</span>
                      <h4 className="font-semibold text-sm sm:text-base text-charcoal-900">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-warmgray-600 leading-relaxed pl-5 max-w-lg mx-auto lg:mx-0">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-900 leading-tight mb-3 sm:mb-4">
              Why choose <span className="text-cocoa-700">Whisker</span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-warmgray-600 leading-relaxed max-w-2xl mx-auto px-4">
              Smart hardware meets AI to create insights you can&apos;t get anywhere else.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real-time insights",
                description: "Collar sensors feed live data to AI models for instant behavior understanding."
              },
              {
                title: "Expert guidance",
                description: "AI trained on veterinary knowledge with access to real professionals."
              },
              {
                title: "Preventive care",
                description: "Early health detection and timely checkup reminders."
              },
              {
                title: "Personalized nutrition",
                description: "Custom diet plans based on breed, age, and activity."
              },
              {
                title: "Training support",
                description: "Adaptive training plans with progress tracking."
              },
              {
                title: "Complete records",
                description: "All pet information organized in one place."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-sand-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-cocoa-500 font-bold">&mdash;</span>
                  <h3 className="font-semibold text-base text-charcoal-900">{feature.title}</h3>
                </div>
                <p className="text-sm text-warmgray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal-900 leading-tight mb-3 sm:mb-4">
              How it <span className="text-cocoa-700">works</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { step: "1", title: "Choose your product", desc: "Pick the smart collar and accessories that fit your pet." },
              { step: "2", title: "Secure your spot", desc: "Place a $100 refundable deposit to reserve your unit." },
              { step: "3", title: "Track everything", desc: "Get your collar, download the app, and start understanding your pet." }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 rounded-full bg-cocoa-700 text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-base text-charcoal-900 mb-2">{item.title}</h3>
                <p className="text-sm text-warmgray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP PREVIEW */}
      <section id="preview" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#1C1C1E]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-3 sm:mb-4">
              The <span className="text-cocoa-300">Whisker App</span>
            </h2>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
              Your AI companion for comprehensive pet care, powered by collar data.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8 order-2 lg:order-1">
              {[
                { 
                  title: "AI-Powered Assistant",
                  desc: "Get instant, personalized answers about your pet's training, nutrition, and behavior patterns."
                },
                { 
                  title: "Health Dashboard",
                  desc: "Monitor your pet's wellness with real-time data from the collar sensors and AI analysis."
                },
                { 
                  title: "Location & Safety",
                  desc: "Always know where your pet is with GPS tracking and customizable safe zone alerts."
                }
              ].map((feature, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="font-semibold text-base sm:text-lg text-white">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-white/60 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            
              <div className="space-y-3 sm:space-y-4">
                <div className="text-xs sm:text-sm text-white/40 font-medium">Download when available:</div>
                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                  <a href="#" className="block hover:opacity-80 transition-opacity">
                    <Image src="/images/app-store-badge.svg" alt="Download on the App Store" width={140} height={42} className="h-8 sm:h-10 md:h-12 w-auto" />
                  </a>
                  <a href="#" className="block hover:opacity-80 transition-opacity">
                    <Image src="/images/google-play-badge.svg" alt="Get it on Google Play" width={140} height={42} className="h-8 sm:h-10 md:h-12 w-auto" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 flex justify-center order-1 lg:order-2">
              <div className="relative">
                <div className="relative w-[280px] h-[570px] sm:w-[300px] sm:h-[610px] md:w-[320px] md:h-[650px] lg:w-[300px] lg:h-[610px] xl:w-[320px] xl:h-[650px]">
                  <div className="absolute inset-0 bg-white rounded-[32px] sm:rounded-[36px] md:rounded-[40px] shadow-2xl">
                    <div className="absolute inset-[8px] sm:inset-[10px] md:inset-[12px] bg-white rounded-[24px] sm:rounded-[26px] md:rounded-[28px] overflow-hidden">
                      <div className="flex justify-between items-center px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-white">
                        <div className="text-[10px] sm:text-xs font-medium text-charcoal-900">9:41</div>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-2 sm:w-5 sm:h-2.5 border border-charcoal-900 rounded-sm">
                            <div className="w-3/4 h-full bg-charcoal-900 rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1 bg-gradient-to-br from-cream-50 to-sand-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
                        <div className="bg-cocoa-500/10 rounded-full p-6 sm:p-8 md:p-10 mb-4 sm:mb-6">
                          <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cocoa-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
                          </svg>
                        </div>
                        <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-charcoal-900 mb-2 sm:mb-3">Coming Soon</h3>
                        <p className="text-xs sm:text-sm text-warmgray-600 leading-relaxed max-w-[200px] sm:max-w-[220px]">
                          Experience the future of pet care with our intelligent companion app.
                        </p>
                        
                        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white rounded-2xl p-3 sm:p-4 shadow-lg border border-sand-200/50">
                          <div className="flex justify-around items-center">
                            {[
                              { label: "Home", active: true },
                              { label: "Health", active: false },
                              { label: "Map", active: false },
                              { label: "More", active: false }
                            ].map((item, idx) => (
                              <div key={idx} className={`flex flex-col items-center gap-1 ${item.active ? 'text-cocoa-700' : 'text-warmgray-500'}`}>
                                <div className={`w-5 h-5 rounded-full ${item.active ? 'bg-cocoa-700' : 'bg-warmgray-500/20'}`}></div>
                                <span className="text-[8px] sm:text-[10px] font-medium">{item.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-charcoal-900/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY & SAFETY */}
      <section id="privacy" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-900 leading-tight mb-3 sm:mb-4">
              Privacy &amp; Safety <span className="text-cocoa-700">by Design</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-warmgray-600 leading-relaxed max-w-2xl mx-auto px-4">
              Your pet&apos;s data belongs to you. We&apos;re built on transparency and user control.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              {
                title: "Your Data, Your Control",
                description: "All pet data is encrypted end-to-end and stored securely. You maintain complete ownership and control over your information."
              },
              {
                title: "Transparent Analytics",
                description: "We're clear about what data we collect and why. Our analytics improve your pet's experience while respecting your privacy."
              },
              {
                title: "Educational Guidance",
                description: "Whisker provides educational information only. For medical emergencies, always consult a licensed veterinarian."
              }
            ].map((principle, index) => (
              <div key={index} className="space-y-2 sm:space-y-3 text-center sm:text-left">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <span className="text-cocoa-500 font-bold">&mdash;</span>
                  <h3 className="font-semibold text-sm sm:text-base text-charcoal-900">{principle.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-warmgray-600 leading-relaxed pl-5 max-w-md mx-auto sm:mx-0">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal-900 leading-tight mb-3 sm:mb-4">
              Product <span className="text-cocoa-700">Roadmap</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-warmgray-600 leading-relaxed max-w-2xl mx-auto px-4">
              Here&apos;s what we&apos;re building and when you can expect it.
            </p>
          </div>
          <SectionPanel className="rounded-2xl sm:rounded-3xl" accentCorner="bl">
            <Timeline
              items={[
                { label: "Now", title: "Pre-Sales Open", description: "Reserve your collar with a $100 refundable deposit", status: "active" },
                { label: "Next", title: "Collar Pilot Program", description: "Smart collar pilot with early adopters", status: "future" },
                { label: "Stage 3", title: "App Launch", description: "Whisker app available on iOS and Android", status: "future" },
                { label: "Stage 4", title: "Collar Shipping", description: "Hardware ships to pre-order customers", status: "future" },
                { label: "Stage 5", title: "Advanced Intelligence", description: "New AI capabilities and integrations", status: "future" },
              ]}
            />
          </SectionPanel>
        </div>
      </section>

      {/* WAITLIST CTA */}
      <section id="waitlist" className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/cute-pet-bg.jpg" alt="Happy pet" fill className="object-cover" />
          <div className="absolute inset-0 bg-charcoal-900/60"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 sm:mb-4 leading-tight">
                Limited to 500 units per product
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto px-4">
                Be first to know when new spots open and get early access pricing.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="pt-12 pb-8 sm:pt-16 sm:pb-12 md:pt-20 md:pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal-900 leading-tight mb-3 sm:mb-4">
              Frequently Asked <span className="text-cocoa-700">Questions</span>
            </h2>
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
                question: "What data do you collect?",
                answer: "We collect pet profile information, app usage data, and collar sensor data. All data is encrypted and you maintain full control. See our Privacy Policy for details."
              },
              {
                question: "Can I get a refund on my deposit?",
                answer: "Yes, deposits are fully refundable at any time before your collar ships."
              }
            ].map((faq, index) => (
              <details key={index} className="group border-b border-sand-200 py-4">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="font-semibold text-base text-charcoal-900">{faq.question}</h3>
                  <svg 
                    className="w-5 h-5 text-warmgray-600 transform transition-transform group-open:rotate-180 flex-shrink-0 ml-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="pt-3">
                  <p className="text-warmgray-600 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
