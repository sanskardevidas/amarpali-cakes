import React from "react";
import { Button } from "./Button";
import { DecorativeElements } from "./DecorativeElements";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  image,
}) => {
  const whatsappUrl = `https://wa.me/917720958825?text=${encodeURIComponent(
    `Hello Amrapali Cakes, I want to order a ${title}.`
  )}`;

  return (
    <div className="group overflow-hidden rounded-2xl sm:rounded-[24px] lg:rounded-[28px] bg-card-bg bakery-shadow transition-all duration-500 hover:-translate-y-1 hover:bakery-shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-56 lg:h-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>

      <div className="space-y-3 p-4 sm:space-y-4 sm:p-5">
        <h3 className="font-playfair text-xl font-semibold leading-snug text-text-primary sm:text-2xl">
          {title}
        </h3>

        <p className="text-sm leading-6 text-text-primary/70 sm:leading-7 lg:text-base">
          {description}
        </p>

        <Button href={whatsappUrl} variant="primary" fullWidth>
          Order Now
        </Button>
      </div>
    </div>
  );
};

export const CakeCategories: React.FC = () => {
  const categories = [
    {
      title: "Birthday Cakes",
      description: "Make birthdays unforgettable with beautiful custom cakes.",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Anniversary Cakes",
      description: "Elegant cakes for precious celebrations.",
      image:
        "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Kids Theme Cakes",
      description: "Fun and creative cakes for little smiles.",
      image:
        "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Party Cakes",
      description: "Perfect cakes for every special gathering.",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Chocolate Cakes",
      description: "Rich and indulgent creations for chocolate lovers.",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Cupcakes",
      description: "Mini delights for parties and gifting.",
      image:
        "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Designer Cakes",
      description: "Luxury handcrafted cakes with artistic designs.",
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Custom Cakes",
      description: "Create your own cake with unique design and flavor.",
      image:
        "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section
      id="categories"
      className="relative overflow-hidden bg-bakery-pink py-12 sm:py-16 lg:py-24"
    >
      <DecorativeElements />

      <div className="container relative z-10 mx-auto px-14 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center space-y-3 sm:mb-12 sm:space-y-4 lg:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-pink sm:text-xs sm:tracking-[0.25em]">
            Browse by Occasion
          </p>

          <h2 className="font-playfair text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-6xl">
            Cake Categories
          </h2>

          <p className="text-sm leading-6 text-text-primary/70 sm:text-base sm:leading-7 lg:text-lg">
            Find the perfect cake for every celebration, from birthdays and
            anniversaries to custom themed creations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-b from-transparent to-bakery-pink sm:h-20 lg:h-24" />
    </section>
  );
};