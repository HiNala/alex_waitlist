import { SITE } from "@/lib/site";
import Link from "next/link";
import Image from "next/image";
import { Heart, Shield, Eye } from "lucide-react";

export const metadata = {
  title: "About — Whisker",
  description: "Meet the team behind Whisker — smart pet technology that helps you understand your pet like never before.",
};

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    bio: "Former Apple engineer and lifelong dog lover. Founded Whisker after struggling to monitor her aging Golden Retriever's health.",
  },
  {
    name: "Marcus Thorne",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    bio: "IoT specialist with 15 years experience building connected devices. Obsessed with battery life and seamless connectivity.",
  },
  {
    name: "Dr. Elena Torres",
    role: "Chief Veterinary Officer",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
    bio: "Practicing veterinarian ensuring every Whisker feature provides clinically relevant, actionable data for pet parents.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-cocoa-900 section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1600&auto=format&fit=crop"
            alt="Woman hugging dog"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-cocoa-900/90 to-cocoa-900/70" />
        
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20">
            Our Story
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Every pet deserves to be <span className="text-cocoa-300">understood</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-sans">
            Whisker was born from a simple belief: the bond between people and their pets is one of the most important relationships in life. Technology should deepen that connection, not complicate it.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] leading-tight mb-6">
                Our mission
              </h2>
              <div className="space-y-4 text-[#6B6B6B] leading-relaxed font-sans text-lg">
                <p>
                  We&apos;re building the most thoughtful pet technology on the planet — hardware and software that works seamlessly together to translate what your pet can&apos;t tell you into insights you can act on.
                </p>
                <p>
                  Our smart collars don&apos;t just track location. They monitor heart rate, temperature, activity patterns, and behavioral changes — then our AI turns that raw data into meaningful, personalized guidance.
                </p>
                <p>
                  For cat owners, we went further. The Whisker Smart Bowl uses RFID to ensure each cat eats from their own bowl, tracks portions, and supports timed feeding — solving real problems in multi-cat households.
                </p>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop"
                alt="Dog running in field"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                <div className="grid grid-cols-2 gap-8 text-white">
                  <div>
                    <div className="text-3xl font-serif font-bold">1,000</div>
                    <div className="text-sm opacity-80">Pre-sale units</div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-bold">3</div>
                    <div className="text-sm opacity-80">Products launching</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] leading-tight">
              What we <span className="text-cocoa-700">stand for</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "Pet-first design",
                description: "Every decision starts with the question: is this good for the pet? Comfort, safety, and wellbeing come before features.",
                icon: Heart,
              },
              {
                title: "Privacy by default",
                description: "Your pet's data belongs to you. We encrypt everything, never sell data, and give you full control over what's collected.",
                icon: Shield,
              },
              {
                title: "Transparent honesty",
                description: "We're building something new. We'll always be upfront about what works, what's in progress, and what's coming next.",
                icon: Eye,
              },
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-card border border-[#E5E5E5] hover:border-cocoa-300/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cocoa-700/10 flex items-center justify-center text-cocoa-700 mb-6">
                  <value.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-3">{value.title}</h3>
                <p className="text-[#6B6B6B] leading-relaxed font-sans">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] leading-tight mb-4">
              Meet the <span className="text-cocoa-700">team</span>
            </h2>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto">
              Engineers, designers, and veterinarians working together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cream-50 shadow-lg group-hover:border-cocoa-100 transition-colors duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-1">{member.name}</h3>
                <div className="text-cocoa-700 text-sm font-medium uppercase tracking-wider mb-3">{member.role}</div>
                <p className="text-[#6B6B6B] text-sm leading-relaxed max-w-xs mx-auto">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company */}
      <section className="section-padding bg-cream-50 border-t border-sand-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl shadow-sm flex items-center justify-center p-3">
            <img src="/logo/Whisker_button_logo.svg" alt="Whisker" className="w-full h-full" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] mb-4">Built by {SITE.company}</h2>
          <p className="text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
            Whisker is developed by {SITE.company}, a product studio focused on building thoughtful technology for the people and pets who matter most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products/dog-collar" className="btn-primary inline-flex items-center justify-center py-4 px-8">
              Explore Products
            </Link>
            <Link href="/support" className="btn-secondary inline-flex items-center justify-center py-4 px-8">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
