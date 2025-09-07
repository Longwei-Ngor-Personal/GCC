"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function FBLuk() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Hero Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/hotpot/banner.jpg"
              alt="Hotpot Interior"
              width={1600}
              height={600}
              className="w-full h-64 md:col-span-2 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Intro paragraph with logo on the side */}
            <section className="py-12 bg-white">
              <div className="container mx-auto px-6">
                <div className="flex items-center gap-6 max-w-5xl mx-auto">
                  {/* Small logo */}
                  <Image
                    src="/hotpot/luk.jpg"   // replace with your logo path
                    alt="Luk Hotpot Logo"
                    width={300}
                    height={300}
                    className="w-full h-64 object-contain"
                  />
      
                  {/* Text */}
                  <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    {t("hotpot.hero2.p3")}
                  </p>
                </div>
              </div>
            </section>

      {/* Gallery with click-to-enlarge */}
      <section className="mt-4 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(`/hotpot/pov${item}.jpg`)}
              >
                <Image
                  src={`/hotpot/pov${item}.jpg`}
                  alt={`Restaurant interior ${item}`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full p-4">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full font-bold shadow-md"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default FBLuk;
