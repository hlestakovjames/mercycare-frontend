import Link from "next/link";

const partnershipAreas = [
  {
    title: "Healthcare Partners",
    description:
      "Work with healthcare professionals and providers to strengthen access to appropriate expertise, referrals, and support.",
  },
  {
    title: "Community Partners",
    description:
      "Collaborate with community organizations and local groups that understand the needs and priorities of the communities we serve.",
  },
  {
    title: "Institutional Partners",
    description:
      "Build relationships with institutions and organizations that can contribute expertise, resources, networks, or shared opportunities.",
  },
  {
    title: "Professional Partners",
    description:
      "Engage specialists and professionals whose knowledge and skills can strengthen program development and implementation.",
  },
];

export default function ProgramsPartnerships() {
  return (
    <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Partnerships
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Stronger partnerships create stronger community impact.
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              MercyCare works with healthcare professionals, communities,
              organizations, institutions, and other partners to strengthen
              the reach, quality, and sustainability of its programs.
            </p>

            <Link
              href="/programs/partnerships"
              className="mt-7 inline-flex items-center text-sm font-semibold text-white transition hover:text-[#D4AF37]"
            >
              Explore partnerships
              <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {partnershipAreas.map((area, index) => (
              <article
                key={area.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:bg-white/10"
              >
                <span className="text-sm font-bold text-[#D4AF37]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}