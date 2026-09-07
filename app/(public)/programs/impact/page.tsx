import Link from "next/link";

const impactAreas = [
  {
    number: "01",
    title: "Our Reach",
    description:
      "Understand the people, families, and communities reached through MercyCare programs and initiatives.",
  },
  {
    number: "02",
    title: "Program Outcomes",
    description:
      "Explore the changes, results, and lessons emerging from our program activities and interventions.",
  },
  {
    number: "03",
    title: "Stories of Impact",
    description:
      "Hear from the people and communities whose experiences help demonstrate the difference our work can make.",
  },
  {
    number: "04",
    title: "Reports & Updates",
    description:
      "Access program updates, reports, milestones, and other information that helps communicate our progress.",
  },
];

export default function ProgramsImpactPage() {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Impact
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Measuring the difference our programs aim to make.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              MercyCare is committed to understanding the reach, results,
              experiences, and lessons emerging from its programs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Understanding Our Impact
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              From activity to meaningful outcomes.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Impact is more than the number of activities delivered. We seek
              to understand how our programs reach people, respond to needs,
              improve experiences, and contribute to healthier and more
              resilient communities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {impactAreas.map((area) => (
              <article
                key={area.number}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
              >
                <span className="text-sm font-bold tracking-[0.15em] text-[#D4AF37]">
                  {area.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-[#0B1B3A]">
                  {area.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Building Impact Together
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Strong partnerships help make meaningful programs possible.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            MercyCare works with communities, healthcare professionals,
            institutions, organisations, and supporters to strengthen the
            reach and effectiveness of its initiatives.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/programs/partnerships"
              className="rounded-full bg-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#162d5c]"
            >
              Explore Partnerships
            </Link>

            <Link
              href="/programs/get-involved"
              className="rounded-full border-2 border-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#0B1B3A] hover:text-white"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}