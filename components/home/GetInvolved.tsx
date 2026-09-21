import Link from "next/link";
import {
  ArrowRight,
  Handshake,
  HeartHandshake,
  UsersRound,
} from "lucide-react";

const involvementOptions = [
  {
    icon: UsersRound,
    title: "Volunteer with MercyCare",
    description:
      "Share your time, skills, and passion to support MercyCare programs and community activities.",
    href: "/volunteer",
    action: "Explore volunteering",
  },
  {
    icon: Handshake,
    title: "Partner with MercyCare",
    description:
      "Organizations, businesses, institutions, and community groups can work with us to create meaningful impact.",
    href: "/contact/partnerships",
    action: "Explore partnerships",
  },
];

export default function GetInvolved() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0B1B3A]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1597c9]">
            <HeartHandshake className="h-3.5 w-3.5" aria-hidden="true" />
            Get Involved
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0B1B3A] sm:text-4xl lg:text-5xl">
            There is a place for you in the MercyCare journey.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Whether you volunteer your time, share your expertise, build a
            partnership, or support our work, your contribution can help create
            meaningful change.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {involvementOptions.map((option) => {
            const Icon = option.icon;

            return (
              <article
                key={option.title}
                className="group rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1B3A] text-white transition-colors group-hover:bg-[#1597c9]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-[#0B1B3A]">
                  {option.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {option.description}
                </p>

                <Link
                  href={option.href}
                  className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0B1B3A] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#1597c9] focus:outline-none focus:ring-4 focus:ring-[#1597c9]/20"
                >
                  {option.action}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/donate"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#0B1B3A] bg-white px-6 py-3 text-sm font-bold text-[#0B1B3A] transition hover:bg-[#0B1B3A] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#1597c9]/20"
          >
            Support MercyCare
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
