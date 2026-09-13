import Link from "next/link";

export default function HealthWellnessEventsRegistration() {
  return (
    <section className="bg-[#0B1B3A] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Registration
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Reserve your place when registration is available
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Some health and wellness events may require advance registration.
            Event-specific information will explain availability, participation
            requirements and the registration process.
          </p>

          <div className="mt-8">
            <Link
              href="/events/upcoming"
              className="inline-flex rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#e3c65c]"
            >
              View Upcoming Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
