export default function GetStartedHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1B3A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,118,110,0.3),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.16),transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 sm:py-28 lg:px-12">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            Get Started
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Start your care journey with a conversation.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
            Every family and individual has different circumstances. The first
            step is simply to talk with us, understand what support may be
            appropriate and decide on the next step together.
          </p>
        </div>
      </div>
    </section>
  );
}
