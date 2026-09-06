import Image from "next/image";
import Link from "next/link";

import DesktopNav from "@/components/navigation/DesktopNav";
import MobileNav from "@/components/navigation/MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center"
          aria-label="MercyCare home"
        >
          <span className="flex h-[46px] w-[46px] items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
            <Image
              src="/logo.png"
              alt="MercyCare"
              width={46}
              height={46}
              priority
              className="h-[46px] w-[46px] rounded-full object-cover"
            />
          </span>
        </Link>

        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}