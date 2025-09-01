"use client";

import React from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

interface WhiskerCtaProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  privacyText?: string;
  successMessage?: string;
  className?: string;
}

const WhiskerCta = ({
  heading = "Ready to Transform Your Pet's Care?",
  description = "Join thousands of pet parents who've revolutionized their furry friend's well-being with Whisker's AI-powered care platform.",
  buttonText = "Join the Waitlist Now",
  privacyText = "We respect your privacy and will never share your information.",
  successMessage = "Thanks for joining! We'll be in touch soon with exclusive updates.",
  className
}: WhiskerCtaProps) => {
  return (
    <section className={cn("relative overflow-hidden py-20 md:py-24 w-full bg-cocoa-700", className)}>
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05] -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Floating elements */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gold-500/20 blur-2xl"
        animate={{
          x: ["-10%", "10%", "-10%"],
          y: ["-5%", "15%", "-5%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ top: "20%", right: "10%" }}
      />
      
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-sky-500/20 blur-xl"
        animate={{
          x: ["5%", "-15%", "5%"],
          y: ["10%", "-5%", "10%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ bottom: "20%", left: "10%" }}
      />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-pill border border-white/20 bg-white/10 px-4 py-2 text-sm text-white mb-6"
            >
              <PawPrintIcon className="mr-2 h-4 w-4" />
              <span>AI-Powered Pet Care</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            >
              {heading}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed"
            >
              {description}
            </motion.p>
            
            <motion.form 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              action="https://app.kit.com/forms/7916923/subscriptions" 
              method="post" 
              data-sv-form="7916923" 
              data-uid="0f72656b6b" 
              data-format="inline" 
              data-version="5"
              className="seva-form formkit-form space-y-4 max-w-md"
            >
              <div data-style="clean">
                <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                <div data-element="fields" data-stacked="true" className="seva-fields formkit-fields space-y-2">
                  <div className="formkit-field">
                    <Label htmlFor="email_address_cta" className="text-white sr-only">
                      Email
                    </Label>
                    <div className="relative">
                      <Input
                        id="email_address_cta"
                        name="email_address"
                        placeholder="Enter your email address"
                        type="email"
                        required
                        aria-label="Email"
                        className="formkit-input bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-pill px-6 py-4 text-lg focus-visible:ring-sky-500 focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>
                  
                  <button 
                    data-element="submit" 
                    className="formkit-submit formkit-submit w-full bg-gold-500 hover:bg-gold-500/90 text-charcoal-900 font-semibold transition-all duration-200 group flex items-center justify-center py-4 px-6 rounded-pill text-lg shadow-lg hover:shadow-xl hover:scale-[1.02]"
                  >
                    <div className="formkit-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span className="flex items-center">
                      {buttonText} <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </button>
                  
                  <p className="text-sm text-white/80 text-center leading-relaxed">
                    {privacyText}
                  </p>
                </div>
              </div>
            </motion.form>
          </div>
          
          <div className="hidden lg:block relative">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gold-500/30 opacity-60"
            ></motion.div>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-sky-500/30 opacity-70"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative bg-white/10 border border-white/20 rounded-xl p-8 backdrop-blur-sm shadow-lg"
            >
              <div className="grid gap-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="h-12 w-12 rounded-full bg-gold-500 flex items-center justify-center shadow-lg">
                    <PawPrintIcon className="h-6 w-6 text-charcoal-900" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Personalized Care</h4>
                    <p className="text-white/80 text-sm leading-relaxed">Tailored to your pet's needs</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="h-12 w-12 rounded-full bg-sky-500 flex items-center justify-center shadow-lg">
                    <ClipboardIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Health Tracking</h4>
                    <p className="text-white/80 text-sm leading-relaxed">Monitor vitals & behavior</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center shadow-lg">
                    <ClockIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">24/7 Support</h4>
                    <p className="text-white/80 text-sm leading-relaxed">Expert help when you need it</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiskerCta;

// Simple icon components
const PawPrintIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.25 7a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-9-2.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm11.25 9a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm4.5 6.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ClipboardIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
); 