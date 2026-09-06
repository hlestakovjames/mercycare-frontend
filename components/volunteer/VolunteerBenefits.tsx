const opportunities = [
  {
    number: "01",
    title: "Community Activities",
    description:
      "Help MercyCare organize and support activities within the communities we serve.",
  },
  {
    number: "02",
    title: "Program Support",
    description:
      "Contribute your time and skills to initiatives such as Tuko Pamoja and Mama na Mtoto.",
  },
  {
    number: "03",
    title: "Professional Skills",
    description:
      "Share your professional, technical, creative, organizational, or communication skills.",
  },
  {
    number: "04",
    title: "Events & Outreach",
    description:
      "Support MercyCare events, awareness activities, campaigns, and community outreach.",
  },
];

export default function VolunteerBenefits() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Ways to Contribute
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            There is a place for your contribution.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Volunteers can contribute in different ways depending on their
            interests, experience, availability, and the needs of our
            programs.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {opportunities.map((opportunity) => (
            <article
              key={opportunity.number}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-sm font-bold text-[#D4AF37]">
                {opportunity.number}
              </span>

              <h3 className="mt-5 text-xl font-bold text-[#0B1B3A]">
                {opportunity.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {opportunity.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}