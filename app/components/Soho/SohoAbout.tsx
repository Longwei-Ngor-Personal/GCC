import Image from "next/image";
import React from "react";

function SohoAbout() {
  return (
    <section id="about" className="py-24 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-primary">
                SOHO MALL
              </span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              SOHO MALL is a large-scale entertainment mall carefully built by
              GCC Group in the Tonle Bassac district of Cambodia. It is adjacent
              to NAGA world, The Peak and The Bridge. It is the golden core area
              of Phnom Penh where major leisure and entertainment are gathered.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              A total of 3 floors, covering an area of 11,500 square meters,
              there are hundreds of shops, combining trendy creativity, food,
              leisure and entertainment. With its rich development experience
              and strong background, the Group has attracted many well-known
              brand stores to settle in, providing consumers with a
              comprehensive new life experience with multi-cultural styles,
              pleasant leisure environment and rich themed activities.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary rounded-full opacity-20 blur-xl"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/soho/sh1.png"
                alt="SOHO MALL Interior"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SohoAbout;
