export default function ChronicCareOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            About Chronic Care Support
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Ongoing care requires consistency and understanding.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-slate-600">
          <p>
            Living with a long-term health condition can affect many parts of
            everyday life. Individuals and families may need continuing support
            as they adapt to changing circumstances.
          </p>

          <p>
            Home-based care can help provide practical assistance and
            continuity while allowing individuals to remain in a familiar
            environment.
          </p>

          <p>
            MercyCare's role is to provide appropriate support around the
            individual's established care arrangements while respecting the
            guidance of qualified healthcare professionals.
          </p>
        </div>
      </div>
    </section>
  );
}
