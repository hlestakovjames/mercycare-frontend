export default function BlogProgramsProjectsIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1597C9]">
              The Programs & Projects Desk
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
              The work is a story too.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              MercyCare programmes and projects are shaped by people,
              communities, conversations and experiences. This editorial
              section gives those dimensions a place of their own.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              The Media Center is not a replacement for the official programme
              and project information on the MercyCare website. Instead, it
              provides a space for deeper stories, perspectives, features and
              updates.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-200">
            <p className="text-sm font-semibold text-[#0B1B3A]">
              Editorial focus
            </p>

            <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
              <li>• Why an initiative exists</li>
              <li>• Experiences around participation</li>
              <li>• Wellness and community conversations</li>
              <li>• Field stories and programme updates</li>
              <li>• Perspectives from people involved</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
