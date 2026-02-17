import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cat Collar + Smart Bowl — Whisker",
};

export default function CatCollarPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl pt-20 pb-4">
        <nav className="flex items-center gap-2 text-sm text-warmgray-600">
          <Link href="/" className="hover:text-cocoa-500 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/" className="hover:text-cocoa-500 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-charcoal-900">Cat Bundle</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 max-w-6xl pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream-50">
            <Image
              src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=1200&h=600&fit=crop"
              alt="Cat with Whisker collar and smart bowl"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6">
            <h1 className="font-serif text-3xl sm:text-4xl text-charcoal-900 leading-tight">
              Smart Cat Collar <span className="text-cocoa-700">+ Smart Bowl</span>
            </h1>
            <p className="text-warmgray-600 leading-relaxed">
              GPS tracking collar paired with an RFID smart bowl &mdash; portion control, feeding schedules, and multi-cat support.
            </p>
            <div>
              <div className="text-2xl font-bold text-charcoal-900">$350</div>
              <div className="text-sm text-warmgray-600 mt-1">$100 refundable deposit &middot; Ships in 3–6 months</div>
            </div>
            <Link href="/pre-order" className="btn-primary inline-flex items-center justify-center">
              Reserve Now
            </Link>
          </div>
        </div>
      </section>

      {/* Collar Features */}
      <section className="bg-cream-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="font-serif text-xl sm:text-2xl text-charcoal-900 mb-6">Smart Collar</h2>
          <ul className="space-y-2 text-warmgray-600">
            <li className="flex items-start gap-2"><span className="text-cocoa-500">&mdash;</span> GPS tracking</li>
            <li className="flex items-start gap-2"><span className="text-cocoa-500">&mdash;</span> Lightweight design</li>
            <li className="flex items-start gap-2"><span className="text-cocoa-500">&mdash;</span> Safety breakaway</li>
            <li className="flex items-start gap-2"><span className="text-cocoa-500">&mdash;</span> RFID chip for bowl pairing</li>
          </ul>
        </div>
      </section>

      {/* Bowl Features */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="font-serif text-xl sm:text-2xl text-charcoal-900 mb-6">Smart Bowl</h2>
          <ul className="space-y-2 text-warmgray-600">
            <li className="flex items-start gap-2"><span className="text-cocoa-500">&mdash;</span> RFID-controlled lid (opens only for matched cat)</li>
            <li className="flex items-start gap-2"><span className="text-cocoa-500">&mdash;</span> Portion tracking</li>
            <li className="flex items-start gap-2"><span className="text-cocoa-500">&mdash;</span> Feeding schedules</li>
            <li className="flex items-start gap-2"><span className="text-cocoa-500">&mdash;</span> Multi-cat household support</li>
          </ul>
        </div>
      </section>

      {/* Specs Grid */}
      <section className="bg-cream-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="font-serif text-xl sm:text-2xl text-charcoal-900 mb-6">Specifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 border border-sand-200">
              <div className="text-sm text-warmgray-600">Collar weight</div>
              <div className="font-semibold text-charcoal-900">28g</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-sand-200">
              <div className="text-sm text-warmgray-600">Collar battery</div>
              <div className="font-semibold text-charcoal-900">10 days</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-sand-200">
              <div className="text-sm text-warmgray-600">Bowl capacity</div>
              <div className="font-semibold text-charcoal-900">400ml</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-sand-200">
              <div className="text-sm text-warmgray-600">Connectivity</div>
              <div className="font-semibold text-charcoal-900">BLE + WiFi</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-4">Ready to reserve?</h2>
          <p className="text-warmgray-600 mb-6 max-w-xl mx-auto">
            Place a $100 refundable deposit to secure your Cat Bundle. Ships in 3–6 months.
          </p>
          <Link href="/pre-order" className="btn-primary inline-flex items-center justify-center">
            Pre-Order Bundle
          </Link>
        </div>
      </section>
    </div>
  );
}
