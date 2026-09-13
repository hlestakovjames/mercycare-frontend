const activities = [
  {
    title: "Maternal Health Education",
    description:
      "Accessible information and awareness activities that can support informed maternal health and wellbeing decisions.",
  },
  {
    title: "Child Health & Wellbeing",
    description:
      "Community-oriented initiatives focused on appropriate child health, development, wellbeing, and care.",
  },
  {
    title: "Family Support",
    description:
      "Activities that encourage families and caregivers to participate actively in supporting mothers and children.",
  },
  {
    title: "Community Awareness",
    description:
      "Initiatives that promote understanding of maternal and child wellbeing, prevention, healthy practices, and available support.",
  },
  {
    title: "Professional & Community Engagement",
    description:
      "Appropriate collaboration between families, communities, healthcare professionals, volunteers, and other stakeholders.",
  },
];

export default function ProjectActivities() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Project Activities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Practical activities around maternal and child wellbeing.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Specific activities may vary depending on community needs,
              partnerships, resources, and the purpose of each initiative.
            </p>
          </div>

          <div className="space-y-4">
            {activities.map((activity, index) => (
              <article
                key={activity.title}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <div className="flex gap-5">
                  <span className="shrink-0 text-sm font-bold text-[#D4AF37]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-lg font-bold text-[#0B1B3A]">
                      {activity.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
