const participants = [
  "Community members",
  "Families and caregivers",
  "Older adults and their support networks",
  "Volunteers",
  "Community organizations",
  "Appropriate local partners",
];

export default function HealthWellnessParticipation() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Participation
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Wellbeing is a shared conversation.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Health and wellness activities can bring together people with
              different experiences and perspectives. Participation can vary
              depending on the purpose and format of an activity.
            </p>
          </div>

          <div className="rounded-3xl bg-[#0B1B3A] p-8 sm:p-10">
            <h3 className="text-xl font-semibold text-white">
              Potential participants
            </h3>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {participants.map((participant) => (
                <li
                  key={participant}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-200"
                >
                  {participant}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
