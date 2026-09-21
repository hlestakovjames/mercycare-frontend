import Link from "next/link";
import {
  ArrowRight,
  Handshake,
  HeartHandshake,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

const contactOptions = [
  {
    title: "Email Us",
    value: "mercycare@villagerise.africa",
    description:
      "Send us a message for general enquiries, support or information.",
    href: "mailto:mercycare@villagerise.africa",
    action: "Send an Email",
    icon: Mail,
    iconClass: "bg-[#1597c9]/10 text-[#1597c9]",
  },
  {
    title: "Call Us",
    value: "+254 107 631070",
    description:
      "Speak directly with MercyCare for enquiries and assistance.",
    href: "tel:+254107631070",
    action: "Call MercyCare",
    icon: Phone,
    iconClass: "bg-[#6757d9]/10 text-[#6757d9]",
  },
  {
    title: "WhatsApp",
    value: "+254 107 631070",
    description:
      "Start a WhatsApp conversation with the MercyCare team.",
    href: "https://wa.me/254107631070",
    action: "Chat on WhatsApp",
    icon: MessageCircle,
    iconClass: "bg-[#e6a23c]/15 text-[#b77908]",
  },
];

const pathways = [
  {
    title: "Service Enquiries",
    description:
      "Questions about MercyCare home health services.",
    href: "/contact/service-enquiries",
    icon: HeartHandshake,
  },
  {
    title: "Referrals & Care Enquiries",
    description:
      "Learn about the referral and care enquiry pathway.",
    href: "/contact/referrals",
    icon: Handshake,
  },
  {
    title: "Partnerships",
    description:
      "Explore opportunities to work with MercyCare.",
    href: "/contact/partnerships",
    icon: Handshake,
  },
];

export default function GetInTouchPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#1597c9]/20 blur-3xl" />
        <div className="absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-[#6757d9]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#e6a23c]">
              Contact MercyCare
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              We&apos;re here to help you connect with MercyCare.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Whether you have a question about our services, want to explore
              a partnership, need guidance for a loved one, or simply want to
              learn more about MercyCare, we&apos;re ready to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {contactOptions.map((option) => {
            const Icon = option.icon;

            return (
              <a
                key={option.title}
                href={option.href}
                target={option.href.startsWith("http") ? "_blank" : undefined}
                rel={option.href.startsWith("http") ? "noreferrer" : undefined}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${option.iconClass}`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>

                  <ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#1597c9]" />
                </div>

                <h2 className="mt-7 text-xl font-semibold text-slate-950">
                  {option.title}
                </h2>

                <p className="mt-3 break-words text-base font-medium text-slate-800">
                  {option.value}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {option.description}
                </p>

                <span className="mt-6 inline-flex text-sm font-semibold text-[#1597c9]">
                  {option.action}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6757d9]">
              Send an Enquiry
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Tell us how we can help.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Use the form to send your enquiry to MercyCare. Choose the
              category that best describes what you need so your message can
              be directed appropriately when the enquiry system is connected.
            </p>

            <div className="mt-8 rounded-3xl bg-slate-950 p-7 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e6a23c]">
                Need a specific pathway?
              </p>

              <div className="mt-5 space-y-3">
                {pathways.map((pathway) => {
                  const Icon = pathway.icon;

                  return (
                    <Link
                      key={pathway.title}
                      href={pathway.href}
                      className="group flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#e6a23c]">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>

                      <span>
                        <span className="font-semibold">{pathway.title}</span>
                        <span className="mt-1 block text-sm text-slate-300">
                          {pathway.description}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-gradient-to-br from-[#1597c9] to-[#6757d9] p-8 text-white shadow-xl sm:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
                MercyCare
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Wellness With Dignity
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/85">
                Where Compassion Meets Dignity. Reach out and let us know how
                we can connect you with the right MercyCare pathway.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1597c9] transition hover:bg-slate-100"
            >
              Contact Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
