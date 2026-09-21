const fields = [
  "Publication date",
  "Editorial category",
  "Topic",
  "Programme or project",
  "Contributor",
  "Content format",
  "Tags",
];

export default function BlogArchiveStructure() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
              Archive structure
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Built for a growing editorial library.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-600">
              Future content can be indexed across several fields so that
              readers do not have to remember the exact title of something
              they want to find.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {fields.map((field) => (
                <span
                  key={field}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {field}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
