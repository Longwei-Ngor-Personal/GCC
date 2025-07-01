import Image from "next/image";
import Header from "../Header";

function MediaHero() {
  return (
    <>
      <Header />
      <div className="py-32 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="w-full">
            <div className="flex items-center justify-center w-full">
              <Image
                src="/media/media-logo.png"
                alt="logo"
                width={300}
                height={300}
                className="h-[100px] object-cover"
              />
            </div>
            <p className="text-lg text-gray-600 text-justify">
              GC Media possesses extensive media resources and core
              competencies, offering services such as brand enhancement.
              advertising production, promotional campaigns, and event planning.
              By collaborating with leading local media teams, we have built a
              diversified and dynamic media ecosystem. Our main strengths
              include: TV commercial production, Corporate promotional videos,
              Documentaries and short films. Event planning and execution.
              Product packaging design.
            </p>
            <p className="text-lg text-gray-600 text-justify mt-2">
              Media campaigns and publicity. Through rich resources and strong
              team collaboration, our goal is to help businesses effectively
              promote their products, fulfill business owners branding needs,
              and create influential content that enhances brand value
            </p>
            <div className="grid grid-cols-2 gap-2 mt-6">
              <Image
                src="/media/img3.jpg"
                alt="abt"
                width={1920}
                height={1080}
                className="w-full h-[300px] object-cover"
              />
              <Image
                src="/media/img2.jpg"
                alt="abt"
                width={1920}
                height={1080}
                className="w-full h-[300px] object-cover"
              />
            </div>
            <Image
              src="/media/img4.jpg"
              alt="abt"
              width={1920}
              height={1080}
              className="w-full h-[320px] object-cover  mt-2 block md:hidden lg:block"
            />
          </div>
          <div className="relative">
            <Image
              src="/media/photography1.jpg"
              alt="abt"
              width={1920}
              height={1080}
              className="w-full md:h-[1000px] lg:h-[1070px] object-cover"
            />
            <div className="absolute hidden w-44 h-full bg-[#823E16] top-0 right-0 text-white text-center font-medium text-2xl md:flex items-center justify-center">
              <h1>Cultural Popularization</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MediaHero;
