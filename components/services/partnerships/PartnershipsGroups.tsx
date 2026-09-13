const partnershipGroups = [
  {
    title: "Families & Caregivers",
    description:
      "Families and caregivers are central to understanding routines, preferences, priorities and the everyday realities of supporting a loved one.",
  },
  {
    title: "Healthcare Professionals",
    description:
      "Where appropriate, communication with relevant healthcare professionals can help ensure that home-based support remains aligned with the person's broader care needs.",
  },
  {
    title: "Community Organizations",
    description:
      "Community organizations can help connect individuals and families with practical, social and community-based resources.",
  },
  {
    title: "Referral & Collaboration Partners",
    description:
      "Trusted referral relationships can help people discover appropriate support while respecting the responsibilities of each participating organization.",
  },
  {
    title: "Organizations & Institutions",
    description:
      "Organizations may collaborate with MercyCare around community wellbeing, awareness, support initiatives or other appropriate areas of shared interest.",
  },
  {
    title: "Local Community Networks",
    description:
      "Strong community connections can help identify needs, strengthen awareness and encourage more compassionate support for people and families.",
  },
];

export default function PartnershipsGroups() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
            Who We Work With
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
            Different partners, complementary roles.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Every partnership is different. What matters is creating a clear
            and respectful relationship around a shared purpose.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partnershipGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 h-1.5 w-12 rounded-full bg-[#D4AF37]" />

              <h3 className="text-xl font-bold text-[#0B1B3A]">
                {group.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {group.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
