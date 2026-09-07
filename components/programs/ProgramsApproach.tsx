import Link from "next/link";

const approaches = [
  {
    title: "Community-Centred",
    description:
      "We work with communities to understand needs, strengthen local support systems, and develop initiatives that respond to real circumstances.",
  },
  {
    title: "Family-Centred",
    description:
      "We recognize the important role families play in health and wellbeing and seek to involve them in meaningful and appropriate ways.",
  },
  {
    title: "Preventive",
    description:
      "We promote health awareness, early action, healthy practices, and approaches that can contribute to better long-term wellbeing.",
  },
  {
    title: "Collaborative",
    description:
      "We bring together healthcare professionals, volunteers, organizations, institutions, and community partners to strengthen our impact.",
  },
];

export default function ProgramsApproach() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Programs designed around people and real community needs.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              MercyCare takes a people-centred approach to program development,
              combining community engagement, family involvement, prevention,
              professional expertise, and collaboration.
            </p>

            <Link
              href="/programs/approach"
              className="mt-7 inline-flex items-center text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
            >
              Explore our approach
              <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {approaches.map((approach, index) => (
              <article
                key={approach.title}
                className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100"
              >
                <span className="text-sm font-bold text-[#D4AF37]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#0B1B3A]">
                  {approach.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {approach.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}