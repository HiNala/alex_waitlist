import Image from "next/image";
import Link from "next/link";
import { Heart, Shield, Zap, Users } from "lucide-react";

export const metadata = {
  title: "About Us — Whisker",
  description: "We're on a mission to help you understand your pet like never before.",
};

export default function AboutPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-cream-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-charcoal-900 leading-tight animate-fade-in-up">
              We&apos;re building the future of <span className="text-cocoa-700">pet care.</span>
            </h1>
            <p className="text-xl text-warmgray-600 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Whisker was born from a simple question: What if we could truly understand what our pets are feeling?
            </p>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cocoa-200 blur-3xl"></div>
          <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-sand-200 blur-3xl"></div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700">
              <Image
                src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&h=1000&fit=crop"
                alt="Founder with dog"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-900 leading-tight">
                Bridging the gap between species.
              </h2>
              <div className="space-y-6 text-lg text-warmgray-600 leading-relaxed">
                <p>
                  For thousands of years, humans and pets have lived side by side. We share our homes, our lives, and our hearts. But a language barrier has always remained.
                </p>
                <p>
                  At Digital Studio Labs, we believe technology can bridge that gap. By combining advanced sensors with artificial intelligence, we&apos;re giving pets a voice.
                </p>
                <p>
                  Whisker isn&apos;t just a tracker. It&apos;s a translator. It turns heartbeats and tail wags into actionable insights, helping you provide the best possible care for your best friend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 lg:py-32 bg-charcoal-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">Our Principles</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              The core values that guide everything we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-cocoa-300" />,
                title: "Pet-First Design",
                desc: "Every decision starts with the pet's comfort and safety. If it's not good enough for our own pets, we won't ship it."
              },
              {
                icon: <Shield className="w-8 h-8 text-cocoa-300" />,
                title: "Privacy by Default",
                desc: "Your data belongs to you. We use end-to-end encryption and never sell your personal information."
              },
              {
                icon: <Zap className="w-8 h-8 text-cocoa-300" />,
                title: "Science-Backed",
                desc: "We work with veterinarians and animal behaviorists to ensure our insights are accurate and actionable."
              },
              {
                icon: <Users className="w-8 h-8 text-cocoa-300" />,
                title: "Community Driven",
                desc: "We build alongside our community of pet parents, listening to feedback and iterating constantly."
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="mb-6">{value.icon}</div>
                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-900 mb-6">Meet the Team</h2>
            <p className="text-xl text-warmgray-600 max-w-2xl mx-auto">
              A diverse group of engineers, designers, and pet lovers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Jenkins", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
              { name: "David Chen", role: "Head of Engineering", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
              { name: "Emily Rodriguez", role: "Chief Veterinarian", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
              { name: "Michael Chang", role: "Head of Design", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" }
            ].map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl text-charcoal-900 mb-1">{member.name}</h3>
                <p className="text-warmgray-500 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal-900 mb-8">
            Join us on this journey.
          </h2>
          <p className="text-xl text-warmgray-600 mb-10 max-w-2xl mx-auto">
            Be part of the movement to better understand our pets.
          </p>
          <Link href="/pre-order" className="btn-primary inline-flex items-center justify-center px-12 py-5 text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            Reserve Your Whisker
          </Link>
        </div>
      </section>
    </div>
  );
}
