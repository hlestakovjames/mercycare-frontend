import Link from "next/link";

const supportAreas = [
  {
    title: "Mother & Baby Care",
    description:
      "Professional home-based support that can help mothers and babies receive appropriate care, guidance, and attention within the home environment.",
    href: "/services",
  },
  {
    title: "Professional Home Nursing Care",
    description:
      "Professional nursing support for mothers, children, and families whose healthcare needs require skilled care at home.",
    href: "/services/home-nursing",
  },
  {
    title: "Infant & Child Development",
    description:
      "Support and awareness around healthy child development, wellbeing, and the role families play in nurturing children.",
    href: "/services",
  },
  {
    title: "Mental Health & Psychosocial Support",
    description:
      "Support that recognizes the emotional and psychosocial wellbeing of mothers, children, caregivers, and families.",
    href: "/services",
  },
  {
    title: "Physiotherapy & Rehabilitation",
    description:
      "Appropriate rehabilitation support for mothers and children where physical recovery, mobility, or functional wellbeing requires professional attention.",
    href: "/services",
  },
  {
    title: "Preventive Health & Wellness",
    description:
      "Health education and wellness support that encourage prevention, awareness, healthy practices, and informed family health decisions.",
    href: "/services",
  },
];

export default function ProgramSupport() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Connected Support
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Connecting maternal and child wellbeing with professional care.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Mama na Mtoto focuses on maternal and child wellbeing while
            connecting families with appropriate professional healthcare and
            wellness support where needed.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {supportAreas.map((support) => (
            <Link
              key={support.title}
              href={support.href}
              className="group rounded-3xl border border-slate-100 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-[#0B1B3A]">
                {support.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {support.description}
              </p>

              <span className="mt-5 inline-flex items-center text-sm font-semibold text-[#0B1B3A] transition group-hover:text-[#D4AF37]">
                Explore support
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}