import Link from "next/link";

const pathways = [
  {
    title: "Get in Touch",
    description:
      "Reach MercyCare by email, phone, WhatsApp or through our online contact form.",
    href: "/contact/get-in-touch",
    accent: "bg-[#1597c9]",
  },
  {
    title: "Service Enquiries",
    description:
      "Ask questions about our home health services and how to get started.",
    href: "/contact/service-enquiries",
    accent: "bg-[#6757d9]",
  },
  {
    title: "Referrals & Care Enquiries",
    description:
      "Explore the pathway for care-related enquiries and referrals.",
    href: "/contact/referrals",
    accent: "bg-[#e6a23c]",
  },
  {
    title: "Partnerships",
    description:
      "Connect with MercyCare about organisations, community work and partnerships.",
    href: "/contact/partnerships",
    accent: "bg-[#1597c9]",
  },
  {
    title: "General Enquiries",
    description:
      "For questions, information requests and other matters not covered elsewhere.",
    href: "/contact/general-enquiries",
    accent: "bg-[#6757d9]",
  },
  {
    title: "Feedback",
    description:
      "Share your experience, suggestions or feedback with MercyCare.",
    href: "/contact/feedback",
    accent: "bg-[#e6a23c]",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#1597c9]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#6757d9]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e6a23c]">
              Contact MercyCare
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              We&apos;re here to help you connect with MercyCare.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Whether you are looking for information, exploring our services,
              considering a partnership or seeking a care pathway, choose the
              option that best matches what you need.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact/get-in-touch"
                className="inline-flex items-center justify-center rounded-full bg-[#1597c9] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#117fa9]"
              >
                Get in Touch
              </Link>

              <a
                href="https://wa.me/254107631070"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
          <a
            href="mailto:mercycare@villagerise.africa"
            className="group px-2 py-8 md:px-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1597c9]">
              Email
            </p>
            <p className="mt-2 break-words text-sm font-semibold text-slate-900 group-hover:text-[#1597c9]">
              mercycare@villagerise.africa
            </p>
          </a>

          <a href="tel:+254107631070" className="group px-2 py-8 md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6757d9]">
              Phone
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900 group-hover:text-[#6757d9]">
              +254 107 631070
            </p>
          </a>

          <a
            href="https://wa.me/254107631070"
            target="_blank"
            rel="noreferrer"
            className="group px-2 py-8 md:px-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e6a23c]">
              WhatsApp
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900 group-hover:text-[#e6a23c]">
              +254 107 631070
            </p>
          </a>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6757d9]">
              How Can We Help?
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Choose the pathway that fits your enquiry.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Each pathway provides a clearer starting point while keeping
              MercyCare&apos;s contact experience simple and accessible.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pathways.map((pathway) => (
              <Link
                key={pathway.title}
                href={pathway.href}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
              >
                <div
                  className={`h-2 w-12 rounded-full ${pathway.accent} transition-all duration-300 group-hover:w-20`}
                />

                <h3 className="mt-7 text-xl font-semibold text-slate-950">
                  {pathway.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {pathway.description}
                </p>

                <span className="mt-6 inline-flex items-center text-sm font-semibold text-[#1597c9]">
                  Explore
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1597c9] via-[#1597c9] to-[#6757d9] p-8 text-white shadow-2xl sm:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
                Wellness With Dignity
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Ready to start a conversation?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85">
                Send an enquiry and let MercyCare know what you need. We can
                continue building the right pathway as our digital contact
                services evolve.
              </p>
            </div>

            <Link
              href="/contact/get-in-touch"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#1597c9] transition hover:bg-slate-100"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
