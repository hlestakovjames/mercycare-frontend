export default function ProjectsOverview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Projects
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Turning MercyCare programs into meaningful action.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              MercyCare projects are practical initiatives developed to
              translate our broader programs into activities and interventions
              that respond to specific community needs.
            </p>
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600">
            <div>
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                From programs to action
              </h3>

              <p className="mt-3">
                While programs provide the broader framework for MercyCare's
                community work, projects focus on specific needs, locations,
                groups, activities, or interventions that can be planned and
                implemented in a practical way.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                Community-centred implementation
              </h3>

              <p className="mt-3">
                Projects are designed around the people and communities they
                seek to serve. This allows MercyCare to work with families,
                communities, professionals, volunteers, and partners in
                developing appropriate responses to identified needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0B1B3A]">
                Connected to professional care
              </h3>

              <p className="mt-3">
                Where appropriate, projects can connect community initiatives
                with MercyCare's professional healthcare services, helping
                create a stronger link between community support and individual
                care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
