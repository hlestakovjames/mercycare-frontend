import Header from "@/components/layout/Header";
import UtilityBar from "@/components/layout/UtilityBar";
import Footer from "@/components/layout/Footer";
import InternalRelationships from "@/components/navigation/InternalRelationships";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <UtilityBar />
      <Header />

      <main>
        {children}
        <InternalRelationships />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}
