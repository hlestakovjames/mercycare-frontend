const activityAreas = [
  {
    title: "Social Connection",
    description:
      "Creating welcoming opportunities for older adults to interact, share experiences and maintain meaningful social connections.",
  },
  {
    title: "Wellness Conversations",
    description:
      "Providing space for conversations around everyday wellbeing, healthy routines, family support and available resources.",
  },
  {
    title: "Family Connection",
    description:
      "Encouraging meaningful interaction between older adults, families and caregivers.",
  },
  {
    title: "Community Participation",
    description:
      "Supporting opportunities for older adults to remain engaged with activities within their communities.",
  },
  {
    title: "Shared Experiences",
    description:
      "Creating opportunities for older adults to exchange stories, perspectives and experiences with others.",
  },
  {
    title: "Caregiver Connection",
    description:
      "Creating opportunities for caregivers to connect with others, share experiences and identify appropriate sources of support.",
  },
];

export default function SeniorSupportActivityAreas() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Activity Areas
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Creating meaningful opportunities for older adults
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Activities can be adapted to the interests, needs and circumstances
            of the people participating.
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
