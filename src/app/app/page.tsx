import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import { Activity, MapPin, Heart, Smartphone, Shield, Check, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Mobile App — Whisker",
  description: "The Whisker companion app. AI-powered insights, real-time tracking, and complete health monitoring for your pet.",
};

export default function MobileAppPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-charcoal-900 pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden text-white">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium animate-fade-in-up border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cocoa-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cocoa-500"></span>
                </span>
                Coming Soon to iOS & Android
              </div>
              
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Your pet's world, <span className="text-cocoa-300">in your pocket.</span>
              </h1>
              
              <p className="text-xl text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                The Whisker app pairs with your smart collar to deliver real-time tracking, health insights, and AI-powered advice.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="flex gap-4">
                  <div className="h-14 w-40 bg-white/10 rounded-xl flex items-center justify-center text-white/50 border border-white/5 cursor-not-allowed hover:bg-white/20 transition-colors">
                    <span className="font-medium">App Store</span>
                  </div>
                  <div className="h-14 w-40 bg-white/10 rounded-xl flex items-center justify-center text-white/50 border border-white/5 cursor-not-allowed hover:bg-white/20 transition-colors">
                    <span className="font-medium">Google Play</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/40 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                Included free with every Whisker collar purchase.
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-2">
                <a href="#app-dashboard" className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-cocoa-300 transition-colors">Dashboard</a>
                <a href="#app-map" className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-cocoa-300 transition-colors">Location</a>
                <a href="#app-ai" className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-cocoa-300 transition-colors">AI Assistant</a>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up flex justify-center lg:justify-end" style={{ animationDelay: "0.5s" }}>
              <div className="relative w-[320px] h-[640px] bg-charcoal-800 rounded-[3rem] p-4 shadow-2xl border-8 border-charcoal-700 transform rotate-2 hover:rotate-0 transition-transform duration-700">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-charcoal-700 rounded-b-2xl z-20"></div>
                <div className="w-full h-full bg-cream-50 rounded-[2.5rem] overflow-hidden relative flex flex-col">
                  {/* Mock App UI - Dashboard */}
                  <div className="p-6 pt-12 space-y-6 flex-1">
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="text-xs text-warmgray-500 font-medium uppercase tracking-wider">Good Morning</div>
                        <div className="font-serif text-2xl text-charcoal-900">Bella</div>
                      </div>
                      <div className="w-10 h-10 bg-cocoa-200 rounded-full border-2 border-white shadow-sm"></div>
                    </div>
                    
                    {/* Status Card */}
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-sand-100 space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="text-sm font-medium text-charcoal-900">Active & Healthy</span>
                        </div>
                        <span className="text-xs text-warmgray-400">Just now</span>
                      </div>
                      <div className="h-24 bg-gradient-to-r from-cocoa-50 to-sand-50 rounded-xl flex items-center justify-center">
                        <Activity className="w-8 h-8 text-cocoa-400" />
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-2xl shadow-sm border border-sand-100">
                        <div className="text-xs text-warmgray-500 mb-1">Steps</div>
                        <div className="text-xl font-bold text-charcoal-900">8,432</div>
                      </div>
                      <div className="bg-white p-4 rounded-2xl shadow-sm border border-sand-100">
                        <div className="text-xs text-warmgray-500 mb-1">Sleep</div>
                        <div className="text-xl font-bold text-charcoal-900">12h 30m</div>
                      </div>
                    </div>
                    
                    {/* Map Preview */}
                    <div className="bg-sand-100 h-32 rounded-2xl relative overflow-hidden">
                       <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=400&fit=crop')] bg-cover bg-center"></div>
                       <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-8 h-8 bg-cocoa-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                           <div className="w-2 h-2 bg-white rounded-full"></div>
                         </div>
                       </div>
                    </div>
                  </div>
                  
                  {/* Bottom Nav */}
                  <div className="h-20 bg-white border-t border-sand-100 flex justify-around items-center px-6">
                    <div className="flex flex-col items-center gap-1 text-cocoa-700">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-center gap-1 text-warmgray-400">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-center gap-1 text-warmgray-400">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-center gap-1 text-warmgray-400">
                      <Smartphone className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Dashboard */}
      <section id="app-dashboard" className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative h-[600px] bg-sand-50 rounded-[3rem] overflow-hidden border border-sand-100 shadow-lg">
               {/* Abstract UI representation */}
               <div className="absolute inset-x-8 top-12 bottom-0 bg-white rounded-t-[2rem] shadow-2xl p-8 space-y-6 border border-sand-100">
                 <div className="h-8 w-1/2 bg-sand-100 rounded-lg"></div>
                 <div className="grid grid-cols-2 gap-4">
                   <div className="h-32 bg-cream-50 rounded-2xl border border-sand-100"></div>
                   <div className="h-32 bg-cream-50 rounded-2xl border border-sand-100"></div>
                 </div>
                 <div className="h-48 bg-sand-50 rounded-2xl border border-sand-100"></div>
                 <div className="h-24 bg-sand-50 rounded-2xl border border-sand-100"></div>
               </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="w-16 h-16 bg-cocoa-100 rounded-3xl flex items-center justify-center text-cocoa-700 mb-6 shadow-sm">
                <Activity className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-900 leading-tight">
                Your pet's day, <br/> at a glance.
              </h2>
              <p className="text-lg text-warmgray-600 leading-relaxed">
                The dashboard gives you an instant overview of your pet's activity, sleep, and location. Spot trends over time and know exactly when something changes.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Daily activity score",
                  "Sleep quality tracking",
                  "Calorie burn estimates",
                  "Behavioral trends"
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

      {/* Feature 2: Map */}
      <section id="app-map" className="py-24 lg:py-32 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8">
              <div className="w-16 h-16 bg-blue-100 rounded-3xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                <MapPin className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-900 leading-tight">
                Total freedom, <br/> total safety.
              </h2>
              <p className="text-lg text-warmgray-600 leading-relaxed">
                Set custom safe zones for your home, yard, or park. Get instant notifications if your pet wanders off, and track them in real-time with GPS.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm">
                  <div className="font-bold text-charcoal-900 mb-1 text-lg">Geofencing</div>
                  <p className="text-sm text-warmgray-600">Create virtual fences anywhere</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm">
                  <div className="font-bold text-charcoal-900 mb-1 text-lg">Live Tracking</div>
                  <p className="text-sm text-warmgray-600">Update location every 2s</p>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] bg-white rounded-[3rem] overflow-hidden border border-sand-200 shadow-lg">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=1000&fit=crop')] bg-cover bg-center opacity-80"></div>
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90"></div>
               
               {/* Floating Map UI Elements */}
               <div className="absolute top-12 left-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/50 flex items-center gap-4">
                 <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                   <Shield className="w-5 h-5" />
                 </div>
                 <div>
                   <div className="text-xs text-warmgray-500 font-medium uppercase tracking-wider">Status</div>
                   <div className="font-bold text-charcoal-900">Inside Safe Zone</div>
                 </div>
               </div>

               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                 <div className="w-16 h-16 bg-cocoa-500/20 rounded-full flex items-center justify-center animate-pulse">
                   <div className="w-4 h-4 bg-cocoa-500 rounded-full border-2 border-white shadow-lg"></div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: AI Health */}
      <section id="app-ai" className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative h-[600px] bg-charcoal-900 rounded-[3rem] overflow-hidden border border-charcoal-800 shadow-2xl">
               {/* Chat UI */}
               <div className="absolute inset-0 p-8 flex flex-col">
                 <div className="flex-1 space-y-6 overflow-hidden">
                   <div className="flex gap-4">
                     <div className="w-10 h-10 bg-cocoa-500 rounded-full flex-shrink-0 flex items-center justify-center text-white font-serif font-bold">W</div>
                     <div className="bg-charcoal-800 p-4 rounded-2xl rounded-tl-none text-white/90 text-sm leading-relaxed border border-white/5">
                       I noticed Bella has been scratching more than usual today. Would you like me to monitor this?
                     </div>
                   </div>
                   <div className="flex gap-4 flex-row-reverse">
                     <div className="w-10 h-10 bg-sand-200 rounded-full flex-shrink-0"></div>
                     <div className="bg-cocoa-600 p-4 rounded-2xl rounded-tr-none text-white text-sm leading-relaxed">
                       Yes, please. Also, how was her sleep last night?
                     </div>
                   </div>
                   <div className="flex gap-4">
                     <div className="w-10 h-10 bg-cocoa-500 rounded-full flex-shrink-0 flex items-center justify-center text-white font-serif font-bold">W</div>
                     <div className="bg-charcoal-800 p-4 rounded-2xl rounded-tl-none text-white/90 text-sm leading-relaxed border border-white/5">
                       She slept 12 hours, which is normal. However, her deep sleep was slightly lower than average.
                     </div>
                   </div>
                 </div>
                 
                 <div className="mt-6 relative">
                   <div className="h-14 bg-charcoal-800 rounded-full border border-white/10 flex items-center px-6 text-white/30 text-sm">
                     Ask Whisker anything...
                   </div>
                   <div className="absolute right-2 top-2 w-10 h-10 bg-cocoa-500 rounded-full flex items-center justify-center text-white">
                     <ArrowRight className="w-5 h-5" />
                   </div>
                 </div>
               </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="w-16 h-16 bg-purple-100 rounded-3xl flex items-center justify-center text-purple-600 mb-6 shadow-sm">
                <Smartphone className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-900 leading-tight">
                An expert in <br/> your pocket.
              </h2>
              <p className="text-lg text-warmgray-600 leading-relaxed">
                Whisker AI analyzes your pet's data to provide personalized health insights. Ask questions, get training tips, and catch potential issues before they become problems.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "24/7 AI health assistant",
                  "Personalized training tips",
                  "Nutrition recommendations",
                  "Veterinary-grade analysis"
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

      {/* Waitlist CTA */}
      <section className="py-24 lg:py-32 bg-cocoa-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-4xl lg:text-5xl mb-8">
            Get early access.
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            The Whisker app launches soon. Join the waitlist to be the first to try it.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
            <WaitlistForm />
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-white/70">
            <span>Prefer hardware first?</span>
            <Link href="/pre-order" className="underline underline-offset-4 hover:text-white">
              Reserve Dog or Cat now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
