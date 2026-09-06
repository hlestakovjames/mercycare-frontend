export default function ProjectOverview() {
  return (
    <section id="overview" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              About the Project
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Growing older with dignity, connection and support
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Tuko Pamoja, meaning <span className="font-semibold text-[#0B1B3A]">“We Are Together,”</span>{" "}
              is a MercyCare initiative designed to support older adults
              through community-centred wellness, social connection and
              compassionate care.
            </p>

            <p>
              The project recognises that healthy ageing extends beyond
              medical care. Older adults need meaningful relationships,
              opportunities for participation, emotional support, health
              education and an environment where their dignity is protected.
            </p>

            <p>
              Through Tuko Pamoja, MercyCare works with families,
              caregivers, community members and partners to create a more
              supportive environment for senior citizens and promote
              healthier, more connected ageing.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#0B1B3A] text-lg font-bold text-white">
              01
            </div>

            <h3 className="text-lg font-semibold text-[#0B1B3A]">
              Healthy Ageing
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Promoting physical, emotional and social wellbeing among
              older adults.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#0B1B3A] text-lg font-bold text-white">
              02
            </div>

            <h3 className="text-lg font-semibold text-[#0B1B3A]">
              Community Connection
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Creating opportunities for seniors to remain connected,
              engaged and valued within their communities.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#0B1B3A] text-lg font-bold text-white">
              03
            </div>

            <h3 className="text-lg font-semibold text-[#0B1B3A]">
              Family & Caregiver Support
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Helping families and caregivers better understand and support
              the needs of older adults.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}