const reasons = [
  {
    title: "Family-Centred Care",
    description:
      "We involve parents and caregivers in the care process, recognising the important role families play in a child's development and wellbeing.",
  },
  {
    title: "Individualised Support",
    description:
      "Every child has different strengths, needs and circumstances. Our support is shaped around the individual child rather than a one-size-fits-all approach.",
  },
  {
    title: "Care in a Familiar Environment",
    description:
      "Home-based support allows children to receive assistance within familiar surroundings and everyday routines.",
  },
  {
    title: "Multidisciplinary Approach",
    description:
      "Where appropriate, MercyCare coordinates with relevant healthcare and therapy professionals to support continuity of care.",
  },
  {
    title: "Progress Monitoring",
    description:
      "We monitor development and communicate meaningful observations with families so that support can evolve as needs change.",
  },
  {
    title: "Dignity & Respect",
    description:
      "Every child and family is treated with compassion, confidentiality, patience and respect throughout the care journey.",
  },
];

export default function WhyMercyCare() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Why MercyCare
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Compassionate care built around your family
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              MercyCare combines professional home healthcare with a
              compassionate, family-centred approach. Our goal is to help
              children receive appropriate support while helping families
              feel informed, involved and confident.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B1B3A] text-sm font-bold text-[#D4AF37]">
                  ✓
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#0B1B3A]">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}