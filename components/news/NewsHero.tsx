export default function NewsHero() {
  return (
    <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            News & Announcements
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Stories, updates, and announcements from MercyCare.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Stay informed about MercyCare's programs, activities,
            partnerships, community initiatives, and upcoming developments.
          </p>
        </div>
      </div>
    </section>
  );
}