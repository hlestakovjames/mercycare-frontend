import Link from "next/link";

type DonateSectionPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  items: {
    title: string;
    description: string;
    href: string;
  }[];
};

export default function DonateSectionPage({
  eyebrow,
  title,
  description,
  intro,
  items,
}: DonateSectionPageProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            {eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {description}
          </p>
        </div>

        <div className="mt-10 max-w-4xl rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-100">
          <p className="text-base leading-7 text-slate-700">
            {intro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-slate-900 group-hover:text-cyan-700">
                {item.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-cyan-700">
                Explore
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
