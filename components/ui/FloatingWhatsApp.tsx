import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/254107631070";

export default function FloatingWhatsApp() {
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MercyCare on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-black/15 transition-all duration-200 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 sm:bottom-6 sm:right-6"
    >
      <MessageCircle
        className="h-5 w-5 shrink-0"
        strokeWidth={2.25}
        aria-hidden="true"
      />

      <span className="hidden text-sm font-semibold sm:inline">
        Chat with MercyCare
      </span>
    </Link>
  );
}
