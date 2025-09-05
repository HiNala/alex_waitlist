import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";
import SectionPanel from "@/components/SectionPanel";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
            {/* HERO */}
      <section className="bg-white pt-4 pb-16 md:pt-6 md:pb-24">
        
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-900 leading-tight">
                The future of <span className="text-cocoa-700">pet care</span> is here
                </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-warmgray-600 leading-relaxed max-w-xl">
                Whisker combines a smart collar with AI-powered insights to give you a complete picture of your pet's health, behavior, and location.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a href="#waitlist" className="btn-primary inline-flex items-center justify-center">
                  Join Collar Waitlist
                </a>
                <a href="#device" className="btn-secondary inline-flex items-center justify-center">
                  See the Device
                </a>
              </div>
              
              {/* Simple trust indicators */}
              <div className="flex flex-wrap gap-6 pt-6 text-sm text-warmgray-600">
                <span>Vet-approved AI</span>
                <span>GDPR compliant</span>
                <span>Pet-safe hardware</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden">
                <Image src="/images/pet1.jpg" alt="Happy pet using Whisker" fill className="object-cover" />
              </div>
            </div>
          </div>
          
        </div>
      </section>


      {/* APP PREVIEW */}
      <section id="preview" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 leading-tight mb-4">
              The <span className="text-cocoa-700">Whisker Pet App</span>
            </h2>
            
            <p className="text-lg md:text-xl text-warmgray-600 leading-relaxed max-w-2xl mx-auto">
              Your AI companion for comprehensive pet care, powered by collar data.
            </p>
          </div>
          
                    <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Left side enhanced content */}
            <div className="space-y-8">
              {/* Key benefits */}
              <div className="space-y-6">
                {[
                  { 
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                    ),
                    title: "AI-Powered Assistant",
                    desc: "Get instant, personalized answers about your pet's training, nutrition, and behavior patterns.",
                    highlight: "Available 24/7"
                  },
                  { 
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    ),
                    title: "Health Dashboard",
                    desc: "Monitor your pet's wellness with real-time data from the collar sensors and AI analysis.",
                    highlight: "Early detection"
                  },
                  { 
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    ),
                    title: "Location & Safety",
                    desc: "Always know where your pet is with GPS tracking and customizable safe zone alerts.",
                    highlight: "Peace of mind"
                  }
                                ].map((feature, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="font-semibold text-charcoal-900">{feature.title}</h3>
                    <p className="text-warmgray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            
                          {/* App store badges */}
            <div className="space-y-4">
              <div className="text-sm text-warmgray-600 font-medium">Download when available:</div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="block hover:opacity-80 transition-opacity">
                  <Image src="/images/app-store-badge.svg" alt="Download on the App Store" width={160} height={48} className="h-10 sm:h-12 w-auto" />
                </a>
                <a href="#" className="block hover:opacity-80 transition-opacity">
                  <Image src="/images/google-play-badge.svg" alt="Get it on Google Play" width={160} height={48} className="h-10 sm:h-12 w-auto" />
                </a>
              </div>
              <div className="text-xs text-warmgray-500">
                Join the waitlist to be notified when the app launches
              </div>
            </div>
            </div>
            
                                            {/* Right side simple mockup */}
          <div className="flex justify-center">
            <div className="w-48 sm:w-56 md:w-64 lg:w-64 aspect-[9/19] bg-charcoal-900 rounded-3xl p-2">
              <div className="w-full h-full bg-sand-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-charcoal-700 mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div className="font-medium text-charcoal-700">Coming Soon</div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVICE PREVIEW */}
      <section id="device" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Smart collar device technology" fill className="object-cover" />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 leading-tight">
                  Meet the <span className="text-cocoa-700">Whisker Collar</span>
                </h2>
                
                <p className="text-lg md:text-xl text-warmgray-600 leading-relaxed">
                  A breakthrough companion device that combines GPS tracking, activity monitoring, and health sensors—giving you complete insight into your pet's world.
                </p>
              </div>
              
              {/* Minimalist feature list */}
              <div className="space-y-6">
                {[
                  { 
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    ),
                    title: "Real-time GPS tracking", 
                    desc: "Know where your pet is, always. Set custom safe zones and get instant alerts.",
                    color: "text-sky-500",
                    iconBg: "bg-sky-400"
                  },
                  { 
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                      </svg>
                    ),
                    title: "Activity & behavior insights", 
                    desc: "Understand your pet's daily patterns, energy levels, and behavioral changes.",
                    color: "text-cocoa-700",
                    iconBg: "bg-cocoa-500"
                  },
                  { 
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    ),
                    title: "Health monitoring", 
                    desc: "Temperature tracking and wellness indicators to catch health issues early.",
                    color: "text-green-500",
                    iconBg: "bg-green-400"
                  },
                  { 
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                    ),
                    title: "Seamless app integration", 
                    desc: "All collar data syncs instantly to your phone for easy access and insights.",
                    color: "text-gold-500",
                    iconBg: "bg-gold-400"
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="font-semibold text-charcoal-900">
                      {feature.title}
                    </h4>
                    <p className="text-warmgray-600 leading-relaxed">
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
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 leading-tight mb-4">
              Why choose <span className="text-cocoa-700">Whisker</span>
            </h2>
            
            <p className="text-lg md:text-xl text-warmgray-600 leading-relaxed max-w-2xl mx-auto">
              The perfect combination of smart hardware and AI creates insights you can't get anywhere else.
            </p>
          </div>

          <SectionPanel className="rounded-3xl" accentCorner="tr">
            <div className="space-y-8">
            {/* First row - 3 cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                }
              ].map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-cocoa-500 font-bold">—</span>
                    <h3 className="font-semibold text-charcoal-900">{feature.title}</h3>
                  </div>
                  <p className="text-warmgray-600 leading-relaxed pl-5">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Second row - 3 cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
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
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-cocoa-500 font-bold">—</span>
                    <h3 className="font-semibold text-charcoal-900">{feature.title}</h3>
                  </div>
                  <p className="text-warmgray-600 leading-relaxed pl-5">{feature.description}</p>
                </div>
              ))}
            </div>
            </div>
          </SectionPanel>
        </div>
      </section>

      {/* PRIVACY & SAFETY */}
      <section id="privacy" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 leading-tight mb-4">
              Privacy & Safety <span className="text-cocoa-700">by Design</span>
            </h2>
            
            <p className="text-lg md:text-xl text-warmgray-600 leading-relaxed max-w-2xl mx-auto">
              Your pet's data belongs to you. We're built on transparency and user control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Your Data, Your Control",
                description: "All pet data is encrypted end-to-end and stored securely. You maintain complete ownership and control over your information."
              },
              {
                title: "Transparent Analytics",
                description: "We're clear about what data we collect and why. Our analytics are designed to improve your pet's experience while respecting your privacy."
              },
              {
                title: "Educational Guidance",
                description: "Whisker provides educational information only. For medical emergencies, always consult a licensed veterinarian."
              }
            ].map((principle, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-cocoa-500 font-bold">—</span>
                  <h3 className="font-semibold text-charcoal-900">{principle.title}</h3>
                </div>
                <p className="text-warmgray-600 leading-relaxed pl-5">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 leading-tight mb-4">
              Product <span className="text-cocoa-700">Roadmap</span>
            </h2>
            
            <p className="text-lg md:text-xl text-warmgray-600 leading-relaxed max-w-2xl mx-auto">
              Here's what we're building and when you can expect it.
            </p>
          </div>
          <SectionPanel className="rounded-3xl" accentCorner="bl">
            <Timeline
              items={[
                { label: "Now", title: "App Beta & Collar Waitlist", description: "Building core features and gathering signups", status: "active" },
                { label: "Next", title: "Collar Pilot Program", description: "Smart collar pilot with early adopters", status: "future" },
                { label: "Stage 3", title: "Public App Launch", description: "App available broadly", status: "future" },
                { label: "Stage 4", title: "Collar Gen 1 Shipping", description: "Hardware shipped to customers", status: "future" },
                { label: "Stage 5", title: "Advanced Intelligence", description: "New AI capabilities and integrations", status: "future" },
              ]}
            />
          </SectionPanel>
          
          <div className="text-center mt-8">
            <p className="text-warmgray-600 leading-relaxed max-w-2xl mx-auto">
              Join our waitlist to get early access and be the first to know when each stage launches. We're committed to building something truly special for you and your pet.
            </p>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="pt-8 pb-16 md:pt-10 md:pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="w-24 h-0.5 bg-cocoa-500 mx-auto"></div>
        </div>
      </div>
        
      {/* WAITLIST */}
      <section id="waitlist" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/cute-pet-bg.jpg" alt="Happy pet" fill className="object-cover" />
          <div className="absolute inset-0 bg-charcoal-900/60"></div>
        </div>
        


        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                Join the Whisker Collar Waitlist
              </h2>
              <p className="text-lg text-white/90">
                Be first to know when the smart collar pilot opens.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="pt-16 pb-12 md:pt-20 md:pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 leading-tight mb-4">
              Frequently Asked <span className="text-cocoa-700">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "Is Whisker a substitute for a veterinarian?",
                answer: "No, Whisker provides educational guidance only. For medical emergencies, always contact a licensed veterinarian immediately."
              },
              {
                question: "When will the collar be available?",
                answer: "The Whisker Collar is currently in development. We're planning a pilot program for early adopters—timing will be announced to waitlist members first."
              },
              {
                question: "What data do you collect?",
                answer: "We collect pet profile information, app usage data, and collar sensor data. All data is encrypted and secure. See our Privacy Policy for details."
              },
              {
                question: "Is the collar safe for my pet?",
                answer: "Yes, the Whisker Collar uses pet-safe materials, has no sharp edges, and is designed for comfortable daily wear."
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