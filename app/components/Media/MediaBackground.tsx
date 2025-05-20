import Image from "next/image";

function MediaBackground() {
  return (
    <section id="strength" className="pt-20 pb-14 bg-[#F3F4F6]">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-3 gap-12 items-start">
          <h2 className="text-3xl col-span-1 max-w-lg font-bold text-gray-900 mb-6 leading-tight">
            Adapting to Cambodia&apos;s Growing Market
          </h2>
          <div className="col-span-2">
            <p className="md:text-lg text-gray-700 leading-relaxed">
              With the rapid development of Cambodia&apos;s economy, diversified
              industries and enterprises continue to flock in. Facing the vast
              emerging markets, as a high-end media for businesses and
              customers, GC media adheres to the spirit of innovation and
              challenge.
            </p>
            <p className="md:text-lg text-gray-700 leading-relaxed mt-2">
              GC media creates a series of diversified media services. We import
              more innovative and professional promotion ideas for the local
              media market. We also improve and cultivate more professional
              skills of local staff.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-12">
          <Image
            src="/soho/sh1.png"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-auto aspect-square "
          />
          <Image
            src="/soho/sh1.png"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-auto aspect-square"
          />
          <Image
            src="/soho/sh1.png"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-auto aspect-square"
          />
          <Image
            src="/soho/sh1.png"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-auto aspect-square"
          />
        </div>
        <div className="w-full flex item-center justify-center text-center">
          <p className="w-[90%] text-gray-700 leading-relaxed">
            Through innovative thinking and methods to enhance corporate
            reputation, seize opportunities for customers in the ever-changing
            marketing environment, increase brand exposure, let products win
            attention on different platforms, and create good sales!
          </p>
        </div>
      </div>
    </section>
  );
}

export default MediaBackground;
