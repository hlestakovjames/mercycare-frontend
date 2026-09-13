const supportAreas = [
  {
    title: "Care Coordination",
    description:
      "Practical communication and coordination around agreed areas of support and everyday care.",
  },
  {
    title: "Daily Routine Support",
    description:
      "Assistance with appropriate routines that may reduce some of the day-to-day pressure on families.",
  },
  {
    title: "Family Communication",
    description:
      "Clear communication helps families understand how agreed support is progressing and where attention may be needed.",
  },
  {
    title: "Caregiver Relief",
    description:
      "Appropriate support can give family caregivers time to attend to work, family responsibilities, rest, or other needs.",
  },
  {
    title: "Practical Guidance",
    description:
      "Families can receive general practical guidance within the agreed scope of support and appropriate care boundaries.",
  },
  {
    title: "Continuity",
    description:
      "Consistent communication and routines can help create a more stable support environment at home.",
  },
];

export default function FamilyCaregiverSupportAreas() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Areas of Support
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Practical support for the whole care environment.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Family and caregiver support may look different from one household
            to another. We focus on understanding the circumstances before
            agreeing on the appropriate support.
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
