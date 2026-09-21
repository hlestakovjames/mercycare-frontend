import Link from "next/link";

type ResourceHubProps = {
  eyebrow: string;
  title: string;
  description: string;
  focus: string[];
  href: string;
  backLabel?: string;
};

export default function BlogResourceHub({
  eyebrow,
  title,
  description,
  focus,
  href,
  backLabel = "Back to Resources",
}: ResourceHubProps) {
  return (
    <>
      <section className="bg-slate-950 px-6 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            {eyebrow}
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {description}
          </p>

          <Link
            href={href}
            className="mt-8 inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            ← {backLabel}
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
            What you can explore
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {focus.map((item) => (
              <article
                key={item}
                className="rounded-3xl border border-slate-200 p-7"
              >
                <h2 className="text-lg font-semibold text-slate-900">
                  {item}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Future MercyCare resources in this collection will provide
                  useful context, practical perspectives and relevant
                  educational material around this topic.
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-slate-50 p-7">
            <p className="text-sm leading-7 text-slate-600">
              This collection is being prepared for future editorial and
              resource content. Individual resources will be published as
              they become available.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Health-related information is intended for general education and
              does not replace personalised advice from a qualified healthcare
              professional.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
