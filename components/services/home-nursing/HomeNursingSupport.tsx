const supportAreas = [
  {
    title: "Routine Nursing Support",
    description:
      "Appropriate nursing support based on an individual's identified care needs and circumstances.",
  },
  {
    title: "Recovery Support",
    description:
      "Support for individuals who need assistance during a period of recovery or adjustment at home.",
  },
  {
    title: "Ongoing Care",
    description:
      "Consistent support for individuals whose circumstances require continuing attention and care.",
  },
  {
    title: "Care Coordination",
    description:
      "Communication with families and relevant caregivers to help maintain continuity and understanding of care.",
  },
];

export default function HomeNursingSupport() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Nursing Support
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Support shaped around the care situation
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            The nature and level of support can vary from one individual to
            another. MercyCare begins by understanding the situation and then
            determining an appropriate care approach.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {supportAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#0B1B3A]">
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
