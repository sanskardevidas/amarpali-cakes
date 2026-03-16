import React from "react";
import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react";
import { Button } from "./Button";

import { DecorativeElements } from "./DecorativeElements";

export const Contact: React.FC = () => {
  const whatsappUrl =
    "https://wa.me/917720958825?text=Hello%20Amrapali%20Cakes,%20I%20want%20to%20order%20a%20cake.";
  const callUrl = "tel:+917720958825";
  const instagramUrl = "https://www.instagram.com/amrapalis_cake_/";

  return (
    <section className="relative overflow-hidden bg-soft-cream py-20 lg:py-24">
      <DecorativeElements />

      <div className="container relative z-10 mx-auto px-14">
        <div className="mx-auto mb-14 max-w-2xl text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-pink">
            Contact & Orders
          </p>

          <h2 className="font-playfair text-4xl font-bold text-text-primary lg:text-6xl">
            Contact Us
          </h2>

          <p className="text-base leading-7 text-text-primary/70 lg:text-lg">
            We’re here to make your celebrations sweeter. Reach out to us for
            custom cakes, delivery details, and WhatsApp orders.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          {/* Left Side */}
          <div className="rounded-[30px] bg-card-bg p-8 bakery-shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="font-playfair text-3xl font-semibold text-text-primary">
                  Amrapali Cakes
                </h3>
                <p className="mt-2 text-text-primary/70">
                  Freshly baked with love for birthdays, anniversaries, and
                  every special celebration.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bakery-pink text-accent-pink">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-text-primary/55">Phone / WhatsApp</p>
                    <a
                      href={callUrl}
                      className="mt-1 block font-medium text-text-primary hover:text-accent-pink transition-colors"
                    >
                      +91 7720958825
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bakery-pink text-accent-pink">
                    <Instagram size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-text-primary/55">Instagram</p>
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block font-medium text-text-primary hover:text-accent-pink transition-colors"
                    >
                      @amrapalis_cake_
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <Button href={whatsappUrl} variant="primary">
                  Order on WhatsApp
                </Button>

                <Button href={callUrl} variant="secondary">
                  Call Now
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side Map */}
          <div className="overflow-hidden rounded-[30px] bg-card-bg p-3 bakery-shadow-lg">
            <div className="h-[420px] overflow-hidden rounded-[24px]">
              <iframe
                title="Amrapali Cakes Location"
                src="https://maps.google.com/maps?q=18.6238801,73.8190612&z=16&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-[20px] bg-bakery-pink/40 px-4 py-3 text-sm text-text-primary/75">
              <MessageCircle size={16} className="text-accent-pink" />
              Easy WhatsApp ordering available for quick cake bookings.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
      </div>
    </section>
  );
};