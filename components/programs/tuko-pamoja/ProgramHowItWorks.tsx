import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Understand the need",
    description:
      "Identify the wellbeing, social, family, and support needs affecting older adults within the communities reached by the program.",
  },
  {
    number: "02",
    title: "Engage families and communities",
    description:
      "Work with older adults, families, caregivers, volunteers, and community stakeholders to understand priorities and identify appropriate ways to provide support.",
  },
  {
    number: "03",
    title: "Connect the right support",
    description:
      "Link participants with relevant wellness activities, community support, professional services, information, and available resources.",
  },
  {
    number: "04",
    title: "Implement activities",
    description:
      "Deliver appropriate activities and initiatives in collaboration with communities, volunteers, healthcare professionals, and partners.",
  },
  {
    number: "05",
    title: "Follow up and learn",
    description:
      "Gather feedback, monitor participation and emerging needs, and use lessons learned to strengthen future program activities.",
  },
];

export default function ProgramHowItWorks() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              How It Works
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              A community-centred approach to senior wellness.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Tuko Pamoja is designed to work with communities rather than
              simply deliver activities to them. The approach allows MercyCare
              to understand needs, connect appropriate support, and continue
              learning from the people the program serves.
            </p>

            <Link
              href="/programs/how-we-work"
              className="mt-7 inline-flex items-center text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
            >
              Learn more about how MercyCare works
              <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="flex gap-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0B1B3A] text-sm font-bold text-[#D4AF37]">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-lg font-bold text-[#0B1B3A]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}