import Link from "next/link";

const involvementAreas = [
  {
    number: "01",
    title: "Volunteer",
    description:
      "Share your time, skills, experience, or professional expertise to support MercyCare initiatives and community activities.",
    href: "/volunteer",
    action: "Explore Volunteering",
  },
  {
    number: "02",
    title: "Support Our Programs",
    description:
      "Contribute resources toward initiatives that help MercyCare extend care, wellness support, education, and community engagement.",
    href: "/donate",
    action: "Support MercyCare",
  },
  {
    number: "03",
    title: "Partner With Us",
    description:
      "Work with MercyCare as a healthcare professional, institution, organisation, community group, or strategic partner.",
    href: "/programs/partnerships",
    action: "Explore Partnerships",
  },
  {
    number: "04",
    title: "Contact Us",
    description:
      "Start a conversation with MercyCare about our programs, collaboration opportunities, community needs, or other enquiries.",
    href: "/contact",
    action: "Contact MercyCare",
  },
];

export default function ProgramsGetInvolvedPage() {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Get Involved
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Be part of extending care and wellbeing.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              MercyCare programs are strengthened by people, organisations,
              professionals, and supporters who believe in healthier,
              stronger, and more caring communities.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Ways to Participate
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              There are many ways to contribute.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Whether you want to volunteer, provide support, build a
              partnership, or simply start a conversation, your involvement
              can help strengthen the work MercyCare does with individuals,
              families, and communities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {involvementAreas.map((area) => (
              <article
                key={area.number}
                className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-8"
              >
                <span className="text-sm font-bold tracking-[0.15em] text-[#D4AF37]">
                  {area.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-[#0B1B3A]">
                  {area.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {area.description}
                </p>

                <div className="mt-6">
                  <Link
                    href={area.href}
                    className="inline-flex items-center text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
                  >
                    {area.action}
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#D4AF37] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Together, we can bring care closer to the people who need it.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#0B1B3A]/75">
            Explore MercyCare's programs, connect with our team, or discover a
            meaningful way to support our work.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/programs"
              className="rounded-full bg-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0B1B3A]"
            >
              Explore Programs
            </Link>

            <Link
              href="/contact"
              className="rounded-full border-2 border-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#0B1B3A] hover:text-white"
            >
              Contact MercyCare
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}