import Image from "next/image";

function HKJourney() {
  return (
    <section id="journey" className="pt-20 pb-14 bg-[#F3F4F6]">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl col-span-1 font-bold text-gray-900 mb-6 leading-tight">
            The Hong Kong Restaurant Journey
          </h2>
          <p className="max-w-3xl mx-auto md:text-lg text-gray-700 leading-relaxed">
            Theresa Yuen- founder of “Hong Kong Restaurant”- saw the opportunity
            of Hong Kong style catering in Cambodia. She then opened the first
            branch in BKK1, expanded the territory in Cambodia. Because of its
            location in town center area, it became famous because of the visit
            by celebrities and millionaires. Besides its popularity in Phnom
            Penh, it also attracts attention of media in other places, like Hong
            Kong Apple Daily, Orientaldaily, exmoo news, 58cam, guidebook.{" "}
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-12">
          <Image
            src="/hkresturant/journey1.jpg"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <Image
            src="/hkresturant/journey2.jpg"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <Image
            src="/hkresturant/journey3.jpg"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <Image
            src="/hkresturant/journey4.jpg"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-full object-cover aspect-square"
          />
        </div>
      </div>
    </section>
  );
}

export default HKJourney;
