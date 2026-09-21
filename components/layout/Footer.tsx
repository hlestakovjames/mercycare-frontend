import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const exploreLinks = [
  { name: "About MercyCare", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Events", href: "/events" },
  { name: "Activities", href: "/activities" },
];

const discoverLinks = [
  { name: "News", href: "/news" },
  { name: "Blog", href: "/blog" },
  { name: "Resources", href: "/resources" },
  { name: "Gallery", href: "/gallery" },
  { name: "Volunteer", href: "/volunteer" },
  { name: "Careers", href: "/careers" },
];

const supportLinks = [
  { name: "Donate", href: "/donate" },
  { name: "Ways to Give", href: "/donate/ways-to-give" },
  { name: "Partnerships", href: "/contact/partnerships" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1B3A] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-20">
          {/* Brand */}
          <div className="lg:pr-6">
            <Link
              href="/"
              className="group inline-flex items-center gap-4"
              aria-label="MercyCare home"
            >
              <span className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1.5 shadow-lg transition-transform duration-200 group-hover:-translate-y-0.5">
                <Image
                  src="/logo.png"
                  alt="MercyCare"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </span>

              <span>
                <span className="block text-xl font-bold tracking-tight text-white">
                  MercyCare
                </span>

                <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Home Health Services
                </span>
              </span>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-slate-300">
              MercyCare brings compassionate care, community programs,
              partnerships, and practical support together to help individuals,
              families, and communities thrive.
            </p>

            <div className="mt-6">
              <p className="text-sm font-bold text-[#D4AF37]">
                Where Compassion Meets Dignity.
              </p>

              <p className="mt-1 text-xs font-medium text-slate-400">
                Wellness With Dignity
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-bold text-[#0B1B3A] transition-all hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/30"
            >
              Connect with MercyCare
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Explore
            </h2>

            <ul className="mt-6 space-y-3.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex text-sm text-slate-300 transition-colors hover:text-[#D4AF37]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover + Support */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Discover
            </h2>

            <ul className="mt-6 space-y-3.5">
              {discoverLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex text-sm text-slate-300 transition-colors hover:text-[#D4AF37]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Support
              </h3>

              <ul className="mt-4 space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
                    >
                      {link.name}
                      <ArrowRight
                        className="h-3.5 w-3.5 text-[#D4AF37]"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Contact MercyCare
            </h2>

            <ul className="mt-6 space-y-5">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#D4AF37]">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Email
                  </span>

                  <a
                    href="mailto:mercycare@villagerise.africa"
                    className="mt-1 block break-all text-sm leading-6 text-slate-300 transition-colors hover:text-white"
                  >
                    mercycare@villagerise.africa
                  </a>
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#D4AF37]">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>

                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Phone
                  </span>

                  <a
                    href="tel:+254107631070"
                    className="mt-1 block text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    +254 107 631070
                  </a>
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#D4AF37]">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                </span>

                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                    WhatsApp
                  </span>

                  <a
                    href="https://wa.me/254107631070"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    +254 107 631070
                  </a>
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#D4AF37]">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>

                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Location
                  </span>

                  <span className="mt-1 block text-sm text-slate-300">
                    Kisumu County, Kenya
                  </span>
                </span>
              </li>
            </ul>

            <Link
              href="/contact/get-in-touch"
              className="mt-7 inline-flex min-h-10 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:border-white hover:bg-white hover:text-[#0B1B3A] focus:outline-none focus:ring-4 focus:ring-white/20"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Support strip */}
        <div className="border-t border-white/10 py-8">
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/services"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#1597c9]/40 hover:bg-white/[0.06]"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#1597c9]">
                Services
              </p>

              <p className="mt-2 text-sm font-semibold text-white">
                Explore our home health services
                <ArrowRight
                  className="ml-2 inline h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </p>
            </Link>

            <Link
              href="/resources"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#1597c9]/40 hover:bg-white/[0.06]"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#1597c9]">
                Resources
              </p>

              <p className="mt-2 text-sm font-semibold text-white">
                Find care and community resources
                <ArrowRight
                  className="ml-2 inline h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </p>
            </Link>

            <Link
              href="/volunteer"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#1597c9]/40 hover:bg-white/[0.06]"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#1597c9]">
                Get Involved
              </p>

              <p className="mt-2 text-sm font-semibold text-white">
                Volunteer and participate
                <ArrowRight
                  className="ml-2 inline h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </p>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-slate-400">
            © {new Date().getFullYear()} MercyCare. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-slate-400 transition-colors hover:text-white"
            >
              Terms of Use
            </Link>

            <Link
              href="/contact/faq"
              className="text-slate-400 transition-colors hover:text-white"
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className="font-semibold text-[#D4AF37] transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
