import { cn } from "@/lib/utils";

type TimelineItem = {
  label: string;
  title: string;
  description?: string;
  status?: "past" | "active" | "future";
};

export default function Timeline({
  items,
  className,
}: {
  items: TimelineItem[];
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      <div className="relative">
        {/* line - hidden on mobile, visible on larger screens */}
        <div className="hidden sm:block absolute left-0 right-0 top-6 h-0.5 bg-sand-200" />

        {/* Mobile: Vertical layout */}
        <div className="sm:hidden space-y-6">
          {items.map((item, index) => (
            <div key={index} className="relative pl-8">
              {/* Vertical line for mobile */}
              {index < items.length - 1 && (
                <div className="absolute left-2 top-8 w-0.5 h-8 bg-sand-200" />
              )}
              
              {/* node */}
              <div className="absolute left-0 top-2">
                <span
                  className={cn(
                    "block h-4 w-4 rounded-full border-2 border-sand-200 bg-white",
                    item.status === "active" && "bg-cocoa-500 border-cocoa-500",
                    item.status === "past" && "bg-cocoa-300 border-cocoa-300"
                  )}
                />
              </div>

              <div className="space-y-1">
                <div className="text-xs font-medium text-cocoa-700">{item.label}</div>
                <h4 className="font-semibold text-sm text-charcoal-900">{item.title}</h4>
                {item.description && (
                  <p className="text-xs text-warmgray-600 leading-relaxed">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Horizontal layout */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {items.map((item, index) => (
            <div key={index} className="relative">
              {/* node */}
              <div className="absolute left-1/2 -translate-x-1/2 top-4">
                <span
                  className={cn(
                    "block h-3 w-3 rounded-full border border-sand-200 bg-white",
                    item.status === "active" && "bg-cocoa-500 border-cocoa-500",
                    item.status === "past" && "bg-cocoa-300 border-cocoa-300"
                  )}
                />
              </div>

              <div className="text-center space-y-1 sm:space-y-2 pt-8 sm:pt-10">
                <div className="text-xs sm:text-sm font-medium text-cocoa-700">{item.label}</div>
                <h4 className="font-semibold text-sm sm:text-base text-charcoal-900">{item.title}</h4>
                {item.description && (
                  <p className="text-xs sm:text-sm text-warmgray-600 leading-relaxed">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


