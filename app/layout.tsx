import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "MercyCare",
    template: "%s | MercyCare",
  },
  description:
    "MercyCare is committed to improving lives, strengthening communities, and creating lasting impact through compassionate care and community-centered initiatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}