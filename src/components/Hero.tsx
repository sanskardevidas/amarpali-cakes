import React from "react";
import { Button } from "./Button";
import { CakeSlice, Heart, Sparkles } from "lucide-react";
import heroBg from "../assets/cakes/backcake.jpg";

export const Hero: React.FC = () => {
  const whatsappUrl =
    "https://wa.me/917720958825?text=Hello%20Amrapali%20Cakes,%20I%20want%20to%20order%20a%20cake.";

  const scrollToCategories = () => {
    const section = document.getElementById("categories");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden text-center"
    >
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Amrapali Cakes hero background"
          className="h-full w-full object-cover object-[50%_38%] sm:object-center"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.24),rgba(0,0,0,0.42))] sm:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.30),rgba(0,0,0,0.46))]" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-6 py-16 text-white animate-fadeInUp sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-pink-300 sm:text-xs">
          Freshly Baked With Love
        </p>

        <h1 className="font-playfair text-[3.25rem] font-bold leading-[0.95] sm:text-6xl lg:text-7xl">
          Delight in <br /> Every Bite
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85 sm:mt-6 sm:text-lg">
          Handcrafted custom cakes made for birthdays, anniversaries,
          theme parties and special celebrations in Pimpri, Pune.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={whatsappUrl} variant="primary">
            Order on WhatsApp
          </Button>

          <Button onClick={scrollToCategories} variant="secondary">
            View Cake Categories
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
          <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
            <CakeSlice size={16} />
            Freshly Baked
          </span>

          <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
            <Sparkles size={16} />
            Custom Designs
          </span>

          <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
            <Heart size={16} />
            Made with Love
          </span>
        </div>
      </div>
    </section>
  );
};