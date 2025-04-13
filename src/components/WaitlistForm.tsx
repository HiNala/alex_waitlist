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
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
          Email Address *
        </label>
        <input 
          type="email"
          id="email"
          {...register("email", { required: true })}
          placeholder="youremail@example.com"
          className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-terracotta"
        />
        {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
          First Name
        </label>
        <input 
          type="text"
          id="name"
          {...register("name")}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-terracotta"
        />
      </div>
      <div>
        <label htmlFor="petType" className="block text-sm font-medium text-charcoal mb-1">
          Pet Type
        </label>
        <select 
          id="petType"
          {...register("petType")}
          className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:border-terracotta"
          defaultValue=""
        >
          <option value="" disabled>Select your pet type</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="both">Both Dog & Cat</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary py-4 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1"
      >
        Secure My Spot & Enter to Win
      </button>
      {success && <p className="text-green-600 text-center text-sm">You're on the waitlist! Check your email for confirmation.</p>}
      <p className="text-xs text-charcoal/60 text-center mt-2">
        Your information is secure. No spam, ever.
      </p>
    </form>
  );
};

export default WaitlistForm; 