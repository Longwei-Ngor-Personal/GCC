import Image from "next/image";
import React from "react";
import Header from "../Header";

function Hero() {
  return (
    <div className="relative w-full h-[760px] text-primary">
      <Image
        src="/gccity.webp"
        alt="Hero"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 -z-10 opacity-90 blur-[1px]"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 -z-10"></div>
      <div className="w-full h-full px-4 md:px-16 z-10">
        <Header />
        <div className="w-full h-[80%] flex items-center ">
          <div>
            <h1 className="text-2xl md:text-5xl lg:text-7xl 2xl:text-8xl font-semibold">
              Chairman Message
            </h1>
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-normal italic">
              & Board of Directors
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
