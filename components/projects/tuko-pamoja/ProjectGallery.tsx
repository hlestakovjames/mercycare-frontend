import Link from "next/link";

const galleryItems = [
  {
    title: "Senior Wellness",
    description: "Moments from Tuko Pamoja wellness activities.",
  },
  {
    title: "Community Engagement",
    description: "Connecting older adults with their communities.",
  },
  {
    title: "Health & Wellness",
    description: "Promoting healthy ageing and preventive wellbeing.",
  },
  {
    title: "Togetherness",
    description: "Creating meaningful opportunities for connection.",
  },
];

export default function ProjectGallery() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Project Gallery
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Tuko Pamoja in action
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Explore moments from Tuko Pamoja activities, community
              engagements and senior wellness initiatives.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex w-fit items-center rounded-full border border-[#0B1B3A] px-5 py-2.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-[#0B1B3A] hover:text-white"
          >
            View Main Gallery
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-slate-200">
                <div className="px-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0B1B3A] shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.7}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l3.159 3.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l4.409 4.409M3.75 19.5h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Z"
                      />
                    </svg>
                  </div>

                  <p className="mt-3 text-sm font-medium text-slate-600">
                    Project image
                  </p>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-[#0B1B3A]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Project photographs and media will be added as activities take
            place.
          </p>
        </div>
      </div>
    </section>
  );
}