const activityAreas = [
  {
    title: "Community Outreach",
    description:
      "Support community-facing activities by helping with engagement, coordination, communication and practical preparation.",
  },
  {
    title: "Awareness Activities",
    description:
      "Help create welcoming spaces for health, wellbeing, caregiving and community awareness conversations.",
  },
  {
    title: "Event Support",
    description:
      "Assist with appropriate preparation, registration, welcoming participants, logistics and other event-related responsibilities.",
  },
  {
    title: "Senior Support Activities",
    description:
      "Contribute to activities that encourage social connection, participation, dignity and community support for older adults.",
  },
  {
    title: "Family & Caregiver Engagement",
    description:
      "Support community activities that bring families and caregivers together for connection, learning and shared experiences.",
  },
  {
    title: "Skills-Based Support",
    description:
      "Contribute useful professional, creative, organisational, communication or technical skills where an activity requires them.",
  },
];

export default function VolunteerActivityAreas() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Where volunteers can contribute
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
            Different ways to make a contribution
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Not every volunteer opportunity requires the same skills or level
            of commitment.
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
