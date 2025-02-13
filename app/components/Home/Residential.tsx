import Image from "next/image";
import React from "react";

function Residential() {
  return (
    <div className="text-primary px-16 pt-12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl lg:text-4xl text-center">Residential Types</h1>
        <p className="text-sm lg:text-lg text-center w-[600px]">
          Explore a variety of high-end living options, from luxurious villas to
          modern apartments, all designed to blend elegance with nature.{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-8">
        <div className="col-span-2 relative w-full h-[200px] lg:h-[300px]">
          <Image
            src="/shop-house.png"
            alt="Hero"
            layout="fill"
            className="absolute top-0 left-0 -z-10 "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
          <h2 className="absolute top-5 left-5 w-full h-full text-lg lg:text-2xl font-semibold">
            {" "}
            Shop House
          </h2>
        </div>
        <div className="col-span-1 relative w-full h-[200px] lg:h-[300px]">
          <Image
            src="/link-house.png"
            alt="Hero"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 -z-10 "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
          <h2 className="absolute top-5 left-5 w-full h-full text-lg lg:text-2xl font-semibold">
            {" "}
            Link House
          </h2>
        </div>
        <div className="col-span-1 relative w-full h-[200px] lg:h-[300px]">
          <Image
            src="/queen-villa.png"
            alt="Hero"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 -z-10 "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
          <h2 className="absolute top-5 left-5 w-full h-full text-lg lg:text-2xl font-semibold">
            {" "}
            Queen Villa
          </h2>
        </div>
        <div className="col-span-2 relative w-full h-[200px] lg:h-[300px]">
          <Image
            src="/king-villa.png"
            alt="Hero"
            layout="fill"
            className="absolute top-0 left-0 -z-10 "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
          <h2 className="absolute top-5 left-5 w-full h-full text-lg lg:text-2xl font-semibold">
            {" "}
            King Villa
          </h2>
        </div>
        <div className="col-span-2 relative w-full h-[200px] lg:h-[300px]">
          <Image
            src="/twin-villa.png"
            alt="Hero"
            layout="fill"
            className="absolute top-0 left-0 -z-10 "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
          <h2 className="absolute top-5 left-5 w-full h-full text-lg lg:text-2xl font-semibold">
            {" "}
            Twin Villa
          </h2>
        </div>
        <div className="col-span-1 relative w-full h-[200px] lg:h-[300px]">
          <Image
            src="/apartment.png"
            alt="Hero"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 -z-10 "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
          <h2 className="absolute top-5 left-5 w-full h-full text-lg lg:text-2xl font-semibold">
            {" "}
            Apartment
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Residential;
