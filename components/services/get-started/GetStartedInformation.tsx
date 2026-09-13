const information = [
  "Who the support is for",
  "The person's general circumstances",
  "The type of support being considered",
  "Important routines or preferences",
  "The family's or caregiver's main concerns",
  "Any relevant coordination needs",
];

export default function GetStartedInformation() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
              Before You Contact Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
              A little information can help us understand the conversation.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              You do not need to prepare a formal report. A basic
              understanding of the situation is enough to begin.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
            <h3 className="text-xl font-bold text-[#0B1B3A]">
              Helpful information may include:
            </h3>

            <ul className="mt-6 space-y-4">
              {information.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#D4AF37]" />

                  <span className="leading-7 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
