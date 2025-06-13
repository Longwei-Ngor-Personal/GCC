import Image from "next/image";
import React from "react";

function FundHero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/fund/hero.png"
          width={1920}
          height={1080}
          alt="GC CITY NADI Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      {/* <div className="absolute inset-0 w-full h-full text-primary"> */}
      {/*   <Header /> */}
      {/* </div> */}
    </section>
  );
}

export default FundHero;
