const steps = [
  {
    number: "01",
    title: "Make an enquiry",
    description:
      "Contact MercyCare and tell us about the nursing support you or your loved one needs.",
  },
  {
    number: "02",
    title: "Assessment",
    description:
      "Our team reviews the client's needs and determines the appropriate level of professional support.",
  },
  {
    number: "03",
    title: "Care plan",
    description:
      "A personalised care plan is developed around the client's clinical needs and preferences.",
  },
  {
    number: "04",
    title: "Care begins",
    description:
      "The appropriate professional begins care with ongoing monitoring, communication and review.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            From enquiry to ongoing care
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-5xl font-bold text-slate-200">
                {step.number}
              </span>

              <h3 className="mt-2 text-xl font-semibold text-[#0B1B3A]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}