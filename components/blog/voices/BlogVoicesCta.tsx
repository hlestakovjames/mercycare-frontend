import Link from "next/link";

export default function BlogVoicesCta() {
  return (
    <section className="bg-[#0B1B3A]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              MercyCare Media Center
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Keep listening.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-300">
              Continue into interviews, features, stories and multimedia
              conversations.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B1B3A] transition hover:bg-slate-100"
          >
            Back to Media Center
          </Link>
        </div>
      </div>
    </section>
  );
}
