import Link from "next/link";

export default function ProgramsOverview() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              What We Do
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Turning compassion into meaningful action.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              MercyCare programs are designed to respond to real health,
              wellness, and social needs within families and communities.
              Through targeted initiatives, we bring people together around
              practical solutions that improve wellbeing and strengthen access
              to care.
            </p>

            <p>
              Our programs complement our professional home health services by
              focusing not only on individual care, but also on prevention,
              education, community engagement, family support, and long-term
              wellbeing.
            </p>

            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
              >
                Explore our health services
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}