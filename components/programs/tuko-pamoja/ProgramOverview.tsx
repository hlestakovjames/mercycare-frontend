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
              Tuko Pamoja means we are together.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Tuko Pamoja — Senior Wellness is a MercyCare initiative focused
              on supporting older adults through community-centered care,
              wellness, connection, and practical support.
            </p>

            <p>
              The program recognizes the experience and dignity of older
              adults while creating opportunities for them to remain connected
              to their families and communities.
            </p>

            <p>
              Through activities, partnerships, and community engagement,
              MercyCare seeks to contribute to healthier and more supportive
              environments for seniors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}