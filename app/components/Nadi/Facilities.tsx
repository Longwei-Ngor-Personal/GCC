"use client";

import React from "react";
import Image from "next/image";

function Facilities() {
  return (
    <div className="container mx-auto px-4 pt-24">
      <div className="relative">
        <Image
          src="/nadi/venue.jpg"
          alt="facilities"
          width={1920}
          height={1080}
          className="object-cover h-[400px]"
        />
        <div className="absolute top-5 md:right-5 bg-white bg-opacity-65 md:w-[30%] h-[90%] flex flex-col justify-center text-left px-6">
          <h2 className="text-2xl font-medium">Main Facilities</h2>
          <p>- Canals and professionally designed waterways</p>
          <p>- Community wedding theme park</p>
          <p>- Tight security</p>
          <p>- Multi-purpose hall</p>
          <p>- Children&apos;s playground</p>
          <p>- Swimming pool</p>
          <p>- Fully equipped gym</p>
          <p>- Jogging track</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
        <Image
          src="/nadi/nadicard.jpg"
          alt="facilities"
          width={1920}
          height={1080}
          className="object-cover h-[200px]"
        />
        <Image
          src="/nadi/gym.png"
          alt="facilities"
          width={1920}
          height={1080}
          className="object-cover h-[200px]"
        />
        <Image
          src="/nadi/playground.jpg"
          alt="facilities"
          width={1920}
          height={1080}
          className="object-cover h-[200px]"
        />
        <Image
          src="/nadi/park.jpg"
          alt="facilities"
          width={1920}
          height={1080}
          className="object-cover h-[200px]"
        />
        <Image
          src="/nadi/pool.jpg"
          alt="facilities"
          width={1920}
          height={1080}
          className="object-cover h-[200px] col-span-2 md:col-span-1"
        />
      </div>
    </div>
  );
}

export default Facilities;
