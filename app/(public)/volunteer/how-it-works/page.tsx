const steps = [
  {
    number: "01",
    title: "Explore",
    description:
      "Learn about MercyCare and the areas where volunteers may contribute.",
  },
  {
    number: "02",
    title: "Choose an opportunity",
    description:
      "Review available opportunities and identify one that matches your interests, skills, and availability.",
  },
  {
    number: "03",
    title: "Apply",
    description:
      "Complete the volunteer application with the information needed to understand your interest and availability.",
  },
  {
    number: "04",
    title: "Review",
    description:
      "MercyCare reviews applications according to the needs and requirements of the relevant opportunity.",
  },
  {
    number: "05",
    title: "Participate",
    description:
      "Successful volunteers receive the relevant information and guidance for their agreed area of participation.",
  },
];

export default function VolunteerHowItWorksPage() {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              How It Works
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              A clear path from interest to participation.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              MercyCare's volunteer journey is designed to help people
              understand the opportunity, apply, and participate responsibly.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="space-y-5">
            {steps.map((step) => (
              <article
                key={step.number}
                className="grid gap-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-7 sm:grid-cols-[5rem_1fr] sm:p-8"
              >
                <div className="text-3xl font-bold text-[#D4AF37]">
                  {step.number}
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0B1B3A]">
                    {step.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
