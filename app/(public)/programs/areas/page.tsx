const programAreas = [
  {
    number: "01",
    title: "Community Health & Wellness",
    description:
      "Initiatives that promote healthier communities through accessible health support, wellness activities, awareness, and community engagement.",
  },
  {
    number: "02",
    title: "Maternal & Child Health",
    description:
      "Programs supporting mothers, newborns, children, and families through education, wellbeing support, early intervention, and continuity of care.",
  },
  {
    number: "03",
    title: "Senior Wellness & Elderly Care",
    description:
      "Initiatives focused on the dignity, wellbeing, social connection, and continued independence of older adults.",
  },
  {
    number: "04",
    title: "Family & Social Support",
    description:
      "Programs that recognise the wider social and family factors that influence health, wellbeing, resilience, and quality of life.",
  },
  {
    number: "05",
    title: "Preventive Health",
    description:
      "Health promotion, early intervention, wellness education, and other initiatives designed to help individuals and communities prevent avoidable health challenges.",
  },
  {
    number: "06",
    title: "Health Education & Awareness",
    description:
      "Community education and awareness initiatives that help people make informed decisions about their health and wellbeing.",
  },
];

export default function ProgramAreasPage() {
  return (
    <>
      <section className="bg-[#0B1B3A] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Program Areas
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Where our programs make a difference.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              MercyCare programs respond to different dimensions of health,
              wellness, family support, and community wellbeing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Focus Areas
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Responding to the needs of people and communities.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our program areas provide a framework for developing initiatives
              that address important health and wellbeing priorities. They
              allow MercyCare to respond to specific needs while maintaining
              our wider commitment to compassionate, dignified, and
              people-centred care.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programAreas.map((area) => (
              <article
                key={area.number}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
              >
                <span className="text-sm font-bold tracking-[0.15em] text-[#D4AF37]">
                  {area.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-[#0B1B3A]">
                  {area.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Our Programs
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Turning these priorities into action.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Explore the specific MercyCare programs through which we translate
            our areas of focus into practical initiatives.
          </p>

          <div className="mt-8">
            <a
              href="/programs/our-programs"
              className="inline-flex rounded-full bg-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#162d5c]"
            >
              Explore Our Programs
            </a>
          </div>
        </div>
      </section>
    </>
  );
}