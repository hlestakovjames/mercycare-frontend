const supportAreas = [
  {
    title: "Transition Home",
    description:
      "Practical support as an individual adjusts from a hospital environment back to their home and everyday surroundings.",
  },
  {
    title: "Daily Routine Support",
    description:
      "Assistance with appropriate everyday routines while the individual adjusts to their current level of ability.",
  },
  {
    title: "Personal Care Support",
    description:
      "Respectful assistance with personal routines where additional support may be needed during recovery.",
  },
  {
    title: "Family Coordination",
    description:
      "Communication with family members and caregivers to help clarify responsibilities and maintain continuity.",
  },
  {
    title: "Recovery Environment",
    description:
      "Helping create a supportive home environment that is organized around the individual's recovery and comfort.",
  },
  {
    title: "Ongoing Observation",
    description:
      "Attention to changes in the individual's situation and communication with the appropriate care team when concerns arise.",
  },
];

export default function PostHospitalRecoverySupport() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Areas of Support
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Support during the transition home.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Recovery looks different for every person. Support is therefore
            shaped around the individual's circumstances, existing care
            instructions, home environment, and available family support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {supportAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
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
