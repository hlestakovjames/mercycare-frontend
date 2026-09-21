import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";

const galleryItems = [
  {
    number: "01",
    title: "Community",
    description: "Moments from MercyCare's community work.",
  },
  {
    number: "02",
    title: "Programs",
    description: "Stories and activities from our programs.",
  },
  {
    number: "03",
    title: "Partnerships",
    description: "People coming together to create impact.",
  },
];

export default function GalleryPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0B1B3A]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1597c9]">
              <Camera className="h-3.5 w-3.5" aria-hidden="true" />
              Gallery
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0B1B3A] sm:text-4xl lg:text-5xl">
              Moments that matter.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Explore moments from MercyCare programs, community activities,
              partnerships, and events.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#0B1B3A] bg-white px-5 py-3 text-sm font-bold text-[#0B1B3A] transition hover:bg-[#0B1B3A] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#1597c9]/20"
          >
            Explore gallery
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {galleryItems.map((item) => (
            <Link
              key={item.title}
              href="/gallery"
              className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-[#0B1B3A] focus:outline-none focus:ring-4 focus:ring-[#1597c9]/20"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,151,201,0.35),transparent_45%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent,rgba(212,175,55,0.18))] transition duration-500 group-hover:scale-105" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3A] via-[#0B1B3A]/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  {item.number}
                </span>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white">
                  View gallery
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
