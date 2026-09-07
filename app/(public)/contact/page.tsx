import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0B1B3A] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Contact MercyCare
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              We are here when you need us
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Whether you are looking for professional home healthcare,
              guidance for a loved one, or want to learn more about our
              services, our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Choose how you would like to reach us
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Our contact channels are available for care enquiries,
              consultations, partnerships, general questions and support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1B3A] text-lg font-bold text-white">
                T
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0B1B3A]">
                Call Us
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Speak directly with the MercyCare team about your healthcare
                needs.
              </p>

              <a
                href="tel:+254107631070"
                className="mt-5 inline-block text-sm font-semibold text-[#0B1B3A] hover:text-[#D4AF37]"
              >
                +254 107 631070
              </a>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1B3A] text-lg font-bold text-white">
                W
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0B1B3A]">
                WhatsApp
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Send us a message for enquiries, care requests and general
                assistance.
              </p>

              <a
                href="https://wa.me/254107631070"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm font-semibold text-[#0B1B3A] hover:text-[#D4AF37]"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1B3A] text-lg font-bold text-white">
                @
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0B1B3A]">
                Email Us
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Send a detailed enquiry and our team will respond as soon as
                possible.
              </p>

              <a
                href="mailto:mercycare@villagerise.africa"
                className="mt-5 inline-block break-all text-sm font-semibold text-[#0B1B3A] hover:text-[#D4AF37]"
              >
                mercycare@villagerise.africa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Care request */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0B1B3A] px-8 py-12 sm:px-12 sm:py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Need Care?
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let us understand your care needs
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Tell us what kind of support you or your loved one needs. Our
                team can help you understand the available services and guide
                you through the next steps.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
                >
                  Explore Our Services
                </Link>

                <a
                  href="https://wa.me/254107631070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Request Care
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact areas */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                How We Can Help
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
                Start a conversation with MercyCare
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Our team can assist with home healthcare enquiries, service
                information, care planning, partnerships, volunteering,
                careers and general enquiries.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/services"
                className="rounded-2xl border border-slate-200 p-6 transition hover:border-[#D4AF37] hover:shadow-sm"
              >
                <h3 className="font-bold text-[#0B1B3A]">
                  Home Healthcare
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Explore our professional home-based care services.
                </p>
              </Link>

              <Link
                href="/volunteer"
                className="rounded-2xl border border-slate-200 p-6 transition hover:border-[#D4AF37] hover:shadow-sm"
              >
                <h3 className="font-bold text-[#0B1B3A]">
                  Volunteer
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Learn how you can support MercyCare's work.
                </p>
              </Link>

              <Link
                href="/careers"
                className="rounded-2xl border border-slate-200 p-6 transition hover:border-[#D4AF37] hover:shadow-sm"
              >
                <h3 className="font-bold text-[#0B1B3A]">
                  Careers
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Explore opportunities to build a career in care.
                </p>
              </Link>

              <Link
                href="/programs"
                className="rounded-2xl border border-slate-200 p-6 transition hover:border-[#D4AF37] hover:shadow-sm"
              >
                <h3 className="font-bold text-[#0B1B3A]">
                  Our Programs
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Discover our community and healthcare programmes.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0B1B3A] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-lg font-medium text-slate-300">
            Wellness With Dignity
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Compassionate care starts with a conversation.
          </h2>

          <a
            href="tel:+254107631070"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-3.5 text-sm font-semibold text-[#0B1B3A] transition hover:bg-white"
          >
            Call MercyCare
          </a>
        </div>
      </section>
    </main>
  );
}