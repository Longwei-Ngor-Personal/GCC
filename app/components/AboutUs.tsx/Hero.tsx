import React from "react";
import Image from "next/image";
import Header from "../Header";

function Hero() {
  return (
    <div className="relative w-full h-[760px] text-primary">
      <Image
        src="/hero.png"
        alt="Hero"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 -z-10 opacity-90 blur-[2px]"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
      <div className="w-full h-full px-4 md:px-16 z-10">
        <Header />
        <div className="w-full h-[80%] flex items-center ">
          <div>
            <h1 className="text-2xl md:text-5xl lg:text-7xl 2xl:text-8xl font-semibold">
              About Us
            </h1>
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-normal italic">
              Golden Cambodia Century
            </h1>
            <p className="text-sm md:text-base lg:text-xl italic w-[600px] lg:w-[900px]">
              GCC has established a variety of businesses across the
              South-Eastern area. We are an integrated enterprise originated
              from Hong Kong China, establish our foundation in Cambodia, and
              now facing ASEAN market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
