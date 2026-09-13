import Link from "next/link";

export default function ProjectAreasConnection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              From Focus to Action
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Each project responds to a specific purpose.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Project areas describe the broader fields in which MercyCare
                may develop initiatives. They do not represent individual
                projects themselves.
              </p>

              <p>
                A project is developed when there is a specific need,
                opportunity, community context, or partnership that requires a
                focused response.
              </p>

              <p>
                This approach allows MercyCare to remain flexible while
                maintaining a clear connection between community needs, our
                programs, and practical action.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/projects/our-projects"
                className="inline-flex rounded-full bg-[#0B1B3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#162d5c]"
              >
                Explore Our Projects
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-[#0B1B3A] p-8 text-white lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Project Model
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-semibold text-slate-300">
                  Community Need
                </p>
                <p className="mt-1 text-lg font-bold">
                  Understand the issue
                </p>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <p className="text-sm font-semibold text-slate-300">
                  Project Focus
                </p>
                <p className="mt-1 text-lg font-bold">
                  Define the response
                </p>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <p className="text-sm font-semibold text-slate-300">
                  Community Action
                </p>
                <p className="mt-1 text-lg font-bold">
                  Implement with the right people
                </p>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <p className="text-sm font-semibold text-slate-300">
                  Learning & Impact
                </p>
                <p className="mt-1 text-lg font-bold">
                  Learn and improve
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
