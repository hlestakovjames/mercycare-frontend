import Link from "next/link";

const options = [
  {
    title: "Share a community story",
    description:
      "Help bring attention to meaningful community experiences, needs, activities, or conversations that align with MercyCare's work.",
    href: "/contact",
    label: "Contact MercyCare",
  },
  {
    title: "Volunteer",
    description:
      "Explore opportunities to contribute time, skills, and energy to MercyCare activities and community initiatives.",
    href: "/volunteer",
    label: "Explore volunteering",
  },
  {
    title: "Attend events",
    description:
      "Take part in community gatherings, awareness activities, health and wellness events, and other public initiatives.",
    href: "/events",
    label: "Explore events",
  },
  {
    title: "Explore activities",
    description:
      "Discover activities that create opportunities for learning, participation, awareness, and community connection.",
    href: "/activities",
    label: "Explore activities",
  },
  {
    title: "Explore partnerships",
    description:
      "Organizations and groups interested in working with MercyCare can learn more about partnership opportunities.",
    href: "/projects/partnerships",
    label: "Explore partnerships",
  },
  {
    title: "Support initiatives",
    description:
      "Learn about MercyCare's projects and initiatives and discover appropriate ways to support their development.",
    href: "/projects/get-involved",
    label: "Explore projects",
  },
];

export default function NewsGetInvolvedOptions() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Ways to participate
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Choose how you would like to connect.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Different forms of participation can contribute to a stronger,
            more connected community.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {options.map((option) => (
            <article
              key={option.title}
              className="flex flex-col rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm sm:p-8"
            >
              <div className="h-1.5 w-12 rounded-full bg-[#D4AF37]" />

              <h3 className="mt-6 text-xl font-bold text-[#0B1B3A]">
                {option.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                {option.description}
              </p>

              <Link
                href={option.href}
                className="mt-7 inline-flex text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
              >
                {option.label} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
