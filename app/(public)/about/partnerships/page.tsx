import Link from "next/link";

const partnershipAreas = [
  {
    title: "Healthcare Partnerships",
    description:
      "Collaborating with healthcare professionals, facilities, and organizations to strengthen continuity of care and improve client outcomes.",
  },
  {
    title: "Community Partnerships",
    description:
      "Working with community organizations and local networks to reach families and respond to emerging health and wellbeing needs.",
  },
  {
    title: "Professional Partnerships",
    description:
      "Building relationships with qualified specialists and allied health professionals who contribute to multidisciplinary care.",
  },
  {
    title: "Corporate & Institutional Partnerships",
    description:
      "Partnering with businesses, institutions, and organizations on workplace wellness, health initiatives, and broader wellbeing programmes.",
  },
  {
    title: "Community Support",
    description:
      "Welcoming individuals, volunteers, and supporters who want to contribute skills, resources, knowledge, or time to meaningful healthcare initiatives.",
  },
  {
    title: "Strategic Collaboration",
    description:
      "Developing long-term partnerships that expand access to quality home healthcare and support sustainable impact.",
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Partnerships
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Better care becomes possible when we work together.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              MercyCare believes meaningful healthcare impact is strengthened
              through collaboration with professionals, organizations,
              institutions, communities, and individuals who share our
              commitment to wellbeing and dignity.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Working Together
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Partnerships that strengthen the care ecosystem.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our partnerships help connect expertise, resources, technology,
              community knowledge, and professional support around the needs of
              clients and families.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipAreas.map((area, index) => (
              <article
                key={area.title}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0B1B3A] text-sm font-bold text-[#D4AF37]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0B1B3A]">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-[2rem] bg-[#0B1B3A] p-8 text-white sm:p-10 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Partner With MercyCare
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Let&apos;s create better healthcare experiences together.
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              Whether you are a healthcare professional, organization,
              institution, business, community group, or individual, we
              welcome conversations about partnerships that can create
              meaningful and sustainable impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
              >
                Discuss a Partnership
              </Link>

              <Link
                href="/volunteer"
                className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
