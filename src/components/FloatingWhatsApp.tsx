import React from "react";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl =
    "https://wa.me/917720958825?text=Hello%20Amrapali%20Cakes,%20I%20want%20to%20order%20a%20cake.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-5 right-5 z-[999] inline-flex items-center gap-3 rounded-full bg-accent-pink px-5 py-3 text-white bakery-shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-dark-rose"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        <MessageCircle size={20} />
      </span>

      <span className="hidden text-sm font-medium sm:inline">
        Order on WhatsApp
      </span>
    </a>
  );
};