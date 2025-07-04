import Image from "next/image";
import Header from "../Header";

function CareHero() {
  return (
    <>
      <Header />
      <div className="py-32 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <Image
              src="/care/about.jpg"
              alt="abt"
              width={1920}
              height={1080}
              className="w-full md:h-[600px] lg:h-[375px] object-cover"
            />
            <Image
              src="/care/c11.jpg"
              alt="abt"
              width={1920}
              height={1080}
              className="w-full md:h-[600px] lg:h-[375px] object-cover object-top"
            />
            <Image
              src="/care/c4.jpg"
              alt="abt"
              width={1920}
              height={1080}
              className="w-full md:h-[600px] lg:h-[375px] object-cover object-top"
            />
            <div className="absolute hidden w-24 h-full bg-[#931E27] top-0 left-0 text-white text-center font-medium text-2xl md:flex items-center justify-center">
              <h1>Charity</h1>
            </div>
          </div>
          <div>
            <div className="w-full flex items-center justify-center">
              <Image
                src="/care/carelogo.png"
                alt="abt"
                width={200}
                height={200}
                className="object-cover "
              />
            </div>
            <p className="text-lg text-gray-600 text-justify">
              Over the past decade, Cambodia has experienced rapid economic
              growth, becoming the fastest-growing market economy among ASEAN
              countries. However, remote rural communities still face
              environmental challenges that hinder their quality of life.
              Children are the future of a nation, and education plays a crucial
              role in nurturing their potential. Beyond satisfying basic needs
              such as food and shelter, education inspires hope and opens the
              door to new possibilities.
            </p>
            <p className="text-lg text-gray-600 text-justify mt-2">
              Rooted in our core is to help build a better Cambodia, we are
              committed to extending warmth and support to those in need—
              believing that even the smallest acts of kindness can make a huge
              difference.
            </p>
            <p className="text-lg text-gray-600 text-justify mt-2">
              Everyone deserves love, care, and protection. With compassion as
              our foundation, we believe in creating a future of shared
              prosperity.
            </p>
            <div className="grid lg:grid-cols-2 gap-2 mt-6">
              <Image
                src="/care/c12.jpg"
                alt="abt"
                width={1920}
                height={1080}
                className="w-full h-full object-cover object-left"
              />
              <div className="space-y-2 lg:space-y-0">
                <Image
                  src="/care/c1.jpg"
                  alt="abt"
                  width={1920}
                  height={1080}
                  className="w-full h-[210px] object-cover"
                />
                <Image
                  src="/care/c2.jpg"
                  alt="abt"
                  width={1920}
                  height={1080}
                  className="w-full h-[210px] object-cover"
                />
                <Image
                  src="/care/c5.jpg"
                  alt="abt"
                  width={1920}
                  height={1080}
                  className="w-full h-[210px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CareHero;
