const faqs = [
  {
    question: "How can I find available MercyCare positions?",
    answer:
      "Published opportunities will appear on the Open Positions page. Each published position will contain its own details and application instructions.",
  },
  {
    question: "Can I apply when there are no open positions?",
    answer:
      "The availability of general or speculative applications depends on MercyCare's recruitment process. Applicants should follow the instructions provided on the Careers pages and published vacancies.",
  },
  {
    question: "Will every position require a CV?",
    answer:
      "Requirements may differ by position. If a CV or Resume is required, this will be stated in the relevant vacancy and application process.",
  },
  {
    question: "Can I apply for more than one position?",
    answer:
      "Where multiple positions are available, applicants should review each vacancy and follow the application instructions provided for each role.",
  },
  {
    question: "What happens after I submit an application?",
    answer:
      "Applications may be reviewed against the requirements of the relevant position. Applicants who progress may be contacted for further assessment or interview.",
  },
  {
    question: "Does submitting an application guarantee employment?",
    answer:
      "No. Submitting an application does not guarantee shortlisting, interview, selection, or employment.",
  },
];

export default function CareersFaqPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0B1B3A] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.16),transparent_38%)]" />

        <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Careers at MercyCare
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Careers FAQ
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Answers to common questions about MercyCare career opportunities
            and applications.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none pr-8 text-base font-bold text-[#0B1B3A]">
                  <div className="flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="text-xl text-[#D4AF37] transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
