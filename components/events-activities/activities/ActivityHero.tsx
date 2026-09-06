type ActivityHeroProps = {
  title: string;
  status: string;
  location: string;
};

export default function ActivityHero({
  title,
  status,
  location,
}: ActivityHeroProps) {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            MercyCare Activity
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#0B1B3A] sm:text-5xl">
            {title}
          </h1>

          <div className="mt-6 flex flex-col gap-3 text-slate-600 sm:flex-row sm:gap-8">
            <p>{status}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}