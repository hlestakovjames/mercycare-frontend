import Link from "next/link";

const positions = [
  {
    slug: "community-programs-coordinator",
    title: "Community Programs Coordinator",
    type: "Example opportunity",
    location: "Kenya",
    summary:
      "Support the planning, coordination, documentation, and follow-up of community-focused programs and activities.",
  },
  {
    slug: "communications-and-media-assistant",
    title: "Communications & Media Assistant",
    type: "Example opportunity",
    location: "Kenya",
    summary:
      "Support communications, content development, storytelling, media coordination, and digital communication activities.",
  },
  {
    slug: "ict-and-digital-support-assistant",
    title: "ICT & Digital Support Assistant",
    type: "Example opportunity",
    location: "Kenya",
    summary:
      "Support digital systems, technology operations, content platforms, and day-to-day ICT-related activities.",
  },
];

export default function OpenPositionsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1B3A] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.16),transparent_38%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Careers at MercyCare
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Open positions
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Explore published opportunities and review the responsibilities,
            requirements, and application process for each position.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-8 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-5">
            <p className="text-sm leading-6 text-slate-700">
              <strong className="text-[#0B1B3A]">Development preview:</strong>{" "}
              the opportunities shown below are example vacancy records used
              to establish the frontend recruitment workflow. They should not
              be interpreted as current MercyCare vacancies until connected to
              the actual recruitment system.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {positions.map((position) => (
              <article
                key={position.slug}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-8"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#0B1B3A] px-3 py-1 text-xs font-semibold text-white">
                    {position.type}
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {position.location}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold text-[#0B1B3A]">
                  {position.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {position.summary}
                </p>

                <Link
                  href={`/careers/open-positions/${position.slug}`}
                  className="mt-6 inline-flex rounded-full bg-[#0B1B3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#132b57]"
                >
                  View Position
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
