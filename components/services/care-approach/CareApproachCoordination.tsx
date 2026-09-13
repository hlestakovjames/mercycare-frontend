const coordinationAreas = [
  {
    title: "Communication",
    description:
      "Important information should be communicated clearly to the appropriate people.",
  },
  {
    title: "Continuity",
    description:
      "Agreed routines and consistent support can help create a more stable care environment.",
  },
  {
    title: "Professional Collaboration",
    description:
      "Healthcare matters outside the scope of home support should involve the appropriate qualified professionals.",
  },
  {
    title: "Changing Needs",
    description:
      "Changes in circumstances should be recognized and communicated so that appropriate action can be considered.",
  },
];

export default function CareApproachCoordination() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Coordinated Care
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Good care is connected care.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Home support is often one part of a wider care environment.
            Coordination helps ensure that responsibilities remain clear and
            relevant information reaches the right people.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coordinationAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
            >
              <h3 className="text-xl font-semibold text-[#0B1B3A]">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
