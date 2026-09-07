import Link from "next/link";

const teamRoles = [
  {
    title: "Nurses",
    description:
      "Qualified nursing professionals providing clinical care, monitoring, medication support, and coordination of individual care plans.",
  },
  {
    title: "Certified Nurse Assistants",
    description:
      "Trained care professionals supporting clients with daily care needs while maintaining comfort, dignity, and safety.",
  },
  {
    title: "Caregivers",
    description:
      "Compassionate caregivers providing personalized assistance, companionship, and practical support in the home.",
  },
  {
    title: "Physiotherapists",
    description:
      "Rehabilitation professionals supporting mobility, recovery, physical function, and independence.",
  },
  {
    title: "Occupational Therapists",
    description:
      "Professionals helping clients improve independence and participate safely in everyday activities.",
  },
  {
    title: "Mental Health & Psychosocial Support",
    description:
      "Professionals supporting emotional wellbeing, psychological health, coping, and family wellbeing.",
  },
  {
    title: "Care Coordinators",
    description:
      "Professionals coordinating care plans, communication, scheduling, family updates, and collaboration across the care team.",
  },
  {
    title: "Support Professionals",
    description:
      "Dedicated staff and specialists who contribute to reliable, coordinated, and client-centred care.",
  },
];

export default function OurTeamPage() {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Team
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Professionals united by a commitment to better care.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              MercyCare brings together healthcare professionals, trained
              caregivers, coordinators, and support staff to provide
              comprehensive care around the individual needs of every client
              and family.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              A Multidisciplinary Team
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              The right expertise around every care journey.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Different clients require different kinds of support. Our
              multidisciplinary approach allows professionals with different
              areas of expertise to work together while keeping the client and
              family at the centre of care.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teamRoles.map((role, index) => (
              <article
                key={role.title}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0B1B3A] text-sm font-bold text-[#D4AF37]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#0B1B3A]">
                  {role.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {role.description}
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
              One Team. One Standard of Care.
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Coordinated care built around the client and family.
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              Our professionals work together to support clinical needs,
              recovery, independence, emotional wellbeing, and everyday
              comfort while keeping families informed throughout the care
              journey.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
            >
              Contact MercyCare
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
