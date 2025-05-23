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
    <section className={cn("relative overflow-hidden py-16 md:py-24 w-full", className)}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#e07a5f] via-[#d85c40] to-[#c54e31]"
          style={{ backgroundSize: "400% 400%" }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        {/* Subtle floating orbs */}
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-[#81B29A]/20 blur-3xl"
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
          style={{ top: "10%", left: "60%" }}
        />
        
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-white/20 blur-3xl"
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
          style={{ bottom: "10%", right: "60%" }}
        />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white mb-4"
            >
              <PawPrintIcon className="mr-2 h-3.5 w-3.5" />
              <span>AI-Powered Pet Care</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            >
              {heading}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 max-w-xl"
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
                        placeholder="Enter your email"
                        type="email"
                        required
                        aria-label="Email"
                        className="formkit-input bg-white/10 border-white/20 text-white placeholder:text-white/60 pr-12 focus-visible:ring-white/30 focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>
                  
                  <button 
                    data-element="submit" 
                    className="formkit-submit formkit-submit w-full bg-[#F2CC8F] hover:bg-[#E8B96C] text-[#3D405B] font-medium transition-all group flex items-center justify-center py-2 px-4 rounded-md"
                  >
                    <div className="formkit-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span className="flex items-center">
                      {buttonText} <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  
                  <p className="text-sm text-white/70 text-center">
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
              className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-[#81B29A] opacity-60"
            ></motion.div>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-[#F2CC8F] opacity-70"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="grid gap-4">
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="h-10 w-10 rounded-full bg-[#81B29A] flex items-center justify-center">
                    <PawPrintIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Personalized Care</h4>
                    <p className="text-white/70 text-sm">Tailored to your pet's needs</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="h-10 w-10 rounded-full bg-[#F2CC8F] flex items-center justify-center">
                    <ClipboardIcon className="h-5 w-5 text-[#3D405B]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Health Tracking</h4>
                    <p className="text-white/70 text-sm">Monitor vitals & behavior</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                    <ClockIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">24/7 Support</h4>
                    <p className="text-white/70 text-sm">Expert help when you need it</p>
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