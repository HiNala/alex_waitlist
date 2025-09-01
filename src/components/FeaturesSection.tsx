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
        <svg className="w-7 h-7 text-warmgray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Nutrition & Diet Plans",
      description: "Get tailored diet recommendations based on your pet's breed, age, weight, and specific health needs.",
      icon: (
        <svg className="w-7 h-7 text-warmgray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )
    },
    {
      title: "24/7 Vet Consultations",
      description: "Connect with licensed veterinarians anytime via chat or video call when you have urgent questions or concerns.",
      icon: (
        <svg className="w-7 h-7 text-warmgray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Activity Tracking",
      description: "Monitor your pet's exercise, sleep patterns, and overall activity levels to ensure they're getting the right amount of physical activity.",
      icon: (
        <svg className="w-7 h-7 text-warmgray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      className="py-20 md:py-24 bg-white relative overflow-hidden" 
      id="features"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-900 mb-6 leading-tight">
            Why Pet Parents <span className="text-cocoa-700">Love Using Whisker</span>
          </h2>
          <p className="text-xl text-warmgray-600 leading-relaxed">
            Our comprehensive AI-powered platform is designed to provide the best possible care experience for your beloved companions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 border border-gray-100 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 bg-sand-100 w-16 h-16 rounded-xl flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-charcoal-900">{feature.title}</h3>
              <p className="text-warmgray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          {[
            { value: "98%", label: "Customer Satisfaction" },
            { value: "24/7", label: "Health Monitoring" },
            { value: "3x", label: "Faster Health Alerts" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`transform transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 4) * 100}ms` }}
            >
              <div className="text-5xl font-serif font-bold text-cocoa-700 mb-2">{stat.value}</div>
              <div className="text-warmgray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 