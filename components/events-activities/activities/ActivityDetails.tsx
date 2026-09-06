type ActivityDetailsProps = {
  description: string;
  objectives: string[];
};

export default function ActivityDetails({
  description,
  objectives,
}: ActivityDetailsProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-bold text-[#0B1B3A]">
            About this activity
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            {description}
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#0B1B3A]">
            Activity objectives
          </h2>

          <ul className="mt-5 space-y-4">
            {objectives.map((objective) => (
              <li
                key={objective}
                className="rounded-xl bg-slate-50 px-5 py-4 text-slate-600"
              >
                {objective}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}