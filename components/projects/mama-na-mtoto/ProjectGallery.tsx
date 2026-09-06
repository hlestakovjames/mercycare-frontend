const galleryItems = [
  {
    title: "Maternal Wellness",
    description:
      "Moments from activities focused on maternal health, education and wellbeing.",
  },
  {
    title: "Mother & Baby",
    description:
      "Stories and moments highlighting support for mothers, babies and families.",
  },
  {
    title: "Community Outreach",
    description:
      "Highlights from MercyCare's engagement with families and communities.",
  },
  {
    title: "Child Wellbeing",
    description:
      "Activities promoting healthy growth, development and early childhood wellbeing.",
  },
];

export default function ProjectGallery() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Project Gallery
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              See the project in action
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              This gallery will showcase verified photographs and visual
              stories from Mama na Mtoto activities and community work.
            </p>
          </div>

          <a
            href="/gallery"
            className="inline-flex w-fit items-center text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
          >
            View Main Gallery
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-[#0B1B3A] p-6">
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/40 text-[#D4AF37]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l2.159 2.159m0 0 1.159-1.159a2.25 2.25 0 0 1 3.182 0L21.75 15.25M3.75 19.5h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 8.25h.008v.008H8.25V8.25Z"
                      />
                    </svg>
                  </div>

                  <p className="mt-4 text-sm font-medium text-white">
                    Photos coming soon
                  </p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#0B1B3A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}