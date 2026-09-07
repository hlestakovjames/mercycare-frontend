import Link from "next/link";

const activityCategories = [
  {
    title: "Community Outreach",
    description:
      "Health and wellness outreach activities that bring MercyCare closer to communities and families.",
  },
  {
    title: "Wellness Activities",
    description:
      "Practical wellness initiatives that encourage healthier lifestyles, preventive care and wellbeing.",
  },
  {
    title: "Program Activities",
    description:
      "Activities delivered through MercyCare programs and initiatives to support individuals and families.",
  },
  {
    title: "Volunteer Activities",
    description:
      "Opportunities for volunteers and community partners to participate in meaningful healthcare initiatives.",
  },
];

export default function ActivitiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0B1B3A] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              MercyCare Activities
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Making a Difference Through Action
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Explore the ongoing community, wellness and program activities
              through which MercyCare delivers compassionate care and creates
              meaningful impact.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/activities"
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
              >
                Explore Activities
              </Link>

              <Link
                href="/events"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Events
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
                Our Activities
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
                Care in action
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600">
                MercyCare&apos;s work extends beyond individual care services.
                Through community outreach, wellness initiatives, program
                activities and volunteer engagement, we work with families and
                communities to promote better health and quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Categories */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Explore
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              What we do
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Discover the different areas in which MercyCare engages
              communities, families, volunteers and healthcare partners.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {activityCategories.map((category) => (
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
                  href="/activities"
                  className="mt-6 inline-flex text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
                >
                  Explore activities →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Between Events and Activities */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Events & Activities
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0B1B3A] sm:text-3xl">
              Different experiences, one MercyCare mission
            </h2>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-bold text-[#0B1B3A]">
                  Events
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Scheduled occasions such as health camps, community events,
                  wellness events and other organised gatherings.
                </p>

                <Link
                  href="/events"
                  className="mt-4 inline-flex text-sm font-semibold text-[#0B1B3A] hover:text-[#D4AF37]"
                >
                  Explore Events →
                </Link>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#0B1B3A]">
                  Activities
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Ongoing or completed initiatives, outreach efforts, wellness
                  actions and program-based engagements.
                </p>

                <Link
                  href="/activities"
                  className="mt-4 inline-flex text-sm font-semibold text-[#0B1B3A] hover:text-[#D4AF37]"
                >
                  Explore Activities →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-[#0B1B3A] px-8 py-12 text-center sm:px-12 sm:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Get Involved
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Be part of the difference
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Join MercyCare in creating healthier, stronger and more
              supported communities.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
              >
                Become a Volunteer
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact MercyCare
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}