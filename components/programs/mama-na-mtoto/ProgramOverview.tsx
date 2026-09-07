export default function ProgramOverview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              About Mama na Mtoto
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Supporting mothers and children through compassionate care.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Mama na Mtoto is a MercyCare maternal and child support initiative
              focused on promoting the wellbeing of mothers, children, and the
              families who care for them.
            </p>
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600">
            <div>
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                What the program is about
              </h3>

              <p className="mt-3">
                Mama na Mtoto recognizes that the health and wellbeing of
                mothers and children are closely connected. Supporting a mother
                during pregnancy, after childbirth, and throughout the early
                stages of her child's life can also strengthen the wellbeing of
                the wider family.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                Why it matters
              </h3>

              <p className="mt-3">
                Mothers and children can face different health, emotional,
                educational, and practical challenges at different stages of
                the maternal and child journey. The program seeks to bring
                appropriate information, support, community engagement, and
                professional care closer to families.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                A family-centred approach
              </h3>

              <p className="mt-3">
                MercyCare approaches maternal and child wellbeing as a shared
                family and community responsibility. Through education,
                engagement, partnerships, and appropriate support, Mama na
                Mtoto seeks to help families make informed decisions and build
                healthier environments for mothers and children.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}