import Link from "next/link";

type ActivityCardProps = {
  title: string;
  status: string;
  location: string;
  description: string;
  slug: string;
};

export default function ActivityCard({
  title,
  status,
  location,
  description,
  slug,
}: ActivityCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-48 items-center justify-center bg-slate-100">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B1B3A]">
          MercyCare Activity
        </span>
      </div>

      <div className="p-6">
        <p className="text-sm font-semibold text-[#D4AF37]">{status}</p>

        <h3 className="mt-2 text-xl font-bold text-[#0B1B3A]">
          {title}
        </h3>

        <p className="mt-2 text-sm font-medium text-slate-500">
          {location}
        </p>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          {description}
        </p>

        <Link
          href={`/events-activities/${slug}`}
          className="mt-6 inline-flex text-sm font-semibold text-[#0B1B3A] hover:text-[#162d5c]"
        >
          View activity →
        </Link>
      </div>
    </article>
  );
}