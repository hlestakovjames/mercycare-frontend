const values = [
  {
    number: "01",
    title: "Compassion",
    description:
      "We approach every client and family with empathy, kindness, patience, and genuine care.",
  },
  {
    number: "02",
    title: "Dignity",
    description:
      "We respect every person's dignity, independence, preferences, privacy, and right to be treated with respect.",
  },
  {
    number: "03",
    title: "Clinical Excellence",
    description:
      "We are committed to professional, evidence-informed, safe, and high-quality healthcare delivery.",
  },
  {
    number: "04",
    title: "Integrity",
    description:
      "We act honestly, responsibly, transparently, and ethically in everything we do.",
  },
  {
    number: "05",
    title: "Reliability",
    description:
      "Families should be able to depend on us for consistent, responsive, and professional care.",
  },
  {
    number: "06",
    title: "Innovation",
    description:
      "We embrace better approaches, technology, and new ideas that can improve healthcare at home.",
  },
  {
    number: "07",
    title: "Family-Centred Care",
    description:
      "We involve clients and families in care decisions and design support around their individual needs.",
  },
  {
    number: "08",
    title: "Confidentiality",
    description:
      "We protect client information and maintain privacy and confidentiality throughout the care journey.",
  },
];

export default function ValuesPage() {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Core Values
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              The principles behind every MercyCare interaction.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Our values shape how we care for clients, work with families,
              support our professionals, and build trust within the
              communities we serve.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              What Guides Us
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Care with compassion. Service with integrity.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              These principles are more than statements. They guide our
              decisions, our relationships with clients and families, and the
              standard we expect from everyone involved in delivering
              MercyCare services.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.number}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-[#D4AF37]">
                  {value.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#0B1B3A]">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Wellness With Dignity
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Where compassion meets dignity.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Our commitment is simple: provide professional healthcare while
            ensuring every client feels respected, valued, comfortable, and
            supported in the place they call home.
          </p>
        </div>
      </section>
    </>
  );
}
