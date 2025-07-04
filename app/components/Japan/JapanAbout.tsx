import Image from "next/image";
import React from "react";

function JapanAbout() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto px-4 md:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About GCC Japan
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-20">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <p className="text-gray-600 mb-6 leading-relaxed md:text-lg md:hidden">
              GCC Japan is a subsidiary of the golden Cambodian century GCC
              group in Japan, headquartered in Cambodia. The main business is to
              promote the sales of Cambodian real estate projects in Japan, and
              to assist more Japanese developers to enter the Cambodian real
              estate market and other Cambodia laws and related consulting in
              various fields.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative h-96 w-full overflow-hidden shadow-lg">
                <Image
                  src="/japan/showcase1.jpg"
                  alt="GCC Japan Office 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-96 w-full overflow-hidden shadow-lg">
                <Image
                  src="/japan/showcase2.jpg"
                  alt="GCC Japan Office 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-96 w-full overflow-hidden shadow-lg">
                <Image
                  src="/japan/showcase3.jpg"
                  alt="GCC Japan Office 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12 md:text-lg">
            <p className="text-gray-600 mb-6 leading-relaxed hidden md:block">
              GCC Japan is a subsidiary of the golden Cambodian century GCC
              group in Japan, headquartered in Cambodia. The main business is to
              promote the sales of Cambodian real estate projects in Japan, and
              to assist more Japanese developers to enter the Cambodian real
              estate market and other Cambodia laws and related consulting in
              various fields.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Through our experience in Cambodia&apos;s financial and real
              estate fields, we can further understand Cambodia by Japanese
              customers and provide professional, timely and trustworthy
              investment information for Japanese customers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We will provide customers with high-quality product content and
              information to cater to the vast market from simple to luxurious,
              and bring convenient and reassuring one-stop service for Japanese
              customers.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative h-96 w-full overflow-hidden shadow-lg">
                <Image
                  src="/japan/showcase4.jpg"
                  alt="GCC Japan Office 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-96 w-full overflow-hidden shadow-lg">
                <Image
                  src="/japan/showcase5.jpg"
                  alt="GCC Japan Office 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-96 w-full overflow-hidden shadow-lg">
                <Image
                  src="/japan/showcase6.jpg"
                  alt="GCC Japan Office 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pr-12 md:text-lg">
            <p className="text-gray-600 mb-6 leading-relaxed">
              GCC Japan is committed to becoming the most professional and
              reliable Cambodian real estate and business information platform
              in Japan, providing customers with accurate market intelligence,
              the most valuable returns and excellent services, and upholding to
              integrity, so that customers and investors can cooperate with us
              with no worries.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We aim to be the bridge of business intercommunication between
              Japan and Cambodia, and giving back to the people of the two
              countries with first-class services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              GCC JAPAN:{" "}
              <a className="text-blue-500 underline">
                https://www.gccjapan.co.jp
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JapanAbout;
