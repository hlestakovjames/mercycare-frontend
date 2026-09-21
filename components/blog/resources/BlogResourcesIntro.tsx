export default function BlogResourcesIntro() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
            The Resource Center
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Useful information, thoughtfully organised.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-slate-600">
          <p>
            The MercyCare Resource Center brings together educational,
            practical and community-focused material across care, wellness,
            family life and caregiving.
          </p>

          <p>
            As the library grows, resources can include articles, guides,
            checklists, conversations and downloadable materials. Each item
            should provide clear context and help readers understand where
            professional advice may be appropriate.
          </p>
        </div>
      </div>
    </section>
  );
}
