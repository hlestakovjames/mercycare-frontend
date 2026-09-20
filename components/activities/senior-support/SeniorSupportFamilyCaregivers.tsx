export default function SeniorSupportFamilyCaregivers() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#0B1B3A] p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              For Families
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Families remain an important part of senior support.
            </h2>

            <p className="mt-5 leading-8 text-slate-200">
              Activities can create opportunities for families to spend time
              together, understand the experiences of older relatives and
              strengthen communication around support and wellbeing.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">
              For Caregivers
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1B3A]">
              Caregivers also need connection.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Caregiving can involve many responsibilities. Community
              activities can provide space for caregivers to connect with
              others, exchange experiences and identify appropriate sources of
              information and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
