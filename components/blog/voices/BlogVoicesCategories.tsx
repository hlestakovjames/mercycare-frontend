import Link from "next/link";

const voices = [
  {
    title: "Community Voices",
    description:
      "Experiences, perspectives and conversations from the communities connected to MercyCare.",
    href: "/blog/voices/community-voices",
  },
  {
    title: "Caregiver Voices",
    description:
      "Perspectives from people who provide care and understand its everyday realities.",
    href: "/blog/voices/caregiver-voices",
  },
  {
    title: "Professional Perspectives",
    description:
      "Thoughtful contributions from relevant professionals and subject-matter perspectives.",
    href: "/blog/voices/professional-perspectives",
  },
  {
    title: "Partner Voices",
    description:
      "Conversations with organisations and collaborators connected to MercyCare's work.",
    href: "/blog/voices/partner-voices",
  },
  {
    title: "MercyCare Voices",
    description:
      "Perspectives from people within MercyCare about the work, values and experiences behind the organisation.",
    href: "/blog/voices/mercycare-voices",
  },
];

export default function BlogVoicesCategories() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1597C9]">
            Explore the voices
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Different people. Different perspectives.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Explore the collection by the perspective you want to hear.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {voices.map((voice) => (
            <Link
              key={voice.href}
              href={voice.href}
              className="group rounded-3xl bg-white p-7 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#0B1B3A]">
                {voice.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {voice.description}
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#1597C9]">
                Explore voices →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
