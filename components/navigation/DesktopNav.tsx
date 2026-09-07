import Link from "next/link";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Events", href: "/events" },
  { name: "Activities", href: "/activities" },
  { name: "News", href: "/news" },
  { name: "Blog", href: "/blog" },
  { name: "Resources", href: "/resources" },
  { name: "Gallery", href: "/gallery" },
  { name: "Volunteer", href: "/volunteer" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function DesktopNav() {
  return (
    <nav
      className="hidden items-center gap-6 lg:flex"
      aria-label="Main navigation"
    >
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-slate-700 transition-colors hover:text-[#0B1B3A]"
        >
          {item.name}
        </Link>
      ))}

      <Link
        href="/donate"
        className="rounded-full bg-[#0B1B3A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#162d5c]"
      >
        Donate
      </Link>
    </nav>
  );
}