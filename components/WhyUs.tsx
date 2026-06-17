import Image from "next/image";

const reasons = [
  {
    title: "Deep Local Expertise",
    description:
      "Born and based in Singapore. We know every neighborhood, vendor, and hidden gem — ensuring authentic experiences your clients will remember.",
  },
  {
    title: "B2B-First Approach",
    description:
      "We work exclusively with partners, not direct consumers. Your brand stays front and center — we operate as your invisible local team.",
  },
  {
    title: "Competitive Net Rates",
    description:
      "Strong relationships with hotels, attractions, and suppliers mean better margins for you. Transparent pricing with no hidden fees.",
  },
  {
    title: "Dedicated Account Manager",
    description:
      "Every partner gets a single point of contact who understands your business, preferences, and client profile.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/marina-bay-gardens.png"
              alt="Singapore Gardens by the Bay at twilight"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
              Why Partner With Us
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl">
              Your Trusted Local Partner
            </h2>
            <p className="mt-4 text-lg text-white/70">
              We bring reliability, creativity, and dedicated support to every
              B2B partnership — helping travel agencies and operators deliver
              outstanding Singapore experiences.
            </p>

            <div className="mt-10 space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/20">
                    <svg className="h-3.5 w-3.5 text-teal-light" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{reason.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
