export default function BlogFeaturesIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
              The Features Desk
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Go beyond the headline.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Features give important subjects more space, allowing stories to
              include background, different perspectives, human experiences and
              useful context.
            </p>

            <p>
              Some features may be written long reads. Others may combine
              photography, field observations, interviews or multimedia.
            </p>

            <p>
              The goal is not simply to make content longer. It is to make the
              story more meaningful, understandable and engaging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
