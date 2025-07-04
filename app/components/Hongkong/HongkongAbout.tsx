import Image from "next/image";
import React from "react";

function HongkongAbout() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto px-4 md:px-16">
        <div className="w-full mx-auto text-left mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About GCC Hong Kong
          </h2>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-start mb-20">
          <div className="w-full md:w-1/2 md:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative h-80 w-full">
                <Image
                  src="/hongkong/1.jpg"
                  alt="GCC Japan Office 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 w-full">
                <Image
                  src="/hongkong/5.jpg"
                  alt="GCC Japan Office 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pr-12 md:text-lg ">
            <p className="text-gray-600 mb-6 leading-relaxed">
              GCC is a well-known Hong Kong-funded enterprise rooted in
              Cambodia. Since its establishment in 2015, the group employs more
              than 1000 employees. With the increase of elite talents and the
              growing team, as well as the core management&apos;s rich
              experience in financial business, real estate development and
              information technology, many large-scale projects have been
              completed in Cambodia with excellent results.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With the rapid macroeconomic development, the group has broadened
              its vision to different fields, and extended its development to
              entertainment, media, catering, and retail related industries.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <p className="text-gray-600 mb-6 leading-relaxed md:text-lg md:hidden">
              GCC Japan is a subsidiary of the golden Cambodian century GCC
              group in Japan, headquartered in Cambodia. The main business is to
              promote the sales of Cambodian real estate projects in Japan, and
              to assist more Japanese developers to enter the Cambodian real
              estate market and other Cambodia laws and related consulting in
              various fields.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative h-80 w-full">
                <Image
                  src="/hongkong/7.jpg"
                  alt="GCC Japan Office 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 w-full">
                <Image
                  src="/hongkong/8.jpg"
                  alt="GCC Japan Office 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12 md:text-lg">
            <p className="text-gray-600 mb-6 leading-relaxed hidden md:block">
              It upholds the inheritance of continuous innovation and experience
              and the continuation of the corporate spirit and has grown year by
              year and has become a diversified industry Enterprise.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Golden Cambodian Century GCC-Hong Kong headquarters was
              established at the end of 2020 in Hong Kong&apos;s central
              commercial area (Central). Upholding our headquarter vision,
              &lsquo;&lsquo;Rushed together, break together, to create a
              century&rsquo;&rsquo;, our goal is to build a platform in Hong
              Kong and become the window of the to the world, to achieve the
              sustainable development of the group.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HongkongAbout;
