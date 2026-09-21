"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const enquiryTypes = [
  "General Enquiry",
  "Service Enquiry",
  "Partnership",
  "Referral / Care Enquiry",
  "Feedback",
  "Other",
];

const contactMethods = [
  {
    label: "Email",
    icon: Mail,
  },
  {
    label: "Phone",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    icon: MessageCircle,
  },
];

export default function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    /*
     * Frontend-only workflow for now.
     * This will later submit to the MercyCare backend/API.
     */
    window.setTimeout(() => {
      router.push("/contact/confirmation");
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="full-name"
            className="mb-2 block text-sm font-semibold text-slate-800"
          >
            Full Name <span className="text-[#1597c9]">*</span>
          </label>
          <input
            id="full-name"
            name="fullName"
            type="text"
            required
            placeholder="Your full name"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1597c9] focus:ring-4 focus:ring-[#1597c9]/10"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-slate-800"
          >
            Email Address <span className="text-[#1597c9]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1597c9] focus:ring-4 focus:ring-[#1597c9]/10"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-slate-800"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+254 ..."
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1597c9] focus:ring-4 focus:ring-[#1597c9]/10"
          />
        </div>

        <div>
          <label
            htmlFor="enquiry-type"
            className="mb-2 block text-sm font-semibold text-slate-800"
          >
            Enquiry Type <span className="text-[#1597c9]">*</span>
          </label>
          <select
            id="enquiry-type"
            name="enquiryType"
            required
            defaultValue=""
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-[#1597c9] focus:ring-4 focus:ring-[#1597c9]/10"
          >
            <option value="" disabled>
              Select an enquiry type
            </option>

            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-semibold text-slate-800"
        >
          Subject <span className="text-[#1597c9]">*</span>
        </label>

        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="What would you like to talk to us about?"
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1597c9] focus:ring-4 focus:ring-[#1597c9]/10"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold text-slate-800"
        >
          Message <span className="text-[#1597c9]">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us how we can help..."
          className="w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1597c9] focus:ring-4 focus:ring-[#1597c9]/10"
        />
      </div>

      <fieldset>
        <legend className="mb-3 block text-sm font-semibold text-slate-800">
          Preferred Contact Method
        </legend>

        <div className="grid gap-3 sm:grid-cols-3">
          {contactMethods.map(({ label, icon: Icon }) => (
            <label
              key={label}
              className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 transition hover:border-[#1597c9] hover:bg-[#1597c9]/5"
            >
              <input
                type="radio"
                name="preferredContactMethod"
                value={label}
                defaultChecked={label === "Email"}
                className="accent-[#1597c9]"
              />

              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-[#1597c9] transition group-hover:bg-[#1597c9]/10">
                <Icon className="h-4 w-4" strokeWidth={2} />
              </span>

              <span className="font-medium">{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex cursor-pointer items-start gap-3 rounded-2xl bg-slate-50 p-4">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 accent-[#1597c9]"
        />

        <span className="text-sm leading-6 text-slate-600">
          I agree that MercyCare may use the information I provide to respond
          to my enquiry.
        </span>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1597c9] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1597c9]/20 transition hover:bg-[#117fa9] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        <Send className="h-4 w-4" strokeWidth={2} />

        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </button>

      <p className="text-xs leading-5 text-slate-500">
        This contact form is currently a frontend demonstration. Enquiries
        will be connected to the MercyCare backend and notification system
        when the contact API is implemented.
      </p>
    </form>
  );
}
