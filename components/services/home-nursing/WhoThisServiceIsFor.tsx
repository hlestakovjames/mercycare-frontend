const clients = [
  {
    title: "People recovering at home",
    description:
      "Individuals transitioning from hospital care who require continued nursing support and monitoring.",
  },
  {
    title: "People living with chronic conditions",
    description:
      "Clients who benefit from ongoing monitoring, treatment support and structured care at home.",
  },
  {
    title: "Post-surgical patients",
    description:
      "Individuals requiring professional support during recovery following an operation or procedure.",
  },
  {
    title: "People with complex care needs",
    description:
      "Clients requiring specialised nursing support as part of a broader home-based care plan.",
  },
];

export default function WhoThisServiceIsFor() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Who It Supports
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Support for different stages of care
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {clients.map((client) => (
            <div
              key={client.title}
              className="rounded-2xl border border-slate-200 p-7"
            >
              <h3 className="text-xl font-semibold text-[#0B1B3A]">
                {client.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}