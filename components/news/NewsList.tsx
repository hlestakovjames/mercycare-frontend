import NewsCard from "./NewsCard";

const newsItems = [
  {
    title: "MercyCare prepares for community launch",
    excerpt:
      "MercyCare is preparing for the next stage of its community-centered work, bringing together volunteers, partners, and supporters around a shared vision of lasting impact.",
    date: "2026",
    category: "Announcement",
    slug: "mercycare-prepares-for-community-launch",
  },
  {
    title: "Introducing Tuko Pamoja — Senior Wellness",
    excerpt:
      "Tuko Pamoja is MercyCare's senior wellness initiative focused on supporting older adults through connection, dignity, wellness, and community support.",
    date: "2026",
    category: "Programs",
    slug: "introducing-tuko-pamoja",
  },
  {
    title: "Introducing Mama na Mtoto",
    excerpt:
      "Mama na Mtoto focuses on supporting mothers and children through compassionate care, community engagement, education, and practical support initiatives.",
    date: "2026",
    category: "Programs",
    slug: "introducing-mama-na-mtoto",
  },
];

export default function NewsList() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <NewsCard
              key={item.slug}
              title={item.title}
              excerpt={item.excerpt}
              date={item.date}
              category={item.category}
              slug={item.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}