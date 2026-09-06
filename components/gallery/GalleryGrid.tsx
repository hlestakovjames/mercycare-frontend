const galleryItems = [
  {
    id: 1,
    title: "Community Engagement",
    category: "Community",
  },
  {
    id: 2,
    title: "Tuko Pamoja",
    category: "Senior Wellness",
  },
  {
    id: 3,
    title: "Mama na Mtoto",
    category: "Maternal & Child",
  },
  {
    id: 4,
    title: "Community Activities",
    category: "Activities",
  },
  {
    id: 5,
    title: "MercyCare Volunteers",
    category: "Volunteers",
  },
  {
    id: 6,
    title: "Working Together",
    category: "Partnerships",
  },
];

export default function GalleryGrid() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50"
            >
              <div className="aspect-[4/3] bg-[#0B1B3A]">
                <div className="flex h-full items-center justify-center p-6 text-center transition duration-300 group-hover:scale-105">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                      {item.category}
                    </p>

                    <h2 className="mt-3 text-xl font-bold text-white">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm font-semibold text-[#0B1B3A]">
                  {item.title}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {item.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}