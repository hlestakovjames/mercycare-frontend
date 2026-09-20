const activities = [
  {
    title: "Community Conversations",
    description:
      "Creating welcoming spaces where community members can share experiences, ask questions and discuss wellbeing and care.",
  },
  {
    title: "Community Visits",
    description:
      "Participating in community-focused visits that help MercyCare understand local priorities and strengthen relationships.",
  },
  {
    title: "Awareness Engagement",
    description:
      "Supporting conversations and educational activities that encourage greater awareness of health, wellbeing and compassionate support.",
  },
  {
    title: "Family & Caregiver Connection",
    description:
      "Creating opportunities for families and caregivers to connect, exchange experiences and learn from one another.",
  },
  {
    title: "Local Partnerships",
    description:
      "Working alongside appropriate community groups, organizations and partners to support meaningful outreach.",
  },
  {
    title: "Community Participation",
    description:
      "Encouraging community members to participate in activities that strengthen connection, dignity and mutual support.",
  },
];

export default function CommunityOutreachActivities() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Our Outreach Activities
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Different ways to engage with the community
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Outreach can take different forms depending on the community,
            purpose and available partnerships.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <article
              key={activity.title}
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F766E]/10 text-[#0F766E]">
                <span className="text-lg font-bold">+</span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#0B1B3A]">
                {activity.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {activity.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
