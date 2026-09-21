"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Brand Panel */}
        <section className="relative hidden overflow-hidden bg-[#0B1B3A] lg:flex lg:w-[46%]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,151,201,0.28),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(103,87,217,0.24),transparent_40%)]" />

          <div className="absolute -right-24 top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-white/10" />

          <div className="relative z-10 flex min-h-screen w-full flex-col justify-between p-10 xl:p-14">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-3 transition-opacity hover:opacity-90"
              >
                <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white p-1.5 shadow-lg">
                  <Image
                    src="/logo.png"
                    alt="MercyCare"
                    fill
                    sizes="48px"
                    className="object-contain"
                    priority
                  />
                </div>

                <div>
                  <p className="text-lg font-bold tracking-tight text-white">
                    MercyCare
                  </p>
                  <p className="text-xs font-medium text-slate-300">
                    Home Health Services
                  </p>
                </div>
              </Link>
            </div>

            <div className="max-w-lg">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
                MercyCare Portal
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white xl:text-5xl">
                Care, support and connection in one place.
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-slate-300">
                Sign in to access your authorised MercyCare account and
                continue your care, support or organisation journey.
              </p>

              <div className="mt-8 h-px w-20 bg-gradient-to-r from-[#1597c9] to-[#6757d9]" />

              <p className="mt-6 text-sm font-medium text-slate-400">
                Where Compassion Meets Dignity
              </p>
            </div>

            <div className="flex items-center justify-between gap-6 text-xs text-slate-400">
              <span>Wellness With Dignity</span>
              <span>© {new Date().getFullYear()} MercyCare</span>
            </div>
          </div>
        </section>

        {/* Login Area */}
        <section className="flex min-h-screen flex-1 items-center justify-center px-5 py-10 sm:px-8 lg:min-h-0 lg:px-12 xl:px-20">
          <div className="w-full max-w-md">
            {/* Mobile Brand */}
            <div className="mb-10 text-center lg:hidden">
              <Link
                href="/"
                className="inline-flex items-center gap-3"
              >
                <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white p-1.5 shadow-sm ring-1 ring-slate-200">
                  <Image
                    src="/logo.png"
                    alt="MercyCare"
                    fill
                    sizes="48px"
                    className="object-contain"
                    priority
                  />
                </div>

                <div className="text-left">
                  <p className="text-lg font-bold tracking-tight text-[#0B1B3A]">
                    MercyCare
                  </p>
                  <p className="text-xs font-medium text-slate-500">
                    Home Health Services
                  </p>
                </div>
              </Link>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597c9]">
                Welcome back
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A] sm:text-4xl">
                Sign in to your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Access your authorised MercyCare portal account securely.
              </p>
            </div>

            {/* Login Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
              <form className="space-y-5">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#0B1B3A]"
                  >
                    Email address
                  </label>

                  <div className="relative">
                    <Mail
                      className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                      className="block w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-[#1597c9] focus:ring-4 focus:ring-[#1597c9]/10"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-[#0B1B3A]"
                    >
                      Password
                    </label>

                    <Link
                      href="/forgot-password"
                      className="text-xs font-semibold text-[#1597c9] transition-colors hover:text-[#6757d9]"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <div className="relative">
                    <LockKeyhole
                      className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      required
                      className="block w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-[#1597c9] focus:ring-4 focus:ring-[#1597c9]/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((current) => !current)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-[#0B1B3A] focus:outline-none focus:ring-2 focus:ring-[#1597c9]/20"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4.5 w-4.5" aria-hidden="true" />
                      ) : (
                        <Eye className="h-4.5 w-4.5" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-[#1597c9] focus:ring-[#1597c9]"
                  />

                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm text-slate-600"
                  >
                    Remember me
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-full bg-[#0B1B3A] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1597c9] hover:shadow-lg hover:shadow-[#1597c9]/20 focus:outline-none focus:ring-4 focus:ring-[#1597c9]/20"
                >
                  Sign In
                </button>
              </form>

              {/* Access Notice */}
              <div className="mt-7 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                <p className="text-xs font-semibold text-[#0B1B3A]">
                  Authorised access
                </p>

                <p className="mt-1.5 text-xs leading-5 text-slate-500">
                  MercyCare portal access may be provided to authorised
                  clients, caregivers, staff, partners and administrators.
                </p>
              </div>
            </div>

            {/* Back to Website */}
            <div className="mt-7 flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-[#1597c9]"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to MercyCare website
              </Link>
            </div>

            <p className="mt-6 text-center text-xs leading-5 text-slate-400 lg:hidden">
              Wellness With Dignity
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
