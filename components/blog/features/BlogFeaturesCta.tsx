export default function BlogFeaturesCta() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="overflow-hidden rounded-3xl bg-violet-700 px-7 py-12 text-white sm:px-10 lg:px-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-100">
              MercyCare Media Center
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              There is always more to discover.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-violet-50">
              Continue exploring stories, conversations, voices, resources and
              other editorial work from the MercyCare Media Center.
            </p>

            <a
              href="/blog"
              className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-50"
            >
              Back to Media Center
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
