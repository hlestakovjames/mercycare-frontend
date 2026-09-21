export default function BlogFeaturesEditorial() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
              Editorial Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Designed for immersive reading.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-600">
              Future feature articles can support strong hero imagery,
              contributor information, reading time, chapter-style sections,
              pull quotes, related stories, resources and multimedia.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Feature structure
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Hero · Context · Main story · Perspectives · Highlights ·
                  Related content
                </p>
              </div>

              <div className="h-px bg-slate-200" />

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Future media
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Photography · Video · Audio · Interactive elements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
