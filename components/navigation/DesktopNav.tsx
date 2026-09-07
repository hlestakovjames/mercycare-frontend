"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  mainNavigation,
  sectionNavigation,
} from "@/components/navigation/navigation";

function getSectionKey(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  const section = segments[0];

  return sectionNavigation[section] ? section : null;
}

function isActiveLink(pathname: string, href: string) {
  if (href.includes("#")) {
    return pathname === href.split("#")[0];
  }

  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href;
}

export default function DesktopNav() {
  const pathname = usePathname();
  const sectionKey = getSectionKey(pathname);

  const navigation = sectionKey
    ? sectionNavigation[sectionKey].items
    : mainNavigation;

  const sectionLabel = sectionKey
    ? sectionNavigation[sectionKey].label
    : "Main navigation";

  return (
    <nav
      className="hidden items-center gap-5 lg:flex"
      aria-label={sectionLabel}
    >
      {navigation.map((item) => {
        const active = isActiveLink(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`text-sm font-medium transition-colors ${
              active
                ? "font-semibold text-[#0B1B3A]"
                : "text-slate-700 hover:text-[#0B1B3A]"
            }`}
          >
            {item.name}
          </Link>
        );
      })}

      <Link
        href="/donate"
        className="rounded-full bg-[#0B1B3A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#162d5c]"
      >
        Donate
      </Link>
    </nav>
  );
}