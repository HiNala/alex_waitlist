import Header from "../components/Header";
import WaitlistForm from "../components/WaitlistForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-12">
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
            <WaitlistForm />
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
          </div>
        </section>
      </main>
      
      <footer className="bg-charcoal text-white p-8 text-center">
        &copy; {new Date().getFullYear()} WhiskerAI. All rights reserved.
      </footer>
    </div>
  );
}
