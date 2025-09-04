import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <>
            {/* HERO */}
      <section className="bg-white relative overflow-hidden py-16 md:py-20">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 -z-10">
          {/* Organic blob shapes */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-cocoa-300/8 to-gold-300/6 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tl from-sky-300/6 to-cocoa-300/4 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Subtle grid overlay */}
          <div 
            className="absolute inset-0 opacity-[0.01]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(166, 124, 106, 0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
          
          {/* Accent lines */}
          <div className="absolute top-1/4 left-0 w-24 h-px bg-gradient-to-r from-transparent via-cocoa-300/20 to-transparent"></div>
          <div className="absolute top-1/2 right-0 w-32 h-px bg-gradient-to-l from-transparent via-sky-300/20 to-transparent"></div>
          <div className="absolute bottom-1/3 left-1/3 w-20 h-px bg-gradient-to-r from-transparent via-gold-300/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              
              <h1 className="font-serif text-[2.6rem] md:text-6xl lg:text-[3.75rem] text-charcoal-900 leading-tight">
                The future of <span className="relative">
                  <span className="text-transparent bg-gradient-to-r from-cocoa-700 via-cocoa-500 to-gold-500 bg-clip-text">pet care</span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cocoa-300 to-gold-300 rounded-full opacity-50"></div>
                </span> is here
                </h1>
              
              <p className="text-[1.075rem] text-warmgray-600 leading-relaxed max-w-xl">
                Whisker combines a smart collar with AI-powered insights to give you a complete picture of your pet's health, behavior, and location.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#waitlist" className="group inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-cocoa-700 to-cocoa-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  <span>Join Collar Waitlist</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a href="#device" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-cocoa-700 font-medium border border-cocoa-300/30 shadow-lg hover:shadow-xl hover:bg-sand-100 transition-all duration-300">
                  See the Device
                </a>
              </div>
              
              {/* Enhanced trust indicators */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                {[
                  { 
                    icon: (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    ),
                    label: "Vet-approved AI", 
                    color: "bg-green-400" 
                  },
                  { 
                    icon: (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    ),
                    label: "GDPR compliant", 
                    color: "bg-sky-400" 
                  },
                  { 
                    icon: (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    ),
                    label: "Pet-safe hardware", 
                    color: "bg-gold-400" 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm border border-sand-200/40">
                    <div className={`w-5 h-5 ${item.color} rounded-full flex items-center justify-center text-white`}>
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-warmgray-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Enhanced image composition */}
              <div className="relative">
                {/* Main image with enhanced styling */}
                <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl border border-white/50 bg-gradient-to-br from-sand-100 to-cream-100">
                  <Image src="/images/pet1.jpg" alt="Happy pet using Whisker" fill className="object-cover" />
                  
                  {/* Enhanced floating UI element */}
                  <div className="absolute bottom-6 left-4 right-4">
                    <div className="bg-white rounded-xl p-4 shadow-lg border border-white/30">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-charcoal-700">Whisker AI</div>
                          <div className="text-xs text-warmgray-600">Monitoring Max's activity</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          
        {/* Section transition with subtle accent */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cocoa-300/30 to-transparent"></div>
        </section>


      {/* APP PREVIEW */}
      <section id="preview" className="py-16 bg-white relative overflow-hidden">
        
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal-700 leading-tight mb-4">
              The <span className="text-transparent bg-gradient-to-r from-sky-500 to-cocoa-700 bg-clip-text">Whisker Pet App</span>
            </h2>
            
            <p className="text-xl text-warmgray-600 leading-relaxed font-light max-w-2xl mx-auto">
              Your AI companion for comprehensive pet care, powered by collar data.
            </p>
          </div>
          
                    <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
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
                  <div key={idx} className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl flex items-center justify-center text-white shadow-sm">
                      {feature.icon}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-charcoal-700">{feature.title}</h3>
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-cocoa-300/10 text-xs font-medium text-cocoa-700">
                          {feature.highlight}
                        </span>
                      </div>
                      <p className="text-sm text-warmgray-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Stats */}
              <div className="rounded-2xl p-6 border border-sand-200/40">
                <h4 className="font-semibold text-charcoal-700 mb-4">Trusted by Pet Parents</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sky-500 mb-1">10,000+</div>
                    <div className="text-sm text-warmgray-600">Waitlist Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cocoa-700 mb-1">98%</div>
                    <div className="text-sm text-warmgray-600">AI Accuracy</div>
                  </div>
                </div>
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
            
                      {/* Right side iPhone mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* iPhone frame */}
              <div className="w-56 sm:w-64 md:w-72 aspect-[9/19] bg-charcoal-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-sand-100 rounded-[2rem] overflow-hidden relative flex items-center justify-center">
                  {/* Placeholder for app screen recording */}
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-cocoa-500 rounded-2xl flex items-center justify-center text-white mx-auto">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <div className="text-warmgray-600">
                      <div className="font-medium text-charcoal-700 mb-1">Whisker Pet App Preview</div>
                      <div className="text-sm">Screen recording coming soon</div>
                    </div>
                  </div>
                  
                  {/* iOS notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 md:w-32 h-6 bg-charcoal-900 rounded-b-2xl"></div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg border border-white/50">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <svg className="w-4 h-4 text-cocoa-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                  <span className="font-medium text-charcoal-700">iOS & Android</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        
        {/* Section transition */}
        <div className="absolute bottom-0 right-1/3 w-36 h-px bg-gradient-to-l from-transparent via-gold-300/30 to-transparent"></div>
      </section>

      {/* DEVICE PREVIEW */}
      <section id="device" className="py-20 bg-white relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent to-sky-300/20"></div>
        <div className="absolute bottom-1/4 right-0 w-40 h-px bg-gradient-to-l from-transparent to-cocoa-300/20"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto">
                        <div className="lg:col-span-5 relative">
              {/* Enhanced device showcase with real image */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl blur-2xl scale-110"></div>
                
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-cocoa-300/20">
                  <Image src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Smart collar device technology" fill className="object-cover" />
                  <div className="absolute inset-0"></div>
                  
                  {/* Status indicators */}
                  <div className="absolute top-6 right-6 bg-green-400 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      Connected
                    </div>
                  </div>
                  
                  {/* Live data overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-4 shadow-xl border border-white/40">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-warmgray-600">Battery: <span className="font-medium text-charcoal-700">85%</span></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                        <span className="text-warmgray-600">Signal: <span className="font-medium text-charcoal-700">Strong</span></span>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            
                        <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                
                <div className="space-y-6">
                  <h2 className="font-serif text-4xl md:text-5xl text-charcoal-700 leading-tight">
                    Meet the <span className="text-transparent bg-gradient-to-r from-cocoa-700 to-gold-500 bg-clip-text">Whisker Collar</span>
            </h2>
            
                  <p className="text-xl text-warmgray-600 leading-relaxed font-light max-w-xl">
                    A breakthrough companion device that combines GPS tracking, activity monitoring, and health sensors—giving you complete insight into your pet's world.
                  </p>
                </div>
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
                  <div key={idx} className="group flex items-start gap-4 py-3 border-l-2 border-sand-200 pl-4 hover:border-l-cocoa-300 transition-colors duration-300">
                    <div className={`w-10 h-10 ${feature.iconBg} rounded-xl flex items-center justify-center text-white mt-1`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className={`font-semibold ${feature.color} group-hover:text-cocoa-700 transition-colors duration-300`}>
                        {feature.title}
                      </h4>
                      <p className="text-sm text-warmgray-600 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Minimalist specs */}
              <div className="space-y-4 pt-6 border-t border-sand-200">
                <h4 className="font-semibold text-charcoal-700">Technical Specifications</h4>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    { label: "Weight", value: "45g", color: "bg-cocoa-300" },
                    { label: "Battery", value: "7 days", color: "bg-sky-300" },
                    { label: "Range", value: "2km", color: "bg-gold-300" },
                    { label: "Rating", value: "IP67", color: "bg-green-400" }
                  ].map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-2 h-2 ${spec.color} rounded-full`}></div>
                      <span className="text-warmgray-600 text-sm">
                        {spec.label}: <span className="font-medium text-charcoal-700">{spec.value}</span>
                      </span>
                    </div>
                  ))}
                </div>
                
                <p className="text-xs text-warmgray-500 italic pt-2">
                  † Currently in development. Not a medical device. Not for emergencies.
                </p>
              </div>
            </div>
          </div>
                  </div>
        
        {/* Section transition */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-cocoa-300/50 to-transparent"></div>
        </section>

      {/* FEATURES */}
      <section id="features" className="py-20 bg-white relative overflow-hidden">
        {/* Subtle accent lines */}
        <div className="absolute top-1/4 left-1/2 w-px h-20 bg-gradient-to-b from-transparent via-cocoa-300/20 to-transparent"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-px bg-gradient-to-l from-transparent via-sky-300/20 to-transparent"></div>
        
        <div className="container mx-auto">
          <div className="text-center mb-16">
            
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal-700 leading-tight mb-4">
              Why choose <span className="text-transparent bg-gradient-to-r from-cocoa-700 to-gold-500 bg-clip-text">Whisker</span>
            </h2>
            
            <p className="text-xl text-warmgray-600 leading-relaxed font-light max-w-2xl mx-auto">
              The perfect combination of smart hardware and AI creates insights you can't get anywhere else.
            </p>
          </div>

          {/* Two rows of feature cards */}
          <div className="space-y-8 max-w-6xl mx-auto">
            
            {/* First row - 3 cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  ),
                  title: "Real-time insights",
                  description: "Collar sensors feed live data to AI models for instant behavior understanding.",
                  color: "bg-sky-400",
                  highlight: "Available 24/7"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  ),
                  title: "Expert guidance",
                  description: "AI trained on veterinary knowledge with access to real professionals.",
                  color: "bg-cocoa-500",
                  highlight: "Vet-trained AI"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  ),
                  title: "Preventive care",
                  description: "Early health detection and timely checkup reminders.",
                  color: "bg-green-400",
                  highlight: "Peace of mind"
                }
              ].map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-white to-sand-100/30 rounded-2xl p-6 border border-sand-200/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-cocoa-300/10 text-xs font-medium text-cocoa-700">
                      {feature.highlight}
                    </span>
                  </div>
                  <h3 className="font-semibold text-charcoal-700 mb-3">{feature.title}</h3>
                  <p className="text-sm text-warmgray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Second row - 3 cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  ),
                  title: "Personalized nutrition",
                  description: "Custom diet plans based on breed, age, and activity.",
                  color: "bg-gold-400",
                  highlight: "Tailored plans"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  ),
                  title: "Training support",
                  description: "Adaptive training plans with progress tracking.",
                  color: "bg-cocoa-500",
                  highlight: "Progress tracking"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  ),
                  title: "Complete records",
                  description: "All pet information organized in one place.",
                  color: "bg-warmgray-500",
                  highlight: "Centralized"
                }
              ].map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-white to-sand-100/30 rounded-2xl p-6 border border-sand-200/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-cocoa-300/10 text-xs font-medium text-cocoa-700">
                      {feature.highlight}
                    </span>
                  </div>
                  <h3 className="font-semibold text-charcoal-700 mb-3">{feature.title}</h3>
                  <p className="text-sm text-warmgray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-16 bg-gradient-to-r from-sky-400/5 to-cocoa-700/5 rounded-3xl p-8 border border-sand-200/30">
            <div className="text-center mb-6">
              <h3 className="font-serif text-2xl text-charcoal-700 mb-2">Trusted by Pet Parents Worldwide</h3>
              <p className="text-warmgray-600">Join thousands who are already improving their pets' lives</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-400 mb-1">10,000+</div>
                <div className="text-sm text-warmgray-600">Waitlist Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cocoa-500 mb-1">98%</div>
                <div className="text-sm text-warmgray-600">AI Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">24/7</div>
                <div className="text-sm text-warmgray-600">Pet Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-1">500+</div>
                <div className="text-sm text-warmgray-600">Vet Partners</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section transition */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-px bg-gradient-to-r from-transparent via-gold-300/30 to-transparent"></div>
        </section>

      {/* ROADMAP */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-20 h-px bg-gradient-to-l from-transparent via-cocoa-300/20 to-transparent"></div>
        <div className="absolute bottom-1/3 left-1/5 w-24 h-px bg-gradient-to-r from-transparent via-sky-300/20 to-transparent"></div>
        
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal-700 leading-tight mb-4">
              Product <span className="text-transparent bg-gradient-to-r from-sky-500 to-cocoa-700 bg-clip-text">Roadmap</span>
            </h2>
            
            <p className="text-xl text-warmgray-600 leading-relaxed font-light">
              Here's what we're building and when you can expect it.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 right-0 top-4 h-px bg-sand-100"></div>
            
            <div className="grid md:grid-cols-5 gap-12">
              {[
                {
                  phase: "Now",
                  title: "App Beta & Collar Waitlist",
                  status: "active",
                  color: "bg-cocoa-700",
                  progress: 85
                },
                {
                  phase: "Next",
                  title: "Collar Pilot Program",
                  status: "coming",
                  color: "bg-sky-500",
                  progress: 0
                },
                {
                  phase: "Stage 3",
                  title: "Public App Launch",
                  status: "coming",
                  color: "bg-gold-500",
                  progress: 0
                },
                {
                  phase: "Stage 4",
                  title: "Collar Gen 1 Shipping",
                  status: "coming",
                  color: "bg-green-400",
                  progress: 0
                },
                {
                  phase: "Stage 5",
                  title: "Advanced Intelligence",
                  status: "research",
                  color: "bg-cocoa-500",
                  progress: 0
                }
              ].map((phase, index) => (
                <div key={index} className="relative pt-8 text-center">
                  {/* Timeline dot */}
                  <div className={`absolute left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full ${phase.color}`}></div>
                  
                                    {/* Content */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-sand-200/30">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      phase.status === 'active' ? 'bg-cocoa-300/20 text-cocoa-700' :
                      phase.status === 'coming' ? 'bg-sky-300/20 text-sky-500' :
                      'bg-gold-300/20 text-gold-500'
                    }`}>
                      {phase.phase}
                    </div>
                    
                    <h4 className="font-medium text-charcoal-700 mb-2">{phase.title}</h4>
                    
                    {phase.progress > 0 && (
                      <div className="mb-3">
                        <div className="flex justify-between text-xs text-warmgray-600 mb-1">
                          <span>Progress</span>
                          <span>{phase.progress}%</span>
                        </div>
                        <div className="w-full bg-sand-100 rounded-full h-1.5">
                          <div className={`h-1.5 rounded-full ${phase.color}`} style={{width: `${phase.progress}%`}}></div>
                        </div>
                      </div>
                    )}
                    
                    <p className="text-sm text-warmgray-600">
                      {phase.status === 'active' ? 'Building core features and gathering signups' :
                       phase.status === 'coming' ? 'Smart collar pilot with early adopters' :
                       'Advanced AI capabilities and integrations'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        {/* Accent separator to next section */}
        <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cocoa-300/40 to-transparent"></div>
      </section>
        
      {/* PRIVACY & SAFETY */}
      <section id="privacy" className="py-16 bg-white relative overflow-hidden">
        {/* Decorative accent lines */}
        <div className="absolute top-1/3 left-0 w-24 h-px bg-gradient-to-r from-transparent via-cocoa-300/25 to-transparent"></div>
        <div className="absolute bottom-1/3 right-0 w-32 h-px bg-gradient-to-l from-transparent via-sky-300/25 to-transparent"></div>
        
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal-700 leading-tight mb-4">
              Privacy & Safety <span className="text-cocoa-700">by Design</span>
            </h2>
            
            <p className="text-xl text-warmgray-600 leading-relaxed font-light max-w-2xl mx-auto">
              Your pet's data belongs to you. We're built on transparency and user control.
            </p>
          </div>
          
          {/* Compact grid layout */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
                title: "Your Data, Your Control",
                description: "All pet data is encrypted end-to-end and stored securely. You maintain complete ownership and control over your information.",
                features: ["Export data anytime", "Request deletion"],
                color: "bg-cocoa-500"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Transparent Analytics",
                description: "We're clear about what data we collect and why. Our analytics are designed to improve your pet's experience while respecting your privacy.",
                features: ["Privacy Controls", "Adjust settings anytime"],
                color: "bg-sky-400"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                ),
                title: "Educational Guidance",
                description: "Whisker provides educational information only. For medical emergencies, always consult a licensed veterinarian.",
                features: ["Important Health Notice", "Always consult your vet"],
                color: "bg-gold-400"
              }
            ].map((principle, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-sand-200/40 hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 ${principle.color} rounded-2xl flex items-center justify-center text-white shadow-sm mb-4`}>
                  {principle.icon}
                </div>
                <h3 className="font-semibold text-charcoal-700 mb-3">{principle.title}</h3>
                <p className="text-sm text-warmgray-600 leading-relaxed mb-4">{principle.description}</p>
                <div className="space-y-2">
                  {principle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-green-400/20 flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-xs text-warmgray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom info */}
          <div className="text-center space-y-4">
            <a href="/terms" className="text-sm font-medium text-cocoa-700 hover:text-cocoa-500 transition-colors">
              Read our full Terms of Service →
            </a>
            
            {/* Trust badge */}
            <div className="flex justify-center">
              <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-sand-200/50 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center text-green-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-charcoal-700">GDPR & CCPA Compliant</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section transition */}
        <div className="absolute bottom-0 left-1/3 w-32 h-px bg-gradient-to-r from-transparent via-gold-300/30 to-transparent"></div>
      </section>

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
      <section id="faq" className="py-16 bg-white relative overflow-hidden">
        
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal-700 leading-tight mb-4">
              Frequently Asked <span className="text-transparent bg-gradient-to-r from-gold-500 to-cocoa-700 bg-clip-text">Questions</span>
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
              <details key={index} className="group bg-white rounded-lg shadow-sm border border-sand-200/30 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-sand-100/50 transition-colors">
                  <h3 className="font-semibold text-lg text-charcoal-700">{faq.question}</h3>
                  <svg 
                    className="w-5 h-5 text-warmgray-600 transform transition-transform group-open:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-base text-warmgray-600 leading-relaxed">{faq.answer}</p>
            </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}