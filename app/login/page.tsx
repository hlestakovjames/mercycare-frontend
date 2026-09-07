import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              MercyCare
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1B3A]">
              Welcome back
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Sign in to access your MercyCare account.
            </p>
          </div>

          {/* Login Card */}
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
            <form className="space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#0B1B3A]"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0B1B3A] focus:ring-2 focus:ring-[#0B1B3A]/10"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-[#0B1B3A]"
                  >
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-xs font-semibold text-[#0B1B3A] hover:text-[#D4AF37]"
                  >
                    Forgot password?
                  </Link>
                </div>

                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  required
                  className="block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0B1B3A] focus:ring-2 focus:ring-[#0B1B3A]/10"
                />
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-[#0B1B3A] focus:ring-[#0B1B3A]"
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
                className="w-full rounded-full bg-[#0B1B3A] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#D4AF37] hover:text-[#0B1B3A]"
              >
                Sign In
              </button>
            </form>

            {/* Account notice */}
            <div className="mt-8 border-t border-slate-200 pt-6 text-center">
              <p className="text-sm text-slate-600">
                Don't have a MercyCare account?
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Account access may be provided for authorised clients,
                caregivers, staff, partners and administrators.
              </p>
            </div>
          </div>

          {/* Back to website */}
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm font-semibold text-[#0B1B3A] hover:text-[#D4AF37]"
            >
              ← Back to MercyCare website
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}