import Image from "next/image";
import React from "react";

function Location() {
  return (
    <div className="text-primary px-16 pt-20">
      <div className="w-full flex flex-col items-center justify-center">
        <h3 className="text-3xl lg:text-4xl">Project Location</h3>
        <p className="text-sm lg:text-lg">
          Chroy Changvar - Northern Phnom Penh
        </p>
        <p className="text-sm lg:text-lg -mt-1">
          Good Zone where water and sky merge together
        </p>
        <p className="block lg:hidden text-center mt-4 text-sm lg:text-lg">
          A prestigious riverside hub at the Mekong and Tonle Sap intersection,
          Chroy Changvar boasts elite villas, top-tier healthcare, education,
          and world-class sports facilities. With vibrant commercial centers, a
          golf course, a theme park, and seamless freeway access, it’s a prime
          destination with limitless potential.
        </p>
      </div>
      <div className="grid grid-cols-12 space-x-4 mt-8 lg:mt-14">
        <div className="hidden col-span-4 lg:flex items-center justify-center">
          <Image src="/location.png" alt="Location" width={400} height={500} />
        </div>
        <div className="hidden lg:block col-span-12 lg:col-span-8">
          <p className="text-sm lg:text-lg">
            A prestigious riverside hub at the Mekong and Tonle Sap
            intersection, Chroy Changvar boasts elite villas, top-tier
            healthcare, education, and world-class sports facilities. With
            vibrant commercial centers, a golf course, a theme park, and
            seamless freeway access, it’s a prime destination with limitless
            potential.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="relative w-full h-[170px]">
              <Image
                src="/calmette.jpg"
                alt="Hero"
                layout="fill"
                className="absolute top-0 left-0 -z-10 "
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
              <h2 className="absolute top-3 left-3 w-full h-full text-lg font-semibold">
                {" "}
                Calmette Hospital
              </h2>
            </div>
            <div className="relative w-full h-[170px]">
              <Image
                src="/win-win-monument.webp"
                alt="Hero"
                layout="fill"
                className="absolute top-0 left-0 -z-10 "
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
              <h2 className="absolute top-3 left-3 w-full h-full text-lg font-semibold">
                {" "}
                Cambodian Win-Win Monument
              </h2>
            </div>
            <div className="relative w-full h-[170px]">
              <Image
                src="/golf.jpg"
                alt="Hero"
                layout="fill"
                className="absolute top-0 left-0 -z-10 "
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
              <h2 className="absolute top-3 left-3 w-full h-full text-lg font-semibold">
                {" "}
                Big Golf Course
              </h2>
            </div>
            <div className="relative w-full h-[170px]">
              <Image
                src="/stadium.jpg"
                alt="Hero"
                layout="fill"
                className="absolute top-0 left-0 -z-10 "
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
              <h2 className="absolute top-3 left-3 w-full h-full text-lg font-semibold">
                {" "}
                Dacho Stadium
              </h2>
            </div>
            <div className="relative w-full h-[170px]">
              <Image
                src="/safari.jpg"
                alt="Hero"
                layout="fill"
                className="absolute top-0 left-0 -z-10 "
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
              <h2 className="absolute top-3 left-3 w-full h-full text-lg font-semibold">
                {" "}
                Safari Zoo
              </h2>
            </div>
            <div className="relative w-full h-[170px]">
              <Image
                src="/waterpark.jpg"
                alt="Hero"
                layout="fill"
                className="absolute top-0 left-0 -z-10 "
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
              <h2 className="absolute top-3 left-3 w-full h-full text-lg font-semibold">
                {" "}
                Garden City
              </h2>
            </div>
          </div>
        </div>
        <div className="block lg:hidden col-span-4">
          <Image src="/location.png" alt="Location" width={400} height={500} />
        </div>
        <div className="block lg:hidden col-span-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-[120px]">
              <Image
                src="/calmette.jpg"
                alt="Hero"
                layout="fill"
                className="absolute top-0 left-0 -z-10 "
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
              <h2 className="absolute top-3 left-3 w-full h-full text-sm font-semibold">
                {" "}
                Calmette Hospital
              </h2>
            </div>
            <div className="relative w-full h-[120px]">
              <Image
                src="/win-win-monument.webp"
                alt="Hero"
                layout="fill"
                className="absolute top-0 left-0 -z-10 "
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
              <h2 className="absolute top-3 left-3 w-full h-full text-sm font-semibold">
                {" "}
                Cambodian Win-Win Monument
              </h2>
            </div>
            <div className="relative w-full h-[120px]">
              <Image
                src="/golf.jpg"
                alt="Hero"
                layout="fill"
                className="absolute top-0 left-0 -z-10 "
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
              <h2 className="absolute top-3 left-3 w-full h-full text-sm font-semibold">
                {" "}
                Big Golf Course
              </h2>
            </div>
            <div className="relative w-full h-[120px]">
              <Image
                src="/stadium.jpg"
                alt="Hero"
                layout="fill"
                className="absolute top-0 left-0 -z-10 "
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
              <h2 className="absolute top-3 left-3 w-full h-full text-sm font-semibold">
                {" "}
                Dacho Stadium
              </h2>
            </div>
            <div className="relative w-full h-[120px]">
              <Image
                src="/safari.jpg"
                alt="Hero"
                layout="fill"
                className="absolute top-0 left-0 -z-10 "
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
              <h2 className="absolute top-3 left-3 w-full h-full text-sm font-semibold">
                {" "}
                Safari Zoo
              </h2>
            </div>
            <div className="relative w-full h-[120px]">
              <Image
                src="/waterpark.jpg"
                alt="Hero"
                layout="fill"
                className="absolute top-0 left-0 -z-10 "
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
              <h2 className="absolute top-3 left-3 w-full h-full text-sm font-semibold">
                {" "}
                Garden City
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
