const people = [
  {
    title: "Individuals",
    description:
      "You can contact MercyCare directly when you are exploring home-based support for yourself.",
  },
  {
    title: "Family Members",
    description:
      "A family member can begin a conversation when looking for support for a loved one.",
  },
  {
    title: "Caregivers",
    description:
      "Caregivers can reach out when additional practical or home-based support may be helpful.",
  },
  {
    title: "Community Partners",
    description:
      "Appropriate organizations and community partners can contact us to explore potential collaboration or referrals.",
  },
];

export default function GetStartedWhoCanContact() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
            Who Can Reach Out
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
            Starting a conversation is open to the people closest to the need.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Whether you are seeking support for yourself, someone you care
            about or a community you work with, the first step is a
            conversation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((person) => (
            <article
              key={person.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 h-1.5 w-12 rounded-full bg-[#D4AF37]" />

              <h3 className="text-xl font-bold text-[#0B1B3A]">
                {person.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {person.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
