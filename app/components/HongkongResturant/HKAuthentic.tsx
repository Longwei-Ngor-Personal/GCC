import Image from "next/image";

function HKAuthentic() {
  return (
    <section id="authentic" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-3 gap-12 items-start">
          <h2 className="text-3xl col-span-1 max-w-lg font-bold text-gray-900 mb-6 leading-tight">
            Authentic Hong Kong Flavors
          </h2>
          <div className="lg:ml-56 col-span-2">
            <p className="md:text-lg text-gray-700 leading-relaxed">
              Besides the unique Hong Kong style decoration, the traditional
              Hong Kong style beverage is one of the biggest selling points.
              There is various food like Hong Kong style pineapple bun, congee,
              rice with pork chop, noodle, home-made BBQ pork, beef brisket
              noodle and char siu combo rice. They are all taste of Hong Kong.
              It is safe to say they are 100% moving the Hong Kong style to
              Cambodia. If you come to Cambodia, you don’t want to miss it.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          <Image
            src="/hkresturant/food1.jpg"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-[400px] object-cover"
          />
          <Image
            src="/hkresturant/food2.jpg"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-[400px] object-cover"
          />
          <Image
            src="/hkresturant/food3.jpg"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-[400px] object-cover"
          />
          <Image
            src="/hkresturant/food4.jpg"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-[400px] object-cover"
          />
          <Image
            src="/hkresturant/food5.jpg"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-[400px] object-cover"
          />
          <Image
            src="/hkresturant/food6.jpg"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-[400px] object-cover"
          />
          <Image
            src="/hkresturant/food7.jpg"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-[400px] object-cover"
          />
          <Image
            src="/hkresturant/food8.jpg"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default HKAuthentic;
