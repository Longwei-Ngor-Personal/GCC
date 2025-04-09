import Image from "next/image";
import React from "react";

function HongkongMission() {
  return (
    <section id="mission" className="py-20 bg-black/10">
      <div className="container mx-auto px-4 md:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
        </div>

        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 md:pr-12">
            <p className="text-gray-600 mb-6 leading-relaxed md:text-lg">
              Our mission is to provide full range services and support to our
              partners, agents, and clients in Hong Kong, hold regular trade
              fairs and seminars, and actively provide assistance to the needs
              of clients.
            </p>
            <p className="text-gray-600 leading-relaxed md:text-lg">
              We are committed to working with Companies and investors who are
              interested in investing in Cambodia. We work together to seize
              local development opportunities and create a better future!
            </p>
          </div>
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="relative h-64 md:h-64 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/hongkong/hero.jpg"
                alt="GCC Japan Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HongkongMission;
