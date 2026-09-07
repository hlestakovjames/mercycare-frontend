import Header from "@/components/layout/Header";
import UtilityBar from "@/components/layout/UtilityBar";
import Footer from "@/components/layout/Footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <UtilityBar />
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
