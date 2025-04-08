import Image from "next/image";
import React from "react";

function HotpotDish() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Our Signature Dishes
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
          The best ingredient in hot pot is the soup. We constantly develop and
          select the best quality materials, boiling our soup bases for several
          hours without any MSG.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col">
            <div className="relative h-80 mb-6">
              <Image
                src="/hotpot/food.jpg"
                alt="Chicken pot with Fish Maw"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">
              Chicken Pot with Fish Maw
            </h3>
            <p className="text-gray-700">
              Our most coveted dish, not stingy with ingredients in the pot, and
              the soup full of bone glue, which is loved by many customers,
              especially women.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="relative h-80 mb-6">
              <Image
                src="/hotpot/hotpot.jpg"
                alt="Hong Kong Crab Soup"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">Hong Kong Crab Soup</h3>
            <p className="text-gray-700">
              More than ten kinds of fresh seafood and delicious food from
              overseas air transportation are strictly selected. With
              master&apos;s skillful and elaborate plate decoration, the
              ultimate original flavor is reappeared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotpotDish;
