import Link from "next/link";

type GallerySectionPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
    href?: string;
  }[];
};

export default function GallerySectionPage({
  eyebrow,
  title,
  description,
  items,
}: GallerySectionPageProps) {
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
                  <div className="aspect-[4/3] rounded-2xl bg-[#0B1B3A]">
                    <div className="flex h-full items-center justify-center p-8 text-center">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                          MercyCare Gallery
                        </p>

                        <h2 className="mt-3 text-xl font-bold text-white">
                          {item.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-lg font-bold text-[#0B1B3A]">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>

                    {item.href ? (
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0B1B3A]">
                        Explore
                        <span aria-hidden="true">→</span>
                      </span>
                    ) : null}
                  </div>
                </>
              );

              return item.href ? (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                >
                  {content}
                </Link>
              ) : (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50"
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
