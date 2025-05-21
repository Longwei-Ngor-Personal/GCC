import Image from "next/image";

function HKBackground() {
  return (
    <section id="background" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <div className="md:order-2 md:ml-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              A Taste of Hong Kong Culture
            </h2>
            <p className="w-full lg:w-[90%] md:text-lg text-gray-700 leading-relaxed mb-6">
              Unique decoration with traditional Hong Kong style catering and
              Hong Kong style, is making “Hong Kong Restaurant “got an award of
              “The best restaurant voted by Chinese in Phnom Penh.”The whole
              decoration is designed with Hong Kong nostalgia, by that, it
              brigns Hong Kong culture to Cambodia. Because of the unique
              decoration style, it attracts large number of tourists to
              check-in. it is especially welcomed by property industry. It is
              the must-go check-in spot for property tour.
            </p>
          </div>
          <div className="relative w-full flex items-center justify-center mt-5 lg:mt-0 order-1">
            <Image
              src="/hkresturant/bg1.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-[250px] h-[400px] md:w-[400px] md:h-[600px] object-cover"
            />
            <Image
              src="/hkresturant/bg2.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] absolute right-2 lg:-right-5 top-10 object-cover"
            />
            <Image
              src="/hkresturant/bg3.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-[200px] h-[120px] md:w-[300px] md:h-[200px] absolute left-0 bottom-10 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HKBackground;
