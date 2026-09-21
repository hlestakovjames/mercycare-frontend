"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getBlogRelationshipContext } from "./blogRelationships";

export default function BlogInternalRelationships() {
  const pathname = usePathname();
  const context = getBlogRelationshipContext(pathname);

  if (!context) {
    return null;
  }

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            MercyCare Media Center
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            {context.title}
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            {context.description}
          </p>
        </div>

        {context.related.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {context.related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-[#0B1B3A] transition-colors group-hover:text-[#D4AF37]">
                    {item.name}
                  </h3>

                  <span
                    className="mt-0.5 text-lg text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#D4AF37]"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        ) : null}

        <div className="mt-10 flex justify-center">
          <Link
            href={context.back.href}
            className="inline-flex items-center gap-2 rounded-full border border-[#0B1B3A] px-6 py-3 text-sm font-semibold text-[#0B1B3A] transition-colors hover:bg-[#0B1B3A] hover:text-white"
          >
            <span aria-hidden="true">←</span>
            {context.back.name}
          </Link>
        </div>
      </div>
    </section>
  );
}
