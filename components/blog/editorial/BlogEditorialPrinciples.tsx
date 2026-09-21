const principles = [
  {
    title: "People first",
    description:
      "Stories should treat people and communities with dignity, context and respect.",
  },
  {
    title: "Context matters",
    description:
      "Information should be presented with enough context for readers to understand what is being discussed.",
  },
  {
    title: "Perspectives are identified",
    description:
      "Personal experience, professional perspective, organisational information and general education should not be presented as interchangeable.",
  },
  {
    title: "Health information is responsible",
    description:
      "Health-related editorial content should remain appropriately general and should not substitute for personalised professional advice.",
  },
];

export default function BlogEditorialPrinciples() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
            Editorial principles
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            A foundation for thoughtful publishing.
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
