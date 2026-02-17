import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import SectionPanel from "@/components/SectionPanel";
import Timeline from "@/components/Timeline";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ProductCard from "@/components/ProductCard";
import HomeHero from "@/components/HomeHero";
import AppPreviewSection from "@/components/AppPreviewSection";
import HomeFeaturesGrid from "@/components/HomeFeaturesGrid";

export default function Home() {
  return (
    <>
      {/* ── HERO ── cream→white gradient */}
      <HomeHero />

      {/* ── PRODUCT SHOWCASE ── cream/sand bg */}
      <section id="products" className="section-padding bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] leading-tight tracking-tight mb-4">
              The Whisker <span className="text-cocoa-700">ecosystem</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
              Smart hardware and AI that work together to give you a complete picture of your pet&apos;s world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <ProductCard
              imageSrc="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=800&auto=format&fit=crop"
              title="Smart Dog Collar"
              description="GPS, heart rate, temperature, activity tracking, and AI-powered behavioral insights in one sleek collar."
              price={350}
              deposit={100}
              href="/products/dog-collar"
              badge="Pre-Sale Open"
            />
            <ProductCard
              imageSrc="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop"
              title="Cat Collar + Smart Bowl"
              description="GPS tracking and RFID collar paired with an automatic smart bowl — portion control for multi-cat homes."
              price={350}
              deposit={100}
              href="/products/cat-collar"
              badge="Pre-Sale Open"
            />
            <ProductCard
              imageSrc="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop"
              title="Whisker App"
              description="Your pet&apos;s health dashboard — real-time data, AI chat, feeding logs, and GPS tracking all in one place."
              price={0}
              deposit={0}
              href="/app"
              badge="Free with any collar"
            />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── white bg */}
      <HowItWorks />

      {/* ── APP PREVIEW ── charcoal #1C1C1E (dramatic shift) */}
      <AppPreviewSection />

      {/* ── FEATURES GRID ── white bg */}
      <HomeFeaturesGrid />

      {/* ── TESTIMONIALS ── cream bg */}
      <Testimonials />

      {/* ── PRIVACY & SAFETY ── white bg */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] leading-tight tracking-tight mb-4">
              Privacy &amp; safety <span className="text-cocoa-700">by design</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6B6B6B] max-w-2xl mx-auto">
              Your pet&apos;s data belongs to you. Built on transparency and user control.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "Your Data, Your Control",
                description: "All pet data is encrypted end-to-end. You maintain complete ownership and can delete it anytime.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
              },
              {
                title: "Transparent Analytics",
                description: "We&apos;re clear about what we collect and why. Our insights exist to help your pet, period.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: "Vet-Informed, Not a Replacement",
                description: "Whisker provides educational insights only. For emergencies, always consult a licensed veterinarian.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="text-center sm:text-left space-y-3">
                <div className="w-12 h-12 rounded-btn bg-cream-50 border border-sand-200 flex items-center justify-center text-cocoa-700 mx-auto sm:mx-0">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-[#1A1A1A]">{item.title}</h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── light gradient */}
      <section className="section-padding bg-gradient-to-b from-cream-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] leading-tight tracking-tight mb-4">
              Product <span className="text-cocoa-700">roadmap</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6B6B6B] max-w-2xl mx-auto">
              Here&apos;s what we&apos;re building and when you can expect it.
            </p>
          </div>
          <SectionPanel className="rounded-lg" accentCorner="bl">
            <Timeline
              items={[
                { label: "Now", title: "Pre-Sale Open", description: "Reserve your collar or bundle with a $100 deposit", status: "active" as const },
                { label: "Next", title: "Production Run", description: "500 units per product — first batch manufacturing", status: "future" as const },
                { label: "Stage 3", title: "App Beta", description: "Whisker companion app for early adopters", status: "future" as const },
                { label: "Stage 4", title: "Products Ship", description: "Hardware delivered to pre-sale customers", status: "future" as const },
                { label: "Stage 5", title: "AI Expansion", description: "Behavioral analysis and predictive health features", status: "future" as const },
              ]}
            />
          </SectionPanel>
        </div>
      </section>

      {/* ── CTA + WAITLIST ── dark cocoa #2C1810 */}
      <section className="relative section-padding bg-cocoa-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-72 h-72 bg-cocoa-700/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-cocoa-300/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight tracking-tight mb-5">
                Limited to 500 units per product
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                We&apos;re producing just 500 of each product for the initial run. Join the waitlist to be first in line when we open orders.
              </p>
              <div className="flex flex-wrap gap-5 text-sm text-white/50 justify-center lg:justify-start">
                {["500 dog collars", "500 cat bundles", "$100 refundable deposit"].map((item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cocoa-300 rounded-full" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* ── FAQ ── white bg */}
      <section id="faq" className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] leading-tight tracking-tight mb-4">
              Frequently asked <span className="text-cocoa-700">questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                question: "How does the pre-sale deposit work?",
                answer: "You pay a $100 refundable deposit to reserve your unit. When your product is ready to ship (estimated 3–6 months), we charge the remaining $250 to your payment method on file. You can request a full refund of your deposit at any time before shipment.",
              },
              {
                question: "What products are available?",
                answer: "We offer two products: the Whisker Smart Dog Collar ($350) with GPS, biometrics, and AI health insights, and the Whisker Cat Collar + Smart Bowl bundle ($350) with GPS, RFID, automatic feeding, and portion tracking. Both come with the free Whisker companion app.",
              },
              {
                question: "Is Whisker a substitute for a veterinarian?",
                answer: "No. Whisker provides educational health insights and data monitoring. For medical emergencies or health concerns, always contact a licensed veterinarian immediately.",
              },
              {
                question: "When will products ship?",
                answer: "We estimate 3–6 months from the close of the pre-sale. We'll keep you updated via email, and you'll receive a notification when your order is ready.",
              },
              {
                question: "What data does the collar collect?",
                answer: "The dog collar tracks GPS location, heart rate, temperature, activity levels, sleep patterns, and behavioral data. The cat collar tracks GPS location and RFID identification. The smart bowl measures food portions and feeding times. All data is encrypted end-to-end.",
              },
              {
                question: "Can I get a refund?",
                answer: "Yes. Request a full refund at any time before shipment by emailing support@whisker.pet with 'Refund Request' in the subject. Refunds process within 5–10 business days.",
              },
              {
                question: "Is the collar safe for my pet?",
                answer: "Absolutely. The dog collar uses pet-safe, hypoallergenic materials and is designed for comfortable daily wear. The cat collar features a breakaway safety buckle that releases under pressure. Both are water-resistant.",
              },
            ].map((faq, index) => (
              <details key={index} className="group border border-[#E5E5E5] rounded-btn overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 hover:bg-cream-50 transition-colors">
                  <h3 className="font-semibold text-[15px] text-[#1A1A1A] pr-4">{faq.question}</h3>
                  <svg className="w-5 h-5 text-[#9CA3AF] transform transition-transform duration-200 group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-[#6B6B6B] leading-relaxed text-[15px]">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
