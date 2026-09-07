import Link from "next/link";

const blogCategories = [
  {
    title: "Health & Wellness",
    description:
      "Practical health and wellness information to help individuals and families make informed decisions about their wellbeing.",
  },
  {
    title: "Family Health",
    description:
      "Guidance and insights covering children, mothers, older adults and the health needs of families.",
  },
  {
    title: "Caregiver Resources",
    description:
      "Helpful information for family caregivers supporting loved ones at home.",
  },
  {
    title: "Healthy Living",
    description:
      "Insights on preventive health, nutrition, movement, mental wellbeing and healthier everyday living.",
  },
];

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0B1B3A] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              MercyCare Blog
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Knowledge That Supports Better Health
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Explore health insights, family wellness guidance, caregiver
              resources and practical information from MercyCare.
            </p>

            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
              >
                Explore Articles
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
                The MercyCare Blog
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
                Trusted information for everyday health
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600">
                Good healthcare includes helping people understand their
                health. The MercyCare Blog will provide accessible,
                practical and relevant information that supports individuals,
                families and caregivers in making informed health and
                wellbeing decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Featured
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
                Latest health insights
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Our latest articles and educational content will appear here.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <div className="flex h-48 items-center justify-center bg-[#0B1B3A] px-6 text-center">
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
                  Health & Wellness
                </span>
              </div>

              <div className="p-7">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Coming Soon
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#0B1B3A]">
                  Health and wellness insights from MercyCare
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Practical information designed to help you and your family
                  make healthier choices.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <div className="flex h-48 items-center justify-center bg-[#0B1B3A] px-6 text-center">
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
                  Family Health
                </span>
              </div>

              <div className="p-7">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Coming Soon
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#0B1B3A]">
                  Supporting healthier families at home
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Helpful guidance for families caring for children, adults
                  and older loved ones.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <div className="flex h-48 items-center justify-center bg-[#0B1B3A] px-6 text-center">
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
                  Caregiver Resources
                </span>
              </div>

              <div className="p-7">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Coming Soon
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#0B1B3A]">
                  Resources for family caregivers
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Practical knowledge for those providing care and support at
                  home.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Explore
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Browse by topic
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Explore MercyCare content by health and wellness topic.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {blogCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#0B1B3A]">
                  {category.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {category.description}
                </p>

                <Link
                  href="/blog"
                  className="mt-6 inline-flex text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
                >
                  Explore topic →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-[#0B1B3A] px-8 py-12 text-center sm:px-12 sm:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              MercyCare
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your health. Your family. Your wellbeing.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              If you need personalised support at home, our team is ready to
              help you find the right care.
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