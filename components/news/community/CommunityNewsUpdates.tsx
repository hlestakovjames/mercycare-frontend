import Link from "next/link";

const updates = [
  {
    category: "MercyCare Updates",
    title: "MercyCare prepares for community launch",
    description:
      "An update on MercyCare's preparations for the next stage of its community-centered work.",
    href: "/news/mercycare-prepares-for-community-launch",
  },
  {
    category: "Programs",
    title: "Introducing Tuko Pamoja — Senior Wellness",
    description:
      "Learn about MercyCare's senior wellness initiative and its community-centered focus.",
    href: "/news/introducing-tuko-pamoja",
  },
  {
    category: "Programs",
    title: "Introducing Mama na Mtoto",
    description:
      "Explore the community-centered thinking behind MercyCare's Mama na Mtoto initiative.",
    href: "/news/introducing-mama-na-mtoto",
  },
];

export default function CommunityNewsUpdates() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Current stories
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Explore related MercyCare updates.
            </h2>
          </div>

          <Link
            href="/news/latest"
            className="inline-flex text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
          >
            View latest news →
          </Link>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {updates.map((update) => (
            <article
              key={update.href}
              className="rounded-[2rem] border border-slate-100 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                {update.category}
              </p>

              <h3 className="mt-4 text-xl font-bold leading-tight text-[#0B1B3A]">
                {update.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {update.description}
              </p>

              <Link
                href={update.href}
                className="mt-6 inline-flex text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
              >
                Read update →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
