"use client";

import Image from "next/image";
import React from "react";

const GalleryOrussey = () => {
  return (
    <section className="px-16 py-12 text-slate-800 bg-[#F4F4F4]">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Image
            src="/nadi/orussey1.jpg"
            alt="orussey"
            width={1000}
            height={1000}
            className="w-full h-[300px] object-cover"
          />
          <h1 className="font-medium text-xl text-center mt-4">
            Indoor Shopping Mall
          </h1>
        </div>
        <div>
          <Image
            src="/nadi/orussey5.jpg"
            alt="orussey"
            width={1000}
            height={1000}
            className="w-full h-[300px] object-cover"
          />
          <h1 className="font-medium text-xl text-center mt-4">
            Indoor Shopping Mall
          </h1>
        </div>
        <div>
          <Image
            src="/nadi/orussey6.jpg"
            alt="orussey"
            width={1000}
            height={1000}
            className="w-full h-[300px] object-cover"
          />
          <h1 className="font-medium text-xl text-center mt-4">
            Indoor Shoppping Mall
          </h1>
        </div>
        <div className="mt-4">
          <Image
            src="/nadi/orussey3.jpg"
            alt="orussey"
            width={1000}
            height={1000}
            className="w-full h-[300px] object-cover"
          />
          <h1 className="font-medium text-xl text-center mt-4">
            Rooftop Plaza
          </h1>
        </div>
        <div className="mt-4">
          <Image
            src="/nadi/orussey4.jpg"
            alt="orussey"
            width={1000}
            height={1000}
            className="w-full h-[300px] object-cover"
          />
          <h1 className="font-medium text-xl text-center mt-4">
            Rooftop Plaza
          </h1>
        </div>
        <div className="mt-4">
          <Image
            src="/nadi/orussey2.jpg"
            alt="orussey"
            width={1000}
            height={1000}
            className="w-full h-[300px] object-cover"
          />
          <h1 className="font-medium text-xl text-center mt-4">Shop Display</h1>
        </div>
      </div>
    </section>
  );
};

export default GalleryOrussey;
