import Link from "next/link";

export default function GalleryGetInvolvedPage() {
  return (
    <section className="bg-[#0B1B3A] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
          Gallery · Get Involved
        </p>

        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
          Be part of the story.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Volunteer, partner, support MercyCare, or simply take part in
          creating meaningful moments within the communities we serve.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/volunteer"
            className="rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
          >
            Volunteer
          </Link>

          <Link
            href="/donate"
            className="rounded-full border-2 border-white px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0B1B3A]"
          >
            Support MercyCare
          </Link>
        </div>
      </div>
    </section>
  );
}
