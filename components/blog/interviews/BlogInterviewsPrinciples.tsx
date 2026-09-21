const principles = [
  {
    title: "Context before conclusions",
    text: "Conversations should explain who is speaking, what the conversation is about and the context in which their perspective was shared.",
  },
  {
    title: "People speak for themselves",
    text: "Personal experiences and perspectives should remain attributed to the person sharing them rather than being presented as universal experiences.",
  },
  {
    title: "Health information stays responsible",
    text: "Healthcare-related discussions should remain appropriately framed and should not be presented as personalised diagnosis or treatment advice.",
  },
];

export default function BlogInterviewsPrinciples() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Conversation Principles
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Listen carefully. Represent fairly.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
            >
              <h3 className="text-lg font-semibold">{principle.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {principle.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
