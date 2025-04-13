import Header from "../components/Header";
import WaitlistForm from "../components/WaitlistForm";
import FeaturesSection from "../components/FeaturesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Unique Pets Deserve Unique Care
              </h1>
              <p className="text-xl md:text-2xl text-charcoal/80 mb-6 font-light">
                Your pet&apos;s personal health advisor, powered by AI
              </p>
              <p className="mb-8 text-lg">
                WhiskerAI combines veterinary knowledge with artificial intelligence to provide personalized guidance, nutritional insights, and preventative care for your one-of-a-kind companion.
              </p>
              
              {/* Email signup for desktop */}
              <div className="hidden md:block">
                <WaitlistForm />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full aspect-square md:aspect-auto md:h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Pet care"
                  fill
                  className="rounded-xl shadow-lg animate-float object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              
              {/* Email signup for mobile */}
              <div className="mt-8 md:hidden">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* How It Works Section */}
        <section className="py-16 bg-white" id="how-it-works">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal text-center mb-16">
              How <span className="text-terracotta">WhiskerAI</span> Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-terracotta text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">1</div>
                <h3 className="text-xl font-semibold mb-3">Sign Up & Create Profile</h3>
                <p className="text-charcoal/80">Create a detailed profile for your pet including breed, age, weight, and health history.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-terracotta text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">2</div>
                <h3 className="text-xl font-semibold mb-3">Connect With Our AI</h3>
                <p className="text-charcoal/80">Our AI system analyzes your pet's data and provides personalized care recommendations.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-terracotta text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">3</div>
                <h3 className="text-xl font-semibold mb-3">Enjoy Peace of Mind</h3>
                <p className="text-charcoal/80">Receive alerts, insights, and advice tailored specifically to your pet's unique needs.</p>
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
            <button className="bg-white text-terracotta py-3 px-8 rounded-full text-lg font-medium hover:bg-cream transition-colors">
              Join the Waitlist Now
            </button>
          </div>
        </section>
      </main>
      
      <footer className="bg-charcoal text-white p-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-6 h-6 text-terracotta" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C6.32,14.15 9.38,15.31 11.24,16.2C11.24,16.2 11.59,16.37 12,16.42C12.41,16.37 12.77,16.2 12.77,16.2C14.62,15.31 17.68,14.15 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8Z"/>
                </svg>
                <span className="text-lg font-semibold text-white">WhiskerAI</span>
              </div>
              <p className="text-white/60">© {new Date().getFullYear()} WhiskerAI. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Help</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
