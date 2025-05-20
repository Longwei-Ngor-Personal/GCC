import Image from "next/image";

function MediaAmbassadors() {
  return (
    <section id="ambassadors" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Influencer Brand Ambassador
            </h2>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              For Facebook promotion, our services include online advertising
              design, creating a monthly posting plan, updating page
              information, strategic advertising, and replying to page comments.
            </p>
          </div>
          <div className=" w-full flex flex-col md:flex-row items-center justify-center md:space-x-32 mt-5 ">
            <div>
              <Image
                src="/soho/sh1.png"
                alt="SOHO MALL Interior"
                width={1920}
                height={1080}
                className="w-[200px] h-auto aspect-square"
              />
              <p className="text-gray-700 font-semibold mt-5 text-center">
                Vivo Phone
              </p>
            </div>
            <div>
              <Image
                src="/soho/sh1.png"
                alt="SOHO MALL Interior"
                width={1920}
                height={1080}
                className="w-[200px] h-auto aspect-square mt-10 md:mt-0"
              />
              <p className="text-gray-700 font-semibold mt-5 text-center">
                Toshiba Electronics
              </p>
            </div>
            <div>
              <Image
                src="/soho/sh1.png"
                alt="SOHO MALL Interior"
                width={1920}
                height={1080}
                className="w-[200px] h-auto aspect-square mt-10 md:mt-0"
              />
              <p className="text-gray-700 font-semibold mt-5 text-center">
                SMART Telecom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaAmbassadors;
