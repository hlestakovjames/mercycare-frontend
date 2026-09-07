import Link from "next/link";

const sections = [
  {
    title: "Our Story",
    description:
      "Discover how MercyCare is bringing professional and compassionate healthcare closer to individuals and families at home.",
    href: "/about/our-story",
  },
  {
    title: "Mission & Vision",
    description:
      "Understand the purpose that guides our work and our vision for the future of home healthcare.",
    href: "/about/mission-vision",
  },
  {
    title: "Core Values",
    description:
      "Explore the principles that shape how we care, serve, communicate, and build trust.",
    href: "/about/values",
  },
  {
    title: "Objectives",
    description:
      "See the practical priorities that guide MercyCare's services, people, partnerships, and growth.",
    href: "/about/objectives",
  },
  {
    title: "Leadership",
    description:
      "Meet the leadership providing strategic direction and strengthening MercyCare's standards of care.",
    href: "/about/leadership",
  },
  {
    title: "Our Team",
    description:
      "Learn about the healthcare professionals and support teams behind MercyCare's care delivery.",
    href: "/about/our-team",
  },
  {
    title: "Partnerships",
    description:
      "Explore how MercyCare works with professionals, institutions, organizations, communities, and supporters.",
    href: "/about/partnerships",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              About MercyCare
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Professional healthcare.
              <br />
              Compassionate care.
              <br />
              At home.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              MercyCare Home Health Services brings clinically excellent,
              compassionate, and dignified healthcare closer to individuals
              and families in the comfort of their homes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Healthcare built around people, families, and dignity.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              MercyCare is a family-centred home healthcare provider committed
              to delivering professional care with compassion, dignity, and
              clinical excellence. We bridge hospital-grade medical expertise
              with the warmth and personal attention of care delivered at
              home.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              From children with special needs and new mothers to older adults,
              people recovering from surgery, and individuals living with
              chronic conditions, our approach is designed around the unique
              needs of every client and family.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Explore MercyCare
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Get to know who we are and what guides us.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Follow our story, purpose, values, people, and partnerships to
              understand the foundation behind MercyCare.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-[#0B1B3A]">
                    {section.title}
                  </h3>

                  <span className="text-lg text-[#D4AF37] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {section.description}
                </p>

                <span className="mt-5 inline-block text-sm font-semibold text-[#0B1B3A]">
                  Explore {section.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0B1B3A] px-6 py-12 text-center sm:px-10 lg:px-16">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Our Care
            </p>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Care that brings dignity, comfort, and peace of mind home.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Discover MercyCare's professional home health services and find
              the right support for yourself or someone you love.
            </p>

            <div className="mt-8">
              <Link
                href="/services"
                className="inline-flex rounded-full bg-[#D4AF37] px-7 py-3 text-sm font-bold text-[#0B1B3A] transition hover:bg-white"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}