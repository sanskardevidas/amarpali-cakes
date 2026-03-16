import React, { useEffect, useMemo, useState } from "react";
import { Button } from "./Button";
import { DecorativeElements } from "./DecorativeElements";
import { ImagePlus, Upload, X } from "lucide-react";

export const CustomCake: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    clientName: "",
    mobNumber: "",
    date: "",
    time: "",
    flavour: "Chocolate",
    weight: "1kg",
    theme: "",
    message: "",
    details: "",
  });

  const [referenceImage, setReferenceImage] = useState<File | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const imagePreviewUrl = useMemo(() => {
    if (!referenceImage) return "";
    return URL.createObjectURL(referenceImage);
  }, [referenceImage]);

  useEffect(() => {
    return () => {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
    };
  }, [imagePreviewUrl]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setReferenceImage(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello Amrapali Cakes, I want to order a custom cake:

Name of Client: ${formData.clientName}
Mob Number: ${formData.mobNumber}
Date: ${formData.date}
Time: ${formData.time}
Flavour: ${formData.flavour}
Weight: ${formData.weight}
Theme: ${formData.theme || "None"}
Message: ${formData.message || "None"}
Details: ${formData.details || "None"}

Reference cake image: ${
      referenceImage
        ? "I have selected a reference cake image on the website and will send it manually in this WhatsApp chat."
        : "No reference image selected."
    }

Note: Please remind for the cake order on the same day at 10:00 AM.`;

    const whatsappUrl = `https://wa.me/917720958825?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const whatsappUrl =
    "https://wa.me/917720958825?text=Hello%20Amrapali%20Cakes,%20I%20want%20to%20order%20a%20custom%20cake.";

  return (
    <>
      <section className="relative overflow-hidden bg-bakery-pink py-12 sm:py-16 lg:py-24">
        <DecorativeElements />

        <div className="container relative z-10 mx-auto px-14 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center sm:mb-12 sm:space-y-4 lg:mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-pink sm:text-xs sm:tracking-[0.25em]">
              Made Just for You
            </p>

            <h2 className="font-playfair text-3xl font-bold leading-[1.05] text-text-primary sm:text-4xl lg:text-6xl">
              Design Your Custom Cake
            </h2>

            <p className="mx-auto max-w-2xl text-sm leading-6 text-text-primary/70 sm:text-base sm:leading-7 lg:text-lg">
              Share your cake idea and start your custom design journey with a
              simple, guided WhatsApp order flow.
            </p>
          </div>

          <div className="mx-auto flex max-w-4xl flex-col items-center justify-center">
            <div className="relative w-full max-w-[720px] overflow-hidden rounded-2xl bg-card-bg p-2 sm:rounded-[24px] sm:p-3 lg:rounded-[30px] bakery-shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1200&q=80"
                alt="Custom decorated cake"
                className="h-[260px] w-full rounded-xl object-cover sm:h-[380px] sm:rounded-[20px] lg:h-[560px] lg:rounded-[24px]"
              />

              <div className="absolute left-2 top-6 hidden rounded-2xl bg-white/95 p-2 bakery-shadow sm:block">
                <img
                  src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=500&q=80"
                  alt="Cupcakes"
                  className="h-14 w-14 rounded-xl object-cover sm:h-16 sm:w-16"
                />
              </div>

              <div className="absolute bottom-6 right-2 hidden rounded-2xl bg-white/95 p-2 bakery-shadow sm:block">
                <img
                  src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80"
                  alt="Macarons"
                  className="h-14 w-14 rounded-xl object-cover sm:h-16 sm:w-16"
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="mx-auto max-w-2xl text-sm leading-6 text-text-primary/70 sm:text-base">
                Custom flavors • Personalized designs • Easy WhatsApp ordering
              </p>

              <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button onClick={() => setIsOpen(true)} variant="primary">
                  Start Designing
                </Button>

                <Button href={whatsappUrl} variant="secondary">
                  Order on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-b from-transparent via-bakery-pink/70 to-blush-pink sm:h-24 lg:h-28" />
      </section>

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-card-bg p-4 shadow-2xl sm:rounded-[24px] sm:p-6 lg:rounded-[30px] lg:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-soft-border bg-white text-text-primary transition-all hover:border-accent-pink hover:text-accent-pink"
            >
              <X size={18} />
            </button>

            <div className="mb-6 pr-10 text-center sm:mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-pink sm:text-xs sm:tracking-[0.25em]">
                Custom Cake Form
              </p>

              <h3 className="mt-2 font-playfair text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
                Start Designing Your Cake
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-text-primary/70 sm:text-base">
                Fill in your details below and we’ll prepare your cake request
                for WhatsApp. After chat opens, please send your reference cake
                image manually there.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-text-primary">
                    Name of Client
                  </label>
                  <input
                    type="text"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleChange}
                    required
                    placeholder="Enter client name"
                    className="w-full rounded-xl border-2 border-soft-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent-pink sm:rounded-2xl"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-text-primary">
                    Mob Number
                  </label>
                  <input
                    type="tel"
                    name="mobNumber"
                    value={formData.mobNumber}
                    onChange={handleChange}
                    required
                    placeholder="+91 1234567890"
                    className="w-full rounded-xl border-2 border-soft-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent-pink sm:rounded-2xl"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-text-primary">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-2 border-soft-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent-pink sm:rounded-2xl"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-text-primary">
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-2 border-soft-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent-pink sm:rounded-2xl"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-text-primary">
                    Flavour
                  </label>
                  <select
                    name="flavour"
                    value={formData.flavour}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-soft-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent-pink sm:rounded-2xl"
                  >
                    <option>Chocolate</option>
                    <option>Vanilla</option>
                    <option>Red Velvet</option>
                    <option>Butterscotch</option>
                    <option>Black Forest</option>
                    <option>Pineapple</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-text-primary">
                    Weight
                  </label>
                  <select
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-soft-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent-pink sm:rounded-2xl"
                  >
                    <option>500g</option>
                    <option>1kg</option>
                    <option>1.5kg</option>
                    <option>2kg</option>
                    <option>3kg</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">
                  Theme
                </label>
                <input
                  type="text"
                  name="theme"
                  value={formData.theme}
                  onChange={handleChange}
                  placeholder="Princess, Spider-Man, Floral, Anniversary, etc."
                  className="w-full rounded-xl border-2 border-soft-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent-pink sm:rounded-2xl"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">
                  Message
                </label>
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Happy Birthday Aarav"
                  className="w-full rounded-xl border-2 border-soft-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent-pink sm:rounded-2xl"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">
                  Details
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Color preferences, shape, number of servings, delivery details, any special instructions..."
                  className="w-full resize-none rounded-xl border-2 border-soft-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent-pink sm:rounded-2xl"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text-primary">
                  Reference Cake Image
                </label>

                <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-soft-border bg-white px-4 py-6 text-center transition-all hover:border-accent-pink/60 sm:rounded-2xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-bakery-pink text-accent-pink">
                    <Upload size={22} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      Upload reference cake image
                    </p>
                    <p className="mt-1 text-xs leading-5 text-text-primary/60">
                      JPG, PNG or HEIC image from gallery or camera
                    </p>
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>

                {referenceImage && (
                  <div className="mt-4 overflow-hidden rounded-xl border border-soft-border bg-white p-3 sm:rounded-2xl">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-sm text-text-primary">
                        <ImagePlus size={16} className="text-accent-pink" />
                        <span className="truncate">{referenceImage.name}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setReferenceImage(null)}
                        className="rounded-full p-1 text-text-primary/55 transition-colors hover:bg-bakery-pink hover:text-accent-pink"
                      >
                        <X size={16} />
                      </button>
                    </div>

                    <img
                      src={imagePreviewUrl}
                      alt="Reference cake preview"
                      className="h-48 w-full rounded-lg object-cover sm:rounded-xl"
                    />
                  </div>
                )}
              </div>

              <div className="rounded-xl bg-bakery-pink/35 px-4 py-4 text-sm leading-6 text-text-primary/75 sm:rounded-2xl">
                <p>
                  <span className="font-semibold text-text-primary">Note:</span>{" "}
                  Please remind for your cake order on same day at 10.00 AM and
                  after WhatsApp opens, please send your reference cake image
                  manually in the chat.
                </p>
              </div>

              <div className="pt-1">
                <Button type="submit" variant="primary" fullWidth>
                  Send Order on WhatsApp
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};