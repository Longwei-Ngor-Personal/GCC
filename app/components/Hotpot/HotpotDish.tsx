import Image from "next/image";
import React from "react";

function HotpotDish() {
  return (
    <section className="mt-4 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <div className="relative h-80 mb-6">
              <Image
                src="/hotpot/food.jpg"
                alt="Chicken pot with Fish Maw"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative h-80 mb-6">
              <Image
                src="/hotpot/hotpot.jpg"
                alt="Hong Kong Crab Soup"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/hotpot/pic1.jpeg"
            alt="building"
            width={1920}
            height={1080}
            className="w-full h-[400px] object-cover -z-10"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 z-0" />
          <h1 className="absolute text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-4xl font-bold">
            Investment Projects
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-2 md:gap-4 mt-4">
          <Image
            src="/hotpot/pic1.jpeg"
            alt="building"
            width={1920}
            height={1080}
            className="w-full h-[635px] object-cover col-span-1 hidden md:block"
          />
          <div className="grid grid-cols-2 gap-2 md:gap-4 col-span-2">
            <Image
              src="/hotpot/pic2.jpeg"
              alt="building"
              width={1920}
              height={1080}
              className="w-full h-[200px] object-cover col-span-1"
            />
            <Image
              src="/hotpot/pic3.jpeg"
              alt="building"
              width={1920}
              height={1080}
              className="w-full h-[200px] object-cover col-span-1"
            />
            <Image
              src="/hotpot/pic4.jpeg"
              alt="building"
              width={1920}
              height={1080}
              className="w-full h-[200px] object-cover col-span-1"
            />
            <Image
              src="/hotpot/pic5.jpeg"
              alt="building"
              width={1920}
              height={1080}
              className="w-full h-[200px] object-cover col-span-1"
            />
            <div className="col-span-2 grid grid-cols-3 gap-2 md:gap-4">
              <Image
                src="/hotpot/pic6.jpeg"
                alt="building"
                width={1920}
                height={1080}
                className="w-full h-[200px] object-cover col-span-1"
              />
              <Image
                src="/hotpot/pic7.jpeg"
                alt="building"
                width={1920}
                height={1080}
                className="w-full h-[200px] object-cover col-span-1"
              />
              <Image
                src="/hotpot/pic8.jpeg"
                alt="building"
                width={1920}
                height={1080}
                className="w-full h-[200px] object-cover col-span-1"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2 md:space-y-4 pb-20">
          <div className="w-full h-32 bg-[#575757] text-3xl md:text-4xl font-bold tracking-widest flex items-center justify-center text-white font-mono">
            ONE CLUB 私人會所
          </div>
          <div className="grid grid-cols-7 gap-2 md:gap-4">
            <Image
              src="/hotpot/pic09.jpeg"
              alt="building"
              width={1920}
              height={1080}
              className="w-full h-[300px] object-cover col-span-2"
            />
            <Image
              src="/hotpot/pic10.jpeg"
              alt="building"
              width={1920}
              height={1080}
              className="w-full h-[300px] object-cover col-span-3"
            />
            <Image
              src="/hotpot/pic11.jpeg"
              alt="building"
              width={1920}
              height={1080}
              className="w-full h-[300px] object-cover col-span-2"
            />
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <Image
              src="/hotpot/pic12.jpeg"
              alt="building"
              width={1920}
              height={1080}
              className="w-full h-[300px] object-cover"
            />
            <Image
              src="/hotpot/pic13.jpeg"
              alt="building"
              width={1920}
              height={1080}
              className="w-full h-[300px] object-cover col-span-2"
            />
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <Image
              src="/hotpot/pic14.jpeg"
              alt="building"
              width={1920}
              height={1080}
              className="w-full h-[300px] object-cover"
            />
            <Image
              src="/hotpot/pic15.jpeg"
              alt="building"
              width={1920}
              height={1080}
              className="w-full h-[300px] object-cover"
            />
            <Image
              src="/hotpot/pic16.jpeg"
              alt="building"
              width={1920}
              height={1080}
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotpotDish;
