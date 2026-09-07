import Link from "next/link";

const areas = [
  {
    title: "Community Health & Wellness",
    description:
      "Initiatives that promote healthier communities through awareness, engagement, wellness activities, and appropriate support.",
  },
  {
    title: "Maternal & Child Health",
    description:
      "Programs that support mothers, children, and families through education, wellbeing initiatives, preventive care, and community support.",
  },
  {
    title: "Senior Wellness & Elderly Care",
    description:
      "Initiatives that promote dignity, healthy ageing, social connection, and stronger support systems for older adults.",
  },
  {
    title: "Family & Social Support",
    description:
      "Community-focused initiatives that recognize the role of families and social support networks in health and wellbeing.",
  },
  {
    title: "Preventive Health",
    description:
      "Activities that encourage health awareness, prevention, early action, healthy practices, and informed health decisions.",
  },
  {
    title: "Health Education & Awareness",
    description:
      "Education and awareness initiatives designed to help individuals, families, and communities make informed choices about health and wellbeing.",
  },
];

export default function ProgramsAreas() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Program Areas
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Where our community programs create impact.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            MercyCare programs respond to different aspects of health,
            wellbeing, family support, and community development. These areas
            provide a framework for developing initiatives around identified
            community needs.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <article
              key={area.title}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
            >
              <span className="text-sm font-bold text-[#D4AF37]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-xl font-bold text-[#0B1B3A]">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/programs/areas"
            className="inline-flex items-center text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
          >
            Explore all program areas
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}