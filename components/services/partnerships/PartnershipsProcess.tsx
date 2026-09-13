const steps = [
  {
    number: "01",
    title: "Start a Conversation",
    description:
      "Tell us about the organization, community or people you are seeking to support.",
  },
  {
    number: "02",
    title: "Understand the Purpose",
    description:
      "We explore the shared objective and identify where MercyCare may be able to contribute.",
  },
  {
    number: "03",
    title: "Clarify Roles",
    description:
      "Responsibilities, expectations and appropriate boundaries are discussed before moving forward.",
  },
  {
    number: "04",
    title: "Agree the Approach",
    description:
      "Where there is a suitable fit, the partners establish a practical way of working together.",
  },
  {
    number: "05",
    title: "Communicate & Review",
    description:
      "The relationship can be reviewed over time to ensure communication and responsibilities remain clear.",
  },
];

export default function PartnershipsProcess() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
            Working Together
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
            A partnership begins with understanding.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We prefer to establish clarity before committing to a
            collaboration. That helps everyone understand the purpose and
            their role.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <span className="text-sm font-bold text-[#D4AF37]">
                {step.number}
              </span>

              <h3 className="mt-3 text-lg font-bold text-[#0B1B3A]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
