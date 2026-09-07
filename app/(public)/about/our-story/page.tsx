import Link from "next/link";

export default function OurStoryPage() {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Story
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Bringing compassionate healthcare closer to home.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              MercyCare Home Health Services was built around a simple belief:
              quality healthcare should not end when a client leaves the
              hospital.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Where It Began
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
                Care designed around people, families, and everyday life.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-600">
              <p>
                MercyCare Home Health Services exists to bridge the gap between
                clinical healthcare and the comfort of home. We provide
                professional, compassionate support to individuals and families
                who need quality care beyond traditional healthcare settings.
              </p>

              <p>
                Our approach combines clinical expertise with personalized
                attention. From professional nursing and elderly care to
                rehabilitation, mother and baby care, chronic disease
                management, and support for children with special needs, our
                services are designed around the unique circumstances of each
                client.
              </p>

              <p>
                We believe that care should protect not only health, but also
                dignity, independence, comfort, and peace of mind. That belief
                shapes how we work with clients, families, healthcare
                professionals, and our wider community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-[2rem] bg-[#0B1B3A] p-8 text-white sm:p-10 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Commitment
            </p>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Wellness with dignity.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              We do not just provide care — we bring dignity, comfort, and
              peace of mind to clients and their families at home. Every care
              plan is developed with the individual, their family, and their
              wellbeing at the centre.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
