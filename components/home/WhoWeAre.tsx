import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Compassion at the heart of community development.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              MercyCare exists to support individuals and communities through
              practical, compassionate, and sustainable initiatives that
              respond to real community needs.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Through our programs, partnerships, volunteers, and supporters,
              we work toward healthier families, stronger communities, and
              opportunities for people to thrive.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center text-sm font-semibold text-[#0B1B3A] transition hover:text-[#D4AF37]"
            >
              Learn more about MercyCare
              <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-[#0B1B3A] p-7 text-white">
              <p className="text-3xl font-bold">01</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Community-centered care
              </p>
            </div>

            <div className="mt-8 rounded-3xl bg-slate-50 p-7">
              <p className="text-3xl font-bold text-[#0B1B3A]">02</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Sustainable initiatives
              </p>
            </div>

            <div className="-mt-8 rounded-3xl border border-slate-100 p-7">
              <p className="text-3xl font-bold text-[#D4AF37]">03</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Meaningful partnerships
              </p>
            </div>

            <div className="rounded-3xl bg-[#D4AF37] p-7 text-[#0B1B3A]">
              <p className="text-3xl font-bold">04</p>
              <p className="mt-4 text-sm leading-6">
                Lasting community impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}