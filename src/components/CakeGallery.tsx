import React from "react";
import { DecorativeElements } from "./DecorativeElements";

import cake1 from "../assets/cakes/cake1.jpg";
import cake2 from "../assets/cakes/cake2.jpg";
import cake3 from "../assets/cakes/cake3.jpg";
import cake4 from "../assets/cakes/cake4.jpg";
import cake5 from "../assets/cakes/cake5.jpg";
import cake6 from "../assets/cakes/cake6.jpg";
import cake7 from "../assets/cakes/cake7.jpg";
import cake8 from "../assets/cakes/cake8.jpg";

export const CakeGallery: React.FC = () => {
  const images = [
    cake1,
    cake2,
    cake3,
    cake4,
    cake5,
    cake6,
    cake7,
    cake8,
  ];

  return (
    <section className="relative overflow-hidden bg-soft-cream py-20 lg:py-24">
      <DecorativeElements />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-14 max-w-2xl space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-pink">
            Our Creations
          </p>

          <h2 className="font-playfair text-4xl font-bold text-text-primary lg:text-6xl">
            Our Cake Creations
          </h2>

          <p className="text-base leading-7 text-text-primary/70 lg:text-lg">
            A glimpse of the beautiful cakes we have crafted for our wonderful
            customers.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[26px] bakery-shadow transition-all duration-500 hover:bakery-shadow-lg"
            >
              <img
                src={image}
                alt={`Cake ${index + 1}`}
                className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20"></div>
    </section>
  );
};