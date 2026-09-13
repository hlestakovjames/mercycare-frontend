export default function ProjectOverview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Project Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Supporting older adults with dignity and community.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              Tuko Pamoja is a MercyCare project focused on senior wellness and
              community support. Its approach recognises that the wellbeing of
              older adults involves more than healthcare alone.
            </p>

            <p>
              The project provides a framework for initiatives that can promote
              dignity, social connection, wellbeing, practical support, and
              stronger relationships around older adults.
            </p>

            <p>
              Tuko Pamoja is connected to MercyCare's wider senior wellness
              work while allowing individual activities and initiatives to
              respond to specific community contexts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
