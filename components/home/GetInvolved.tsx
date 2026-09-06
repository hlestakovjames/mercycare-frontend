import Link from "next/link";

const involvementOptions = [
  {
    title: "Volunteer with MercyCare",
    description:
      "Share your time, skills, and passion to support MercyCare programs and community activities.",
    href: "/volunteer",
    action: "Become a volunteer",
  },
  {
    title: "Partner with MercyCare",
    description:
      "Organizations, businesses, institutions, and community groups can work with us to create meaningful impact.",
    href: "/about#partnerships",
    action: "Explore partnerships",
  },
];

export default function GetInvolved() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Get Involved
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            There is a place for you in the MercyCare journey.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Whether you volunteer your time, share your expertise, build a
            partnership, or support our work, your contribution can help create
            lasting change.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {involvementOptions.map((option) => (
            <article
              key={option.title}
              className="group rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1B3A] text-xl text-[#D4AF37]">
                →
              </div>

              <h3 className="mt-7 text-2xl font-bold text-[#0B1B3A]">
                {option.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {option.description}
              </p>

              <Link
                href={option.href}
                className="mt-7 inline-flex items-center text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
              >
                {option.action}
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}