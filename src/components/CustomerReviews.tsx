import React from "react";
import { Star } from "lucide-react";
import { DecorativeElements } from "./DecorativeElements";

interface Review {
  name: string;
  text: string;
}

export const CustomerReviews: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "Priya Sharma",
      text: "Absolutely amazing cake! Beautiful design and delicious taste.",
    },
    {
      name: "Rohan Mehta",
      text: "Ordered birthday cake and delivery was on time. Everyone loved it.",
    },
    {
      name: "Sneha Kulkarni",
      text: "Best cake in Pimpri! Fresh, soft and beautifully decorated.",
    },
    {
      name: "Amit Patil",
      text: "Ordered custom cake and it looked exactly like what we wanted.",
    },
    {
      name: "Neha Shah",
      text: "Cupcakes and macarons were fantastic. Highly recommended.",
    },
    {
      name: "Kunal Desai",
      text: "Anniversary cake was perfect. Tasted amazing and looked beautiful.",
    },
    {
      name: "Aarti Joshi",
      text: "Very smooth WhatsApp ordering and quick response.",
    },
  ];

  const repeatedReviews = [...reviews, ...reviews];

  return (
    <section className="relative overflow-hidden bg-bakery-pink py-20 lg:py-24">
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-20 w-full bg-gradient-to-b from-soft-cream to-bakery-pink sm:h-24 lg:h-28" />
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-20 w-full bg-gradient-to-b from-bakery-pink to-soft-cream sm:h-24 lg:h-28" />

      <DecorativeElements />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-pink">
            Loved by Our Customers
          </p>

          <h2 className="font-playfair text-4xl font-bold text-text-primary lg:text-6xl">
            What Our Customers Say
          </h2>

          <p className="text-base leading-7 text-text-primary/70 lg:text-lg">
            Sweet reviews from happy customers who made their celebrations more
            special with Amrapali Cakes.
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="animate-scroll flex w-max gap-6">
            {repeatedReviews.map((review, index) => (
              <div
                key={index}
                className="w-[320px] shrink-0 rounded-[28px] bg-card-bg p-6 bakery-shadow transition-all duration-300 hover:-translate-y-1 hover:bakery-shadow-lg"
              >
                <div className="mb-4 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className="fill-accent-pink text-accent-pink"
                    />
                  ))}
                </div>

                <p className="mb-6 text-sm leading-7 text-text-primary/75 lg:text-base">
                  “{review.text}”
                </p>

                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blush-pink text-sm font-semibold text-dark-rose">
                    {review.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <div>
                    <p className="font-medium text-text-primary">{review.name}</p>
                    <p className="text-sm text-text-primary/55">Happy Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20"></div>
    </section>
  );
};