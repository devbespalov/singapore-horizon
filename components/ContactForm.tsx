"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const serviceLabels: Record<string, string> = {
  mice: "MICE & Corporate Events",
  "group-tours": "Group Tours & FIT Packages",
  dmc: "Destination Management (DMC)",
  vip: "VIP & Luxury Experiences",
  "team-building": "Team Building & Incentives",
  "multi-destination": "Multi-Destination Programs",
  other: "Other / General Inquiry",
};

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setState("error");
      return;
    }

    const serviceLabel = serviceLabels[data.service] ?? data.service;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New inquiry from ${data.company}`,
          from_name: data.name,
          name: data.name,
          email: data.email,
          replyto: data.email,
          message: [
            `Name: ${data.name}`,
            `Company: ${data.company}`,
            `Email: ${data.email}`,
            `Phone: ${data.phone || "Not provided"}`,
            `Service: ${serviceLabel}`,
            "",
            "Message:",
            data.message,
          ].join("\n"),
        }),
      });

      const result = await res.json();
      if (!result.success) throw new Error("Failed to submit");

      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <section id="contact" className="bg-navy-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
              Contact Us
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s Start a Partnership
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Whether you&apos;re a travel agency looking for a reliable DMC or a
              corporate planner organizing an incentive trip — we&apos;d love to
              hear from you.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/20 text-teal-light">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Company</p>
                  <p className="text-sm text-white/60">Horizon Global Tours Pte. Ltd.</p>
                  <p className="mt-1 text-xs text-white/40">UEN: 202604703K</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/20 text-teal-light">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a href="mailto:office@singapore-horizon.com" className="text-sm text-white/60 hover:text-teal-light">
                    office@singapore-horizon.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/20 text-teal-light">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <a href="tel:+6588949060" className="text-sm text-white/60 hover:text-teal-light">
                    +65 8894 9060
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/20 text-teal-light">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Office</p>
                  <p className="text-sm text-white/60">
                    332 Serangoon Avenue 3, #02-263<br />
                    Singapore 550332
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white p-8 shadow-2xl lg:p-10">
            {state === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal/10 text-teal">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-xl font-semibold text-navy">
                  Message Sent!
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setState("idle")}
                  className="mt-6 text-sm font-medium text-teal hover:text-teal-light"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-navy">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                      placeholder="Your Travel Agency"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-navy">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="mice">MICE & Corporate Events</option>
                    <option value="group-tours">Group Tours & FIT Packages</option>
                    <option value="dmc">Destination Management (DMC)</option>
                    <option value="vip">VIP & Luxury Experiences</option>
                    <option value="team-building">Team Building & Incentives</option>
                    <option value="multi-destination">Multi-Destination Programs</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="mt-1.5 w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                    placeholder="Tell us about your project — group size, dates, requirements..."
                  />
                </div>

                {state === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again or{" "}
                    <a
                      href="mailto:office@singapore-horizon.com"
                      className="font-medium underline hover:text-red-700"
                    >
                      email us directly
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="w-full rounded-full bg-teal py-3.5 text-sm font-semibold text-white transition-all hover:bg-teal-light disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {state === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
