import Image from "next/image";
import React from "react";

function Information() {
  return (
    <div className="text-primary px-16 pt-20">
      <div className="w-full flex flex-col items-center justify-center">
        <h3 className="text-3xl lg:text-4xl">More Information</h3>
        <p className="text-sm lg:text-lg mt-2 text-center w-[800px]">
          We have extensive experience in the field of finance, property and
          information technology. We bring elite industry technique to this full
          of life country- Cambodia. We make our financial and property
          businesses thrive and develop healthily with the mix of international
          visions and local opportunities. In the near future, we will have more
          major projects coming up, embody our corporate vision and mission
          further. With the development of “One Belt One Road,” it is our
          pleasure to work with Cambodians, to build a beautiful home and famous
          international metropolis.{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-1 relative w-full h-[200px] lg:h-[300px] mt-20">
          <Image
            src="/about/vision.png"
            alt="Hero"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 -z-10 "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65 -z-10"></div>
          <h2 className="absolute top-5 left-5 w-full h-full text-lg lg:text-2xl font-semibold">
            Corporate Vision
          </h2>
          <p className="absolute top-16 left-5 w-[80%] h-full text-sm lg:text-lg font-medium">
            We commit to build an elite Cambodian based enterprise. We delicate
            to the economic development by acting as a bridge connecting the
            financial and property investment between ASEAN and “One Belt One
            Road.” At the same time, we bring goods to Cambodian civilians. We
            pay back to the community with our kindness.
          </p>
        </div>
        <div className="col-span-1 relative w-full h-[200px] lg:h-[300px] mt-20">
          <Image
            src="/about/mission.png"
            alt="Hero"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 -z-10 "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65 -z-10"></div>
          <h2 className="absolute top-5 left-5 w-full h-full text-lg lg:text-2xl font-semibold">
            Corporate Mission
          </h2>
          <p className="absolute top-16 left-5 w-[80%] h-full text-sm lg:text-lg font-medium">
            We build an integrated innovative enterprise of finance, real estate
            and technology with the mix of international business wisdom and
            local custom. We provide local jobs, stimulate local economy and
            attract international capital with profound management system. We
            contribute local disadvantaged community.
          </p>
        </div>
      </div>
      <div className="relative w-full h-[200px] lg:h-[300px] mt-2">
        <Image
          src="/about/combodia.png"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 -z-10 "
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65 -z-10"></div>
        <h2 className="absolute top-5 left-5 w-full h-full text-lg lg:text-2xl font-semibold">
          More about Cambodia
        </h2>
        <p className="absolute top-16 left-5 w-[80%] h-full text-sm lg:text-lg font-medium">
          Cambodia, officially the Kingdom of Cambodia, is located in the
          southern portion of the Indochina peninsula in Southeast Asia,
          bordered by Thailand to the northwest, Laos to the northeast, Vietnam
          to the east and the Gulf of Thailand to the south. It is 181,035
          square kilometres in area. Cambodia has three main economic centres:
          Phnom Penh (Capital), Siem Reap and Sihanoukville. Other large cities
          include Takeo, Srey Saophon, Kompong Cham, Poipet, Battambang and
          Kampot.
        </p>
      </div>
    </div>
  );
}

export default Information;
