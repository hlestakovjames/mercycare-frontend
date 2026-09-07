import Image from "next/image";
import Link from "next/link";

import DesktopNav from "@/components/navigation/DesktopNav";
import MobileNav from "@/components/navigation/MobileNav";

const portalUrl = process.env.NEXT_PUBLIC_MERCYCARE_PORTAL_URL;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      {/* Utility Bar */}
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

      {/* Main Navigation */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center"
          aria-label="MercyCare home"
        >
          {/* Logo */}
          <span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
            <Image
              src="/logo.png"
              alt="MercyCare logo"
              width={48}
              height={48}
              priority
              className="h-[48px] w-[48px] rounded-full object-cover"
            />
          </span>

          {/* Brand Name */}
          <span className="ml-3 hidden sm:flex flex-col justify-center">
            <span className="text-xl font-bold leading-tight tracking-tight text-[#0B1B3A]">
              MercyCare
            </span>

            <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Home Health Services
            </span>
          </span>
        </Link>

        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}