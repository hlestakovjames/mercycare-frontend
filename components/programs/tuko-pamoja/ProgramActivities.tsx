const activities = [
  {
    title: "Community wellness activities",
    description:
      "Support activities that encourage physical, emotional, social, and overall wellbeing among older adults.",
  },
  {
    title: "Social and recreational activities",
    description:
      "Create opportunities for older adults to interact, participate, build relationships, and maintain meaningful social connections.",
  },
  {
    title: "Health education and awareness",
    description:
      "Promote practical information and awareness around healthy ageing, preventive wellness, and appropriate care and support.",
  },
  {
    title: "Family and community engagement",
    description:
      "Encourage families and communities to take an active role in supporting the wellbeing, dignity, and inclusion of older adults.",
  },
  {
    title: "Volunteer-supported activities",
    description:
      "Create opportunities for volunteers to contribute their time, skills, companionship, and practical support to the program.",
  },
  {
    title: "Partnership-based support",
    description:
      "Work with relevant healthcare professionals, organizations, institutions, and community partners to strengthen support for older adults.",
  },
];

export default function ProgramActivities() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            What the Program Does
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Turning senior wellness into meaningful community action.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Tuko Pamoja brings together activities and support approaches that
            promote healthy ageing, social connection, dignity, and stronger
            community support for older adults.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <article
              key={activity.title}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
            >
              <span className="text-sm font-bold text-[#D4AF37]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-xl font-bold text-[#0B1B3A]">
                {activity.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {activity.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}