"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";

type DonationFrequency = "one-time" | "monthly";

type SupportArea =
  | "most-needed"
  | "tuko-pamoja"
  | "mama-na-mtoto"
  | "community"
  | "other";

const presetAmounts = [500, 1000, 2500, 5000];

const supportAreas: {
  value: SupportArea;
  label: string;
}[] = [
  {
    value: "most-needed",
    label: "Where most needed",
  },
  {
    value: "tuko-pamoja",
    label: "Tuko Pamoja",
  },
  {
    value: "mama-na-mtoto",
    label: "Mama na Mtoto",
  },
  {
    value: "community",
    label: "Community initiatives",
  },
  {
    value: "other",
    label: "Other",
  },
];

export default function GivePage() {
  const [frequency, setFrequency] =
    useState<DonationFrequency>("one-time");

  const [amount, setAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [supportArea, setSupportArea] =
    useState<SupportArea>("most-needed");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("mpesa");

  const [submitted, setSubmitted] = useState(false);

  const selectedAmount = useMemo(() => {
    if (amount !== null) {
      return amount;
    }

    const parsed = Number(customAmount);

    return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
  }, [amount, customAmount]);

  function handlePresetAmount(value: number) {
    setAmount(value);
    setCustomAmount("");
  }

  function handleCustomAmountChange(
    value: string,
  ) {
    setAmount(null);
    setCustomAmount(value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (selectedAmount <= 0) {
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="rounded-3xl bg-slate-50 p-8 text-center ring-1 ring-slate-200 sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-2xl text-cyan-700">
              ✓
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Donation Details Received
            </p>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Thank you for supporting MercyCare
            </h1>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              Your donation details have been captured in this frontend
              payment experience. Actual payment processing will be connected
              when MercyCare&apos;s secure payment infrastructure is available.
            </p>

            <div className="mt-8 rounded-2xl bg-white p-6 text-left ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <span className="text-sm text-slate-500">
                  Donation amount
                </span>

                <span className="font-semibold text-slate-900">
                  KSh {selectedAmount.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-slate-100 py-4">
                <span className="text-sm text-slate-500">
                  Frequency
                </span>

                <span className="font-semibold capitalize text-slate-900">
                  {frequency === "one-time"
                    ? "One-time"
                    : "Monthly"}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 pt-4">
                <span className="text-sm text-slate-500">
                  Support area
                </span>

                <span className="text-right font-semibold text-slate-900">
                  {
                    supportAreas.find(
                      (area) =>
                        area.value === supportArea,
                    )?.label
                  }
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/donate"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-white"
              >
                Back to Support MercyCare
              </Link>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="rounded-full bg-cyan-700 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-800"
              >
                Make Another Donation
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Support MercyCare
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Make a Donation
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Your contribution can help support MercyCare&apos;s work in care,
            wellbeing, programs, projects, and community initiatives.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]"
        >
          <div className="space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                  01
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Choose donation frequency
                </h2>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() =>
                    setFrequency("one-time")
                  }
                  className={`rounded-2xl border p-5 text-left transition ${
                    frequency === "one-time"
                      ? "border-cyan-600 bg-cyan-50 ring-2 ring-cyan-100"
                      : "border-slate-200 hover:border-cyan-200"
                  }`}
                >
                  <span className="font-semibold text-slate-900">
                    One-time
                  </span>

                  <span className="mt-1 block text-sm text-slate-500">
                    Make a single contribution.
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setFrequency("monthly")
                  }
                  className={`rounded-2xl border p-5 text-left transition ${
                    frequency === "monthly"
                      ? "border-cyan-600 bg-cyan-50 ring-2 ring-cyan-100"
                      : "border-slate-200 hover:border-cyan-200"
                  }`}
                >
                  <span className="font-semibold text-slate-900">
                    Monthly
                  </span>

                  <span className="mt-1 block text-sm text-slate-500">
                    Provide recurring monthly support.
                  </span>
                </button>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                  02
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Choose donation amount
                </h2>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {presetAmounts.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() =>
                      handlePresetAmount(value)
                    }
                    className={`rounded-2xl border px-4 py-4 text-sm font-semibold transition ${
                      amount === value
                        ? "border-cyan-600 bg-cyan-50 text-cyan-800 ring-2 ring-cyan-100"
                        : "border-slate-200 text-slate-700 hover:border-cyan-200"
                    }`}
                  >
                    KSh {value.toLocaleString()}
                  </button>
                ))}
              </div>

              <div className="mt-5">
                <label
                  htmlFor="customAmount"
                  className="text-sm font-semibold text-slate-700"
                >
                  Custom amount
                </label>

                <div className="mt-2 flex overflow-hidden rounded-2xl border border-slate-300 bg-white focus-within:border-cyan-600 focus-within:ring-2 focus-within:ring-cyan-100">
                  <span className="flex items-center border-r border-slate-200 px-4 text-sm text-slate-500">
                    KSh
                  </span>

                  <input
                    id="customAmount"
                    type="number"
                    min="1"
                    value={customAmount}
                    onChange={(event) =>
                      handleCustomAmountChange(
                        event.target.value,
                      )
                    }
                    placeholder="Enter amount"
                    className="w-full border-0 px-4 py-3 text-slate-900 outline-none"
                  />
                </div>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                  03
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Choose where to support
                </h2>
              </div>

              <div className="mt-6 space-y-3">
                {supportAreas.map((area) => (
                  <label
                    key={area.value}
                    className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition ${
                      supportArea === area.value
                        ? "border-cyan-600 bg-cyan-50"
                        : "border-slate-200 hover:border-cyan-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="supportArea"
                      value={area.value}
                      checked={
                        supportArea === area.value
                      }
                      onChange={() =>
                        setSupportArea(area.value)
                      }
                      className="h-4 w-4 accent-cyan-700"
                    />

                    <span className="text-sm font-medium text-slate-800">
                      {area.label}
                    </span>
                  </label>
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                  04
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Your information
                </h2>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Full name
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(event) =>
                      setFullName(event.target.value)
                    }
                    placeholder="Your full name"
                    required={!anonymous}
                    disabled={anonymous}
                    className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 disabled:bg-slate-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="you@example.com"
                    required={!anonymous}
                    disabled={anonymous}
                    className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 disabled:bg-slate-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Phone number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) =>
                      setPhone(event.target.value)
                    }
                    placeholder="+254..."
                    required={!anonymous}
                    disabled={anonymous}
                    className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 disabled:bg-slate-100"
                  />
                </div>

                <label className="sm:col-span-2 flex cursor-pointer items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <input
                    type="checkbox"
                    checked={anonymous}
                    onChange={(event) =>
                      setAnonymous(event.target.checked)
                    }
                    className="mt-1 h-4 w-4 accent-cyan-700"
                  />

                  <span>
                    <span className="block text-sm font-semibold text-slate-800">
                      Give anonymously
                    </span>

                    <span className="mt-1 block text-sm leading-6 text-slate-500">
                      Continue without attaching your name and contact
                      details to the donation.
                    </span>
                  </span>
                </label>
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                  05
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Payment method
                </h2>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  {
                    value: "mpesa",
                    label: "M-Pesa",
                    description:
                      "Mobile money payment",
                  },
                  {
                    value: "card",
                    label: "Card",
                    description:
                      "Debit or credit card",
                  },
                  {
                    value: "other",
                    label: "Other",
                    description:
                      "Other supported payment method",
                  },
                ].map((method) => (
                  <label
                    key={method.value}
                    className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition ${
                      paymentMethod === method.value
                        ? "border-cyan-600 bg-cyan-50"
                        : "border-slate-200 hover:border-cyan-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.value}
                      checked={
                        paymentMethod === method.value
                      }
                      onChange={(event) =>
                        setPaymentMethod(
                          event.target.value,
                        )
                      }
                      className="h-4 w-4 accent-cyan-700"
                    />

                    <span>
                      <span className="block text-sm font-semibold text-slate-900">
                        {method.label}
                      </span>

                      <span className="mt-1 block text-sm text-slate-500">
                        {method.description}
                      </span>
                    </span>
                  </label>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
                Payment processing is currently a frontend placeholder.
                No payment will be charged from this interface.
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                Donation summary
              </p>

              <div className="mt-6">
                <p className="text-sm text-slate-500">
                  You are giving
                </p>

                <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
                  KSh{" "}
                  {selectedAmount.toLocaleString()}
                </p>

                <p className="mt-1 text-sm capitalize text-slate-500">
                  {frequency === "one-time"
                    ? "One-time donation"
                    : "Monthly donation"}
                </p>
              </div>

              <div className="mt-8 space-y-4 border-t border-slate-100 pt-6">
                <div className="flex justify-between gap-4">
                  <span className="text-sm text-slate-500">
                    Support area
                  </span>

                  <span className="text-right text-sm font-semibold text-slate-800">
                    {
                      supportAreas.find(
                        (area) =>
                          area.value ===
                          supportArea,
                      )?.label
                    }
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-sm text-slate-500">
                    Payment
                  </span>

                  <span className="text-sm font-semibold uppercase text-slate-800">
                    {paymentMethod === "mpesa"
                      ? "M-Pesa"
                      : paymentMethod === "card"
                        ? "Card"
                        : "Other"}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={selectedAmount <= 0}
                className="mt-8 w-full rounded-full bg-cyan-700 px-6 py-4 text-sm font-semibold text-white transition hover:bg-cyan-800 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Continue to Payment
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                Payment processing will be connected securely when the
                MercyCare payment infrastructure is implemented.
              </p>
            </div>
          </aside>
        </form>
      </div>
    </section>
  );
}
