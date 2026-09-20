import Link from "next/link";

export default function FamilyCaregiverParticipation() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
                Get Involved
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
                Families and caregivers can help shape the conversation.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Participation can take many forms, from joining community
                activities to sharing experiences, volunteering or connecting
                MercyCare with appropriate local partners.
              </p>
            </div>

            <Link
              href="/activities/get-involved"
              className="inline-flex w-fit rounded-full bg-[#0F766E] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
