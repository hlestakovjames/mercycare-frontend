export default function AnnouncementsNotice() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Current status
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Announcements will be published as confirmed notices become
            available.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            MercyCare is building its public information channels. This page
            will become the central place for formal notices as the initiative
            develops. Visitors should rely on published MercyCare
            announcements for current information rather than assuming that
            planned activities are confirmed.
          </p>
        </div>
      </div>
    </section>
  );
}
