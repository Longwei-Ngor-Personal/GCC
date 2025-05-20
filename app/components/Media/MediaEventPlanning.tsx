import Image from "next/image";

function MediaEventPlanning() {
  return (
    <section id="about" className="pt-20 pb-14 bg-[#F3F4F6]">
      <div className="container mx-auto px-4">
        <div className="relative w-full flex items-center justify-center mt-5 lg:mt-0">
          <Image
            src="/soho/sh1.png"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-[80%] md:w-[70%] h-auto"
          />
          <Image
            src="/soho/sh1.png"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="absolute w-[100px] md:w-[200px] lg:w-[300px] -bottom-10 lg:-bottom-24 right-2 md:right-16 h-auto aspect-square"
          />
          <Image
            src="/soho/sh1.png"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="absolute w-[150px] md:w-[250px] lg:w-[400px] -bottom-10 lg:-bottom-16 left-2 md:left-16 h-auto"
          />
        </div>
        <div className="mt-32 lg:mt-44 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Event planning and execution
          </h2>
          <p className="max-w-2xl mx-auto md:text-lg text-gray-700">
            Phnom Penh shopping malls and other public places, formulate
            activities according to needs (overall venue layout, invitation to
            media TV stations, venue coordination, etc.) system.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MediaEventPlanning;
