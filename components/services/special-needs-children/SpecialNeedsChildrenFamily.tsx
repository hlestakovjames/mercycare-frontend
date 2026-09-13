export default function SpecialNeedsChildrenFamily() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
              Family Partnership
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Families know their child best.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Parents, guardians, and family caregivers often have the deepest
              understanding of a child's routines, communication, preferences,
              and changing needs.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              MercyCare values that knowledge and seeks to work collaboratively
              with families so that support is consistent, respectful, and
              centered around the child.
            </p>
          </div>

          <div className="rounded-3xl bg-[#0B1B3A] p-8 sm:p-10">
            <h3 className="text-xl font-semibold text-white">
              Working together
            </h3>

            <ul className="mt-6 space-y-5">
              {[
                "Understand the child's routines and preferences",
                "Listen to parents and caregivers",
                "Maintain clear communication",
                "Respect family decisions and responsibilities",
                "Recognize changes that may require attention",
              ].map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#D4AF37]" />
                  <span className="text-sm leading-7 text-slate-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
