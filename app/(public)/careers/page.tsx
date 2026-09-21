import Link from "next/link";
import CareersSectionPage from "@/components/careers/CareersSectionPage";

export default function CareersPage() {
  return (
    <>
      <CareersSectionPage
        title="Build meaningful work with MercyCare."
        description="Explore opportunities to contribute to MercyCare's work through care, community support, coordination, communication, technology, administration, and other areas of service."
        intro="Our careers section provides information about working with MercyCare, available opportunities, the hiring process, general requirements, and answers to common questions."
        sections={[
          {
            title: "Why Work With Us",
            description:
              "Learn about the working environment, purpose, collaboration, and contribution that MercyCare seeks to build.",
            href: "/careers/why-work-with-us",
            linkLabel: "Why MercyCare →",
          },
          {
            title: "Open Positions",
            description:
              "Explore positions when opportunities are published and view the details of each available role.",
            href: "/careers/open-positions",
            linkLabel: "View positions →",
          },
          {
            title: "How We Hire",
            description:
              "Understand the general stages through which a MercyCare recruitment process may progress.",
            href: "/careers/how-we-hire",
            linkLabel: "Explore the process →",
          },
          {
            title: "Requirements",
            description:
              "Review general information about skills, experience, documents, and role-specific requirements.",
            href: "/careers/requirements",
            linkLabel: "View requirements →",
          },
          {
            title: "Careers FAQ",
            description:
              "Find answers to common questions about opportunities, applications, documents, and recruitment.",
            href: "/careers/faq",
            linkLabel: "Read FAQs →",
          },
          {
            title: "Explore Open Opportunities",
            description:
              "When positions are available, each vacancy will have its own detailed page with an application route.",
            href: "/careers/open-positions",
            linkLabel: "Explore opportunities →",
          },
        ]}
      />

      <section className="bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Interested in joining us?
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A]">
            Explore the opportunities available.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Recruitment opportunities will be published when positions are
            available. Each published position will provide its own details,
            requirements, and application process.
          </p>

          <Link
            href="/careers/open-positions"
            className="mt-7 inline-flex rounded-full bg-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#132b57]"
          >
            View Open Positions
          </Link>
        </div>
      </section>
    </>
  );
}
