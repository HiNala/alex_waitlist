'use client';

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface WaitlistFormInputs {
  email: string;
  name?: string;
  petType?: string;
}

const WaitlistForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<WaitlistFormInputs>();
  const [success, setSuccess] = useState(false);

  const onSubmit: SubmitHandler<WaitlistFormInputs> = async (data) => {
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        reset();
        setTimeout(() => setSuccess(false), 3000);
      } else {
        console.error("Failed to sign up");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto md:mx-0">
      {/* Decorative elements */}
      <div className="absolute -top-4 -left-4 w-20 h-20 bg-sage/20 rounded-full -z-10 animate-pulse"></div>
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-terracotta/10 rounded-full -z-10 animate-pulse-slow"></div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-5 relative z-10 border border-gray-100">
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-display font-semibold text-charcoal">Join Our Waitlist</h3>
          <p className="text-sm text-gray-500 mt-1">Early access gets 3 months premium free</p>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
            Email Address <span className="text-terracotta">*</span>
          </label>
          <input 
            type="email"
            id="email"
            {...register("email", { 
              required: "Email is required", 
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address"
              }
            })}
            placeholder="youremail@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta transition-colors"
          />
          {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
              First Name
            </label>
            <input 
              type="text"
              id="name"
              {...register("name")}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="petType" className="block text-sm font-medium text-charcoal mb-1">
              Pet Type
            </label>
            <select 
              id="petType"
              {...register("petType")}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta transition-colors appearance-none bg-white"
              defaultValue=""
            >
              <option value="" disabled>Select pet type</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="both">Both Dog & Cat</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-medium py-3 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            "Secure My Spot & Enter to Win"
          )}
        </button>
        
        {success && (
          <div className="bg-green-50 text-green-700 p-3 rounded-lg text-center text-sm animate-fade-in">
            <svg className="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            You're on the waitlist! Check your email for confirmation.
          </div>
        )}
        
        <p className="text-xs text-charcoal/60 text-center mt-2 flex items-center justify-center">
          <svg className="w-4 h-4 mr-1 inline text-sage" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
          </svg>
          Your information is secure. No spam, ever.
        </p>
      </form>
    </div>
  );
};

export default WaitlistForm; 