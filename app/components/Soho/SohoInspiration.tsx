import Image from "next/image";
import React from "react";

function SohoInspiration() {
  return (
    <section id="concept" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 leading-tight">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-primary">
            Inspiration
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl mb-6 transform transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="/soho/sh02.jpg"
                alt="SOHO in West End of London"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <p className="text-white text-xl font-medium p-8">
                  SOHO in West End of London
                </p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl mb-6 transform transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="/soho/sh03.jpg"
                alt="SOHO in Hong Kong"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <p className="text-white text-xl font-medium p-8">
                  SOHO in Hong Kong
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The inspiration for the name of SOHO Mall comes from the Soho
            District (SOHO) in London. It is surrounded by the five most famous
            areas in London. It is a very popular area in the city center and an
            entertainment destination full of culture and art. Its reputation
            has also been adopted by many cities such as Hong Kong, New York,
            and Málaga to name their entertainment district.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            SOHO MALL is modeled with an innovative concept, mirroring the
            unique creative elements of SOHO in London and around the world,
            bringing you a steady stream of freshness and unique artistic
            multicultural atmosphere for local and tourist from all over the
            world creating a comprehensive fashion and entertainment mall.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The revamped SOHO MALL aims to create a multi-cultural destination
            with innovation and character, and is committed to creating a place
            that provides life concepts and emotional experiences, as well as to
            form a public environment to release stress, giving back to the
            community with a quality place and entertainment experience that
            satisfy visitor&apos;s curiosity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SohoInspiration;
