export default function CommunityOutreachIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              Connecting With Communities
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Care begins with listening.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Community outreach gives MercyCare space to engage with people
              beyond individual care settings. These activities are designed
              around connection, listening, awareness and practical community
              participation.
            </p>

            <p className="mt-5 leading-7 text-slate-600">
              Our outreach activities can bring together community members,
              families, caregivers, volunteers and local partners around topics
              that matter to the wellbeing of the communities we serve.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200 sm:p-10">
            <h3 className="text-xl font-semibold text-[#0B1B3A]">
              What outreach creates
            </h3>

            <ul className="mt-6 space-y-5">
              {[
                "More opportunities for community connection",
                "Space for people to share experiences and concerns",
                "Greater awareness of wellbeing and compassionate support",
                "Connections between families, volunteers and local partners",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-600">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0F766E]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
