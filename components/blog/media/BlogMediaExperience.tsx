const formats = [
  {
    label: "WATCH",
    title: "Video",
    text: "Visual storytelling for conversations, field moments, explainers and future editorial productions.",
  },
  {
    label: "LISTEN",
    title: "Audio",
    text: "Podcast and audio formats for conversations that can travel beyond the written page.",
  },
  {
    label: "SEE",
    title: "Photography",
    text: "Photo-led narratives that allow images, captions and context to work together.",
  },
];

export default function BlogMediaExperience() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
            The Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Media should add something to the story.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Multimedia is not simply decoration. Each format should make a
            meaningful contribution to how the audience understands or
            experiences the subject.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {formats.map((format) => (
            <article
              key={format.title}
              className="rounded-2xl border border-slate-200 p-7"
            >
              <p className="text-xs font-bold tracking-[0.2em] text-cyan-600">
                {format.label}
              </p>

              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                {format.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {format.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
