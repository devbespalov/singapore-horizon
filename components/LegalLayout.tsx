import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LegalLayoutProps = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/"
            className="text-sm font-medium text-teal transition-colors hover:text-teal-light"
          >
            ← Back to home
          </Link>

          <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-3xl font-bold text-navy sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-muted">Last updated: {lastUpdated}</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted sm:text-base">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-navy">
        {title}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
