type EventDetailAudienceProps = {
  audience: string[];
};

export default function EventDetailAudience({
  audience,
}: EventDetailAudienceProps) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
            Who Can Attend
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Event audience
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Participation will depend on the specific event. Check the event
            information for the intended audience and any requirements.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {audience.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-[#0B1B3A]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
