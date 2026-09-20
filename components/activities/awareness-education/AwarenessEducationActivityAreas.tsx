const activityAreas = [
  {
    title: "Health & Wellbeing Conversations",
    description:
      "Community conversations that encourage people to reflect on everyday wellbeing and practical ways of supporting one another.",
  },
  {
    title: "Caregiving Education",
    description:
      "Learning opportunities for families and caregivers around communication, dignity, support and navigating everyday caregiving responsibilities.",
  },
  {
    title: "Senior Wellness Awareness",
    description:
      "Activities that promote greater understanding of older adults' wellbeing, social connection, dignity and participation.",
  },
  {
    title: "Family Health Awareness",
    description:
      "Accessible conversations that help families engage with health-related information and recognise when professional guidance may be appropriate.",
  },
  {
    title: "Community Learning Sessions",
    description:
      "Group sessions, forums and discussions that create space for questions, shared experiences and responsible information exchange.",
  },
  {
    title: "Resource Sharing",
    description:
      "Sharing useful educational materials and signposting participants toward appropriate sources of further information and professional support.",
  },
];

export default function AwarenessEducationActivityAreas() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            What these activities can include
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
            Different ways to learn and engage
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Awareness activities can take different forms depending on the
            community, topic and setting.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activityAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 h-11 w-11 rounded-2xl bg-[#0F766E]/10" />

              <h3 className="text-xl font-semibold text-[#0B1B3A]">
                {area.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
