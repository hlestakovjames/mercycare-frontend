import Link from "next/link";

const caregivingTopics = [
  {
    title: "Family Caregiving",
    href: "/blog/care-wellness/caregiving/family-caregiving",
  },
  {
    title: "Caregiver Wellbeing",
    href: "/blog/care-wellness/caregiving/caregiver-wellbeing",
  },
  {
    title: "Practical Caregiving",
    href: "/blog/care-wellness/caregiving/practical-caregiving",
  },
  {
    title: "Caregiver Resources",
    href: "/blog/care-wellness/caregiving/caregiver-resources",
  },
];

export default function BlogCareWellnessCaregiving() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6757D9]">
              Caregiving
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Supporting the people who provide care.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Caregiving affects families, relationships, routines and
              wellbeing. This editorial area creates space for practical
              conversations as well as the human side of caring for another
              person.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {caregivingTopics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="rounded-2xl border border-slate-200 p-5 transition hover:border-[#1597C9] hover:shadow-md"
              >
                <p className="font-semibold text-[#0B1B3A]">
                  {topic.title}
                </p>
                <span className="mt-3 inline-flex text-sm font-medium text-[#1597C9]">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
