import Link from "next/link";

export default function TermsOfUsePage() {
  return (
    <main className="bg-white">
      <section className="bg-[#0B1B3A] px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#0B1B3A]">
            Legal & Website Use
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Terms of Use
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
            These Terms of Use explain the general terms that apply when you
            access or use the MercyCare website and its online features.
          </p>

          <p className="mt-5 text-sm text-white/60">
            Last updated: September 2026
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl space-y-12 text-slate-700">
          <section>
            <h2 className="text-2xl font-bold text-[#0B1B3A]">
              1. Acceptance of these terms
            </h2>
            <p className="mt-4 leading-8">
              By accessing or using the MercyCare Home Health Services website
              (“website”), you agree to use it responsibly and in accordance
              with these Terms of Use. If you do not agree with these terms,
              please do not use the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1B3A]">
              2. About the website
            </h2>
            <p className="mt-4 leading-8">
              The website provides information about MercyCare, its programs,
              projects, services, activities, events, resources, opportunities
              and ways of getting involved. Website content is provided for
              general information and communication purposes and may be
              updated as MercyCare develops its services and activities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1B3A]">
              3. Healthcare information and emergencies
            </h2>

            <div className="mt-4 space-y-4 leading-8">
              <p>
                Information published on the website is not a substitute for
                professional medical assessment, diagnosis or treatment.
                General information should not be interpreted as personalised
                medical advice.
              </p>

              <p>
                The website is not intended to provide emergency medical
                services. If you or another person is experiencing a medical
                emergency, contact the appropriate emergency service or seek
                immediate professional medical attention.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1B3A]">
              4. Service information
            </h2>
            <p className="mt-4 leading-8">
              Descriptions of MercyCare services, programs and activities are
              provided to help visitors understand our areas of work. The
              availability, scope, location, timing and suitability of a
              service may depend on individual circumstances and operational
              capacity. Contact MercyCare directly for current information
              before relying on website content for a particular service or
              care arrangement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1B3A]">
              5. Website forms and submissions
            </h2>
            <p className="mt-4 leading-8">
              The website may provide forms for enquiries, referrals, feedback,
              event registration, volunteer interest, career opportunities,
              donations and other interactions. Providing information through
              a form does not by itself create a contractual relationship,
              guarantee acceptance into a program or event, or guarantee the
              availability of a service or opportunity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1B3A]">
              6. Events and activities
            </h2>
            <p className="mt-4 leading-8">
              Event and activity information may change because of operational,
              community, venue, scheduling or other circumstances. MercyCare
              may update, postpone, change or cancel an event or activity when
              necessary. Registration or expression of interest does not
              automatically guarantee participation unless MercyCare confirms
              otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1B3A]">
              7. Donations and payments
            </h2>
            <p className="mt-4 leading-8">
              Donation and support information displayed on the website is
              subject to the applicable donation process and payment provider
              terms. Where a payment service is provided by a third party,
              that provider's terms and privacy practices may also apply.
              Payment information should only be submitted through an
              appropriate payment interface.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1B3A]">
              8. Acceptable use
            </h2>

            <p className="mt-4 leading-8">
              You agree not to misuse the website or attempt to interfere with
              its operation. This includes:
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8">
              <li>
                Attempting to gain unauthorised access to the website or its
                systems.
              </li>
              <li>
                Introducing malicious code, harmful files or other damaging
                material.
              </li>
              <li>
                Using the website for unlawful, fraudulent or abusive purposes.
              </li>
              <li>
                Attempting to disrupt the availability or security of the
                website.
              </li>
              <li>
                Submitting false, misleading or deliberately harmful
                information through website forms.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1B3A]">
              9. Intellectual property
            </h2>
            <p className="mt-4 leading-8">
              Unless otherwise stated, website content including text,
              branding, logos, graphics, photographs, layouts and other
              materials is owned by or used by MercyCare with appropriate
              permission. You may view the website for personal and legitimate
              informational purposes. You should not reproduce, redistribute,
              modify or commercially exploit protected website content without
              appropriate permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1B3A]">
              10. Third-party websites and services
            </h2>
            <p className="mt-4 leading-8">
              The website may contain links to third-party websites,
              applications or services. These links are provided for
              convenience or to support particular interactions. MercyCare does
              not control every third-party service and is not responsible for
              its availability, content, security or privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1B3A]">
              11. Accuracy and availability
            </h2>
            <p className="mt-4 leading-8">
              MercyCare aims to keep website information useful and current,
              but information may occasionally become outdated, incomplete or
              inaccurate. Website content may be changed, suspended or removed
              without prior notice. We do not guarantee that the website will
              always be available, uninterrupted or free from technical
              problems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1B3A]">
              12. Limitation of reliance
            </h2>
            <p className="mt-4 leading-8">
              Visitors should consider their individual circumstances and
              obtain appropriate professional advice where necessary before
              acting on information published on the website. Nothing on the
              website should be interpreted as a guarantee of a particular
              healthcare, program, event, employment, volunteer or fundraising
              outcome.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1B3A]">
              13. Changes to these terms
            </h2>
            <p className="mt-4 leading-8">
              MercyCare may update these Terms of Use as the website, services
              and online features develop. The latest version will be published
              on this page together with the date of the latest update.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B1B3A]">
              14. Governing law
            </h2>
            <p className="mt-4 leading-8">
              These Terms of Use are intended to be interpreted in accordance
              with the applicable laws of Kenya, subject to any mandatory legal
              requirements that may apply to a particular matter.
            </p>
          </section>

          <section className="rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-[#0B1B3A]">
              15. Contact MercyCare
            </h2>

            <p className="mt-4 leading-8">
              Questions concerning these Terms of Use can be directed to
              MercyCare.
            </p>

            <div className="mt-6 space-y-2">
              <p>
                <span className="font-semibold text-[#0B1B3A]">Email:</span>{" "}
                <a
                  href="mailto:mercycare@villagerise.africa"
                  className="text-[#1597c9] hover:underline"
                >
                  mercycare@villagerise.africa
                </a>
              </p>

              <p>
                <span className="font-semibold text-[#0B1B3A]">Phone:</span>{" "}
                <a
                  href="tel:+254107631070"
                  className="text-[#1597c9] hover:underline"
                >
                  +254 107 631070
                </a>
              </p>
            </div>
          </section>

          <div className="flex flex-wrap gap-4 border-t border-slate-200 pt-8">
            <Link
              href="/privacy"
              className="rounded-full bg-[#0B1B3A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1597c9]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:border-[#1597c9] hover:text-[#1597c9]"
            >
              Contact MercyCare
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
