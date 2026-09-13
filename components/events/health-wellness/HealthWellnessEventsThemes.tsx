const themes = [
  {
    title: "Everyday Wellbeing",
    description:
      "Conversations that encourage awareness of personal and community wellbeing.",
  },
  {
    title: "Family Support",
    description:
      "Creating space for families and caregivers to share experiences and explore supportive approaches.",
  },
  {
    title: "Healthy Communities",
    description:
      "Encouraging connection, participation and awareness within the wider community.",
  },
  {
    title: "Appropriate Support",
    description:
      "Helping participants understand when and where to seek guidance from qualified healthcare professionals.",
  },
];

export default function HealthWellnessEventsThemes() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Our Themes
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Wellbeing starts with connection
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              MercyCare events can provide opportunities for respectful,
              community-centered conversations without replacing individualized
              advice or care from qualified healthcare professionals.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {themes.map((theme) => (
              <div
                key={theme.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="h-1.5 w-12 rounded-full bg-[#D4AF37]" />

                <h3 className="mt-5 text-xl font-bold text-[#0B1B3A]">
                  {theme.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
