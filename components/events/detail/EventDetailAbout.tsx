type EventDetailAboutProps = {
  title: string;
  description: string;
};

export default function EventDetailAbout({
  title,
  description,
}: EventDetailAboutProps) {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              About This Event
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              {title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {description}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
              Event Participation
            </p>

            <h3 className="mt-3 text-2xl font-bold text-[#0B1B3A]">
              Come prepared to participate
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Event-specific information will explain what participants should
              know before attending, including any registration or participation
              requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
