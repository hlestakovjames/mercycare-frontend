const principles = [
  {
    title: "People-Centred",
    description:
      "Projects are shaped around the people and communities they are intended to support.",
  },
  {
    title: "Purpose-Driven",
    description:
      "Each initiative should have a clear reason for existing and a meaningful focus.",
  },
  {
    title: "Collaborative",
    description:
      "Appropriate collaboration can bring together experience, skills, resources, and community knowledge.",
  },
  {
    title: "Practical",
    description:
      "Projects are designed to translate identified needs into realistic and useful action.",
  },
  {
    title: "Respectful",
    description:
      "Dignity, confidentiality, safeguarding, and respect remain important throughout project work.",
  },
  {
    title: "Learning-Focused",
    description:
      "Experience and feedback help MercyCare understand what can be strengthened in future initiatives.",
  },
];

export default function HowWeWorkPrinciples() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Our Principles
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            How we approach project work.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
            >
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                {principle.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
