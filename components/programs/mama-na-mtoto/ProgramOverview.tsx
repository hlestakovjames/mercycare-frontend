export default function ProgramOverview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              About the Program
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Supporting mama. Nurturing mtoto. Strengthening families.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Mama na Mtoto is a MercyCare initiative focused on supporting
              mothers and children through compassionate, community-centered
              care.
            </p>

            <p>
              The program recognizes that the wellbeing of mothers and children
              is closely connected to the strength and support available within
              families and communities.
            </p>

            <p>
              Through education, community engagement, partnerships, and
              practical support initiatives, MercyCare seeks to contribute to
              healthier and more resilient families.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}