import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Understand the Need",
    description:
      "We begin by understanding the health, wellness, social, and community needs that an initiative is intended to address.",
  },
  {
    number: "02",
    title: "Engage the Community",
    description:
      "We listen to individuals, families, community members, professionals, and relevant partners to understand priorities and identify practical ways to respond.",
  },
  {
    number: "03",
    title: "Design & Implement",
    description:
      "We develop practical program activities and coordinate the people, resources, partnerships, and systems required to put them into action.",
  },
  {
    number: "04",
    title: "Monitor Progress",
    description:
      "We track activities, participation, progress, and emerging needs to understand what is working and where improvements may be needed.",
  },
  {
    number: "05",
    title: "Follow Up & Continue",
    description:
      "We use feedback and lessons learned to strengthen our initiatives and support continuity beyond individual activities.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              How We Work
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              From understanding needs to creating lasting impact.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              MercyCare uses a structured, people-centred approach to develop,
              deliver, monitor, and strengthen its programs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              A practical approach to program delivery.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Every initiative can be different, but our approach provides a
              consistent foundation for understanding needs, working with
              communities, delivering activities, learning from results, and
              strengthening future programs.
            </p>
          </div>

          <div className="mt-14 space-y-6">
            {steps.map((step) => (
              <article
                key={step.number}
                className="grid gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:grid-cols-[80px_1fr] sm:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0B1B3A] text-sm font-bold text-[#D4AF37]">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0B1B3A]">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Learn More
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            See what our programs are designed to achieve.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Explore the impact of MercyCare's programs and the difference they
            aim to make for individuals, families, and communities.
          </p>

          <div className="mt-8">
            <Link
              href="/programs/impact"
              className="inline-flex rounded-full bg-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#162d5c]"
            >
              Explore Our Impact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}