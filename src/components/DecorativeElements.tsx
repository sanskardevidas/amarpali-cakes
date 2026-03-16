import React from "react";

export const DecorativeElements: React.FC = () => {
  return (
    <>
      {/* Soft blurred pink blobs */}
      <div
        className="pointer-events-none absolute left-6 top-12 h-20 w-20 rounded-full bg-accent-pink/10 blur-2xl animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="pointer-events-none absolute right-10 top-20 h-16 w-16 rounded-full bg-blush-pink/20 blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="pointer-events-none absolute bottom-16 left-1/4 h-14 w-14 rounded-full bg-dark-rose/10 blur-xl animate-float"
        style={{ animationDelay: "1.8s" }}
      />

      {/* Small berry dots */}
      <div
        className="pointer-events-none absolute left-[12%] top-[18%] h-4 w-4 rounded-full bg-accent-pink/35 animate-float"
        style={{ animationDelay: "0.4s" }}
      />
      <div
        className="pointer-events-none absolute right-[16%] top-[28%] h-3 w-3 rounded-full bg-dark-rose/25 animate-float"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="pointer-events-none absolute bottom-[22%] right-[28%] h-5 w-5 rounded-full bg-blush-pink/40 animate-float"
        style={{ animationDelay: "0.9s" }}
      />

      {/* Soft petals */}
      <div
        className="pointer-events-none absolute left-[18%] top-[22%] h-3 w-7 rotate-[-25deg] rounded-full bg-white/60 animate-float"
        style={{ animationDelay: "0.7s" }}
      />
      <div
        className="pointer-events-none absolute right-[14%] top-[16%] h-3 w-6 rotate-[30deg] rounded-full bg-white/50 animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="pointer-events-none absolute bottom-[26%] left-[10%] h-3 w-7 rotate-[20deg] rounded-full bg-[#ffdbe4]/70 animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Chocolate/cream drop hints */}
      <div
        className="pointer-events-none absolute left-[8%] bottom-[18%] h-5 w-3 rounded-full bg-white/70 animate-float"
        style={{ animationDelay: "1.1s" }}
      />
      <div
        className="pointer-events-none absolute right-[8%] bottom-[20%] h-4 w-3 rounded-full bg-white/60 animate-float"
        style={{ animationDelay: "1.7s" }}
      />

      {/* Tiny sprinkles */}
      <div
        className="pointer-events-none absolute left-[30%] top-[12%] h-1 w-5 rotate-12 rounded-full bg-accent-pink/35 animate-float"
        style={{ animationDelay: "0.3s" }}
      />
      <div
        className="pointer-events-none absolute right-[26%] bottom-[30%] h-1 w-4 -rotate-12 rounded-full bg-dark-rose/30 animate-float"
        style={{ animationDelay: "1.3s" }}
      />
      <div
        className="pointer-events-none absolute left-[42%] bottom-[14%] h-1 w-4 rotate-45 rounded-full bg-blush-pink/45 animate-float"
        style={{ animationDelay: "2.1s" }}
      />
    </>
  );
};