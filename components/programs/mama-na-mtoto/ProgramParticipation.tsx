import Link from "next/link";

const participationOptions = [
  {
    title: "Join as a participant",
    description:
      "If you are a mother, caregiver, or family looking for support through Mama na Mtoto, contact MercyCare to learn about available activities and support.",
    href: "/contact",
    linkText: "Contact MercyCare",
  },
  {
    title: "Volunteer",
    description:
      "Contribute your time, skills, knowledge, or practical support to activities that promote maternal and child wellbeing.",
    href: "/volunteer",
    linkText: "Become a Volunteer",
  },
  {
    title: "Partner with us",
    description:
      "Healthcare professionals, organizations, institutions, and community groups can collaborate with MercyCare to strengthen support for mothers and children.",
    href: "/programs/partnerships",
    linkText: "Explore Partnerships",
  },
  {
    title: "Support the program",
    description:
      "Your contribution can help MercyCare strengthen maternal and child health initiatives and extend support to families who need it.",
    href: "/donate",
    linkText: "Support MercyCare",
  },
];

export default function ProgramParticipation() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Get Involved
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            There are different ways to be part of Mama na Mtoto.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Whether you are looking for support, want to volunteer, or would
            like to partner with MercyCare, your involvement can contribute to
            healthier mothers, children, and families.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {participationOptions.map((option) => (
            <article
              key={option.title}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-8"
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