import Link from "next/link";

const services = [
  {
    title: "Home Nursing",
    href: "/services/home-nursing",
    description:
      "Home-based nursing support within an appropriate scope and care plan.",
  },
  {
    title: "Senior & Elderly Care",
    href: "/services/senior-elderly-care",
    description:
      "Support focused on dignity, independence, routines and wellbeing for older adults.",
  },
  {
    title: "Special Needs Children",
    href: "/services/special-needs-children",
    description:
      "Thoughtful support for children with additional support needs and their families.",
  },
  {
    title: "Post-Hospital & Recovery Care",
    href: "/services/post-hospital-recovery",
    description:
      "Practical home support during recovery and transition back into everyday routines.",
  },
  {
    title: "Chronic Care Support",
    href: "/services/chronic-care",
    description:
      "Ongoing home-based support that considers continuity, routines and family involvement.",
  },
  {
    title: "Palliative & Comfort Care",
    href: "/services/palliative-comfort-care",
    description:
      "Compassionate support focused on dignity, comfort and family partnership.",
  },
  {
    title: "Personal Care Assistance",
    href: "/services/personal-care",
    description:
      "Support with personal routines, daily living and maintaining independence.",
  },
  {
    title: "Family & Caregiver Support",
    href: "/services/family-caregiver-support",
    description:
      "Practical support and partnership for families and people providing care.",
  },
];

export default function ServicesOverviewDirectory() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0F766E]">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
              Explore the support we provide.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Each service has been designed around the individual and the
              people supporting them.
            </p>
          </div>

          <Link
            href="/services/our-services"
            className="text-sm font-semibold text-[#0F766E] hover:underline"
          >
            View full service directory →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
            >
              <div className="mb-5 h-1.5 w-12 rounded-full bg-[#D4AF37] transition-all group-hover:w-16" />

              <h3 className="text-xl font-bold text-[#0B1B3A]">
                {service.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {service.description}
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-[#0F766E]">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
