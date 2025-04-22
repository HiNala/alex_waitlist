'use client';

import Image from 'next/image';
import Header from "../components/Header";
import WaitlistForm from "../components/WaitlistForm";
import KitWaitlistForm from "../components/KitWaitlistForm";
import FeaturesSection from "../components/FeaturesSection";
import TestUI from "../components/TestUI";
import HeroImageCarousel from "../components/HeroImageCarousel";
import NutritionScreen from "@/components/ui-screens/NutritionScreen";
import HealthChatScreen from "@/components/ui-screens/HealthChatScreen";
import HealthTimelineScreen from "@/components/ui-screens/HealthTimelineScreen";
import WhiskerCta from '@/components/WhiskerCta';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-charcoal overflow-hidden">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-16 sm:pt-20 md:pt-24 pb-16 md:pb-32 overflow-hidden" id="home">
          {/* Decorative Elements */}
          <div className="absolute top-40 right-0 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-sage/10 rounded-full blur-2xl -z-10"></div>
          <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-terracotta/10 rounded-full blur-xl -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="md:w-1/2 animate-fade-in-up">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Unique Pets Deserve <span className="text-terracotta relative after:content-[''] after:absolute after:-z-10 after:h-4 after:w-full after:bottom-0 after:left-0 after:bg-terracotta/10 after:skew-x-6">Unique Care</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-charcoal/80 mb-4 sm:mb-6 font-light">
                  Your pet&apos;s personal health advisor, powered by AI
                </p>
                <p className="mb-6 sm:mb-8 text-base sm:text-lg">
                  Whisker combines veterinary knowledge with artificial intelligence to provide personalized guidance, nutritional insights, and preventative care for your one-of-a-kind companion.
                </p>
                
                {/* CTA for desktop */}
                <div className="hidden md:flex space-x-4 mb-8">
                  <a 
                    href="#hero-waitlist" 
                    className="inline-block bg-terracotta hover:bg-terracotta-dark text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    Join the Waitlist
                  </a>
                  <a 
                    href="#features" 
                    className="inline-block bg-white hover:bg-gray-50 text-charcoal font-medium px-8 py-3 rounded-full transition-colors shadow-md"
                  >
                    Learn More
                  </a>
                </div>
                
                {/* Social proof */}
                <div className="hidden sm:flex items-center space-x-4 text-charcoal/70 text-sm mb-6 md:mb-0 md:mt-8">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <p>Joined by <span className="font-semibold">1,200+</span> pet owners</p>
                </div>
              </div>
              
              <div className="md:w-1/2 relative">
                <HeroImageCarousel />
                
                {/* Mobile CTA */}
                <div className="mt-8 flex flex-col space-y-3 md:hidden">
                  <a 
                    href="#hero-waitlist" 
                    className="bg-terracotta hover:bg-terracotta-dark text-white font-medium px-6 py-3 rounded-full transition-colors shadow-lg text-center"
                  >
                    Join the Waitlist
                  </a>
                  <a
                    href="#features" 
                    className="bg-white hover:bg-gray-50 text-charcoal font-medium px-6 py-3 rounded-full transition-colors shadow-md text-center"
                  >
                    Learn More
                  </a>
                </div>
                
                {/* Mobile social proof */}
                <div className="flex sm:hidden items-center justify-center space-x-4 text-charcoal/70 text-sm mt-6 mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs">Joined by <span className="font-semibold">1,200+</span> pet owners</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white -z-5">
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-24 left-0 w-full">
              <path d="M0 24L60 32C120 40 240 56 360 64C480 72 600 72 720 56C840 40 960 8 1080 0C1200 -8 1320 8 1380 16L1440 24V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V24Z" fill="#F9F5F0"/>
            </svg>
          </div>
        </section>

        {/* Hero Waitlist Form - Prominent Signup */}
        <section id="hero-waitlist" className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage/10 rounded-full blur-2xl -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-charcoal mb-4 sm:mb-6">
                Be First To Experience <span className="text-terracotta">The Whisker App</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-charcoal/80 mb-3 sm:mb-4">
                Join our exclusive waitlist today and receive 3 months of premium features for free!
              </p>
              <p className="text-base sm:text-lg text-charcoal/70">
                Limited to the first 1,000 pet parents who sign up
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <form 
                action="https://app.kit.com/forms/7916923/subscriptions" 
                className="seva-form formkit-form bg-gradient-to-r from-terracotta/20 to-sage/20 p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 transform hover:scale-[1.01] transition-all duration-300" 
                method="post" 
                data-sv-form="7916923" 
                data-uid="0f72656b6b" 
                data-format="inline" 
                data-version="5"
              >
                <div data-style="clean">
                  <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                  <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields flex flex-col md:flex-row gap-4 mb-4 sm:mb-6">
                    <div className="formkit-field flex-1">
                      <input 
                        className="formkit-input flex-1 px-4 sm:px-6 py-4 sm:py-5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-terracotta text-base sm:text-lg shadow-sm w-full" 
                        name="email_address" 
                        aria-label="Email" 
                        placeholder="Enter your email address" 
                        required 
                        type="email"
                      />
                    </div>
                    <button 
                      data-element="submit" 
                      className="formkit-submit formkit-submit bg-terracotta hover:bg-terracotta-dark text-white font-bold px-6 sm:px-10 py-4 sm:py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-base sm:text-lg flex-shrink-0"
                    >
                      <div className="formkit-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <span>Join Waitlist</span>
                    </button>
                  </div>
                  <div className="flex items-center justify-center text-xs sm:text-sm text-charcoal/70">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5 mr-2 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Your information is secure. We never share your data.</span>
                  </div>
                </div>
              </form>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
                <div className="flex flex-col items-center bg-white p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-terracotta/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2">Early Access</h3>
                  <p className="text-center text-charcoal/70 text-xs sm:text-sm">First to test new features</p>
                </div>
                
                <div className="flex flex-col items-center bg-white p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sage/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2">Premium Benefits</h3>
                  <p className="text-center text-charcoal/70 text-xs sm:text-sm">3 months free premium</p>
                </div>
                
                <div className="flex flex-col items-center bg-white p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-terracotta/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2">Development Updates</h3>
                  <p className="text-center text-charcoal/70 text-xs sm:text-sm">Exclusive product news</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <h4 className="text-lg sm:text-xl font-medium mb-2">Co-Creating the Future of Pet Care</h4>
                <p className="text-charcoal/80 text-sm sm:text-base">
                  We're building the Whisker App with the insight of vets, animal experts, and devoted pet parents like you. Share your ideas and help us shape the future of pet care – together
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* How It Works Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-white" id="how-it-works">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-charcoal text-center mb-8 sm:mb-12 md:mb-16">
              How <span className="text-terracotta">Whisker</span> Works
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              <div className="flex flex-col items-center text-center bg-cream/30 p-6 sm:p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-terracotta text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6">1</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Sign Up & Create Profile</h3>
                <p className="text-charcoal/80 text-sm sm:text-base">Create a detailed profile for your pet including breed, age, weight, and health history.</p>
              </div>
              
              <div className="flex flex-col items-center text-center bg-cream/30 p-6 sm:p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-terracotta text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6">2</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Connect With Our AI</h3>
                <p className="text-charcoal/80 text-sm sm:text-base">Our AI system analyzes your pet's data and provides personalized care recommendations.</p>
              </div>
              
              <div className="flex flex-col items-center text-center bg-cream/30 p-6 sm:p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-terracotta text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6">3</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Enjoy Peace of Mind</h3>
                <p className="text-charcoal/80 text-sm sm:text-base">Receive alerts, insights, and advice tailored specifically to your pet's unique needs.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-12 sm:py-16 md:py-24 bg-cream/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-charcoal text-center mb-4 sm:mb-6">
              What Pet Parents Are Saying
            </h2>
            <p className="text-center text-base sm:text-lg mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto">
              Join thousands of happy pet owners who have discovered the future of pet care with Whisker.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { 
                  name: "Sarah T.", 
                  pet: "Dog Owner", 
                  text: "Whisker detected my dog's potential allergy issues before they became serious. The personalized food recommendations have made a huge difference!" 
                },
                { 
                  name: "Michael R.", 
                  pet: "Cat Owner", 
                  text: "As a first-time cat owner, Whisker has been like having a vet on call 24/7. The preventative care alerts have saved me from so many worries." 
                },
                { 
                  name: "Jennifer L.", 
                  pet: "Multi-pet Household", 
                  text: "With three dogs and two cats, keeping track of everyone's health needs was overwhelming. Whisker simplifies everything in one easy platform." 
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta font-bold text-base sm:text-lg mr-3 sm:mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-base sm:text-lg">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-500">{testimonial.pet}</p>
                    </div>
                  </div>
                  <p className="text-charcoal/90 italic text-sm sm:text-base">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
                
        {/* Waitlist Form Section */}
        <section id="waitlist-form" className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-terracotta/5 rounded-full blur-2xl -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="transform hover:scale-[1.02] transition-all duration-300">
                  <KitWaitlistForm />
                </div>
              </div>
              
              <div className="md:w-1/2 order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-6">
                  Reserve Your Spot Today
                </h2>
                <p className="text-lg mb-8">
                  Join our exclusive waitlist and be among the first to experience the future of pet care with Whisker.
                </p>
                
                <div className="space-y-6 mb-8">
                  {[
                    { title: "Early Access", text: "Be the first to try our revolutionary AI pet care platform" },
                    { title: "Premium Benefits", text: "Waitlist members receive 3 months of premium features free" },
                    { title: "Exclusive Updates", text: "Get insider news and development updates" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start bg-cream/50 p-4 rounded-xl hover:bg-cream/80 transition-colors">
                      <div className="min-w-8 h-8 rounded-full bg-terracotta/20 flex items-center justify-center mr-4 mt-1">
                        <svg className="w-5 h-5 text-terracotta" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <p className="text-charcoal/80">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* App Preview Section */}
        <section id="app-preview" className="py-12 sm:py-16 md:py-24 bg-cream/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-sage/10 rounded-full blur-2xl -z-10"></div>
          
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-charcoal mb-4 sm:mb-6">
              App Preview
            </h2>
            <p className="text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto">
              Get a sneak peek of the Whisker mobile experience
            </p>
            <div className="w-full">
              <TestUI />
            </div>

            <div className="mt-8 sm:mt-12 max-w-sm mx-auto px-4 py-3 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm">
              <p className="text-xs sm:text-sm text-charcoal/80">
                <span className="hidden sm:inline">👆 </span>
                <span className="font-medium text-terracotta">Swipe</span> through the screens on mobile to see all features
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <WhiskerCta />
      </main>
      
      {/* Styling the footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Image 
                  src="/logo/icon.svg" 
                  alt="Whisker Logo" 
                  width={32} 
                  height={32} 
                  className="w-8 h-8"
                />
                <span className="text-2xl font-semibold text-white font-display">Whisker</span>
              </div>
              <p className="text-white/70 mb-6">AI-powered personalized pet care for your unique furry companions. Join our waitlist today and be among the first to experience the future of pet health management.</p>
              <p className="text-white/60">© {new Date().getFullYear()} Whisker. All rights reserved.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white/90">Explore</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-white/70 hover:text-white hover:pl-1 transition-all">Home</a></li>
                <li><a href="#features" className="text-white/70 hover:text-white hover:pl-1 transition-all">Features</a></li>
                <li><a href="#how-it-works" className="text-white/70 hover:text-white hover:pl-1 transition-all">How It Works</a></li>
                <li><a href="#app-preview" className="text-white/70 hover:text-white hover:pl-1 transition-all">App Preview</a></li>
                <li><a href="#waitlist-form" className="text-white/70 hover:text-white hover:pl-1 transition-all">Join Waitlist</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white/90">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#privacy" className="text-white/70 hover:text-white hover:pl-1 transition-all">Privacy Policy</a></li>
                <li><a href="#terms" className="text-white/70 hover:text-white hover:pl-1 transition-all">Terms of Service</a></li>
                <li><a href="#contact" className="text-white/70 hover:text-white hover:pl-1 transition-all">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60 mb-4 md:mb-0">Made with ❤️ for pets and their humans</p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/80 hover:text-white transition-colors hover:scale-110 transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors hover:scale-110 transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors hover:scale-110 transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
