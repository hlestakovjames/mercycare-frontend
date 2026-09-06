type EventHeroProps = {
  title: string;
  date: string;
  location: string;
};

export default function EventHero({
  title,
  date,
  location,
}: EventHeroProps) {
  return (
    <section className="bg-[#0B1B3A] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            MercyCare Event
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            {title}
          </h1>

          <div className="mt-6 flex flex-col gap-3 text-white/80 sm:flex-row sm:gap-8">
            <p>{date}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}