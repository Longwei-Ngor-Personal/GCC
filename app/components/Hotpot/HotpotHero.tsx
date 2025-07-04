import Image from "next/image";
import React from "react";
import Header from "../Header";

function HotpotHero() {
  return (
    <>
      <Header />
      <div className="pt-32 px-6 lg:px-16">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <Image
              src="/hotpot/logo.png"
              alt="abt"
              width={400}
              height={400}
              className="object-cover h-[150px] mt-4 md:hidden"
            />
            <Image
              src="/hotpot/hotpot.jpg"
              alt="abt"
              width={1920}
              height={1080}
              className="w-full md:h-[670px] lg:h-[485px] object-cover"
            />
            <Image
              src="/hotpot/vip6.jpg"
              alt="abt"
              width={1920}
              height={1080}
              className="w-full md:h-[670px] lg:h-[485px] object-cover hidden md:block"
            />
            <div className="absolute hidden w-40 h-full bg-[#823E16] top-0 left-0 text-white text-center font-medium text-2xl md:flex items-center justify-center">
              <h1>F&B Entertainment</h1>
            </div>
          </div>
          <div className="w-full">
            <p className="text-lg text-gray-600 text-justify mb-6">
              We are dedicated to crafting a diverse culinary landscape that
              emphasizes safety, hygiene, and high-quality gourmet offerings.
              Driven by a customer-first philosophy, we implement comprehensive
              restaurant management and invest thoughtfully in food quality,
              service, and ambiance. Delivering rich and innovative dining
              experiences is both our mission and vision. We continually expand
              our restaurant concepts to meet market demands. From cuisine to
              service, we insist on providing a delicious, stylish, and
              comfortable experience for every guest.
            </p>
            <Image
              src="/hotpot/banner.jpg"
              alt="abt"
              width={1920}
              height={1080}
              className="w-full h-[300px] object-cover"
            />
            <p className="text-lg text-gray-600 text-justify mt-6">
              Our vision extends beyond food. We operate an integrated platform
              that unites dining, bar, and entertainment experiences, with a
              focus on innovation, enjoyment, and lifestyle enrichment. We are
              devoted to offering high-quality, diverse leisure experiences that
              bring moments of joy and relaxation into everyday life. Looking
              ahead, we aspire to develop more innovative entertainment concepts
              that contribute to Cambodia&apos;s entertainment economy and
              introduce new and diversified projects-becoming one of
              Cambodia&apos;s leading leisure and
            </p>

            <Image
              src="/hotpot/logo.png"
              alt="abt"
              width={400}
              height={400}
              className="object-cover h-[150px] mt-4 hidden md:block"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HotpotHero;
