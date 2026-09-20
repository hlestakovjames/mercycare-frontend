import Link from "next/link";

const activityAreas = [
  {
    title: "Community Outreach",
    description:
      "Connect with communities through engagement, listening, awareness and participation.",
    href: "/activities/community-outreach",
  },
  {
    title: "Health & Wellness",
    description:
      "Create opportunities for conversations and activities around health, wellbeing and healthy communities.",
    href: "/activities/health-wellness",
  },
  {
    title: "Senior Support",
    description:
      "Encourage dignity, connection and participation for older adults and the people who support them.",
    href: "/activities/senior-support",
  },
  {
    title: "Family & Caregiver",
    description:
      "Bring families and caregivers together around connection, learning and shared wellbeing.",
    href: "/activities/family-caregiver",
  },
  {
    title: "Awareness & Education",
    description:
      "Support accessible learning, awareness conversations and responsible information sharing.",
    href: "/activities/awareness-education",
  },
  {
    title: "Volunteer Activities",
    description:
      "Create opportunities for people to contribute time, skills and energy to appropriate initiatives.",
    href: "/activities/volunteer",
  },
];

export default function ActivitiesOverviewAreas() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Activity areas
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
            Explore how MercyCare engages communities.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Each activity area has its own purpose while contributing to the
            wider MercyCare approach to compassionate community engagement.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activityAreas.map((area) => (
            <article
              key={area.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 h-11 w-11 rounded-2xl bg-[#0F766E]/10" />

              <h3 className="text-xl font-semibold text-[#0B1B3A]">
                {area.title}
              </h3>

              <p className="mt-3 flex-1 leading-7 text-slate-600">
                {area.description}
              </p>

              <div className="mt-6">
                <Link
                  href={area.href}
                  className="text-sm font-semibold text-[#0F766E] transition hover:text-[#0B1B3A]"
                >
                  Explore area →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
