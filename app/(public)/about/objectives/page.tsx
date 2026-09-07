import Link from "next/link";

const objectives = [
  {
    number: "01",
    title: "Deliver Quality Home Healthcare",
    description:
      "Provide professional, clinically excellent healthcare services that enable clients to receive appropriate care in the comfort and familiarity of their homes.",
  },
  {
    number: "02",
    title: "Protect Dignity and Independence",
    description:
      "Promote dignity, privacy, comfort, independence, and personal choice throughout every client's care journey.",
  },
  {
    number: "03",
    title: "Provide Family-Centred Care",
    description:
      "Work closely with families and caregivers to understand individual needs, communicate effectively, and support informed care decisions.",
  },
  {
    number: "04",
    title: "Support Recovery and Long-Term Wellness",
    description:
      "Help clients recover, manage chronic conditions, maintain functional ability, and improve their overall quality of life.",
  },
  {
    number: "05",
    title: "Strengthen Preventive Healthcare",
    description:
      "Promote preventive health, wellness education, healthy lifestyles, early intervention, and proactive management of health risks.",
  },
  {
    number: "06",
    title: "Build a Skilled Care Workforce",
    description:
      "Develop and maintain a competent, compassionate, reliable, and professionally accountable team of healthcare and support professionals.",
  },
  {
    number: "07",
    title: "Expand Access to Home-Based Care",
    description:
      "Make quality home health services more accessible to individuals and families while developing sustainable and responsive care models.",
  },
  {
    number: "08",
    title: "Embrace Healthcare Innovation",
    description:
      "Use appropriate technology, telehealth, remote monitoring, and innovative approaches to improve coordination, accessibility, and care outcomes.",
  },
  {
    number: "09",
    title: "Build Trusted Partnerships",
    description:
      "Collaborate with healthcare professionals, institutions, organizations, communities, and other partners to strengthen the wider healthcare ecosystem.",
  },
  {
    number: "10",
    title: "Maintain High Standards of Safety and Confidentiality",
    description:
      "Protect clients through appropriate safeguarding, infection prevention, professional standards, confidentiality, and responsible handling of personal information.",
  },
];

export default function ObjectivesPage() {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Objectives
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Turning our mission into meaningful action.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              MercyCare&apos;s objectives provide a practical framework for
              delivering professional home healthcare while improving
              wellbeing, dignity, independence, and peace of mind for clients
              and their families.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              What We Aim To Achieve
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Building a stronger standard for care at home.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our objectives guide the way we design services, develop our
              people, engage families, use technology, and build partnerships.
              They keep our work focused on practical outcomes for the people
              we serve.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {objectives.map((objective) => (
              <article
                key={objective.number}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-[#D4AF37]">
                  {objective.number}
                </span>

                <h3 className="mt-5 text-xl font-bold leading-tight text-[#0B1B3A]">
                  {objective.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {objective.description}
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
              Our Direction
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Care that creates lasting value.
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              These objectives support our long-term ambition to become
              Africa&apos;s most trusted home health services provider while
              maintaining the highest possible standards of compassion,
              dignity, clinical excellence, and family-centred care.
            </p>

            <Link
              href="/about/mission-vision"
              className="mt-8 inline-flex rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
            >
              Our Mission & Vision
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
