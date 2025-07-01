"use client";

import Image from "next/image";
import React from "react";

function IntroductionOrussey() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          <div className="relative w-full h-full">
            <Image
              src="/nadi/orussey-about.jpeg"
              alt="logo"
              width={1920}
              height={1080}
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <Image
                src="/nadi/orussey-logo.png"
                alt="logo"
                width={100}
                height={100}
              />
              <h1 className="text-4xl font-medium">GC ORUSSEY MARKET</h1>
            </div>
            <p className="text-lg text-gray-600 text-justify">
              GC Orussey Market is a real estate development project carefully
              built by GCC Group, which uses the wisdom of Khmer architecture
              and integrates the contemporary Cambodian traditional wholesale
              market. Located on Russian Federation Avenue, only three minutes
              away from Phnom Penh International Airport, it covers an area of
              2.5 hectares and has 3,000 ground parking spaces. The mall
              consists of a five-story building with a height of 6 meters, with
              sufficient natural ventilation space and 4,300 shops of different
              sizes. The market has a rich variety of goods, from cultural and
              artistic works, daily necessities to fresh food, which can meet
              the needs of merchants and people for different goods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionOrussey;
