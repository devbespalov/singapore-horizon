const steps = [
  {
    number: "01",
    title: "Tell Us Your Needs",
    description:
      "Share your client profile, group size, dates, and budget. We'll respond within 24 hours with initial ideas.",
  },
  {
    number: "02",
    title: "Receive a Custom Proposal",
    description:
      "Our team crafts a tailored itinerary with net rates, inclusions, and alternatives — ready for your review.",
  },
  {
    number: "03",
    title: "Confirm & Relax",
    description:
      "Once approved, we handle all logistics. Your dedicated account manager keeps you updated every step of the way.",
  },
  {
    number: "04",
    title: "Deliver Excellence",
    description:
      "On-ground execution with 24/7 support. Post-trip debrief and feedback to continuously improve.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal">
            How It Works
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy sm:text-4xl">
            Simple Partnership Process
          </h2>
          <p className="mt-4 text-lg text-muted">
            Getting started is easy. We&apos;ve streamlined our onboarding so you
            can quote and book faster.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col">
              <div className="flex h-10 items-center">
                <span className="shrink-0 font-[family-name:var(--font-playfair)] text-4xl font-bold leading-none text-teal/20">
                  {step.number}
                </span>
                {index < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="mx-4 hidden h-px flex-1 bg-border lg:block"
                  />
                )}
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-playfair)] text-lg font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
