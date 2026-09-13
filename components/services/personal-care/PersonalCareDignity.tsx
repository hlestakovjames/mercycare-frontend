const principles = [
  {
    title: "Privacy",
    description:
      "Personal care should be provided respectfully and with appropriate attention to privacy.",
  },
  {
    title: "Choice",
    description:
      "Individuals should be encouraged to express their preferences and participate in decisions about their routines.",
  },
  {
    title: "Independence",
    description:
      "Support should encourage people to do what they can safely do for themselves.",
  },
  {
    title: "Respect",
    description:
      "Every person deserves patient, compassionate, and dignified support.",
  },
];

export default function PersonalCareDignity() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
              Dignity & Independence
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Assistance should empower, not diminish.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Personal care can be sensitive. Our approach is designed to
              provide appropriate assistance while recognizing the individual's
              choices, abilities, privacy, and dignity.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-[#0B1B3A]">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
