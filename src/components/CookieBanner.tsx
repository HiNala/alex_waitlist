"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("whisker_cookie_ok")) {
      setShow(true);
    }
  }, []);
  
  if (!show) return null;
  
  return (
    <div className="fixed bottom-4 inset-x-0 z-50">
      <div className="mx-auto max-w-3xl bg-white border border-black/10 shadow-lg rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <p className="text-sm">
          We use limited cookies/analytics to improve Whisker. See our{" "}
          <a className="underline" href="/privacy">Privacy Policy</a>.
        </p>
        <div className="ml-auto flex gap-2">
          <button 
            onClick={() => {
              localStorage.setItem("whisker_cookie_ok", "1"); 
              setShow(false);
            }} 
            className="px-3 py-2 rounded-pill bg-cocoa-700 text-white"
          >
            Accept
          </button>
          <a href="/privacy" className="px-3 py-2 rounded-pill border border-black/10">
            Manage
          </a>
        </div>
      </div>
    </div>
  );
}
