"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Compass } from "lucide-react";
import { usePathname } from "next/navigation";
import { getInternalRelationshipContext } from "./internalRelationshipEngine";

export default function InternalRelationships() {
  const pathname = usePathname();
  const context = getInternalRelationshipContext(pathname);

  if (!context) {
    return null;
  }

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section relationships */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1597c9]">
            {context.sectionLabel}
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
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#1597c9]/40 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#1597c9]/15"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-[#0B1B3A] transition-colors group-hover:text-[#1597c9]">
                    {item.name}
                  </h3>

                  <ArrowRight
                    className="mt-0.5 h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#1597c9]"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        ) : null}

        {/* Cross-section relationships */}
        {context.crossSection.length > 0 ? (
          <div className="mt-14 rounded-[2rem] border border-[#0B1B3A]/10 bg-white p-7 shadow-sm sm:p-9">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-[#1597c9]">
                  <Compass className="h-5 w-5" aria-hidden="true" />

                  <span className="text-sm font-bold uppercase tracking-[0.16em]">
                    Explore across MercyCare
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#0B1B3A]">
                  You may also want to explore
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  MercyCare's work connects care, programs, projects,
                  activities, resources, and community participation.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {context.crossSection.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:-translate-y-0.5 hover:border-[#1597c9]/40 hover:bg-white hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#1597c9]/15"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-bold text-[#0B1B3A] group-hover:text-[#1597c9]">
                      {item.name}
                    </span>

                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#1597c9]"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        {/* Back */}
        <div className="mt-10 flex justify-center">
          <Link
            href={context.back.href}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#0B1B3A] bg-white px-6 py-3 text-sm font-bold text-[#0B1B3A] transition-all hover:bg-[#0B1B3A] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#1597c9]/20"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {context.back.name}
          </Link>
        </div>
      </div>
    </section>
  );
}
