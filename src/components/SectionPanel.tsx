import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type AccentCorner = "tl" | "tr" | "bl" | "br";

type SectionPanelProps = PropsWithChildren<{
  className?: string;
  accentCorner?: AccentCorner;
}>;

const cornerRadiusClass: Record<AccentCorner, string> = {
  tl: "rounded-none rounded-tl-xl",
  tr: "rounded-none rounded-tr-xl",
  bl: "rounded-none rounded-bl-xl",
  br: "rounded-none rounded-br-xl",
};

export default function SectionPanel({
  className,
  children,
  accentCorner = "tl",
}: SectionPanelProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border border-sand-200/70 bg-cream-50 shadow-elevation-1",
        cornerRadiusClass[accentCorner],
        "p-6 md:p-10",
        className
      )}
    >
      {/* Soft accent blob in the selected corner */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute size-40 md:size-56 bg-cocoa-500/10 blur-xl", 
          accentCorner === "tl" && "-top-10 -left-10 rounded-br-full",
          accentCorner === "tr" && "-top-10 -right-10 rounded-bl-full",
          accentCorner === "bl" && "-bottom-10 -left-10 rounded-tr-full",
          accentCorner === "br" && "-bottom-10 -right-10 rounded-tl-full"
        )}
      />

      {children}
    </div>
  );
}


