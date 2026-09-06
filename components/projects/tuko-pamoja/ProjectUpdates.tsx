import Link from "next/link";

const updates = [
  {
    type: "Project Update",
    title: "Tuko Pamoja: Building a Culture of Healthy Ageing",
    description:
      "Follow updates from MercyCare as Tuko Pamoja works with older adults, families and communities to promote healthier and more connected ageing.",
  },
  {
    type: "Community Story",
    title: "Stories From the Tuko Pamoja Community",
    description:
      "Discover the experiences, voices and moments that demonstrate the importance of dignity, companionship and community support.",
  },
  {
    type: "Announcement",
    title: "Tuko Pamoja Activities & Opportunities",
    description:
      "Stay informed about upcoming project activities, community engagements, volunteer opportunities and ways to support senior wellness.",
  },
];

export default function ProjectUpdates() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Project Updates
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Follow the Tuko Pamoja journey
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Keep up with project developments, community stories,
              announcements and opportunities to get involved.
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex w-fit items-center rounded-full border border-[#0B1B3A] px-5 py-2.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#0B1B3A] hover:text-white"
          >
            View MercyCare News
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {updates.map((update) => (
            <article
              key={update.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-1 bg-[#D4AF37]" />

              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">
                  {update.type}
                </p>

                <h3 className="mt-4 text-xl font-semibold leading-7 text-[#0B1B3A]">
                  {update.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {update.description}
                </p>

                <Link
                  href="/news"
                  className="mt-6 inline-flex text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
                >
                  Read updates →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}