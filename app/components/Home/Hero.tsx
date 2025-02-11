import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="relative w-full h-[760px] text-primary">
      <Image
        src="/hero.png"
        alt="Hero"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 -z-10 opacity-90 blur-[2px]"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
      <div className="w-full h-full px-16 z-10">
        <nav className="flex justify-between items-center py-4">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={250} height={100} />
          </Link>
          <div className="flex items-center space-x-8 font-medium">
            <Link href="/about" className="hover:underline">
              <p>Group Business</p>
            </Link>
            <Link href="/contact" className="hover:underline">
              <p>Overseas Brand</p>
            </Link>
            <Link href="/contact" className="hover:underline">
              <p>Information</p>
            </Link>
            <Link href="/contact" className="hover:underline">
              <p>About Us</p>
            </Link>
            <Link
              href="/contact"
              className="text-white bg-primary py-1 px-4 rounded-full"
            >
              <p>Contact Us</p>
            </Link>
          </div>
        </nav>
        <div className="w-full h-[80%] flex items-center ">
          <div>
            <h1 className="lg:text-7xl 2xl:text-8xl font-semibold">
              Discover GC City by NADI
            </h1>
            <h1 className="text-7xl font-normal italic">
              A Rare Gem in Phom Penh
            </h1>
            <p className="text-xl italic w-[900px]">
              A prestigious 34-hectare community in Chroy Changvar, blending
              modern elegance with lush greenery and flowing waterways.
              Experience iconic living in the heart of Phnom Penh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
