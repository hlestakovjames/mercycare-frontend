const activities = [
  {
    title: "Senior Wellness Activities",
    description:
      "Appropriate activities that encourage wellbeing, participation, social connection, and healthy living among older adults.",
  },
  {
    title: "Community Engagement",
    description:
      "Initiatives that connect older adults with families, communities, volunteers, and other relevant stakeholders.",
  },
  {
    title: "Health Education",
    description:
      "Accessible health and wellbeing information that can help older adults and their support networks make informed decisions.",
  },
  {
    title: "Caregiver & Family Support",
    description:
      "Opportunities to strengthen understanding and practical support for families and people involved in caring for older adults.",
  },
  {
    title: "Wellbeing Outreach",
    description:
      "Community-oriented activities designed around identified senior wellness needs and appropriate opportunities for engagement.",
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
              Turning the project's purpose into practical action.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Specific activities may vary according to the needs of the
              communities and people participating in each initiative.
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
