import Link from "next/link";

type EventRegistrationConfirmationProps = {
  title: string;
};

export default function EventRegistrationConfirmation({
  title,
}: EventRegistrationConfirmationProps) {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0F766E]/10">
            <span className="text-2xl font-bold text-[#0F766E]">✓</span>
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Registration Confirmation
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Registration details completed
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            You have completed the registration form for{" "}
            <span className="font-semibold text-[#0B1B3A]">{title}</span>.
          </p>

          <div className="mt-8 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-5 text-left">
            <p className="text-sm font-semibold text-[#0B1B3A]">
              Frontend registration stage
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              The MercyCare registration service is not connected yet. The
              submitted information is currently kept only within this browser
              session. Backend submission, confirmation messaging and
              registration management will be connected in the next system
              phase.
            </p>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/events/upcoming"
              className="inline-flex items-center justify-center rounded-full bg-[#0F766E] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0B625D]"
            >
              Browse Upcoming Events
            </Link>

            <Link
              href="/events"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:border-[#0F766E] hover:text-[#0F766E]"
            >
              Events Overview
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
