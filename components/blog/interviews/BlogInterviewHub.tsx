type InterviewHubProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: {
    title: string;
    text: string;
  }[];
};

export default function BlogInterviewHub({
  eyebrow,
  title,
  intro,
  sections,
}: InterviewHubProps) {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            {eyebrow}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {intro}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-slate-200 p-7"
              >
                <h2 className="text-xl font-semibold text-slate-900">
                  {section.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  {section.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-cyan-100 bg-cyan-50 p-7">
            <p className="text-sm leading-7 text-slate-700">
              Future conversations can be published in written, audio or
              video formats. Where health or care topics arise, editorial
              content should provide context and general information rather
              than personalised healthcare advice.
            </p>
          </div>

          <a
            href="/blog/interviews"
            className="mt-8 inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-800"
          >
            ← Back to Interviews
          </a>
        </div>
      </section>
    </>
  );
}
