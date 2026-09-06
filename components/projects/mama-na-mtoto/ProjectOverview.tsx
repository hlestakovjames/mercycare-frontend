export default function ProjectOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              About the Project
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Care that supports the whole family
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Mama na Mtoto is designed around the understanding that the
              wellbeing of a mother and child is closely connected to the
              wellbeing of the entire family and community.
            </p>

            <p>
              The project brings together maternal wellbeing, child health,
              health education, early development and practical family
              support through community-centered initiatives.
            </p>

            <p>
              MercyCare aims to make reliable information, compassionate
              support and appropriate referrals more accessible to mothers,
              caregivers and families, while encouraging healthy practices
              from pregnancy through early childhood.
            </p>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-semibold text-[#0B1B3A]">
                Our focus
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Supporting healthier mothers, healthier children and stronger
                families through education, community engagement, early
                support and connections to appropriate care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}