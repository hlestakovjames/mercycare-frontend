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
        const active =
          isActiveLink(pathname, item.href) ||
          item.children?.some((child) => isActiveLink(pathname, child.href));

        if (item.children?.length) {
          return (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                  active
                    ? "font-semibold text-[#0B1B3A]"
                    : "text-slate-700 hover:text-[#0B1B3A]"
                }`}
              >
                {item.name}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="h-3.5 w-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </Link>

              <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <div className="min-w-52 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                  {item.children.map((child) => {
                    const childActive = isActiveLink(pathname, child.href);

                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        aria-current={childActive ? "page" : undefined}
                        className={`block rounded-lg px-4 py-3 text-sm transition-colors ${
                          childActive
                            ? "bg-slate-50 font-semibold text-[#0B1B3A]"
                            : "font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0B1B3A]"
                        }`}
                      >
                        {child.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }

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
