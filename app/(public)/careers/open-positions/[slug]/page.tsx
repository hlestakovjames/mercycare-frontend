import Link from "next/link";
import { notFound } from "next/navigation";

const positions = {
  "community-programs-coordinator": {
    title: "Community Programs Coordinator",
    department: "Programs & Community",
    location: "Kenya",
    type: "Example opportunity",
    summary:
      "Support the planning, coordination, documentation, and follow-up of community-focused programs and activities.",
    responsibilities: [
      "Support planning and coordination of community programs and activities.",
      "Assist with activity schedules, logistics, communication, and documentation.",
      "Coordinate information between relevant teams and community stakeholders.",
      "Support reporting and organised documentation of program activities.",
      "Contribute to continuous improvement of program coordination processes.",
    ],
    requirements: [
      "Strong organisation and communication skills.",
      "Ability to work collaboratively with different people.",
      "Relevant experience in coordination, community work, administration, or a related area is useful.",
      "Good written and digital communication skills.",
    ],
  },
  "communications-and-media-assistant": {
    title: "Communications & Media Assistant",
    department: "Communications",
    location: "Kenya",
    type: "Example opportunity",
    summary:
      "Support communications, content development, storytelling, media coordination, and digital communication activities.",
    responsibilities: [
      "Support development of communications and digital content.",
      "Assist with photography, video, writing, or other content activities where appropriate.",
      "Support organisation of media and communications materials.",
      "Assist with website and social media content workflows.",
      "Help maintain organised communications records and assets.",
    ],
    requirements: [
      "Strong written and verbal communication skills.",
      "Interest or experience in digital communication, media, content, or storytelling.",
      "Basic digital literacy and willingness to learn.",
      "Ability to work responsibly with organisational information and materials.",
    ],
  },
  "ict-and-digital-support-assistant": {
    title: "ICT & Digital Support Assistant",
    department: "ICT & Digital",
    location: "Kenya",
    type: "Example opportunity",
    summary:
      "Support digital systems, technology operations, content platforms, and day-to-day ICT-related activities.",
    responsibilities: [
      "Provide day-to-day support for approved digital and ICT activities.",
      "Assist with website and digital platform content workflows.",
      "Support documentation of technical issues and solutions.",
      "Assist with basic digital operations and technology-related tasks.",
      "Contribute to improvements in digital workflows and information organisation.",
    ],
    requirements: [
      "Interest or background in ICT, computing, digital systems, or a related field.",
      "Good problem-solving and communication skills.",
      "Comfort working with common digital tools.",
      "Willingness to learn and work collaboratively.",
    ],
  },
} as const;

type PositionSlug = keyof typeof positions;

export default async function PositionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!(slug in positions)) {
    notFound();
  }

  const position = positions[slug as PositionSlug];

  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1B3A] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.16),transparent_38%)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <Link
            href="/careers/open-positions"
            className="text-sm font-semibold text-[#D4AF37] hover:underline"
          >
            ← Back to Open Positions
          </Link>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
              {position.type}
            </span>

            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
              {position.location}
            </span>

            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
              {position.department}
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            {position.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {position.summary}
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-18 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_20rem] lg:px-8">
          <div className="space-y-6">
            <ContentCard title="Responsibilities">
              <ul className="space-y-3">
                {position.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-7 text-slate-600"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D4AF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ContentCard>

            <ContentCard title="Requirements">
              <ul className="space-y-3">
                {position.requirements.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-7 text-slate-600"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D4AF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ContentCard>
          </div>

          <aside className="h-fit rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
              Interested?
            </p>

            <h2 className="mt-3 text-xl font-bold text-[#0B1B3A]">
              Apply for this position
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Review the position details before beginning the application.
            </p>

            <Link
              href={`/careers/open-positions/${slug}/apply`}
              className="mt-6 flex items-center justify-center rounded-full bg-[#0B1B3A] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#132b57]"
            >
              Start Application
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}

function ContentCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold text-[#0B1B3A]">{title}</h2>

      <div className="mt-6">{children}</div>
    </section>
  );
}
