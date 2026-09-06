const activities = [
  {
    number: "01",
    title: "Maternal Health Education",
    description:
      "Community sessions providing practical information on maternal wellbeing, healthy practices, pregnancy preparation and care after childbirth.",
  },
  {
    number: "02",
    title: "Mother & Baby Wellness Support",
    description:
      "Activities that promote maternal and newborn wellbeing while helping families understand appropriate care, monitoring and available support.",
  },
  {
    number: "03",
    title: "Child Growth & Development Education",
    description:
      "Family-focused education on nutrition, healthy development, early childhood stimulation and recognising developmental concerns.",
  },
  {
    number: "04",
    title: "Parent & Caregiver Support",
    description:
      "Practical guidance that helps parents and caregivers build confidence in caring for mothers, babies and young children.",
  },
  {
    number: "05",
    title: "Community Outreach",
    description:
      "Community engagement activities that connect families with MercyCare, local partners and appropriate health and support resources.",
  },
  {
    number: "06",
    title: "Referral & Support Connections",
    description:
      "Helping families understand where to seek appropriate professional assistance when maternal or child health concerns require further attention.",
  },
];

export default function ProjectActivities() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Project Activities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Turning support into practical action
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Mama na Mtoto combines education, community engagement and
              practical family support to promote maternal and child
              wellbeing.
            </p>

            <div className="mt-8 rounded-2xl bg-[#0B1B3A] p-7 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
                Community First
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Activities are designed to work alongside families and
                communities, making support more accessible while encouraging
                appropriate professional care when it is needed.
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