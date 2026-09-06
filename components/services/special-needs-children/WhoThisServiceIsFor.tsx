const groups = [
  {
    title: "Children with Developmental Delays",
    description:
      "Children who may need additional support with communication, movement, learning, social interaction or developmental milestones.",
  },
  {
    title: "Children on the Autism Spectrum",
    description:
      "Home-based support that promotes structured routines, communication, participation and positive development within a familiar environment.",
  },
  {
    title: "Children with Cerebral Palsy",
    description:
      "Support focused on everyday functioning, mobility, positioning, routines and coordination with the child's wider care and therapy team.",
  },
  {
    title: "Children with ADHD",
    description:
      "Practical support with routines, behaviour, participation and strategies that help children and families manage everyday activities.",
  },
  {
    title: "Children with Down Syndrome",
    description:
      "Individualised support that encourages developmental progress, independence, communication and participation in family life.",
  },
  {
    title: "Parents & Caregivers",
    description:
      "Families who need guidance, practical strategies and greater confidence in supporting a child's needs at home.",
  },
];

export default function WhoThisServiceIsFor() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Who We Support
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Care that includes the whole family
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            MercyCare recognises that supporting a child also means supporting
            the people who care for them. Our approach brings the child,
            family and care team together around practical and achievable
            goals.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 h-1 w-12 rounded-full bg-[#D4AF37]" />

              <h3 className="text-xl font-semibold text-[#0B1B3A]">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {group.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}