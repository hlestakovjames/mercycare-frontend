const principles = [
  {
    title: "Depth with purpose",
    text: "Longer content should add context, perspective or understanding rather than simply increasing the word count.",
  },
  {
    title: "People remain central",
    text: "Features should keep people and their experiences at the centre while providing enough context to understand the wider story.",
  },
  {
    title: "Visual storytelling matters",
    text: "Photography and multimedia can add another layer to a story when they genuinely help communicate the subject.",
  },
];

export default function BlogFeaturesApproach() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
            Our Approach
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Make the extra space count.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            A strong feature should help the reader see a subject from more
            than one angle while remaining clear about what is experience,
            perspective, reporting and general information.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-2xl border border-slate-200 p-7"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {principle.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {principle.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
