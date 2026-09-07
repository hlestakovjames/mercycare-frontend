export default function MissionVisionPage() {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Mission & Vision
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              A clear purpose. A bigger vision for healthcare at home.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Our mission and vision guide how MercyCare delivers professional,
              compassionate, and dignified home health services.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[2rem] bg-[#0B1B3A] p-8 text-white sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Our Mission
              </p>

              <h2 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl">
                To provide compassionate, dignified, and professional home
                healthcare that empowers families to thrive.
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                We deliver hospital-grade expertise with the warmth of a
                trusted companion, providing personalized care that supports
                clients and their families in the comfort of their homes.
              </p>
            </article>

            <article className="rounded-[2rem] bg-[#D4AF37] p-8 text-[#0B1B3A] sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B1B3A]/70">
                Our Vision
              </p>

              <h2 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl">
                To be Africa&apos;s most trusted home health services provider.
              </h2>

              <p className="mt-6 leading-8 text-[#0B1B3A]/75">
                We aspire to set the continental standard for wellness,
                dignity, and clinically excellent at-home care.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Our Promise
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Healthcare that puts people first.
          </h2>

          <p className="mx-auto mt-6 text-base leading-8 text-slate-600">
            Every interaction should leave our clients feeling cared for,
            respected, safe, and supported. From clinical services to everyday
            assistance, we remain committed to delivering care with
            professionalism and humanity.
          </p>
        </div>
      </section>
    </>
  );
}
