import React from "react";
import { Button } from "./Button";
import { DecorativeElements } from "./DecorativeElements";

interface OfferCardProps {
  title: string;
  description: string;
  image: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ title, description, image }) => {
  const whatsappUrl = `https://wa.me/917720958825?text=${encodeURIComponent(
    `Hello Amrapali Cakes, I want to know about the ${title} offer.`
  )}`;

  return (
    <div className="group overflow-hidden rounded-2xl sm:rounded-[24px] lg:rounded-[28px] bg-card-bg bakery-shadow transition-all duration-500 hover:-translate-y-1 hover:bakery-shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-60 lg:h-64"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>

      <div className="space-y-3 p-4 text-center sm:space-y-4 sm:p-5 lg:p-6">
        <h3 className="font-playfair text-xl font-semibold leading-snug text-text-primary sm:text-2xl">
          {title}
        </h3>

        <p className="text-sm leading-6 text-text-primary/70 sm:leading-7 lg:text-base">
          {description}
        </p>

        <Button href={whatsappUrl} variant="primary">
          Order Now
        </Button>
      </div>
    </div>
  );
};

export const SpecialOffers: React.FC = () => {
  const offers = [
    {
      title: "Flat 20% OFF on Celebration Cakes",
      description:
        "Enjoy a flat 20% discount on birthday and anniversary cakes crafted with love.",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Free Same-Day Delivery",
      description:
        "Get your cake delivered on the same day at no extra cost. Order before 6 PM.",
      image:
        "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Cake + Cupcakes Combo Offer",
      description:
        "Order any cake and get 4 delicious cupcakes free. Perfect for parties and celebrations.",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-blush-pink py-12 sm:py-16 lg:py-24">
      <DecorativeElements />

      <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto mb-10 max-w-2xl space-y-3 text-center sm:mb-12 sm:space-y-4 lg:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dark-rose sm:text-xs sm:tracking-[0.25em]">
            Sweet Savings
          </p>

          <h2 className="font-playfair text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-6xl">
            Special Offers
          </h2>

          <p className="text-sm leading-6 text-text-primary/70 sm:text-base sm:leading-7 lg:text-lg">
            Delightful deals crafted to make your celebrations even sweeter.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {offers.map((offer) => (
            <OfferCard key={offer.title} {...offer} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-b from-transparent via-[#f2d4dc] to-soft-cream sm:h-24 lg:h-28" />
    </section>
  );
};