import Link from "next/link";

type EditorialHubProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: {
    title: string;
    description: string;
  }[];
};

export default function BlogEditorialHub({
  eyebrow,
  title,
  description,
  sections,
}: EditorialHubProps) {
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
            href="/blog/editorial"
            className="mt-8 inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            ← Back to Editorial
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-slate-200 p-7"
              >
                <h2 className="text-xl font-semibold text-slate-900">
                  {section.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {section.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-slate-50 p-7">
            <p className="text-sm leading-7 text-slate-600">
              This editorial area is being established as part of the
              Media Center foundation. Specific contributors, formal policies
              and submission processes can be added as MercyCare finalises
              them.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
