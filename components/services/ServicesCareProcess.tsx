const steps = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "Reach out to MercyCare to discuss the service or type of support you are looking for.",
  },
  {
    number: "02",
    title: "Assessment",
    description:
      "We learn about the client's needs, circumstances and goals so the appropriate support can be identified.",
  },
  {
    number: "03",
    title: "Care Plan",
    description:
      "A personalised care approach is developed around the individual and, where appropriate, their family.",
  },
  {
    number: "04",
    title: "Care Begins",
    description:
      "The appropriate professional or caregiver begins providing support, with ongoing review as needs evolve.",
  },
];

export default function ServicesCareProcess() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Our Care Process
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            A simple path to personalised care
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Getting started with MercyCare is straightforward. We begin by
            understanding your needs and then build the appropriate care
            around you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="text-5xl font-bold text-slate-100">
                {step.number}
              </div>

              <h3 className="relative -mt-5 text-xl font-semibold text-[#0B1B3A]">
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