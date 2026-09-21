import Link from "next/link";

const topics = [
  {
    title: "Family Life",
    description:
      "Stories and conversations about relationships, responsibilities, connection and everyday family experiences.",
    href: "/blog/family-community/family-life",
  },
  {
    title: "Parenting & Child Wellbeing",
    description:
      "Thoughtful content about parenting, childhood, family support and the wider context of child wellbeing.",
    href: "/blog/family-community/parenting-child-wellbeing",
  },
  {
    title: "Community Health",
    description:
      "Explore conversations about health awareness, participation and the role communities can play in wellbeing.",
    href: "/blog/family-community/community-health",
  },
  {
    title: "Community Voices",
    description:
      "A space for people and communities to share experiences, perspectives and stories that deserve to be heard.",
    href: "/blog/family-community/community-voices",
  },
  {
    title: "Social Wellbeing",
    description:
      "Explore belonging, relationships, participation and the social dimensions of wellbeing.",
    href: "/blog/family-community/social-wellbeing",
  },
];

export default function BlogFamilyCommunityTopics() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1597C9]">
            Explore the topics
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Stories shaped by people and communities.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Move between different perspectives on family, community and
            wellbeing.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="group rounded-3xl bg-white p-7 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#0B1B3A]">
                {topic.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {topic.description}
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1597C9]">
                Explore topic →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
