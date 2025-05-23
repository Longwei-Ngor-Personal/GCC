import Image from "next/image";

function BakkuttehFeatures() {
  return (
    <section id="features" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="md:ml-16">
          <h2 className="max-w-2xl mx-auto text-center text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            The taste of home brings warmth to Heart and also Stomach
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Image
            src="/bakkutteh/food1.jpg"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-[300px] md:w-[400px] md:h-[400px] object-cover"
          />{" "}
          <Image
            src="/bakkutteh/food2.jpg"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-[300px] md:w-[400px] md:h-[400px] object-cover"
          />{" "}
          <Image
            src="/bakkutteh/food3.jpg"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-[300px] md:w-[400px] md:h-[400px] object-cover"
          />{" "}
          <Image
            src="/bakkutteh/food4.png"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-[300px] md:w-[400px] md:h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default BakkuttehFeatures;
