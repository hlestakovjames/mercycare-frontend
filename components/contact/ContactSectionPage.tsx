import Link from "next/link";

type ContactSection = {
  title: string;
  description: string;
  href: string;
};

type ContactSectionPageProps = {
  eyebrow?: string;
  title: string;
  description: string;
  sections: ContactSection[];
};

export default function ContactSectionPage({
  eyebrow = "Contact MercyCare",
  title,
  description,
  sections,
}: ContactSectionPageProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
            {eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <Link
              key={`${section.href}-${section.title}-${index}`}
              href={section.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                <span className="text-lg font-semibold">+</span>
              </div>

              <h2 className="mt-5 text-xl font-semibold text-slate-900 group-hover:text-cyan-700">
                {section.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {section.description}
              </p>

              <span className="mt-5 inline-flex text-sm font-semibold text-cyan-700">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
