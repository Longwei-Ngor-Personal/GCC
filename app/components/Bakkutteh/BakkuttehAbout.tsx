import Image from "next/image";

function BakkuttehAbout() {
  return (
    <section id="about" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <div className="md:ml-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Bak Kut Teh: From Legend to Dish
            </h2>
            <p className="w-full lg:w-[90%] md:text-lg text-gray-700 leading-relaxed mb-6">
              According to legend, bak kut teh is a food originating from
              Chaozhou and Fujian. It is popular in places such as Singapore and
              Malaysia. It is also divided into two main versions: Klang bak kut
              teh and Singapore bak kut teh. The former is mainly based on
              medicinal herbs, with a darker color and richer flavor; and later
              on add a large amount of white pepper, and the soup is lighter in
              color and more fragrant.
            </p>
          </div>
          <div className="relative w-full flex items-center justify-center mt-5 lg:mt-0">
            <Image
              src="/bakkutteh/about1.jpeg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] md:w-[400px] md:h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BakkuttehAbout;
