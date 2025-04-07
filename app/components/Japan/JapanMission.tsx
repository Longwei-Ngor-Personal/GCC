import Image from "next/image";
import React from "react";

function JapanMission() {
  return (
    <section id="mission" className="py-20 bg-black/10">
      <div className="mx-auto px-4 md:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/japan/fuji2.jpeg"
                alt="GCC Japan Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-gray-600 mb-6 leading-relaxed md:text-lg">
              Our mission is to build a real estate investment centred
              enterprise with financial, legal and other business consultation
              based on the international business wisdom of the Headquarter,
              Golden Cambodia Century GCC group, which is rooted in Cambodia,
              and integrates the local and local conditions of Japan.
            </p>
            <p className="text-gray-600 leading-relaxed md:text-lg">
              To provide the latest information, tailored consultation and
              answer and close after-sales service, to provide convenient
              one-stop service for Japanese customers. For your investment in
              Cambodia to escort the journey with no hesitation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JapanMission;
