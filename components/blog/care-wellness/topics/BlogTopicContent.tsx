type BlogTopicContentProps = {
  intro: string;
  sections: {
    title: string;
    text: string;
  }[];
};

export default function BlogTopicContent({
  intro,
  sections,
}: BlogTopicContentProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <p className="max-w-3xl text-lg leading-8 text-slate-600">{intro}</p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-200"
            >
              <h2 className="text-xl font-semibold text-[#0B1B3A]">
                {section.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {section.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
