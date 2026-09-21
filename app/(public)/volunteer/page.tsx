import Link from "next/link";

const areas = [
  "Community outreach",
  "Health and wellness activities",
  "Senior support",
  "Family and caregiver support",
  "Awareness and education",
  "Events and activities",
];

export default function VolunteerPage() {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Volunteer With MercyCare
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Give your time, skills, and energy to meaningful community work.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              MercyCare welcomes people who want to contribute to community
              wellbeing through volunteering, outreach, education, activities,
              and practical support.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/volunteer/opportunities"
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0B1B3A] transition-colors hover:bg-[#e4c65b]"
              >
                View Opportunities
              </Link>

              <Link
                href="/volunteer/apply"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#0B1B3A]"
              >
                Apply to Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Why Volunteer
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
                Contribute in ways that match your strengths.
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-slate-600">
                Volunteering can take different forms. Some people contribute
                through community activities, while others offer practical,
                organizational, communication, digital, or educational skills.
              </p>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Available opportunities may change according to MercyCare's
                programs, projects, activities, and community needs.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className="font-semibold text-[#0B1B3A]">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
