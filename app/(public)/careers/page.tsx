import Link from "next/link";

const careerAreas = [
  {
    title: "Nursing",
    description:
      "Opportunities for qualified nurses committed to delivering professional, compassionate care in home and community settings.",
  },
  {
    title: "Caregiving",
    description:
      "Join a team supporting clients and families with dignity, compassion and dependable day-to-day care.",
  },
  {
    title: "Allied Health",
    description:
      "Opportunities for qualified professionals including physiotherapists, occupational therapists and other healthcare specialists.",
  },
  {
    title: "Administration & Support",
    description:
      "Help strengthen MercyCare through professional administrative, operational, technology and support roles.",
  },
];

export default function CareersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0B1B3A] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Careers at MercyCare
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build a Career That Makes a Difference
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Join a growing healthcare team committed to compassionate,
              dignified and professionally excellent care for individuals and
              families.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
              >
                View Opportunities
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why MercyCare */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Why MercyCare
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
                Work where compassion meets professional excellence
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600">
                At MercyCare, healthcare professionals are part of a team
                working to improve the quality of life of individuals and
                families. We value professionalism, integrity, compassion,
                reliability and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Areas */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Career Areas
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Where you can make an impact
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              MercyCare brings together professionals from different
              disciplines to provide coordinated and family-centred care.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {careerAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#0B1B3A]">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {area.description}
                </p>

                <Link
                  href="/careers"
                  className="mt-6 inline-flex text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
                >
                  Explore opportunities →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              How to join MercyCare
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-8">
              <p className="text-3xl font-bold text-[#D4AF37]">01</p>

              <h3 className="mt-5 text-xl font-bold text-[#0B1B3A]">
                Find an opportunity
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Review available positions and identify an opportunity that
                matches your qualifications and experience.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8">
              <p className="text-3xl font-bold text-[#D4AF37]">02</p>

              <h3 className="mt-5 text-xl font-bold text-[#0B1B3A]">
                Submit your application
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Follow the application instructions provided for the position
                and submit the required information.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8">
              <p className="text-3xl font-bold text-[#D4AF37]">03</p>

              <h3 className="mt-5 text-xl font-bold text-[#0B1B3A]">
                Begin your journey
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Successful candidates proceed through MercyCare&apos;s
                recruitment and onboarding process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-[#0B1B3A] px-8 py-12 text-center sm:px-12 sm:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Join Our Team
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your skills can help transform lives
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              We welcome professionals who share our commitment to
              compassionate, dignified and excellent healthcare.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
              >
                Contact MercyCare
              </Link>

              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Volunteer With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}