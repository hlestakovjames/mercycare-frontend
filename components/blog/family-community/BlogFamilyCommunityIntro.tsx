export default function BlogFamilyCommunityIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1597C9]">
              The Family & Community Desk
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Wellbeing does not happen in isolation.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Families and communities influence how people experience health,
              care, belonging and everyday life. This editorial space looks
              beyond individual experiences to the relationships and
              environments around them.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Through stories, conversations and features, MercyCare will
              explore the realities of family life and the many ways people
              contribute to healthier, more connected communities.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-200">
            <p className="text-sm font-semibold text-[#0B1B3A]">
              Conversations we explore
            </p>

            <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
              <li>• Family relationships and everyday life</li>
              <li>• Parenting and child wellbeing</li>
              <li>• Community health and awareness</li>
              <li>• Community voices and lived experiences</li>
              <li>• Social connection and wellbeing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
