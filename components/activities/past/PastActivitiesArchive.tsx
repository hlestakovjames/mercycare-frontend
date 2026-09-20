const archiveAreas = [
  {
    title: "Community Outreach",
    description:
      "Completed community outreach activities, engagement sessions and opportunities to connect with local communities.",
  },
  {
    title: "Health & Wellness",
    description:
      "Past activities focused on community conversations, wellbeing awareness and healthy living.",
  },
  {
    title: "Senior Support",
    description:
      "Completed activities supporting social connection, dignity, participation and community support for older adults.",
  },
  {
    title: "Family & Caregiver",
    description:
      "Past activities involving families, caregivers and shared conversations around care and wellbeing.",
  },
  {
    title: "Awareness & Education",
    description:
      "Educational sessions, awareness activities and community learning opportunities that have already taken place.",
  },
  {
    title: "Volunteer Participation",
    description:
      "Examples of volunteer involvement and community contributions across MercyCare activities.",
  },
];

export default function PastActivitiesArchive() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Archive areas
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
            A growing record of community activity
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Past activities can be organised by the type of engagement they
            represented.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {archiveAreas.map((area) => (
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
