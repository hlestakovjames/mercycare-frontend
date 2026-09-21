import Link from "next/link";

const voices = [
  {
    title: "Community Voices",
    text: "Perspectives from people whose experiences help illuminate the realities of community life.",
    href: "/blog/family-community/community-voices",
  },
  {
    title: "Family Perspectives",
    text: "Stories that explore how families experience care, wellbeing, responsibility and change.",
    href: "/blog/family-community/family-life",
  },
  {
    title: "Parent Perspectives",
    text: "Conversations about the everyday realities, questions and experiences of parenting.",
    href: "/blog/family-community/parenting-child-wellbeing",
  },
];

export default function BlogFamilyCommunityVoices() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6757D9]">
              Voices
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Communities are more than statistics.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Stories become more meaningful when people can speak from their
              own experiences. This part of the Media Center creates space for
              perspectives that add context to conversations about wellbeing
              and community life.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {voices.map((voice) => (
              <Link
                key={voice.href}
                href={voice.href}
                className="rounded-2xl border border-slate-200 p-5 transition hover:border-[#1597C9] hover:shadow-md"
              >
                <h3 className="font-semibold text-[#0B1B3A]">
                  {voice.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {voice.text}
                </p>

                <span className="mt-4 inline-flex text-sm font-medium text-[#1597C9]">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
