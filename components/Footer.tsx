import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Logo height={24} />

          <div className="text-center sm:text-left">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} Horizon Global Tours Pte. Ltd.
            </p>
            <p className="text-xs text-white/30">UEN: 202604703K</p>
          </div>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
