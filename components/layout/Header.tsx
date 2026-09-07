import Image from "next/image";
import Link from "next/link";

import DesktopNav from "@/components/navigation/DesktopNav";
import MobileNav from "@/components/navigation/MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center"
          aria-label="MercyCare home"
        >
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

          <span className="ml-3 hidden flex-col justify-center sm:flex">
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
