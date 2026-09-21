const faqs = [
  {
    question: "Who can support MercyCare?",
    answer:
      "Individuals, families, organisations, businesses, community groups, and other partners can explore appropriate ways to support MercyCare.",
  },
  {
    question: "Can I support a specific program?",
    answer:
      "Yes. MercyCare can explore appropriate support directed toward specific programs, projects, activities, or community initiatives.",
  },
  {
    question: "Can organisations partner with MercyCare?",
    answer:
      "Yes. Organisations can contact MercyCare to discuss appropriate giving, sponsorship, collaboration, or other support opportunities.",
  },
  {
    question: "Can I provide support other than money?",
    answer:
      "Depending on the need and circumstances, MercyCare may consider appropriate in-kind or community-based contributions.",
  },
  {
    question: "How do I discuss a contribution?",
    answer:
      "Contact the MercyCare team to discuss the appropriate way to contribute or support a specific initiative.",
  },
];

export default function DonateFaqPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Support MercyCare
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Giving Frequently Asked Questions
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Answers to common questions about supporting MercyCare.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-6"
            >
              <summary className="cursor-pointer list-none pr-6 text-lg font-semibold text-slate-900">
                {faq.question}
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
