"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  mainNavigation,
  sectionNavigation,
  type NavigationItem,
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

function hasActiveDescendant(
  pathname: string,
  item: NavigationItem,
): boolean {
  if (isActiveLink(pathname, item.href)) {
    return true;
  }

  return (
    item.children?.some((child) =>
      hasActiveDescendant(pathname, child),
    ) ?? false
  );
}

function MobileMenuItem({
  item,
  pathname,
  onNavigate,
  depth = 0,
}: {
  item: NavigationItem;
  pathname: string;
  onNavigate: () => void;
  depth?: number;
}) {
  const hasChildren = Boolean(item.children?.length);
  const active = hasActiveDescendant(pathname, item);

  const [isExpanded, setIsExpanded] = useState(active);

  useEffect(() => {
    if (active) {
      setIsExpanded(true);
    }
  }, [active]);

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        aria-current={isActiveLink(pathname, item.href) ? "page" : undefined}
        className={`block rounded-lg py-3 text-sm transition-colors ${
          depth === 0 ? "font-medium" : "font-medium"
        } ${
          isActiveLink(pathname, item.href)
            ? "font-semibold text-[#0B1B3A]"
            : depth === 0
              ? "text-slate-700 hover:text-[#0B1B3A]"
              : "text-slate-500 hover:text-[#0B1B3A]"
        }`}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div
      className={
        depth === 0
          ? "border-b border-slate-100"
          : "border-l border-slate-200 pl-4"
      }
    >
      <div className="flex items-center justify-between gap-3">
        <Link
          href={item.href}
          onClick={onNavigate}
          aria-current={
            isActiveLink(pathname, item.href) ? "page" : undefined
          }
          className={`min-w-0 flex-1 py-3 text-sm transition-colors ${
            active
              ? "font-semibold text-[#0B1B3A]"
              : depth === 0
                ? "font-medium text-slate-700"
                : "font-medium text-slate-600"
          }`}
        >
          {item.name}
        </Link>

        <button
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          aria-expanded={isExpanded}
          aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.name}`}
          className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-[#0B1B3A]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className={`h-4 w-4 transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m6 9 6 6 6-6"
            />
          </svg>
        </button>
      </div>

      {isExpanded ? (
        <div className="pb-3">
          {item.children?.map((child) => (
            <MobileMenuItem
              key={child.href}
              item={child}
              pathname={pathname}
              onNavigate={onNavigate}
              depth={depth + 1}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
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

  const closeNavigation = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
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
            className="mx-auto flex max-h-[calc(100vh-5rem)] max-w-7xl flex-col overflow-y-auto px-6 py-5"
            aria-label={sectionLabel}
          >
            {navigation.map((item) => (
              <MobileMenuItem
                key={item.href}
                item={item}
                pathname={pathname}
                onNavigate={closeNavigation}
              />
            ))}

            <Link
              href="/donate"
              onClick={closeNavigation}
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
