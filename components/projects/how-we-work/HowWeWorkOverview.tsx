export default function HowWeWorkOverview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Every project begins with understanding.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              MercyCare projects are designed around the people and communities
              they seek to support. We begin by considering the need, context,
              people involved, and purpose of the initiative.
            </p>

            <p>
              From there, the appropriate activities, resources, expertise, and
              partnerships can be considered before implementation begins.
            </p>

            <p>
              This allows individual projects to remain practical and
              responsive while maintaining a clear connection to MercyCare's
              wider mission and standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
