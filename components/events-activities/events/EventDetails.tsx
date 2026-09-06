type EventDetailsProps = {
  description: string;
  details: string[];
};

export default function EventDetails({
  description,
  details,
}: EventDetailsProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-bold text-[#0B1B3A]">
            About this event
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            {description}
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#0B1B3A]">
            Event information
          </h2>

          <ul className="mt-5 space-y-4">
            {details.map((detail) => (
              <li
                key={detail}
                className="rounded-xl bg-slate-50 px-5 py-4 text-slate-600"
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}