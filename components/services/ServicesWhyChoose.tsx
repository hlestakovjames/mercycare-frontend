const reasons = [
  {
    title: "Qualified Care Professionals",
    description:
      "MercyCare brings together nurses, caregivers and allied health professionals with appropriate training and professional oversight.",
  },
  {
    title: "Personalised Care Plans",
    description:
      "Care is shaped around each client's needs, preferences, circumstances and changing health goals.",
  },
  {
    title: "Family-Centred Support",
    description:
      "Families remain informed and involved throughout the care journey, helping create continuity and peace of mind.",
  },
  {
    title: "Compassion & Dignity",
    description:
      "Every interaction is guided by respect, confidentiality, compassion and the belief that every person deserves dignified care.",
  },
  {
    title: "Integrated Wellness",
    description:
      "Our approach considers physical, psychological and social wellbeing rather than treating health needs in isolation.",
  },
  {
    title: "Ongoing Support",
    description:
      "MercyCare is designed to support clients and families beyond a single visit through continued monitoring and care coordination.",
  },
];

export default function ServicesWhyChoose() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Why MercyCare
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Care built around people, not just conditions
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            MercyCare combines professional healthcare with compassionate,
            family-centred support to help people remain comfortable,
            independent and connected to those who matter most.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1B3A] text-sm font-bold text-[#D4AF37]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-[#0B1B3A]">
                {reason.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}