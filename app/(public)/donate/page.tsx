import Link from "next/link";

export default function DonatePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0B1B3A] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Support MercyCare
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Help us bring dignified care closer to more families
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Your support helps MercyCare extend compassionate healthcare,
              community programmes and wellness initiatives to individuals and
              families who need them most.
            </p>
          </div>
        </div>
      </section>

      {/* Why support */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Why Your Support Matters
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Every contribution can help create better health outcomes
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              MercyCare believes that quality healthcare should be delivered
              with compassion, dignity and respect. Support from individuals,
              organisations and partners helps us strengthen programmes and
              reach more people.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1B3A] text-lg font-bold text-white">
                01
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0B1B3A]">
                Community Health
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Support health outreach, education and wellness initiatives
                within communities.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1B3A] text-lg font-bold text-white">
                02
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0B1B3A]">
                Family Support
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Help families access information, support and compassionate
                care when they need it.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1B3A] text-lg font-bold text-white">
                03
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0B1B3A]">
                Better Care
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Contribute towards stronger healthcare programmes and
                patient-centred support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to support */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Ways To Support
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              There is more than one way to make an impact
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Whether through financial support, volunteering, partnerships or
              professional expertise, you can play a meaningful role in the
              MercyCare mission.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                Give Financially
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Support MercyCare programmes and initiatives through a
                financial contribution.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex text-sm font-semibold text-[#0B1B3A] hover:text-[#D4AF37]"
              >
                Contact us to give →
              </Link>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                Volunteer
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Give your time, skills and compassion to support people and
                communities.
              </p>

              <Link
                href="/volunteer"
                className="mt-6 inline-flex text-sm font-semibold text-[#0B1B3A] hover:text-[#D4AF37]"
              >
                Become a volunteer →
              </Link>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                Partner With Us
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Organisations and professionals can collaborate with MercyCare
                to expand healthcare impact.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex text-sm font-semibold text-[#0B1B3A] hover:text-[#D4AF37]"
              >
                Discuss a partnership →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-[#0B1B3A] px-8 py-12 text-center sm:px-12 sm:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Make A Difference
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your support can help us reach more people with dignity
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              We are building a healthcare model where compassion, clinical
              excellence and dignity remain at the centre of every interaction.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
              >
                Support MercyCare
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-lg font-medium text-slate-600">
            Wellness With Dignity
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Together, we can make compassionate care more accessible.
          </h2>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0B1B3A] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#D4AF37] hover:text-[#0B1B3A]"
          >
            Contact MercyCare
          </Link>
        </div>
      </section>
    </main>
  );
}