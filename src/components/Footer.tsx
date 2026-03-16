import React from "react";
import { Instagram, Phone, MapPin, MessageCircle } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bakery-pink pt-10 pb-6 px-6 sm:px-10 lg:px-16">
  <div className="mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-3 gap-6">

    {/* Brand */}
    <div className="space-y-3">
      <h3 className="font-playfair text-2xl text-text-primary">
        Amrapali Cakes
      </h3>
      <p className="text-sm text-text-primary/70 leading-6">
        Freshly baked with love for birthdays, anniversaries, and every sweet celebration.
      </p>
    </div>


    {/* Contact */}
    <div className="space-y-3">
      <h4 className="font-playfair text-xl text-text-primary">
        Contact
      </h4>

      <div className="text-sm text-text-primary/70 space-y-2 leading-6">
        <p>+91 7720958825</p>
        <p>Order on WhatsApp</p>
        <p>
          515/2935, Akshay Society,<br/>
          Sant Tukaram Nagar,<br/>
          Pimpri, Pune 411018
        </p>
      </div>
    </div>

  </div>

  {/* Bottom */}
  <div className="mt-8 border-t border-soft-border pt-4 text-center text-sm text-text-primary/60">
    © 2026 Amrapali Cakes. All rights reserved.
  </div>
</footer>
  );
};