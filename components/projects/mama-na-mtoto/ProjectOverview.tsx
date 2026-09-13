export default function ProjectOverview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Project Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Supporting mothers, children, and families.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              Mama na Mtoto is a MercyCare project focused on maternal and
              child wellbeing. It provides a framework for community-oriented
              initiatives that respond to the needs of mothers, children, and
              families.
            </p>

            <p>
              The project recognises that maternal and child wellbeing is
              connected to health information, appropriate support, family
              participation, professional care, and the wider environment in
              which families live.
            </p>

            <p>
              Individual initiatives can therefore be shaped around specific
              community needs while remaining connected to MercyCare's broader
              maternal, child, family, and healthcare work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
