import Link from "next/link";

const participation = [
  {
    title: "Attend",
    description:
      "Take part in an event and connect with other community members.",
  },
  {
    title: "Support",
    description:
      "Support community events through appropriate contributions and practical assistance.",
  },
  {
    title: "Partner",
    description:
      "Explore opportunities for organizations and community groups to collaborate with MercyCare.",
  },
];

export default function EventsOverviewParticipation() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Get Involved
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            There are different ways to participate
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Whether you attend, support or explore a partnership, participation
            can help create stronger community connections.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {participation.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8"
            >
              <h3 className="text-2xl font-bold text-[#0B1B3A]">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/events/get-involved"
            className="inline-flex rounded-full bg-[#0F766E] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#0B625D]"
          >
            Explore Ways to Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}
