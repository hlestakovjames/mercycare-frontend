import Link from "next/link";

const galleryItems = [
  {
    title: "Community",
    description: "Moments from MercyCare's community work.",
  },
  {
    title: "Programs",
    description: "Stories and activities from our programs.",
  },
  {
    title: "Partnerships",
    description: "People coming together to create impact.",
  },
];

export default function GalleryPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Gallery
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Moments that matter.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Explore moments from MercyCare programs, community activities,
              partnerships, and events.
            </p>
          </div>

          <Link
            href="/gallery"
            className="text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
          >
            Explore the gallery →
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Link
              key={item.title}
              href="/gallery"
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#0B1B3A]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#D4AF37]/20 transition duration-500 group-hover:scale-105" />

              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                  0{index + 1}
                </span>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}