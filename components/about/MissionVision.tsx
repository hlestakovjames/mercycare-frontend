export default function MissionVision() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-[#0B1B3A] p-8 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Mission
            </p>

            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
              To care, empower, and create meaningful opportunities.
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              MercyCare works to improve wellbeing and strengthen communities
              through compassionate programs, collaboration, and practical
              support.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#D4AF37] p-8 text-[#0B1B3A] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B1B3A]/70">
              Our Vision
            </p>

            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
              Stronger communities where everyone has an opportunity to
              thrive.
            </h2>

            <p className="mt-5 leading-7 text-[#0B1B3A]/75">
              We envision communities where people can access support,
              participate meaningfully, and build healthier and more
              sustainable futures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}