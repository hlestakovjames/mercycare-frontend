const principles = [
  {
    number: "01",
    title: "Listen",
    description:
      "Create room for community members to ask questions, share experiences and be heard respectfully.",
  },
  {
    number: "02",
    title: "Learn",
    description:
      "Encourage access to clear, responsible information that supports greater awareness and understanding.",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Help participants identify appropriate community and professional sources of support where relevant.",
  },
  {
    number: "04",
    title: "Participate",
    description:
      "Encourage community members to contribute constructively to conversations that affect their communities.",
  },
];

export default function AwarenessEventsPrinciples() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Awareness works best when people can participate
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Meaningful awareness is more than sharing information. It also
              involves listening, encouraging questions and helping people
              understand where appropriate support can be found.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <span className="text-sm font-bold tracking-[0.15em] text-[#D4AF37]">
                  {principle.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-[#0B1B3A]">
                  {principle.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
