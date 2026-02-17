import Image from "next/image";
import Link from "next/link";
import { Activity, MessageSquare, MapPin, Utensils, BarChart3, PawPrint } from "lucide-react";

export const metadata = {
  title: "Whisker App — Your Pet's Health Dashboard",
  description: "The Whisker companion app turns collar and bowl data into meaningful health insights, GPS tracking, feeding logs, and AI-powered guidance.",
};

const appFeatures = [
  {
    title: "Health Dashboard",
    description: "See your pet's health score, vitals, activity, and sleep at a glance. Spot trends before they become problems.",
    icon: Activity,
  },
  {
    title: "AI Health Chat",
    description: "Ask anything about your pet's health. Our AI analyzes collar data alongside veterinary knowledge to give personalized answers.",
    icon: MessageSquare,
  },
  {
    title: "GPS Tracking",
    description: "Real-time location with customizable safe zones and instant alerts. Always know where your pet is.",
    icon: MapPin,
  },
  {
    title: "Feeding Tracker",
    description: "Automatic meal logging from the smart bowl. See portions, timing, and nutrition insights for each pet.",
    icon: Utensils,
  },
  {
    title: "Activity Monitor",
    description: "Steps, play time, rest periods, and energy levels — understand your pet's daily rhythm.",
    icon: BarChart3,
  },
  {
    title: "Multi-Pet Profiles",
    description: "Manage all your pets from one app. Each gets their own profile, data, and personalized insights.",
    icon: PawPrint,
  },
];

export default function AppPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-charcoal-900 section-padding text-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-6">
                Coming Soon
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
                The <span className="text-cocoa-300">Whisker</span> App
              </h1>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 font-sans">
                Your pet&apos;s entire world in one beautiful app. Health insights, GPS tracking, feeding logs, and AI guidance — all powered by your Whisker collar and smart bowl.
              </p>
              <div className="flex flex-col xs:flex-row gap-3 justify-center lg:justify-start mb-6">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-btn px-5 py-3">
                  <Image src="/images/app-store-badge.svg" alt="App Store" width={120} height={36} className="h-8 w-auto opacity-70" />
                </div>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-btn px-5 py-3">
                  <Image src="/images/google-play-badge.svg" alt="Google Play" width={120} height={36} className="h-8 w-auto opacity-70" />
                </div>
              </div>
              <p className="text-sm text-white/50 font-sans">Free with any Whisker collar. iOS 16+ and Android 12+.</p>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative w-[260px] h-[530px] sm:w-[280px] sm:h-[570px]">
                <div className="absolute inset-0 bg-white/10 rounded-[36px] border border-white/20 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                    alt="Whisker App Dashboard"
                    fill
                    className="object-cover opacity-90"
                  />
                  {/* Overlay to darken slightly for better contrast if needed */}
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] leading-tight mb-4">
              Everything in <span className="text-cocoa-700">one app</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6B6B6B] max-w-2xl mx-auto font-sans">
              Collar sensors, smart bowl data, and AI come together to give you a complete picture of your pet.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {appFeatures.map((feature, i) => (
              <div key={i} className="p-6 rounded-lg border border-[#E5E5E5] hover:border-cocoa-300/50 hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cocoa-700/10 flex items-center justify-center text-cocoa-700 mb-4">
                  <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-2">{feature.title}</h3>
                <p className="text-[#6B6B6B] leading-relaxed font-sans">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-cream-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] mb-4">
            Get the app free with any <span className="text-cocoa-700">Whisker collar</span>
          </h2>
          <p className="text-[#6B6B6B] mb-8 leading-relaxed font-sans">
            The Whisker app is included free with every collar purchase. Pre-order yours today and be among the first to experience the future of pet care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products/dog-collar" className="btn-primary inline-flex items-center justify-center py-4 px-8">
              Dog Collar — $100 Deposit
            </Link>
            <Link href="/products/cat-collar" className="btn-secondary inline-flex items-center justify-center py-4 px-8">
              Cat Bundle — $100 Deposit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
