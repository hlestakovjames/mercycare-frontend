import Link from "next/link";

const eventCategories = [
  {
    title: "Health Camps",
    description:
      "Community-focused health activities designed to promote preventive care, wellness and early access to healthcare services.",
  },
  {
    title: "Community Events",
    description:
      "MercyCare activities that bring healthcare professionals, families and communities together.",
  },
  {
    title: "Wellness Events",
    description:
      "Wellness-focused events supporting healthier lifestyles, family wellbeing and preventive health.",
  },
  {
    title: "Upcoming Events",
    description:
      "Stay informed about upcoming MercyCare events, health initiatives and community engagements.",
  },
];

export default function EventsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0B1B3A] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              MercyCare Events
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Connecting Care With Community
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Discover MercyCare health events, wellness activities and
              community initiatives that bring compassionate healthcare closer
              to the people we serve.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/events"
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
              >
                Upcoming Events
              </Link>

              <Link
                href="/activities"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Activities
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
                Our Events
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
                Healthcare beyond the home
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-slate-600">
                MercyCare believes that better health is built through strong
                families, informed communities and accessible healthcare.
                Through our events and community engagements, we create
                opportunities for people to learn, connect and take meaningful
                steps toward better health and wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Explore
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              MercyCare events
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Explore the different types of events through which MercyCare
              engages families, healthcare professionals and communities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {eventCategories.map((category) => (
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
                  href="/events"
                  className="mt-6 inline-flex text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
                >
                  Explore events →
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
              Stay Connected
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Be part of the MercyCare community
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Keep up with upcoming events, community initiatives and
              opportunities to participate in MercyCare activities.
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
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}