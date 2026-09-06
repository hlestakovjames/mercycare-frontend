export default function ProjectHero() {
  return (
    <section className="bg-[#0B1B3A] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Mama na Mtoto
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Supporting mothers and children to thrive
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Mama na Mtoto is a community-centered MercyCare project focused
            on supporting mothers, babies and young children through
            accessible care, health education and practical family support.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white">
              Maternal Wellness
            </span>

            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white">
              Child Wellbeing
            </span>

            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white">
              Family Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}