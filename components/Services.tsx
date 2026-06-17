import Image from "next/image";

const services = [
  {
    image: "/images/service-mice-corporate.png",
    title: "MICE & Corporate Events",
    description:
      "End-to-end management for meetings, incentives, conferences, and exhibitions. Venue sourcing, logistics, and on-ground coordination tailored to your corporate clients.",
  },
  {
    image: "/images/service-group-tours.png",
    title: "Group Tours & FIT Packages",
    description:
      "Curated itineraries for travel agencies — from classic city highlights to off-the-beaten-path experiences. Flexible group sizes and competitive B2B rates.",
  },
  {
    image: "/images/service-vip-luxury.png",
    title: "VIP & Luxury Experiences",
    description:
      "Private yacht charters, Michelin-star dining, exclusive access to attractions, and bespoke concierge services for high-value travelers.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Destination Management (DMC)",
    description:
      "Your local ground partner in Singapore. Hotel contracting, transport, guides, dining reservations, and 24/7 support for seamless operations.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "Team Building & Incentives",
    description:
      "Creative team-building programs — culinary challenges, adventure activities, CSR initiatives — designed to motivate and inspire corporate groups.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Multi-Destination Programs",
    description:
      "Combine Singapore with Malaysia, Indonesia, or Thailand in seamless cross-border itineraries. One partner, multiple destinations.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal">
            Our Services
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy sm:text-4xl">
            Comprehensive B2B Solutions
          </h2>
          <p className="mt-4 text-lg text-muted">
            From ground handling to full program design — we handle every detail
            so you can focus on growing your business and delighting your clients.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) =>
            "image" in service && service.image ? (
              <div
                key={service.title}
                className="card-hover group overflow-hidden rounded-2xl border border-border bg-white"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={service.title}
                className="card-hover group rounded-2xl border border-border bg-white p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                  {"icon" in service && service.icon}
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-xl font-semibold text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
