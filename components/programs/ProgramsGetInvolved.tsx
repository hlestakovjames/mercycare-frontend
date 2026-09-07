import Link from "next/link";

const involvementOptions = [
  {
    title: "Volunteer",
    description:
      "Give your time, skills, knowledge, or experience to support MercyCare programs and community initiatives.",
    href: "/volunteer",
    linkText: "Become a Volunteer",
  },
  {
    title: "Support Our Programs",
    description:
      "Help MercyCare strengthen its programs and extend meaningful support to individuals, families, and communities.",
    href: "/donate",
    linkText: "Support MercyCare",
  },
  {
    title: "Partner With Us",
    description:
      "Collaborate with MercyCare through professional, community, institutional, or strategic partnerships.",
    href: "/programs/partnerships",
    linkText: "Explore Partnerships",
  },
  {
    title: "Stay Connected",
    description:
      "Get in touch with MercyCare to learn more about our programs, activities, opportunities, and ongoing work.",
    href: "/contact",
    linkText: "Contact MercyCare",
  },
];

export default function ProgramsGetInvolved() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Get Involved
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Be part of the work.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            MercyCare programs are strengthened by people and organizations
            willing to contribute their time, skills, resources, partnerships,
            and support.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {involvementOptions.map((option) => (
            <article
              key={option.title}
              className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100"
            >
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                {option.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {option.description}
              </p>

              <Link
                href={option.href}
                className="mt-6 inline-flex items-center text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
              >
                {option.linkText}
                <span className="ml-2">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}