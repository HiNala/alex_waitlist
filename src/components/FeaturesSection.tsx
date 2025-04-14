'use client';

import { useEffect, useRef, useState } from 'react';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      title: "AI-Powered Health Insights",
      description: "Our advanced AI analyzes your pet's data to provide personalized health recommendations and early detection of potential issues.",
      icon: (
        <svg className="w-14 h-14 text-terracotta" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,16C9.79,16 8,14.21 8,12C8,9.79 9.79,8 12,8C14.21,8 16,9.79 16,12C16,14.21 14.21,16 12,16M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4M12,10C10.9,10 10,10.9 10,12C10,13.1 10.9,14 12,14C13.1,14 14,13.1 14,12C14,10.9 13.1,10 12,10Z" />
        </svg>
      )
    },
    {
      title: "Nutrition & Diet Plans",
      description: "Get tailored diet recommendations based on your pet's breed, age, weight, and specific health needs.",
      icon: (
        <svg className="w-14 h-14 text-terracotta" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z" />
        </svg>
      )
    },
    {
      title: "24/7 Vet Consultations",
      description: "Connect with licensed veterinarians anytime via chat or video call when you have urgent questions or concerns.",
      icon: (
        <svg className="w-14 h-14 text-terracotta" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M16.75,14.42C16.75,15.13 16.37,15.81 15.69,16.22C15.5,16.34 15.27,16.45 15,16.56V16.75C15,17.17 14.71,17.53 14.33,17.66L10.3,18.91C10.1,18.97 9.88,18.97 9.7,18.88C9.5,18.8 9.35,18.64 9.28,18.44L8.95,17.56C8.69,16.84 8.95,16.06 9.68,15.79C9.8,15.74 9.93,15.72 10.05,15.71L11.68,15.55C11.8,15.53 11.93,15.5 12.05,15.47L11.28,15.13C11.1,15.05 10.96,14.88 10.91,14.67C10.78,14.22 11.07,13.76 11.56,13.63C11.62,13.61 11.69,13.6 11.76,13.6L13.41,13.43C14.38,13.33 15,12.5 15,11.5C15,11 15.27,10.71 15.5,10.5C15.76,10.31 16.03,10.28 16.25,10.34C16.5,10.53 16.75,10.77 16.75,11.25V14.42M10.03,10.62L9.68,11.75C9.47,12.28 9.71,12.85 10.25,13.06C10.25,13.06 13,14.33 13,14.35C13,14.57 13.25,15 14.08,15C14.5,15 14.83,14.7 14.83,14.35V12.7C14.83,12.32 14.63,11.97 14.31,11.76L11.5,10C11.17,9.8 10.86,9.91 10.66,10.06C10.47,10.2 10.2,10.38 10.03,10.62Z" />
        </svg>
      )
    },
    {
      title: "Activity Tracking",
      description: "Monitor your pet's exercise, sleep patterns, and overall activity levels to ensure they're getting the right amount of physical activity.",
      icon: (
        <svg className="w-14 h-14 text-terracotta" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      className="py-16 md:py-24 bg-white relative overflow-hidden" 
      id="features"
      ref={sectionRef}
    >
      {/* Background decorative elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-terracotta/5 rounded-full blur-xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-60 h-60 bg-sage/10 rounded-full blur-xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-6">
            Why Pet Parents <span className="text-terracotta">Love Using Whisker</span>
          </h2>
          <p className="text-lg text-charcoal/80">
            Our comprehensive AI-powered platform is designed to provide the best possible care experience for your beloved companions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 bg-cream/50 w-20 h-20 rounded-2xl flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-charcoal/80">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {[
            { value: "98%", label: "Customer Satisfaction" },
            { value: "24/7", label: "Health Monitoring" },
            { value: "3x", label: "Faster Health Alerts" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl bg-cream/30 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 4) * 150}ms` }}
            >
              <div className="text-4xl font-display font-bold text-terracotta mb-2">{stat.value}</div>
              <div className="text-charcoal/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 