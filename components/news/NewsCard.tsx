import Link from "next/link";

type NewsCardProps = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
};

export default function NewsCard({
  title,
  excerpt,
  date,
  category,
  slug,
}: NewsCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[16/9] bg-[#0B1B3A]">
        <div className="flex h-full items-center justify-center">
          <span className="text-5xl font-bold text-[#D4AF37]/30">
            MercyCare
          </span>
        </div>
      </div>

      <div className="p-7 sm:p-8">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider">
          <span className="text-[#D4AF37]">{category}</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500">{date}</span>
        </div>

        <h2 className="mt-4 text-xl font-bold leading-tight text-[#0B1B3A] sm:text-2xl">
          {title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          {excerpt}
        </p>

        <Link
          href={`/news/${slug}`}
          className="mt-6 inline-flex items-center text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
        >
          Read more
          <span className="ml-2 transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}