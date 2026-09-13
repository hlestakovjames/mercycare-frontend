export default function PastEventsHighlights() {
  return (
    <section className="bg-[#0B1B3A] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:px-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Beyond the Event
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Every gathering can create a lasting connection
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-slate-200">
          <p>
            Events are opportunities to listen, learn, connect and strengthen
            relationships within the communities MercyCare serves.
          </p>

          <p>
            As the event archive develops, completed events can include
            verified summaries, photographs, reports and other approved
            materials that help preserve the story of each gathering.
          </p>

          <p className="text-slate-300">
            Event participation and outcomes should always be represented
            accurately based on documented information.
          </p>
        </div>
      </div>
    </section>
  );
}
