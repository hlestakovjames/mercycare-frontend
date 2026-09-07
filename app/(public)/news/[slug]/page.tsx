import Link from "next/link";

const articles: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    content: string[];
  }
> = {
  "mercycare-prepares-for-community-launch": {
    title: "MercyCare prepares for community launch",
    category: "Announcement",
    date: "2026",
    content: [
      "MercyCare is preparing for the next stage of its community-centered work, bringing together volunteers, partners, and supporters around a shared vision of lasting impact.",
      "The initiative is focused on creating practical opportunities to support communities through compassionate programs, meaningful partnerships, and accessible services.",
      "As preparations continue, MercyCare will share further updates about its activities, partnerships, and community engagement.",
    ],
  },

  "introducing-tuko-pamoja": {
    title: "Introducing Tuko Pamoja — Senior Wellness",
    category: "Programs",
    date: "2026",
    content: [
      "Tuko Pamoja — Senior Wellness is a MercyCare initiative focused on supporting older adults through community-centered care, wellness, connection, and practical support.",
      "The program recognizes the experience and dignity of older adults while creating opportunities for them to remain connected to their families and communities.",
      "MercyCare will continue developing the initiative together with communities, volunteers, and partners.",
    ],
  },

  "introducing-mama-na-mtoto": {
    title: "Introducing Mama na Mtoto",
    category: "Programs",
    date: "2026",
    content: [
      "Mama na Mtoto is a MercyCare initiative focused on supporting mothers and children through compassionate, community-centered care.",
      "The program seeks to strengthen families through education, community engagement, partnerships, and practical support initiatives.",
      "MercyCare believes that supporting mothers and children contributes to stronger and more resilient communities.",
    ],
  },
};

type NewsArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NewsArticlePage({
  params,
}: NewsArticlePageProps) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <section className="bg-white py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-[#0B1B3A]">
            Article not found
          </h1>

          <p className="mt-5 text-slate-600">
            The news article you are looking for does not exist.
          </p>

          <Link
            href="/news"
            className="mt-8 inline-flex rounded-full bg-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#D4AF37] hover:text-[#0B1B3A]"
          >
            Back to News
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/news"
            className="text-sm font-medium text-slate-300 transition hover:text-[#D4AF37]"
          >
            ← Back to News
          </Link>

          <div className="mt-10">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider">
              <span className="text-[#D4AF37]">{article.category}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{article.date}</span>
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      <article className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-7 text-lg leading-9 text-slate-600">
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 border-t border-slate-100 pt-8">
            <Link
              href="/news"
              className="text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
            >
              ← Back to News & Announcements
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}