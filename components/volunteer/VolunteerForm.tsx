"use client";

import { FormEvent, useState } from "react";

export default function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
  }

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Volunteer Application
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
            Tell us how you would like to help.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Complete the form below and the MercyCare team can learn more
            about your interests and availability.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-6 rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-100 sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="text-sm font-semibold text-[#0B1B3A]"
              >
                First name
              </label>

              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="text-sm font-semibold text-[#0B1B3A]"
              >
                Last name
              </label>

              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-semibold text-[#0B1B3A]"
            >
              Email address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="text-sm font-semibold text-[#0B1B3A]"
            >
              Phone number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
            />
          </div>

          <div>
            <label
              htmlFor="interest"
              className="text-sm font-semibold text-[#0B1B3A]"
            >
              Area of interest
            </label>

            <select
              id="interest"
              name="interest"
              required
              defaultValue=""
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
            >
              <option value="" disabled>
                Select an area
              </option>
              <option value="community">
                Community Activities
              </option>
              <option value="tuko-pamoja">
                Tuko Pamoja — Senior Wellness
              </option>
              <option value="mama-na-mtoto">
                Mama na Mtoto
              </option>
              <option value="events">
                Events & Outreach
              </option>
              <option value="professional">
                Professional / Technical Skills
              </option>
              <option value="other">
                Other
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="availability"
              className="text-sm font-semibold text-[#0B1B3A]"
            >
              Availability
            </label>

            <select
              id="availability"
              name="availability"
              required
              defaultValue=""
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
            >
              <option value="" disabled>
                Select your availability
              </option>
              <option value="weekdays">Weekdays</option>
              <option value="weekends">Weekends</option>
              <option value="both">Weekdays & weekends</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-sm font-semibold text-[#0B1B3A]"
            >
              Tell us more
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your interests, experience, or how you would like to contribute."
              className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
            />
          </div>

          {submitted && (
            <div className="rounded-xl bg-green-50 p-4 text-sm text-green-700">
              Thank you for your interest in volunteering with MercyCare.
              Your application is ready to be connected to our volunteer
              system.
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-[#0B1B3A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#D4AF37] hover:text-[#0B1B3A]"
          >
            Submit Volunteer Interest
          </button>
        </form>
      </div>
    </section>
  );
}