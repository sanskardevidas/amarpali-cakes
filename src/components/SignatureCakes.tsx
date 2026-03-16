import React from "react";
import { Star } from "lucide-react";
import { Button } from "./Button";
import { DecorativeElements } from "./DecorativeElements";

interface CakeCardProps {
  name: string;
  price: number;
  image: string;
}

const CakeCard: React.FC<CakeCardProps> = ({ name, price, image }) => {
  const whatsappUrl = `https://wa.me/917720958825?text=${encodeURIComponent(
    `Hello Amrapali Cakes, I want to order the ${name}.`
  )}`;

  return (
    <div className="group overflow-hidden rounded-2xl bg-card-bg bakery-shadow transition-all duration-500 hover:-translate-y-1 hover:bakery-shadow-lg sm:rounded-[24px] lg:rounded-[28px]">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-56 lg:h-64"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>

      <div className="space-y-3 p-4 sm:p-5">
        <h3 className="font-playfair text-lg font-semibold leading-snug text-text-primary sm:text-xl lg:text-2xl">
          {name}
        </h3>

        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={14}
              className="fill-accent-pink text-accent-pink"
            />
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-xl font-semibold text-accent-pink sm:text-2xl">
            ₹{price}
          </p>
          <span className="text-xs text-text-primary/55 sm:text-sm">
            Best Seller
          </span>
        </div>

        <Button href={whatsappUrl} variant="primary" fullWidth>
          Order Now
        </Button>
      </div>
    </div>
  );
};

export const SignatureCakes: React.FC = () => {
  const cakes = [
    {
      name: "Chocolate Truffle Cake",
      price: 900,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Red Velvet Cake",
      price: 1100,
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Butterscotch Cake",
      price: 850,
      image:
        "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Black Forest Cake",
      price: 800,
      image:
        "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Pineapple Cake",
      price: 750,
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-soft-cream py-12 sm:py-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,210,220,0.22),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,246,248,0.82)_0%,rgba(255,246,248,0.92)_45%,rgba(255,246,248,1)_100%)]" />

      <DecorativeElements />

      <div className="container relative z-10 mx-auto px-14 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto mb-10 max-w-2xl text-center space-y-3 sm:mb-12 sm:space-y-4 lg:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-pink sm:text-xs sm:tracking-[0.25em]">
            Bakery Favorites
          </p>

          <h2 className="font-playfair text-3xl font-bold text-text-primary sm:text-4xl lg:text-6xl">
            Signature Cakes
          </h2>

          <p className="text-sm leading-6 text-text-primary/70 sm:text-base sm:leading-7 lg:text-lg">
            Our most loved creations, handcrafted to make every celebration
            sweeter and more memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-5 lg:gap-8">
          {cakes.map((cake) => (
            <CakeCard key={cake.name} {...cake} />
          ))}
        </div>
      </div>

      {/* smooth blend into next pink section */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-b from-transparent via-bakery-pink/35 to-bakery-pink sm:h-24 lg:h-28" />
    </section>
  );
};