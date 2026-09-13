const circumstances = [
  {
    title: "A Change in Independence",
    description:
      "A person may temporarily or progressively need more help with everyday routines.",
  },
  {
    title: "A Transition Home",
    description:
      "Returning home after a period away can create new practical responsibilities for individuals and families.",
  },
  {
    title: "Family Caregiver Pressure",
    description:
      "Families may need additional support when caregiving responsibilities become difficult to manage alone.",
  },
  {
    title: "Changing Household Needs",
    description:
      "Work, school, family responsibilities, distance, or other circumstances can affect how care is organized.",
  },
];

export default function WhoWeServeCircumstances() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
              When Support May Help
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Sometimes circumstances change.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              The need for home support can arise for many different reasons.
              What matters is understanding the situation and identifying
              appropriate support.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {circumstances.map((circumstance) => (
              <article
                key={circumstance.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-[#0B1B3A]">
                  {circumstance.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {circumstance.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
