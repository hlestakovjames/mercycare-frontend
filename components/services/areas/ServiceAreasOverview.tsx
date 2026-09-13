const areas = [
  {
    number: "01",
    title: "Clinical & Nursing Care",
    description:
      "Support focused on appropriate nursing and health-related care delivered with dignity, attentiveness, and respect for each person's circumstances.",
  },
  {
    number: "02",
    title: "Personal & Daily Living Support",
    description:
      "Practical assistance that can help individuals maintain comfort, dignity, routine, and greater confidence in everyday life.",
  },
  {
    number: "03",
    title: "Specialized Care",
    description:
      "Support shaped around particular care needs, including situations that require greater consistency, attention, or family coordination.",
  },
  {
    number: "04",
    title: "Family & Caregiver Support",
    description:
      "Support for families and caregivers who play an important role in the wellbeing and continuity of care of their loved ones.",
  },
  {
    number: "05",
    title: "Community-Based Care",
    description:
      "Care and support that recognizes the importance of community, relationships, accessibility, and the environments in which people live.",
  },
  {
    number: "06",
    title: "Coordinated & Continuity of Care",
    description:
      "A connected approach that helps families understand care needs, coordinate support, and maintain continuity as circumstances change.",
  },
];

export default function ServiceAreasOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Where We Focus
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Our service areas
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            MercyCare brings together different forms of care and support so
            that services can respond to the whole person rather than treating
            individual needs in isolation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <article
              key={area.number}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-sm font-bold text-[#D4AF37]">
                {area.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-[#0B1B3A]">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
