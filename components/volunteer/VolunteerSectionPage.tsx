import Link from "next/link";

type VolunteerSectionPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
    href?: string;
  }[];
};

export default function VolunteerSectionPage({
  eyebrow,
  title,
  description,
  items,
}: VolunteerSectionPageProps) {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              {eyebrow}
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => {
              const content = (
                <>
                  <h2 className="text-xl font-bold text-[#0B1B3A]">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  {item.href ? (
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0B1B3A] transition-colors group-hover:text-[#D4AF37]">
                      Explore
                      <span
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  ) : null}
                </>
              );

              return item.href ? (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                >
                  {content}
                </Link>
              ) : (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7"
                >
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
