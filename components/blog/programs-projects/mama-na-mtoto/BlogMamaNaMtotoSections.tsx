import Link from "next/link";

const sections = [
  {
    title: "Stories",
    text: "People-centred stories and experiences connected to mothers, children and families.",
    href: "/blog/programs-projects/mama-na-mtoto/stories",
  },
  {
    title: "Maternal Wellbeing",
    text: "Editorial conversations about maternal wellbeing, support, family life and lived experiences.",
    href: "/blog/programs-projects/mama-na-mtoto/maternal-wellbeing",
  },
  {
    title: "Child Wellbeing",
    text: "Stories and perspectives exploring childhood, family support and children's wider wellbeing.",
    href: "/blog/programs-projects/mama-na-mtoto/child-wellbeing",
  },
  {
    title: "Community",
    text: "Community perspectives and conversations around families, participation and shared wellbeing.",
    href: "/blog/programs-projects/mama-na-mtoto/community",
  },
];

export default function BlogMamaNaMtotoSections() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1597C9]">
            Explore Mama na Mtoto
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Follow different dimensions of the story.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
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
