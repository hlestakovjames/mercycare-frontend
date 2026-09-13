type EventDetailInformationProps = {
  date: string;
  time: string;
  location: string;
  registrationEnabled: boolean;
};

export default function EventDetailInformation({
  date,
  time,
  location,
  registrationEnabled,
}: EventDetailInformationProps) {
  const information = [
    {
      label: "Date",
      value: date,
    },
    {
      label: "Time",
      value: time,
    },
    {
      label: "Location",
      value: location,
    },
    {
      label: "Registration",
      value: registrationEnabled ? "Registration available" : "No registration required",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {information.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
                {item.label}
              </p>

              <p className="mt-3 text-lg font-semibold leading-7 text-[#0B1B3A]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
