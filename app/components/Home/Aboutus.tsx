import Image from "next/image";
import React from "react";

function Aboutus() {
  return (
    <div className="relative w-full h-[650px] text-primary my-28">
      <Image
        src="/preview.png"
        alt="Hero"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 -z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65 -z-10" />
      <div className="h-full w-full py-14 text-center flex flex-col items-center">
        <h1 className="text-5xl">About Us</h1>
        <div className="w-[1px] h-20 my-8 bg-primary" />
        <p className="text-lg w-[1000px]">
          GCC, originating from Hong Kong, has established a strong foundation
          in Cambodia and is expanding across the ASEAN market. With expertise
          in finance, property, and information technology, we bring world-class
          industry knowledge to this dynamic country, fostering growth and
          innovation.{" "}
        </p>
        <p className="text-lg w-[1000px] mt-16">
          Driven by a global vision and local opportunities, we are committed to
          developing thriving financial and property sectors. As we embark on
          new major projects, we embrace the One Belt One Road initiative,
          working alongside Cambodians to build a vibrant, internationally
          recognized metropolis.{" "}
        </p>
        <button className="w-26 h-12 px-4 flex items-center justify-center bg-primary mt-16">
          <p className="text-lg text-white">Learn More</p>
        </button>
      </div>
    </div>
  );
}

export default Aboutus;
