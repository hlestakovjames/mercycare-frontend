import Link from "next/link";
import BlogTopicHero from "@/components/blog/care-wellness/topics/BlogTopicHero";
import BlogTopicGuidance from "@/components/blog/care-wellness/topics/BlogTopicGuidance";
import BlogTopicCta from "@/components/blog/care-wellness/topics/BlogTopicCta";

const topics = [
  {
    title: "Family Caregiving",
    description:
      "Stories and perspectives about the everyday realities of caring for a family member.",
    href: "/blog/care-wellness/caregiving/family-caregiving",
  },
  {
    title: "Caregiver Wellbeing",
    description:
      "Conversations about the wellbeing, balance and support needs of people who provide care.",
    href: "/blog/care-wellness/caregiving/caregiver-wellbeing",
  },
  {
    title: "Practical Caregiving",
    description:
      "Editorial content focused on routines, communication, organisation and everyday caregiving experiences.",
    href: "/blog/care-wellness/caregiving/practical-caregiving",
  },
  {
    title: "Caregiver Resources",
    description:
      "A growing space for guides, useful references and educational material for caregivers and families.",
    href: "/blog/care-wellness/caregiving/caregiver-resources",
  },
];

export default function CaregivingPage() {
  return (
    <>
      <BlogTopicHero
        eyebrow="Care & Wellness · Caregiving"
        title="The people behind care deserve a conversation too."
        description="Explore the practical, emotional and human dimensions of caregiving for families, communities and the people providing support."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1597C9]">
              The Caregiving Desk
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Caregiving is a relationship, a responsibility and an everyday
              experience.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Caregiving can affect routines, work, family relationships,
              finances, emotions and personal wellbeing. This editorial hub
              creates room for those realities without reducing caregiving to
              a single story.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {topics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="group rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#1597C9] hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-[#0B1B3A]">
                  {topic.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {topic.description}
                </p>

                <span className="mt-6 inline-flex text-sm font-semibold text-[#1597C9]">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center lg:px-8 lg:py-18">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0B1B3A] sm:text-3xl">
            Caregivers need support, information and space to be heard.
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            The MercyCare Media Center will continue growing this collection
            with stories, interviews, practical resources and caregiver
            perspectives.
          </p>
        </div>
      </section>

      <BlogTopicGuidance />

      <BlogTopicCta
        title="Explore all Care & Wellness topics."
        href="/blog/care-wellness"
        label="Back to Care & Wellness"
      />
    </>
  );
}
