const leaders = [
  {
    name: "Mercy Ndolo",
    role: "Founder & Chief Executive Officer",
  },
];

export default function Leadership() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Leadership
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            The people guiding MercyCare.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            MercyCare is guided by people committed to serving communities
            with purpose, integrity, and compassion.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-100"
            >
              <div className="aspect-square bg-[#0B1B3A]">
                <div className="flex h-full items-center justify-center">
                  <span className="text-5xl font-bold text-[#D4AF37]">
                    {leader.name.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-xl font-bold text-[#0B1B3A]">
                  {leader.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-[#D4AF37]">
                  {leader.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}