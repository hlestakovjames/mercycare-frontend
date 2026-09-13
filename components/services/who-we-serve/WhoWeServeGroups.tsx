const groups = [
  {
    title: "Older Adults & Seniors",
    description:
      "Individuals who may benefit from assistance with daily routines, companionship, personal support, or continuity at home.",
  },
  {
    title: "People Recovering at Home",
    description:
      "Individuals transitioning home after hospitalization, procedures, illness, or other periods requiring additional everyday support.",
  },
  {
    title: "People Living With Ongoing Care Needs",
    description:
      "Individuals who may need consistent home-based assistance as part of a wider long-term care arrangement.",
  },
  {
    title: "Children With Additional Support Needs",
    description:
      "Children and families who may benefit from appropriate home-based assistance designed around the child's circumstances and family environment.",
  },
  {
    title: "People Needing Personal Support",
    description:
      "Individuals who need help with appropriate personal routines while maintaining privacy, dignity, and independence.",
  },
  {
    title: "Families & Caregivers",
    description:
      "Families and caregivers who need additional practical support while continuing to remain involved in the care of a loved one.",
  },
];

export default function WhoWeServeGroups() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Who We Support
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Different needs. One commitment to dignity.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Our services are designed around circumstances rather than a
            one-size-fits-all model.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#0B1B3A]">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {group.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
