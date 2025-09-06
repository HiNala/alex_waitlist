export default function FunnelCancelledPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-yellow-50 via-cream-50 to-sky-50">
      <div className="text-center bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl px-8 py-10 shadow-xl">
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal-900 mb-3">Payment cancelled</h1>
        <p className="text-warmgray-600 mb-6">No worries, you can resume your order anytime.</p>
        <a href="/collar-funnel" className="btn-primary inline-block px-6 py-3 rounded-xl">Return to Funnel</a>
      </div>
    </div>
  );
}


