export default function FamilyCaregiverWellbeing() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl bg-[#0B1B3A] p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Caregiver Wellbeing
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              The caregiver matters too.
            </h2>

            <p className="mt-5 leading-8 text-slate-200">
              Supporting another person can involve time, responsibility and
              emotional energy. Community activities can provide opportunities
              for caregivers to connect, reflect and identify appropriate
              sources of support.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#0B1B3A]">
              What these activities can encourage
            </h3>

            <ul className="mt-6 space-y-5">
              {[
                "Connection with other caregivers and families",
                "Open and respectful conversations",
                "Recognition of the importance of caregiver wellbeing",
                "Awareness of appropriate community resources",
                "Participation in supportive community activities",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-600">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0F766E]" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
