import Image from "next/image";
import React from "react";

function HotpotAbout() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The birth of Luk Hot Pot is inspired by the culture and concept of
            Hong Kong Restaurant. We provide a unique and different style from
            the store decoration to Menu. However, even in Cambodia is a hot
            country, hot pot is still our favorite dining choice, and the unique
            taste of Hong Kong style hot pot is one of the highlights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/hotpot/glass.png"
              alt="Restaurant interior"
              width={800}
              height={600}
              className="rounded-lg p-4"
              style={{ animation: "spin 20s linear infinite" }}
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Artful Design</h3>
            <p className="text-gray-700 mb-6">
              More than 20,000 pieces of glass are carefully crafted to create
              our stunning interior. The decoration design of Luk Hot Pot is
              meticulously created by GC design under GCC. We blend old Shanghai
              decoration with modern elements, creating a space full of artistic
              atmosphere.
            </p>
            <p className="text-gray-700">
              Besides the open dining environment, we offer exclusive VIP
              private rooms for our customers. The luxurious and elegant
              decoration makes people feel like entering the palace of art,
              making it very suitable for high-end business banquets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotpotAbout;
