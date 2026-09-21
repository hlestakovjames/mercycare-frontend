export default function BlogMediaEditorial() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
              Editorial Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A connected multimedia experience.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-600">
              Future media stories can connect related interviews, articles,
              resources, photographs and programmes so visitors can explore a
              subject from several directions.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <div className="space-y-5 text-sm text-slate-700">
              <div>
                <p className="font-semibold text-slate-900">Story</p>
                <p className="mt-1 text-slate-600">
                  Main editorial narrative and context.
                </p>
              </div>

              <div className="h-px bg-slate-200" />

              <div>
                <p className="font-semibold text-slate-900">Conversation</p>
                <p className="mt-1 text-slate-600">
                  Related interview or community voice.
                </p>
              </div>

              <div className="h-px bg-slate-200" />

              <div>
                <p className="font-semibold text-slate-900">Media</p>
                <p className="mt-1 text-slate-600">
                  Video, audio or photography.
                </p>
              </div>

              <div className="h-px bg-slate-200" />

              <div>
                <p className="font-semibold text-slate-900">Resources</p>
                <p className="mt-1 text-slate-600">
                  Relevant guides and supporting material.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
