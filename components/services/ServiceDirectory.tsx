import Link from "next/link";

const services = [
  {
    title: "Special Needs Children Care",
    href: "/services/special-needs-children",
    description:
      "Individualised support for children with developmental, behavioural and special care needs.",
  },
  {
    title: "Elderly Care & Companionship",
    href: "/services/elderly-care",
    description:
      "Dignified personal care, companionship, mobility support and assistance for older adults.",
  },
  {
    title: "Professional Home Nursing Care",
    href: "/services/home-nursing",
    description:
      "Professional nursing support for clinical needs, recovery, chronic conditions and complex care.",
  },
  {
    title: "Mother & Baby Care",
    href: "/services/mother-baby-care",
    description:
      "Postnatal support, newborn care, breastfeeding guidance and maternal wellness at home.",
  },
  {
    title: "Post-Surgical Rehabilitation",
    href: "/services/post-surgical-rehabilitation",
    description:
      "Structured home-based recovery following surgery, with rehabilitation and clinical support.",
  },
  {
    title: "Chronic Disease Management",
    href: "/services/chronic-disease-management",
    description:
      "Personalised long-term support for diabetes, hypertension, cardiac, respiratory and other chronic conditions.",
  },
  {
    title: "Physiotherapy & Rehabilitation",
    href: "/services/physiotherapy-rehabilitation",
    description:
      "Evidence-based rehabilitation for mobility, neurological, musculoskeletal and recovery needs.",
  },
  {
    title: "Mental Health & Psychosocial Support",
    href: "/services/mental-health",
    description:
      "Confidential psychosocial support, counselling, caregiver support and structured referrals.",
  },
  {
    title: "Nutritional Therapy & Dietary Coaching",
    href: "/services/nutritional-therapy",
    description:
      "Personalised nutritional guidance supporting health conditions, recovery and healthy lifestyles.",
  },
  {
    title: "Occupational Therapy",
    href: "/services/occupational-therapy",
    description:
      "Support that helps individuals improve independence, safety and everyday functioning.",
  },
  {
    title: "Palliative & Comfort Care",
    href: "/services/palliative-care",
    description:
      "Compassionate comfort-focused care supporting individuals and families through serious illness.",
  },
  {
    title: "Telehealth & Remote Monitoring",
    href: "/services/telehealth",
    description:
      "Technology-enabled consultations, monitoring and secure communication with care teams.",
  },
  {
    title: "Infant & Child Development",
    href: "/services/infant-child-development",
    description:
      "Early childhood development, stimulation, screening and school-readiness support.",
  },
  {
    title: "Corporate & Workplace Wellness",
    href: "/services/corporate-wellness",
    description:
      "Workplace health screening, wellness programmes, occupational health and employee support.",
  },
  {
    title: "Preventive Health & Lifestyle Medicine",
    href: "/services/preventive-health",
    description:
      "Proactive health assessments, lifestyle support, prevention education and personalised wellness planning.",
  },
];

export default function ServiceDirectory() {
  return (
    <section id="service-directory" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Service Directory
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Care designed around real needs
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            From professional nursing and rehabilitation to preventive
            wellness and family support, explore the services available
            through MercyCare.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1B3A] text-sm font-bold text-[#D4AF37]">
                +
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#0B1B3A] transition group-hover:text-[#162d5c]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.description}
              </p>

              <span className="mt-6 inline-flex text-sm font-semibold text-[#0B1B3A]">
                Explore service →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}