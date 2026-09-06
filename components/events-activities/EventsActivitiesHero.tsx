export default function EventsActivitiesHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1B3A] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Events & Activities
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Connecting communities through action and shared experiences.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Discover MercyCare events, community activities, outreach
            initiatives and opportunities to participate in creating lasting
            impact.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#1E90FF]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
    </section>
  );
}