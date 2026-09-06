const services = [
  "Wound assessment and evidence-based dressing",
  "Chronic disease management",
  "Medication and treatment support",
  "Tracheostomy care",
  "PEG and NG tube care",
  "IV therapy and catheter management",
  "Post-surgical nursing care",
  "Palliative and end-of-life care",
];

export default function WhatWeProvide() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            What We Provide
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Professional nursing support at home
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Our home nursing service can support a wide range of clinical and
            recovery needs under appropriate professional supervision.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B1B3A] text-sm font-bold text-[#D4AF37]">
                ✓
              </div>

              <p className="mt-5 text-sm font-medium leading-6 text-[#0B1B3A]">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}