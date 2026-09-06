const supportAreas = [
  {
    title: "Individualised Therapy Follow-Ups",
    description:
      "Structured follow-up support that helps families maintain consistency with recommended therapy and developmental programmes at home.",
  },
  {
    title: "Behaviour Management",
    description:
      "Practical strategies that support positive behaviour, routines, communication and participation in everyday activities.",
  },
  {
    title: "Sensory-Informed Support",
    description:
      "Activities and environmental approaches designed to help children manage sensory needs within their familiar home environment.",
  },
  {
    title: "Developmental Monitoring",
    description:
      "Ongoing observation and documentation of developmental progress, abilities and areas requiring additional support.",
  },
  {
    title: "Daily Living Skills",
    description:
      "Age-appropriate support that encourages greater independence with everyday routines and activities.",
  },
  {
    title: "Family Coaching",
    description:
      "Guidance and practical education for parents and caregivers so they can confidently support their child's development at home.",
  },
];

export default function WhatWeProvide() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            What We Provide
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Practical support built around each child
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Our support focuses on the child as an individual while working
            closely with parents and caregivers to create consistency between
            professional recommendations and everyday life.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {supportAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1B3A] text-sm font-bold text-[#D4AF37]">
                ✓
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#0B1B3A]">
                {area.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}