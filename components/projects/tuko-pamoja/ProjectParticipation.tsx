import Link from "next/link";

export default function ProjectParticipation() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Participation
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Be part of supporting senior wellness.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Tuko Pamoja can involve different people and organizations
              depending on the nature of an initiative.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#0B1B3A]">
                Families
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Families and caregivers can participate in appropriate
                activities and support initiatives.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#0B1B3A]">
                Volunteers
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Volunteers can contribute time, skills, community knowledge,
                and practical support where appropriate.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#0B1B3A]">
                Partners
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Organizations and professionals can explore appropriate
                opportunities for collaboration.
              </p>
            </article>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/projects/get-involved"
            className="inline-flex rounded-full bg-[#0B1B3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#162d5c]"
          >
            Explore Ways to Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}
