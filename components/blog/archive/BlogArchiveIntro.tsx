export default function BlogArchiveIntro() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
            The Archive
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            One place for the journey so far.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-slate-600">
          <p>
            As the MercyCare Media Center grows, its archive will become a
            useful way to revisit stories, conversations, features, media and
            resources published over time.
          </p>

          <p>
            Rather than relying only on a chronological feed, the archive is
            structured around several ways of discovering content.
          </p>
        </div>
      </div>
    </section>
  );
}
