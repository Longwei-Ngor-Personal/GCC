import Image from "next/image";

function HKAbout() {
  return (
    <section id="focus" className="pt-14 pb-14">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Hong Kong Restaurant
            </h2>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              “Hong Kong Restaurant” is one of the most well-known restaurants
              in Cambodia, widely amazed by foreigners and local people. From
              2016-2020, there were 6 branches opened. Traditional Hong Kong
              style got promoted to foreign countries. 5 branches are located
              Phnom Penh. 1 branch is located in Malaysia.
            </p>
          </div>
          <Image
            src="/hkresturant/about.jpg"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain md:mt-20"
          />
        </div>
      </div>
    </section>
  );
}

export default HKAbout;
