import Link from "next/link";

export default function ServiceOverview() {
  return (
    <section id="service-overview" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              About This Service
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Supporting every child's individual potential
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              MercyCare provides personalised home-based support for children
              living with developmental, behavioural and special care needs.
              Our approach recognises that every child is different and
              requires care that reflects their abilities, needs, environment
              and family circumstances.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              By providing support within the child's familiar home
              environment, MercyCare helps families build consistency into
              everyday routines while supporting development, independence,
              communication and wellbeing.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#0B1B3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#162d5c]"
            >
              Discuss Your Child's Needs
            </Link>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-[#0B1B3A]">
              Conditions and needs we support
            </h3>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              {[
                "Autism Spectrum Disorder (ASD)",
                "Attention-Deficit/Hyperactivity Disorder (ADHD)",
                "Cerebral Palsy",
                "Down syndrome",
                "Developmental delays",
                "Behavioural and developmental challenges",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D4AF37]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}