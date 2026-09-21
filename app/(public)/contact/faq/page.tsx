import Link from "next/link";

const faqs = [
  {
    question: "How can I contact MercyCare?",
    answer:
      "Use the Contact section to choose the enquiry pathway that best matches your question.",
  },
  {
    question: "Where can I learn about MercyCare services?",
    answer:
      "Visit the Services section to explore available service areas, our care approach and how to get started.",
  },
  {
    question: "Can organisations contact MercyCare about partnerships?",
    answer:
      "Yes. The Partnerships contact pathway is designed for organisations and community groups interested in exploring collaboration.",
  },
  {
    question: "Can I submit a referral online?",
    answer:
      "A dedicated referral workflow is planned. The current frontend provides information about the pathway while backend integration is being developed.",
  },
];

export default function ContactFaqPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
          Contact MercyCare
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Contact Frequently Asked Questions
        </h1>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={`${faq.question}-${index}`}
              className="group rounded-2xl border border-slate-200 p-6"
            >
              <summary className="cursor-pointer list-none font-semibold text-slate-900">
                {faq.question}
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <Link
          href="/contact/get-in-touch"
          className="mt-8 inline-flex rounded-full bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
