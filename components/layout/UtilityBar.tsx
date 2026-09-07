import Link from "next/link";

const portalUrl = process.env.NEXT_PUBLIC_MERCYCARE_PORTAL_URL;

export default function UtilityBar() {
  return (
    <div className="border-b border-white/10 bg-[#0B1B3A]">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-xs font-medium text-slate-200 sm:gap-5">
          <a
            href="tel:+254107631070"
            className="transition-colors hover:text-white"
          >
            <span className="sm:hidden">Call</span>
            <span className="hidden sm:inline">Call Us</span>
          </a>

          <span className="h-3 w-px bg-white/20" />

          <a
            href="https://wa.me/254107631070"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            WhatsApp
          </a>

          <span className="h-3 w-px bg-white/20" />

          <Link
            href="/contact"
            className="transition-colors hover:text-white"
          >
            <span className="sm:hidden">Support</span>
            <span className="hidden sm:inline">Client Support</span>
          </Link>
        </div>

        <a
          href={portalUrl || "/login"}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#D4AF37] px-4 py-1.5 text-xs font-bold text-[#0B1B3A] shadow-sm transition-colors hover:bg-white"
        >
          Login ↗
        </a>
      </div>
    </div>
  );
}