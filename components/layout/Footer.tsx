import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "News & Announcements", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events & Activities", href: "/events" },
];

const getInvolved = [
  { name: "Volunteer", href: "/volunteer" },
  { name: "Donate", href: "/donate" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1B3A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex flex-col items-start"
              aria-label="MercyCare home"
            >
              <span className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white shadow-sm">
                <Image
                  src="/logo.png"
                  alt="MercyCare"
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover"
                />
              </span>

              <span className="mt-4 text-xl font-bold tracking-tight text-white">
                MercyCare
              </span>

              <span className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                Home Health Services
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              MercyCare is committed to improving lives, strengthening
              communities, and creating lasting impact through compassionate
              care and community-centered initiatives.
            </p>

            <p className="mt-4 text-sm font-medium text-[#D4AF37]">
              Caring for communities. Creating lasting impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h2>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get Involved
            </h2>

            <ul className="mt-5 space-y-3">
              {getInvolved.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact MercyCare
            </h2>

            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <p>
                <span className="font-medium text-white">Email:</span>{" "}
                info@mercycare.org
              </p>

              <p>
                <span className="font-medium text-white">Phone:</span>{" "}
                +254 XXX XXX XXX
              </p>

              <p>
                <span className="font-medium text-white">Location:</span>{" "}
                Kisumu County, Kenya
              </p>
            </div>

            <Link
              href="/donate"
              className="mt-6 inline-flex rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
            >
              Support MercyCare
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} MercyCare. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}