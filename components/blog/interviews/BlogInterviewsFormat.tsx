const formats = [
  "Interviewer and interviewee information",
  "Conversation topic and editorial context",
  "Publication date and estimated reading or listening time",
  "Question-and-answer presentation",
  "Highlighted quotes and key moments",
  "Related stories and resources",
];

export default function BlogInterviewsFormat() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
              Editorial Format
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built for real conversations.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-600">
              As the Media Center grows, interviews can support written,
              audio and video formats while keeping the editorial experience
              clear and consistent.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
            <ul className="space-y-4">
              {formats.map((format) => (
                <li
                  key={format}
                  className="flex gap-3 text-sm leading-6 text-slate-700"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                  <span>{format}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
