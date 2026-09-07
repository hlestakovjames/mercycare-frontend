import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Understand the need",
    description:
      "Identify the maternal, child, family, and community needs that should be addressed through the program.",
  },
  {
    number: "02",
    title: "Engage families and communities",
    description:
      "Work with mothers, caregivers, families, community members, and relevant stakeholders to understand priorities and available support systems.",
  },
  {
    number: "03",
    title: "Connect appropriate support",
    description:
      "Link families with relevant health information, wellness activities, professional services, community resources, and other appropriate forms of support.",
  },
  {
    number: "04",
    title: "Implement activities",
    description:
      "Deliver appropriate education, awareness, engagement, and support activities together with communities, professionals, volunteers, and partners.",
  },
  {
    number: "05",
    title: "Follow up and learn",
    description:
      "Gather feedback, monitor emerging needs, and use lessons learned to strengthen future program activities and support.",
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
              A family-centred approach to maternal and child wellbeing.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Mama na Mtoto is designed to work with families and communities,
              helping MercyCare understand needs, connect appropriate support,
              and strengthen the systems around mothers and children.
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