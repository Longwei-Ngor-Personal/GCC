import Image from "next/image";

function MediaAdvertisement() {
  return (
    <section id="design" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Advertisement Design
          </h2>
          <p className="md:text-lg text-gray-700 leading-relaxed mb-12">
            Discover the benefits of investing in Cambodia today.
          </p>
        </div>
        <div className="md:grid grid-cols-3 gap-4 items-start">
          <div className="col-span-1 space-y-4">
            <Image
              src="/media/ads3.png"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full lg:h-[500px] object-cover"
            />
            <Image
              src="/media/ads1.png"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[250px]"
            />
          </div>
          <div className="col-span-1 space-y-4  mt-4 md:mt-0">
            <Image
              src="/media/ads2.png"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[250px] object-cover"
            />
            <Image
              src="/media/ads4.png"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full lg:h-[450px] object-cover"
            />
          </div>
          <div className="col-span-1 space-y-4 mt-4 md:mt-0">
            <Image
              src="/media/ads5.png"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full lg:h-[500px] object-cover"
            />
            <Image
              src="/media/ads6.png"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[250px] object-cover bg-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaAdvertisement;
