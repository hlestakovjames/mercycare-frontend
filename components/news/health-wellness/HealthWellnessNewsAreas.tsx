const areas = [
  {
    title: "Everyday wellbeing",
    description:
      "Community-focused conversations about healthy routines, wellbeing, connection, and quality of life.",
  },
  {
    title: "Senior wellness",
    description:
      "Updates and perspectives connected to older adults, dignity, social connection, and family support.",
  },
  {
    title: "Family wellbeing",
    description:
      "Stories and educational conversations around family support, caregiving, and wellbeing at home.",
  },
  {
    title: "Caregiving",
    description:
      "Practical conversations that recognize the experiences, responsibilities, and needs of family caregivers.",
  },
  {
    title: "Community awareness",
    description:
      "Health and wellness awareness topics presented in a clear, responsible, community-oriented way.",
  },
  {
    title: "MercyCare programs",
    description:
      "News about how MercyCare programs and initiatives connect with broader wellbeing goals.",
  },
];

export default function HealthWellnessNewsAreas() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Coverage areas
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Topics that support informed communities.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Our health and wellness coverage will develop alongside MercyCare's
            confirmed activities, programs, partnerships, and community
            conversations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <article
              key={area.title}
              className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm sm:p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F766E] text-lg font-bold text-white">
                +
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0B1B3A]">
                {area.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
