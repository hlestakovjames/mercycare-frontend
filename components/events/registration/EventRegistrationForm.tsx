"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type EventRegistrationFormProps = {
  slug: string;
};

export default function EventRegistrationForm({
  slug,
}: EventRegistrationFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    attendanceType: "Individual",
    organization: "",
    additionalNotes: "",
    consent: false,
  });

  const [error, setError] = useState("");

  function updateField(
    field: keyof typeof formData,
    value: string | boolean,
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!formData.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!formData.consent) {
      setError(
        "Please confirm that the information provided is accurate and that you agree to the registration terms.",
      );
      return;
    }

    /*
     * Frontend-only registration flow.
     *
     * The actual API submission will be connected when the
     * MercyCare backend registration service is implemented.
     */
    sessionStorage.setItem(
      `mercycare-event-registration-${slug}`,
      JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString(),
      }),
    );

    router.push(`/events/${slug}/register/confirmation`);
  }

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
              Attendee Information
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
              Tell us about yourself
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Provide the information below so MercyCare can prepare for event
              participation. Required fields are marked with an asterisk.
            </p>
          </div>

          {error && (
            <div
              role="alert"
              className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
            >
              {error}
            </div>
          )}

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-[#0B1B3A]"
              >
                Full Name *
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                value={formData.fullName}
                onChange={(event) =>
                  updateField("fullName", event.target.value)
                }
                placeholder="Enter your full name"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#0B1B3A]"
              >
                Email Address *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={(event) =>
                  updateField("email", event.target.value)
                }
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-[#0B1B3A]"
              >
                Phone Number *
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={(event) =>
                  updateField("phone", event.target.value)
                }
                placeholder="+254..."
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
              />
            </div>

            <div>
              <label
                htmlFor="attendanceType"
                className="block text-sm font-semibold text-[#0B1B3A]"
              >
                Attendance Type
              </label>

              <select
                id="attendanceType"
                name="attendanceType"
                value={formData.attendanceType}
                onChange={(event) =>
                  updateField("attendanceType", event.target.value)
                }
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
              >
                <option>Individual</option>
                <option>Family</option>
                <option>Caregiver</option>
                <option>Community Group</option>
                <option>Partner Organization</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-semibold text-[#0B1B3A]"
              >
                Organization / Group
              </label>

              <input
                id="organization"
                name="organization"
                type="text"
                value={formData.organization}
                onChange={(event) =>
                  updateField("organization", event.target.value)
                }
                placeholder="Optional"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="additionalNotes"
                className="block text-sm font-semibold text-[#0B1B3A]"
              >
                Additional Notes
              </label>

              <textarea
                id="additionalNotes"
                name="additionalNotes"
                rows={5}
                value={formData.additionalNotes}
                onChange={(event) =>
                  updateField("additionalNotes", event.target.value)
                }
                placeholder="Anything you would like the event team to know?"
                className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
              />
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(event) =>
                  updateField("consent", event.target.checked)
                }
                className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0F766E] focus:ring-[#0F766E]"
              />

              <span className="text-sm leading-6 text-slate-600">
                I confirm that the information I have provided is accurate and
                I agree to provide these details for the purpose of event
                registration and related event communication.
              </span>
            </label>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-slate-500">
              Your information will be connected to MercyCare&apos;s
              registration service when the backend is integrated.
            </p>

            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#0F766E] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#0B625D]"
            >
              Continue Registration
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
