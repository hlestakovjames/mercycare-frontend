"use client";

type EventActivityFilter = "All" | "Upcoming" | "Ongoing" | "Past";

type EventsActivitiesFiltersProps = {
  activeFilter: EventActivityFilter;
  onFilterChange: (filter: EventActivityFilter) => void;
};

const filters: EventActivityFilter[] = [
  "All",
  "Upcoming",
  "Ongoing",
  "Past",
];

export default function EventsActivitiesFilters({
  activeFilter,
  onFilterChange,
}: EventsActivitiesFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onFilterChange(filter)}
          className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
            activeFilter === filter
              ? "bg-[#0B1B3A] text-white"
              : "border border-slate-200 bg-white text-slate-600 hover:border-[#0B1B3A] hover:text-[#0B1B3A]"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}