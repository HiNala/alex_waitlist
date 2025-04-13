import Header from "../components/Header";
import WaitlistForm from "../components/WaitlistForm";
import FeaturesSection from "../components/FeaturesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-charcoal overflow-hidden">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:py-32 overflow-hidden" id="home">
          {/* Decorative Elements */}
          <div className="absolute top-40 right-0 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-sage/10 rounded-full blur-2xl -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <div className="md:w-1/2 animate-fade-in-up">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Unique Pets Deserve <span className="text-terracotta">Unique Care</span>
                </h1>
                <p className="text-xl md:text-2xl text-charcoal/80 mb-6 font-light">
                  Your pet&apos;s personal health advisor, powered by AI
                </p>
                <p className="mb-8 text-lg">
                  WhiskerAI combines veterinary knowledge with artificial intelligence to provide personalized guidance, nutritional insights, and preventative care for your one-of-a-kind companion.
                </p>
                
                {/* CTA for desktop */}
                <div className="hidden md:flex space-x-4 mb-8">
                  <a 
                    href="#waitlist-form" 
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
                <div className="flex items-center space-x-4 text-charcoal/70 text-sm mt-8">
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
                <div className="relative w-full max-w-md mx-auto aspect-square md:aspect-auto md:h-[500px]">
                  <div className="absolute inset-0 bg-terracotta/10 rounded-2xl -rotate-6 transform"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Pet care"
                    fill
                    className="rounded-2xl shadow-lg object-cover z-10 rotate-3 transform transition-all duration-500 hover:rotate-0"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                
                {/* Mobile CTA */}
                <div className="mt-12 flex flex-col space-y-4 md:hidden">
                  <a 
                    href="#waitlist-form" 
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
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-white" id="how-it-works">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal text-center mb-16">
              How <span className="text-terracotta">WhiskerAI</span> Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              <div className="flex flex-col items-center text-center bg-cream/30 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-terracotta text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">1</div>
                <h3 className="text-xl font-semibold mb-3">Sign Up & Create Profile</h3>
                <p className="text-charcoal/80">Create a detailed profile for your pet including breed, age, weight, and health history.</p>
              </div>
              
              <div className="flex flex-col items-center text-center bg-cream/30 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-terracotta text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">2</div>
                <h3 className="text-xl font-semibold mb-3">Connect With Our AI</h3>
                <p className="text-charcoal/80">Our AI system analyzes your pet's data and provides personalized care recommendations.</p>
              </div>
              
              <div className="flex flex-col items-center text-center bg-cream/30 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-terracotta text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">3</div>
                <h3 className="text-xl font-semibold mb-3">Enjoy Peace of Mind</h3>
                <p className="text-charcoal/80">Receive alerts, insights, and advice tailored specifically to your pet's unique needs.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-cream/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal text-center mb-6">
              What Pet Parents Are Saying
            </h2>
            <p className="text-center text-lg mb-16 max-w-2xl mx-auto">
              Join thousands of happy pet owners who have discovered the future of pet care with WhiskerAI.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  name: "Sarah T.", 
                  pet: "Dog Owner", 
                  text: "WhiskerAI detected my dog's potential allergy issues before they became serious. The personalized food recommendations have made a huge difference!" 
                },
                { 
                  name: "Michael R.", 
                  pet: "Cat Owner", 
                  text: "As a first-time cat owner, WhiskerAI has been like having a vet on call 24/7. The preventative care alerts have saved me from so many worries." 
                },
                { 
                  name: "Jennifer L.", 
                  pet: "Multi-pet Household", 
                  text: "With three dogs and two cats, keeping track of everyone's health needs was overwhelming. WhiskerAI simplifies everything in one easy platform." 
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.pet}</p>
                    </div>
                  </div>
                  <p className="text-charcoal/90 italic">"{testimonial.text}"</p>
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
                <WaitlistForm />
              </div>
              
              <div className="md:w-1/2 order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-6">
                  Reserve Your Spot Today
                </h2>
                <p className="text-lg mb-6">
                  Join our exclusive waitlist and be among the first to experience the future of pet care with WhiskerAI.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    { title: "Early Access", text: "Be the first to try our revolutionary AI pet care platform" },
                    { title: "Premium Benefits", text: "Waitlist members receive 3 months of premium features free" },
                    { title: "Exclusive Updates", text: "Get insider news and development updates" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="min-w-6 h-6 rounded-full bg-terracotta/20 flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-terracotta" fill="currentColor" viewBox="0 0 20 20">
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
        
        {/* CTA Section */}
        <section className="py-16 bg-terracotta text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Transform Your Pet's Care?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of pet parents who have discovered the power of AI-assisted pet care. 
              The first 1,000 people to join the waitlist will receive 3 months of premium access free!
            </p>
            <a 
              href="#waitlist-form" 
              className="inline-block bg-white text-terracotta hover:bg-cream transition-colors py-3 px-8 rounded-full text-lg font-medium"
            >
              Join the Waitlist Now
            </a>
          </div>
        </section>
      </main>
      
      <footer className="bg-charcoal text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4 justify-center md:justify-start">
                <svg className="w-6 h-6 text-terracotta" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C6.32,14.15 9.38,15.31 11.24,16.2C11.24,16.2 11.59,16.37 12,16.42C12.41,16.37 12.77,16.2 12.77,16.2C14.62,15.31 17.68,14.15 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8Z"/>
                </svg>
                <span className="text-lg font-semibold text-white">WhiskerAI</span>
              </div>
              <p className="text-white/60 text-center md:text-left">© {new Date().getFullYear()} WhiskerAI. All rights reserved.</p>
            </div>
            
            <div className="grid grid-cols-2 md:flex md:space-x-8 gap-4 md:gap-0">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">How It Works</a>
              <a href="#privacy" className="text-white/80 hover:text-white transition-colors">Privacy</a>
              <a href="#terms" className="text-white/80 hover:text-white transition-colors">Terms</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60 mb-4 md:mb-0">Made with ❤️ for pets and their humans</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
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
