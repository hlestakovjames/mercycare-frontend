const steps = [
  {
    number: "01",
    title: "Tell Us About You",
    description:
      "Share your interests, skills, experience, availability, or the type of community work you would like to support.",
  },
  {
    number: "02",
    title: "Explore Opportunities",
    description:
      "MercyCare can consider whether there are relevant activities, projects, or opportunities that match your interests.",
  },
  {
    number: "03",
    title: "Understand the Role",
    description:
      "Where appropriate, expectations, responsibilities, safeguarding requirements, and practical arrangements are discussed.",
  },
  {
    number: "04",
    title: "Contribute",
    description:
      "Once an appropriate opportunity is identified, you can contribute within the agreed role and project framework.",
  },
];

export default function VolunteerPath() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Volunteering
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Turn your willingness to help into meaningful participation.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Volunteer opportunities depend on MercyCare's current activities,
              project needs, and the skills or availability required.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <span className="text-sm font-bold tracking-[0.15em] text-[#D4AF37]">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-bold text-[#0B1B3A]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
