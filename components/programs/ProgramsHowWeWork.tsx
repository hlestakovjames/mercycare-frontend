import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Understand the need",
    description:
      "We listen to communities and identify the health, wellbeing, and support needs that programs should address.",
  },
  {
    number: "02",
    title: "Engage the community",
    description:
      "We work with families, community members, professionals, organizations, and other relevant stakeholders.",
  },
  {
    number: "03",
    title: "Design & implement",
    description:
      "We develop appropriate initiatives and activities that respond to identified needs and available resources.",
  },
  {
    number: "04",
    title: "Monitor progress",
    description:
      "We pay attention to participation, feedback, emerging needs, and the effectiveness of our activities.",
  },
  {
    number: "05",
    title: "Follow up & continue",
    description:
      "We use what we learn to strengthen ongoing activities, partnerships, and future program development.",
  },
];

export default function ProgramsHowWeWork() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              How We Work
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              From understanding needs to creating meaningful action.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              MercyCare programs are developed through a practical,
              community-centred process that allows us to understand needs,
              work collaboratively, implement appropriate activities, and learn
              from experience.
            </p>

            <Link
              href="/programs/how-we-work"
              className="mt-7 inline-flex items-center text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
            >
              Learn how MercyCare works
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