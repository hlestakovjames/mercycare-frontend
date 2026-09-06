const steps = [
  {
    number: "01",
    title: "Initial Conversation",
    description:
      "We begin by listening to the family, understanding the child's needs, current routines, concerns and existing support.",
  },
  {
    number: "02",
    title: "Individual Assessment",
    description:
      "Our care team reviews the child's needs and identifies practical areas where home-based support can make a meaningful difference.",
  },
  {
    number: "03",
    title: "Personalised Care Plan",
    description:
      "A tailored support plan is developed around the child's needs, family circumstances, developmental goals and professional recommendations.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "MercyCare provides continuing support, monitors progress and works with the family to adjust the approach as the child's needs evolve.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#0B1B3A] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Our Care Process
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A thoughtful approach from assessment to ongoing support
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300">
            We work alongside families to create a consistent and practical
            approach to care within the child's home environment.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="text-4xl font-bold text-[#D4AF37]">
                {step.number}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}