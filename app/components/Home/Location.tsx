import Image from "next/image";
import React from "react";

function Location() {
  return (
    <div className="text-primary px-16 pt-20">
      <div className="w-full flex flex-col items-center justify-center">
        <h3 className="text-4xl">Project Location</h3>
        <p className="text-lg">Chroy Changvar - Northern Phnom Penh</p>
        <p className="text-lg -mt-1">
          Good Zone where water and sky merge together
        </p>
      </div>
      <div className="grid grid-cols-12 space-x-4 mt-14">
        <div className="col-span-4 flex items-center justify-center">
          <Image src="/location.png" alt="Location" width={400} height={500} />
        </div>
        <div className="col-span-8">
          <p className="text-lg">
            A prestigious riverside hub at the Mekong and Tonle Sap
            intersection, Chroy Changvar boasts elite villas, top-tier
            healthcare, education, and world-class sports facilities. With
            vibrant commercial centers, a golf course, a theme park, and
            seamless freeway access, it’s a prime destination with limitless
            potential.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div>
              <div
                className="w-full h-[150px]"
                style={{
                  backgroundImage: "url('/calmette.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <p className="text-center">Calmette Hospital</p>
            </div>
            <div>
              <div
                className="w-full  h-[150px]"
                style={{
                  backgroundImage: "url('/win-win-monument.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <p className="text-center">Cambodian Win-Win Monument</p>
            </div>
            <div>
              <div
                className="w-full h-[150px]"
                style={{
                  backgroundImage: "url('/golf.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <p className="text-center">Big Golf Course</p>
            </div>
            <div>
              <div
                className="w-full h-[150px]"
                style={{
                  backgroundImage: "url('/stadium.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <p className="text-center">Dacho Stadium</p>
            </div>
            <div>
              <div
                className="w-full h-[150px]"
                style={{
                  backgroundImage: "url('/safari.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <p className="text-center">Safari Zoo</p>
            </div>
            <div>
              <div
                className="w-full h-[150px]"
                style={{
                  backgroundImage: "url('/waterpark.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <p className="text-center">Cambodian Largest Water Park</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
