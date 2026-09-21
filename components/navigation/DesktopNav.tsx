"use client";

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

function Chevron({ direction = "down" }: { direction?: "down" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="h-3.5 w-3.5 shrink-0"
      aria-hidden="true"
    >
      {direction === "right" ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9 6 6 6-6 6"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m6 9 6 6 6-6"
        />
      )}
    </svg>
  );
}

function DesktopMenuItem({
  item,
  pathname,
  depth = 0,
}: {
  item: NavigationItem;
  pathname: string;
  depth?: number;
}) {
  const active = hasActiveDescendant(pathname, item);

  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        aria-current={isActiveLink(pathname, item.href) ? "page" : undefined}
        className={`block rounded-lg px-3 py-2 text-[12.5px] transition-colors ${
          isActiveLink(pathname, item.href)
            ? "bg-slate-50 font-semibold text-[#0B1B3A]"
            : "font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0B1B3A]"
        }`}
      >
        {item.name}
      </Link>
    );
  }

  if (depth === 0) {
    return (
      <div className="group relative">
        <Link
          href={item.href}
          aria-current={active ? "page" : undefined}
          className={`inline-flex items-center gap-1 text-[12.5px] font-medium transition-colors ${
            active
              ? "font-semibold text-[#0B1B3A]"
              : "text-slate-700 hover:text-[#0B1B3A]"
          }`}
        >
          {item.name}
          <Chevron />
        </Link>

        <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
          <div className="min-w-54 rounded-xl border border-slate-200 bg-white p-1 shadow-xl">
            {item.children.map((child) => (
              <DesktopMenuItem
                key={child.href}
                item={child}
                pathname={pathname}
                depth={depth + 1}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group/sub relative">
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={`flex items-center justify-between gap-4 rounded-lg px-3 py-2 text-[12.5px] transition-colors ${
          isActiveLink(pathname, item.href)
            ? "bg-slate-50 font-semibold text-[#0B1B3A]"
            : "font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0B1B3A]"
        }`}
      >
        <span>{item.name}</span>
        <Chevron direction="right" />
      </Link>

      <div className="invisible absolute left-full top-0 z-50 pl-2 opacity-0 transition-all duration-150 group-hover/sub:visible group-hover/sub:opacity-100">
        <div className="min-w-54 rounded-xl border border-slate-200 bg-white p-1 shadow-xl">
          {item.children.map((child) => (
            <DesktopMenuItem
              key={child.href}
              item={child}
              pathname={pathname}
              depth={depth + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
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
      className="hidden items-center gap-3.5 lg:flex"
      aria-label={sectionLabel}
    >
      {navigation.map((item) => (
        <DesktopMenuItem
          key={item.href}
          item={item}
          pathname={pathname}
        />
      ))}

      <Link
        href="/donate"
        className="rounded-full bg-[#0B1B3A] px-4 py-1.5 text-[12.5px] font-semibold text-white transition-colors hover:bg-[#162d5c]"
      >
        Donate
      </Link>
    </nav>
  );
}
