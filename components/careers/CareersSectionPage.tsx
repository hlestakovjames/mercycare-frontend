import Link from "next/link";

type CareersSectionPageProps = {
  eyebrow?: string;
  title: string;
  description: string;
  intro?: string;
  sections: {
    title: string;
    description: string;
    href?: string;
    linkLabel?: string;
  }[];
};

export default function CareersSectionPage({
  eyebrow = "Careers at MercyCare",
  title,
  description,
  intro,
  sections,
}: CareersSectionPageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1B3A] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.16),transparent_38%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              {eyebrow}
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {intro ? (
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-lg leading-8 text-slate-600">{intro}</p>
            </div>
          ) : null}

          <div className="grid gap-5 md:grid-cols-2">
            {sections.map((section, index) => (
              <article
                key={section.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B1B3A] text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h2 className="mt-6 text-xl font-bold text-[#0B1B3A] sm:text-2xl">
                  {section.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {section.description}
                </p>

                {section.href ? (
                  <Link
                    href={section.href}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
                  >
                    {section.linkLabel ?? "Explore"}
                    <span className="ml-2">→</span>
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
