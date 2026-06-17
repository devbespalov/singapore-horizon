import Image from "next/image";

const gallery = [
  {
    src: "/images/service-mice-corporate.png",
    alt: "Corporate MICE event with Singapore skyline view",
    title: "Corporate Events",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/service-group-tours.png",
    alt: "Group tour exploring Singapore Chinatown",
    title: "Cultural Tours",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/service-vip-luxury.png",
    alt: "Luxury yacht experience on Marina Bay",
    title: "VIP Experiences",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/iconic-landmarks-wide.png",
    alt: "Singapore Gardens by the Bay and Marina Bay skyline at twilight",
    title: "Iconic Landmarks",
    className: "col-span-2 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
            Experiences
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl">
            Singapore, Curated for Your Clients
          </h2>
          <p className="mt-4 text-lg text-white/60">
            From corporate galas to cultural immersions — we craft memorable
            moments that keep travelers coming back.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-4 lg:auto-rows-[240px] lg:grid-cols-4 lg:gap-5">
          {gallery.map((item) => (
            <div
              key={item.title}
              className={`group relative min-h-[200px] overflow-hidden rounded-2xl ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-white">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
