import Image from "next/image";
import React from "react";

function SohoEnvironment() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className=" items-center">
          <div className="flex items-center">
            <Image src="/soho/logo.png" alt="logo" width={500} height={500} />
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SOHO Mall is a major entertainment complex under GCC
                Group&apos;s property management portfolio in the BKK Riverside
                District of Cambodia. Located in the core leisure zone of Phnom
                Penh, it is surrounded by major landmarks such as Naga World
                Entertainment Complex, The Peak, and The Bridge. The mall
                features three floors with a total area of 11,500 square meters,
                housing hundreds of retail shops. It integrates fashion and
                creativity, gourmet cuisine, and leisure entertainment into a
                single vibrant destination.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With GCC&apos;s extensive development experience and strong
                backing, SOHO Mall has successfully attracted numerous
                well-known brands. Through its multicultural atmosphere,
                enjoyable leisure environment, and diverse themed events, the
                mall delivers a comprehensive and refreshing lifestyle
                experience for consumers.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Image src="/soho/sh1.png" alt="soho" width={1920} height={1080} />
            <div className="grid grid-cols-2 gap-2 mt-2">
              <Image
                src="/soho/sh05.jpg"
                alt="SOHO MALL Interior 1"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
              <Image
                src="/soho/sh03.jpg"
                alt="SOHO MALL Interior 2"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SohoEnvironment;
