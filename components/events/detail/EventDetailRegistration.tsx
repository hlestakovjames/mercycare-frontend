import Link from "next/link";

type EventDetailRegistrationProps = {
  slug: string;
  registrationEnabled: boolean;
};

export default function EventDetailRegistration({
  slug,
  registrationEnabled,
}: EventDetailRegistrationProps) {
  return (
    <section className="bg-[#0B1B3A] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Registration
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {registrationEnabled
              ? "Ready to attend?"
              : "Registration is not required"}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            {registrationEnabled
              ? "Complete the event registration form to provide your details and reserve your place."
              : "You can review the event information and attend according to the published event guidance."}
          </p>

          {registrationEnabled && (
            <div className="mt-8">
              <Link
                href={`/events/${slug}/register`}
                className="inline-flex rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#e3c65c]"
              >
                Register for Event
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
