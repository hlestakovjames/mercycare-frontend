export default function BlogMediaIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
              The Media Desk
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Choose how you want to experience the story.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Some stories are better experienced through conversation, sound,
              photography or video. The Media section creates space for those
              formats alongside the written editorial work of the Media Center.
            </p>

            <p>
              The collection can eventually support embedded video, podcast
              episodes, image galleries, audio conversations and multimedia
              features.
            </p>

            <p>
              Every format remains connected to the same editorial principles:
              context, attribution, consent and responsible storytelling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
