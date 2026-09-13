const participationSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Find a community event that matches your interests or circumstances.",
  },
  {
    number: "02",
    title: "Participate",
    description:
      "Join the gathering, listen, share and take part in the available activities.",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Build meaningful connections with other community members and participants.",
  },
];

export default function CommunityEventsParticipation() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Taking Part
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            A simple way to get involved
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Every community event will provide its own participation
            information based on the event format.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {participationSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
            >
              <span className="text-sm font-bold tracking-[0.15em] text-[#D4AF37]">
                {step.number}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#0B1B3A]">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
