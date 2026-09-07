import Link from "next/link";

const leadership = [
  {
    name: "Mercy Ndolo",
    role: "Founder & Chief Executive Officer",
    description:
      "Provides strategic leadership and guides MercyCare's commitment to compassionate, dignified, and professionally delivered home healthcare.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Leadership
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Leadership grounded in purpose and care.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              MercyCare is led by people committed to building a trusted home
              healthcare provider where clinical excellence and compassion go
              hand in hand.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Leadership
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Guiding MercyCare forward.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our leadership provides direction for the organization while
              maintaining a strong focus on client wellbeing, professional
              standards, family-centred care, and sustainable growth.
            </p>
          </div>

          <div className="mt-12 max-w-md">
            {leadership.map((leader) => (
              <article
                key={leader.name}
                className="overflow-hidden rounded-[2rem] bg-white shadow-lg ring-1 ring-slate-100"
              >
                <div className="flex aspect-square items-center justify-center bg-[#0B1B3A]">
                  <span className="text-7xl font-bold text-[#D4AF37]">
                    {leader.name.charAt(0)}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#0B1B3A]">
                    {leader.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-[#D4AF37]">
                    {leader.role}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {leader.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-[2rem] bg-[#0B1B3A] p-8 text-white sm:p-10 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Leadership & Care
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Building a culture where quality care comes first.
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              Strong leadership creates the foundation for a reliable care
              experience. MercyCare continues to build systems, partnerships,
              and professional teams that enable clients and families to
              receive dependable support at home.
            </p>

            <Link
              href="/about/our-team"
              className="mt-8 inline-flex rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
