import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      <Image
        src="/images/hero-singapore-skyline.png"
        alt="Singapore Marina Bay skyline at golden hour"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/92 via-navy/78 to-teal/45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-3xl">
          <p className="animate-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-teal-light" />
            B2B Tourism Partner in Singapore
          </p>

          <h1 className="animate-fade-up animation-delay-200 font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Elevate Your Clients&apos;{" "}
            <span className="gradient-text">Singapore Experience</span>
          </h1>

          <p className="animate-fade-up animation-delay-400 mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            We partner with travel agencies, tour operators, and corporate clients
            to deliver seamless, premium tourism solutions across the Lion City —
            from MICE events to bespoke group itineraries.
          </p>

          <div className="animate-fade-up animation-delay-600 mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-teal-light hover:shadow-lg hover:shadow-teal/25"
            >
              Request a Partnership
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/20 pt-10">
            {[
              { value: "B2B", label: "Partners Only" },
              { value: "24h", label: "Quote Turnaround" },
              { value: "SG", label: "Local Team" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-gold-light sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-white/60 sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
