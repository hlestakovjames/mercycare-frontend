type EventRegistrationHeroProps = {
  category: string;
  title: string;
  description: string;
};

export default function EventRegistrationHero({
  category,
  title,
  description,
}: EventRegistrationHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0B1B3A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,118,110,0.3),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full bg-[#D4AF37]/15 px-4 py-2 text-sm font-semibold text-[#D4AF37]">
            {category} · Event Registration
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Register for {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
