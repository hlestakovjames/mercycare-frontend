export default function BlogEditorialIntro() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
            The Editorial Desk
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Good stories need care too.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-slate-600">
          <p>
            The MercyCare Media Center is designed to create space for
            thoughtful stories about people, care, wellbeing, families and
            communities.
          </p>

          <p>
            Editorial structure helps readers understand what they are
            reading, who contributed to it, when it was published and how
            different forms of experience or expertise are being represented.
          </p>
        </div>
      </div>
    </section>
  );
}
