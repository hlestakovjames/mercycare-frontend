import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Home Nursing",
    href: "/services/home-nursing",
    description:
      "Nursing support delivered in the home environment with attention to comfort, dignity, continuity, and individual care needs.",
  },
  {
    number: "02",
    title: "Senior & Elderly Care",
    href: "/services/senior-elderly-care",
    description:
      "Support designed to help older adults maintain dignity, comfort, connection, and quality of life in familiar surroundings.",
  },
  {
    number: "03",
    title: "Special Needs Children",
    href: "/services/special-needs-children",
    description:
      "Family-centered support for children with additional care needs, together with practical guidance and caregiver support.",
  },
  {
    number: "04",
    title: "Post-Hospital & Recovery Care",
    href: "/services/post-hospital-recovery",
    description:
      "Support for individuals transitioning home after hospitalization or treatment and adjusting to the next stage of recovery.",
  },
  {
    number: "05",
    title: "Chronic Care Support",
    href: "/services/chronic-care",
    description:
      "Ongoing support for individuals and families managing longer-term health and care needs.",
  },
  {
    number: "06",
    title: "Palliative & Comfort Care",
    href: "/services/palliative-comfort-care",
    description:
      "Compassionate support focused on comfort, dignity, wellbeing, and the needs of individuals and families facing serious illness.",
  },
  {
    number: "07",
    title: "Personal Care Assistance",
    href: "/services/personal-care",
    description:
      "Practical assistance with everyday personal needs while respecting independence, privacy, dignity, and personal preferences.",
  },
  {
    number: "08",
    title: "Family & Caregiver Support",
    href: "/services/family-caregiver-support",
    description:
      "Support that recognizes the important role families and caregivers play in providing and coordinating care.",
  },
];

export default function ServiceDirectory() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Service Directory
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Explore our services
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Our services are organized around different care needs and
            circumstances. Select a service to learn more about its purpose,
            approach, and how to get started.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-sm font-bold text-[#D4AF37]">
                  {service.number}
                </span>

                <span className="text-xl text-slate-400 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#0B1B3A]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.description}
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-[#0F766E]">
                Learn more
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
