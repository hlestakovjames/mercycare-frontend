export default function FeedbackPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
          Contact MercyCare
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Feedback
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Your feedback can help MercyCare understand experiences, suggestions
          and areas where communication or support can improve.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 p-6">
          <p className="text-sm leading-7 text-slate-600">
            The feedback form will be connected to MercyCare's backend
            communication workflow in a future implementation.
          </p>

          <div className="mt-6 rounded-xl bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-700">
              Frontend form integration placeholder
            </p>
            <p className="mt-2 text-sm text-slate-500">
              No feedback is submitted or stored by this frontend-only version.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
