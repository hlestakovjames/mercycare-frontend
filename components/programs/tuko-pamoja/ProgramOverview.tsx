export default function ProgramOverview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              About Tuko Pamoja
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Together, we can support older adults to live with dignity.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Tuko Pamoja — meaning “we are together” — is a MercyCare senior
              wellness initiative focused on connection, wellbeing, dignity,
              and community support for older adults.
            </p>
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600">
            <div>
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                What the program is about
              </h3>

              <p className="mt-3">
                Tuko Pamoja recognizes that the wellbeing of older adults
                extends beyond medical care. Healthy ageing also involves
                meaningful relationships, emotional wellbeing, social
                connection, family support, and an environment where older
                people feel valued and respected.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                Why it matters
              </h3>

              <p className="mt-3">
                Older adults can face challenges related to isolation,
                changing health needs, reduced social connection, and
                dependence on others for everyday support. Tuko Pamoja seeks
                to contribute to stronger support systems around them by
                bringing families, communities, volunteers, and partners
                together.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                A community-centred approach
              </h3>

              <p className="mt-3">
                The program is designed around the needs and circumstances of
                the communities it serves. Through wellness activities,
                education, engagement, partnerships, and practical support,
                MercyCare seeks to create environments where older adults can
                remain connected, supported, and treated with dignity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}