"use client";

import { useState } from "react";

import EventsActivitiesHero from "@/components/events-activities/EventsActivitiesHero";
import EventsActivitiesFilters from "@/components/events-activities/EventsActivitiesFilters";
import EventsActivitiesList from "@/components/events-activities/EventsActivitiesList";
import EventsActivitiesCTA from "@/components/events-activities/EventsActivitiesCTA";

type EventActivityFilter = "All" | "Upcoming" | "Ongoing" | "Past";

export default function EventsActivitiesPage() {
  const [activeFilter, setActiveFilter] =
    useState<EventActivityFilter>("All");

  return (
    <main>
      <EventsActivitiesHero />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Discover
            </p>

            <h2 className="text-3xl font-bold text-[#0B1B3A] sm:text-4xl">
              Events & Activities
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Explore what is happening across MercyCare&apos;s programs,
              projects and communities.
            </p>
          </div>

          <EventsActivitiesFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          <div className="mt-12">
            <EventsActivitiesList activeFilter={activeFilter} />
          </div>
        </div>
      </section>

      <EventsActivitiesCTA />
    </main>
  );
}