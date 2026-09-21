const principles = [
  {
    title: "Respect people",
    description:
      "Personal stories and perspectives should be shared with dignity and appropriate context.",
  },
  {
    title: "Share responsibly",
    description:
      "Contributors should consider privacy, consent and the sensitivity of information they choose to share.",
  },
  {
    title: "Different perspectives matter",
    description:
      "Community, caregiver, professional and organisational perspectives can each contribute something different to a conversation.",
  },
  {
    title: "Editorial review matters",
    description:
      "Future contributions may be reviewed for relevance, context, clarity, permissions and suitability before publication.",
  },
];

export default function BlogGetInvolvedPrinciples() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
            Before contributing
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Participation works best when it is thoughtful.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-3xl border border-slate-200 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {principle.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
