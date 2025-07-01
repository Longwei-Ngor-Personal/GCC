"use client";

import Image from "next/image";
import React from "react";

function Introduction() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <p className="text-lg text-gray-600">
          Cambodia is a country full of business opportunities and youthful
          energy. In the past 10 years, foreign investment in Cambodia has
          increased by more than 800%, and the economic potential is huge.
          Golden Cambodia Century Group saw this rare golden period and was
          founded and entered the Cambodian market in 2015, adhering to the
          promotion of innovation and high-quality architectural aesthetics to
          create a beautiful city that people can feel at ease in.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          <div className="relative w-full h-[350px] lg:h-full order-2 lg:order-1">
            <iframe
              src="https://www.youtube-nocookie.com/embed/rVY0aFvNvX8"
              title="Company Introduction Video"
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-6">
              <Image
                src="/nadi/logo-name.png"
                alt="logo"
                width={100}
                height={100}
              />
              <h1 className="text-4xl font-medium">BOERY NADI BY GC CITY</h1>
            </div>
            <p className="text-lg text-gray-600 text-justify">
              Located in the Chrysanthemum District of Phnom Penh, the capital
              of Cambodia, GC CITY • Hong An is a 34- hectare project ( 3 phases
              in total ) large-scale high-end residential community that GC CITY
              Century Group has focused on developing. GC CITY connects all
              areas of the project with tree-lined avenues, and uses large areas
              of green space and flowing water gardens to create an elegant
              environment where the sky and water blend into one. We also
              combine contemporary design and architectural style to depict
              fashionable and distinguished living spaces, creating a symbolic,
              high-quality and comfortable living experience. It is a rare
              treasure that is unique in the city. Surrounded by quiet and
              serene gardens and waterway design is a major element of NADI. The
              luxury master-planned villa community conceived and created by GC
              CITY combines a signature combination of residential commercial,
              leisure and park facilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
