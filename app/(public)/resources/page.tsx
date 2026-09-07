import Link from "next/link";

const resourceCategories = [
  {
    title: "For Families",
    description:
      "Practical information to help families understand home healthcare, support loved ones and make informed care decisions.",
  },
  {
    title: "For Caregivers",
    description:
      "Helpful guidance and educational materials for people providing care and support at home.",
  },
  {
    title: "Health Education",
    description:
      "Accessible health information covering prevention, wellness, chronic conditions and healthy living.",
  },
  {
    title: "Downloads",
    description:
      "Access MercyCare guides, information materials, forms and other useful resources as they become available.",
  },
];

export default function ResourcesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0B1B3A] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              MercyCare Resources
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Information That Helps You Care Better
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Access practical health information, caregiver guidance,
              educational materials and resources designed to support better
              health and wellbeing at home.
            </p>

            <div className="mt-8">
              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Knowledge & Support
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
                Healthcare information you can use
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600">
                Understanding health and care is an important part of achieving
                better outcomes. MercyCare&apos;s resource centre will provide
                families, caregivers and communities with practical information
                to support informed health and care decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Resource Centre
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Find the information you need
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Browse resources according to your needs and interests.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {resourceCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#0B1B3A]">
                  {category.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {category.description}
                </p>

                <Link
                  href="/resources"
                  className="mt-6 inline-flex text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
                >
                  Explore resources →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-50 p-8 sm:p-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Featured Resource
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A]">
                MercyCare health education centre
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Our resource library will continue to grow with practical
                educational materials covering home healthcare, family
                wellness, chronic disease management, caregiving and
                preventive health.
              </p>

              <p className="mt-4 text-sm font-medium text-slate-500">
                Resources will be added as they are published.
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
              Need Personalised Support?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Information is helpful. Personalised care is better.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              If you or someone you care for needs professional support at
              home, our team can help you determine the right care approach.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
              >
                Contact MercyCare
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}