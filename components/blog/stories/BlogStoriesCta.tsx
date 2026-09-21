import Link from "next/link";

export default function BlogStoriesCta() {
  return (
    <section className="bg-[#0B1B3A]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Keep exploring
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              There is more to the MercyCare story.
            </h2>

            <p className="mt-4 leading-7 text-slate-200">
              Explore featured pieces, perspectives, interviews, resources and
              multimedia across the MercyCare Media Center.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:bg-slate-100"
          >
            Explore the Media Center
          </Link>
        </div>
      </div>
    </section>
  );
}
