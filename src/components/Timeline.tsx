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
        {/* line */}
        <div className="absolute left-0 right-0 top-6 h-0.5 bg-sand-200" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
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

              <div className="text-center space-y-2 pt-10">
                <div className="text-sm font-medium text-cocoa-700">{item.label}</div>
                <h4 className="font-semibold text-charcoal-900">{item.title}</h4>
                {item.description && (
                  <p className="text-sm text-warmgray-600">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


