const activities = [
  {
    title: "Maternal health education",
    description:
      "Provide practical information and awareness that can help mothers and families make informed decisions about maternal health and wellbeing.",
  },
  {
    title: "Mother and baby wellness support",
    description:
      "Promote wellbeing and appropriate support for mothers and babies through community-centred activities and engagement.",
  },
  {
    title: "Child health and development awareness",
    description:
      "Encourage families to understand and support the health, growth, development, and wellbeing of children.",
  },
  {
    title: "Family engagement",
    description:
      "Encourage partners, parents, caregivers, and wider family members to take an active role in supporting mothers and children.",
  },
  {
    title: "Community awareness activities",
    description:
      "Engage communities around maternal and child health, preventive wellness, family support, and healthy practices.",
  },
  {
    title: "Professional and community partnerships",
    description:
      "Work with healthcare professionals, organizations, institutions, volunteers, and community partners to strengthen available support.",
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
            Supporting healthier beginnings and stronger families.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Mama na Mtoto brings together education, wellness, family
            engagement, community awareness, and appropriate support to
            strengthen maternal and child wellbeing.
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