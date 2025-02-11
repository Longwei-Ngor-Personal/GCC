import Image from "next/image";
import React from "react";

function Facilities() {
  return (
    <div className="text-primary px-16 pt-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-center">Facilities</h1>
        <p className="text-lg text-center w-[700px]">
          NADI offers a high-class clubhouse with a swimming pool, gym, café,
          children’s playroom, and multifunctional spaces for leisure and social
          gatherings.
        </p>
      </div>
      <div className="mt-8 space-y-2">
        <div className="relative w-full h-[300px]">
          <Image
            src="/clubhouse.png"
            alt="Hero"
            layout="fill"
            className="absolute top-0 left-0 -z-10 "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
          <h2 className="absolute top-5 left-5 w-full h-full text-2xl font-semibold">
            {" "}
            High-End Clubhouse
          </h2>
        </div>
        <div className="relative w-full h-[300px]">
          <Image
            src="/venue.png"
            alt="Hero"
            layout="fill"
            className="absolute top-0 left-0 -z-10 "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
          <h2 className="absolute top-5 left-5 w-full h-full text-2xl font-semibold">
            {" "}
            Festival Venue
          </h2>
        </div>
        <div className="relative w-full h-[300px]">
          <Image
            src="/playground.png"
            alt="Hero"
            layout="fill"
            className="absolute top-0 left-0 -z-10 "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
          <h2 className="absolute top-5 left-5 w-full h-full text-2xl font-semibold">
            {" "}
            Playground
          </h2>
        </div>
        <div className="relative w-full h-[300px]">
          <Image
            src="/gym.png"
            alt="Hero"
            layout="fill"
            className="absolute top-0 left-0 -z-10 "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
          <h2 className="absolute top-5 left-5 w-full h-full text-2xl font-semibold">
            {" "}
            Gym
          </h2>
        </div>
        <div className="relative w-full h-[300px]">
          <Image
            src="/pool.png"
            alt="Hero"
            layout="fill"
            className="absolute top-0 left-0 -z-10 "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
          <h2 className="absolute top-5 left-5 w-full h-full text-2xl font-semibold">
            {" "}
            Swimming Pool
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
