import Link from "next/link";

const sections = [
  {
    title: "Stories",
    text: "People-centred stories and experiences connected to senior wellness and community life.",
    href: "/blog/programs-projects/tuko-pamoja/stories",
  },
  {
    title: "Wellness",
    text: "Editorial conversations about ageing, wellbeing, dignity, connection and everyday life.",
    href: "/blog/programs-projects/tuko-pamoja/wellness",
  },
  {
    title: "Community",
    text: "Perspectives on participation, relationships and community experiences around the initiative.",
    href: "/blog/programs-projects/tuko-pamoja/community",
  },
  {
    title: "Updates",
    text: "Editorial updates about the development and activities associated with Tuko Pamoja.",
    href: "/blog/programs-projects/tuko-pamoja/updates",
  },
];

export default function BlogTukoPamojaSections() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1597C9]">
            Explore Tuko Pamoja
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Four ways into the story.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:border-[#1597C9] hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#0B1B3A]">
                {section.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {section.text}
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1597C9]">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
