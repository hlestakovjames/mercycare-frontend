import Link from "next/link";

export default function OurProjectsRelationship() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0B1B3A] p-8 text-white lg:p-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Programs, Projects & Services
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Different parts of MercyCare's work serve different purposes.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-300">
              <p>
                Programs establish broader areas of community work and
                intervention.
              </p>

              <p>
                Projects translate those broader areas into focused initiatives
                responding to specific needs or opportunities.
              </p>

              <p>
                Services provide professional care and support directly to
                individuals and families.
              </p>

              <div className="pt-2">
                <Link
                  href="/programs"
                  className="font-semibold text-white transition hover:text-[#D4AF37]"
                >
                  Explore MercyCare Programs →
                </Link>
              </div>

              <div>
                <Link
                  href="/services"
                  className="font-semibold text-white transition hover:text-[#D4AF37]"
                >
                  Explore MercyCare Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
