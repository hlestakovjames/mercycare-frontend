"use client";

import { useState } from "react";
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

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const sectionKey = getSectionKey(pathname);

  const navigation = sectionKey
    ? sectionNavigation[sectionKey].items
    : mainNavigation;

  const sectionLabel = sectionKey
    ? sectionNavigation[sectionKey].label
    : "Mobile navigation";

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center rounded-md p-2 text-[#0B1B3A] transition hover:bg-slate-100"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-slate-100 bg-white shadow-lg">
          <nav
            id="mobile-navigation"
            className="mx-auto flex max-w-7xl flex-col px-6 py-5"
            aria-label={sectionLabel}
          >
            {navigation.map((item) => {
              const active =
                isActiveLink(pathname, item.href) ||
                item.children?.some((child) =>
                  isActiveLink(pathname, child.href),
                );

              return (
                <div key={item.href} className="border-b border-slate-100">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block py-4 text-sm transition-colors ${
                      active
                        ? "font-semibold text-[#0B1B3A]"
                        : "font-medium text-slate-700 hover:text-[#0B1B3A]"
                    }`}
                  >
                    {item.name}
                  </Link>

                  {item.children?.length ? (
                    <div className="mb-3 ml-4 border-l border-slate-200 pl-4">
                      {item.children.map((child) => {
                        const childActive = isActiveLink(
                          pathname,
                          child.href,
                        );

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            aria-current={
                              childActive ? "page" : undefined
                            }
                            className={`block py-2.5 text-sm transition-colors ${
                              childActive
                                ? "font-semibold text-[#0B1B3A]"
                                : "font-medium text-slate-500 hover:text-[#0B1B3A]"
                            }`}
                          >
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}

            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="mt-5 rounded-full bg-[#0B1B3A] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#162d5c]"
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
