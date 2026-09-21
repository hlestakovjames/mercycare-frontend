export default function BlogVoicesIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1597C9]">
              The Voices Desk
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Every perspective adds another part of the picture.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              The Voices section creates space for people to speak about
              experiences, ideas, challenges, lessons and hopes connected to
              care and community wellbeing.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              These perspectives are not presented as universal experiences.
              They are individual or organisational viewpoints that can help
              readers understand a subject from another angle.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-200">
            <p className="text-sm font-semibold text-[#0B1B3A]">
              Whose voices?
            </p>

            <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
              <li>• Community members</li>
              <li>• Family caregivers</li>
              <li>• Relevant professionals</li>
              <li>• Partners and collaborators</li>
              <li>• MercyCare team members</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
