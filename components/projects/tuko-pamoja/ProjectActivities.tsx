export default function ProjectActivities() {
  const activities = [
    {
      number: "01",
      title: "Senior Wellness Sessions",
      description:
        "Community-based wellness sessions that promote healthy ageing, physical activity, preventive health and overall wellbeing among older adults.",
    },
    {
      number: "02",
      title: "Health Education & Screening",
      description:
        "Accessible health education and basic wellness screening activities that help seniors and families identify health concerns early and make informed decisions.",
    },
    {
      number: "03",
      title: "Social & Community Engagement",
      description:
        "Meaningful gatherings and activities that encourage social interaction, companionship, participation and stronger relationships among older adults.",
    },
    {
      number: "04",
      title: "Family & Caregiver Education",
      description:
        "Practical education and guidance for families and caregivers on supporting older adults with dignity, safety, nutrition, mobility and everyday wellbeing.",
    },
    {
      number: "05",
      title: "Physical Activity & Mobility",
      description:
        "Age-appropriate movement and mobility activities designed to encourage physical independence, strength, balance and confidence.",
    },
    {
      number: "06",
      title: "Community Outreach",
      description:
        "Outreach activities that connect MercyCare with seniors, families, community leaders and partners while identifying areas where additional support is needed.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Turning care into meaningful community action
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Tuko Pamoja brings together wellness, education, social
              connection and community support to help older adults live
              healthier and more fulfilling lives.
            </p>

            <div className="mt-8 rounded-2xl bg-[#0B1B3A] p-7 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
                Our Approach
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-200">
                We work alongside older adults, families, caregivers,
                healthcare professionals and community partners to create
                practical and sustainable support systems.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {activities.map((activity) => (
              <article
                key={activity.number}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-sm font-bold text-[#0B1B3A]">
                  {activity.number}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#0B1B3A]">
                  {activity.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {activity.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}