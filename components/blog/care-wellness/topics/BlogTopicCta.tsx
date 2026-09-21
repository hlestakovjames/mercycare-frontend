import Link from "next/link";

type BlogTopicCtaProps = {
  title: string;
  href: string;
  label: string;
};

export default function BlogTopicCta({
  title,
  href,
  label,
}: BlogTopicCtaProps) {
  return (
    <section className="bg-[#0B1B3A]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-18">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>

          <Link
            href={href}
            className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:bg-slate-100"
          >
            {label}
          </Link>
        </div>
      </div>
    </section>
  );
}
