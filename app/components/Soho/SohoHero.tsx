import Image from "next/image";
import React from "react";
import Header from "../Header";
import Link from "next/link";

function SohoHero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/soho/sh1.png"
          width={1920}
          height={1080}
          alt="GC CITY NADI Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      <div className="absolute inset-0 w-full h-full text-primary">
        <Header />
      </div>
      <div className="relative z-20 container mx-auto px-4 text-center text-primary">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          SOHO MALL
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          A large-scale entertainment destination in the heart of Phnom Penh,
          Cambodia
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#"
            className="inline-flex h-12 items-center cursor-pointer justify-center text-gray-50 rounded-md bg-primary px-6 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SohoHero;
