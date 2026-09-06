const activities = [
  "Community wellness activities",
  "Social and recreational activities",
  "Community education and awareness",
  "Family and community engagement",
  "Volunteer-supported activities",
  "Partnership-based support initiatives",
];

export default function ProgramActivities() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Program Activities
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Turning care into meaningful experiences.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Activities will be developed with communities and partners based
            on identified needs and available resources.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {activities.map((activity) => (
            <div
              key={activity}
              className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-sm font-bold text-[#0B1B3A]">
                ✓
              </span>

              <span className="text-sm font-medium text-[#0B1B3A]">
                {activity}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}