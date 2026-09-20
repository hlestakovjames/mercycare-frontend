const activityAreas = [
  {
    title: "Wellness Conversations",
    description:
      "Community conversations that encourage people to discuss wellbeing, everyday challenges and sources of support.",
  },
  {
    title: "Health Education",
    description:
      "Educational engagement designed to help community members access understandable and responsible health information.",
  },
  {
    title: "Healthy Living Engagement",
    description:
      "Activities that create space for conversations about habits, routines and practical approaches to supporting wellbeing.",
  },
  {
    title: "Family Wellness",
    description:
      "Activities that recognize the role families and caregivers play in supporting the wellbeing of their loved ones.",
  },
  {
    title: "Community Wellness Sessions",
    description:
      "Group-based opportunities for people to connect, participate and learn within a supportive community setting.",
  },
  {
    title: "Connections To Support",
    description:
      "Helping participants identify appropriate community, professional or informational resources when further support is needed.",
  },
];

export default function HealthWellnessActivityAreas() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Activity Areas
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Ways we can engage around health and wellbeing
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Activities can be adapted to the context, audience and purpose of
            each community engagement.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activityAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F766E]/10 text-[#0F766E]">
                <span className="text-lg font-bold">+</span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#0B1B3A]">
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
