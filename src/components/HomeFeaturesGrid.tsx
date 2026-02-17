"use client";

import AnimateOnScroll, { StaggerContainer, StaggerItem } from "./AnimateOnScroll";
import {
  MapPin,
  Heart,
  Sparkles,
  Clock,
  Users,
  Bell,
} from "lucide-react";

const features = [
  {
    title: "Real-time GPS tracking",
    description:
      "Know where your pet is at all times. Set custom safe zones and get instant alerts if they wander.",
    icon: MapPin,
  },
  {
    title: "Biometric monitoring",
    description:
      "Heart rate, temperature, and activity data give you early warning signs before problems escalate.",
    icon: Heart,
  },
  {
    title: "AI behavioral insights",
    description:
      "Whisker's AI learns your pet's patterns and can detect changes in mood, energy, and behavior over time.",
    icon: Sparkles,
  },
  {
    title: "Smart feeding control",
    description:
      "The RFID-gated smart bowl opens only for the right cat, tracks portions, and supports timed feeding schedules.",
    icon: Clock,
  },
  {
    title: "Multi-pet support",
    description:
      "Manage multiple pets from one app. Each pet gets their own profile, data, and personalized insights.",
    icon: Users,
  },
  {
    title: "Preventive care alerts",
    description:
      "Get timely reminders for checkups, vaccinations, and early warnings based on health data trends.",
    icon: Bell,
  },
];

export default function HomeFeaturesGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <AnimateOnScroll className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] leading-tight mb-4">
            Why choose <span className="text-cocoa-700">Whisker</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
            Smart hardware meets AI to create pet insights you can&apos;t get anywhere else.
          </p>
        </AnimateOnScroll>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={index}>
                <div className="group bg-white border border-[#E5E5E5] rounded-lg p-6 h-full transition-all duration-300 hover:border-cocoa-700 hover:shadow-[0_4px_16px_rgba(139,94,60,0.08)]">
                  <div className="w-12 h-12 rounded-btn bg-cream-50 border border-sand-200 flex items-center justify-center text-cocoa-700 mb-4">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-sans text-lg font-semibold text-[#1A1A1A] mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-sm font-normal text-[#6B6B6B] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
