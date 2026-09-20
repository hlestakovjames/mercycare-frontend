const activityAreas = [
  {
    title: "Caregiver Conversations",
    description:
      "Creating welcoming spaces where caregivers can discuss experiences, challenges and practical sources of support.",
  },
  {
    title: "Family Engagement",
    description:
      "Encouraging families to participate in activities that strengthen communication, connection and shared understanding.",
  },
  {
    title: "Shared Learning",
    description:
      "Supporting educational conversations around everyday wellbeing, caregiving and available community resources.",
  },
  {
    title: "Peer Connection",
    description:
      "Creating opportunities for caregivers and families to connect with people who may have similar experiences.",
  },
  {
    title: "Support Networks",
    description:
      "Helping participants identify appropriate community relationships and resources that may complement their existing support.",
  },
  {
    title: "Community Participation",
    description:
      "Encouraging families and caregivers to take part in wider MercyCare community activities.",
  },
];

export default function FamilyCaregiverActivityAreas() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Activity Areas
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Creating space for families and caregivers
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Activities can take different forms depending on the people
            participating and the purpose of each engagement.
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
