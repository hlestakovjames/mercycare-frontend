import Link from "next/link";

const approaches = [
  {
    title: "Community-Centred Care",
    description:
      "We work with communities to understand local needs and develop initiatives that respond to real health and wellbeing challenges.",
  },
  {
    title: "Family-Centred Care",
    description:
      "We recognise families as essential partners in care and design programs that support individuals while strengthening the people around them.",
  },
  {
    title: "Preventive Care",
    description:
      "We promote health education, early intervention, wellness, and healthier choices to help prevent avoidable illness and improve long-term wellbeing.",
  },
  {
    title: "Continuity of Care",
    description:
      "We focus on sustained support and follow-up so that our programs can contribute to lasting improvements rather than one-time interventions.",
  },
];

export default function ProgramsApproachPage() {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Approach
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              How MercyCare turns care into meaningful action.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Our programs are guided by a people-centred approach that
              connects healthcare, prevention, family support, community
              engagement, and long-term wellbeing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Principles
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              An approach built around people, families, and communities.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              MercyCare develops and delivers programs with the understanding
              that meaningful health outcomes require more than individual
              interventions. Our approach considers the wider environment,
              relationships, access to care, prevention, and continuity.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {approaches.map((approach, index) => (
              <article
                key={approach.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-8"
              >
                <span className="text-sm font-bold tracking-[0.15em] text-[#D4AF37]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-xl font-bold text-[#0B1B3A]">
                  {approach.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {approach.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Explore Further
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            From approach to action.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Explore the areas where our programs operate and the initiatives
            through which MercyCare puts this approach into practice.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/programs/areas"
              className="rounded-full bg-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#162d5c]"
            >
              Explore Program Areas
            </Link>

            <Link
              href="/programs/our-programs"
              className="rounded-full border-2 border-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#0B1B3A] hover:text-white"
            >
              Explore Our Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}