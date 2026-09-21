export default function BlogCareWellnessIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1597C9]">
              The Care & Wellness Desk
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Care is more than a service. It is part of everyday life.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              This part of the MercyCare Media Center explores the ideas,
              experiences and practical conversations that shape wellbeing at
              home and in the community.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              From healthy living and senior wellness to the realities of
              caregiving, our editorial approach focuses on useful context,
              human experiences and conversations that can help families and
              communities understand care more clearly.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-200">
            <p className="text-sm font-semibold text-[#0B1B3A]">
              What you can explore
            </p>

            <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
              <li>• Everyday wellbeing and healthy living</li>
              <li>• Ageing, dignity and senior wellness</li>
              <li>• Family and professional caregiving perspectives</li>
              <li>• Home-based care and support at home</li>
              <li>• Comfort, dignity and supportive care conversations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
