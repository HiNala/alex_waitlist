"use client";

interface DepositBadgeProps {
  deposit: number;
  retailPrice: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function DepositBadge({ deposit, retailPrice, className = "", size = "md" }: DepositBadgeProps) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs gap-2",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-5 py-3 text-base gap-3",
  };

  return (
    <div
      className={`inline-flex items-center rounded-sm ${sizeClasses[size]} ${className}`}
      style={{
        background: "linear-gradient(135deg, #FAF6F1, #F5EDE4)",
        border: "1px solid #E8DDD3",
      }}
    >
      <span className="font-semibold text-cocoa-700">${deposit} deposit</span>
      <span className="text-warmgray-600">of ${retailPrice}</span>
    </div>
  );
}
