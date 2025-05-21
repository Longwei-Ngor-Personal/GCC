import Image from "next/image";

function MediaStrengths() {
  return (
    <section id="strength" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <div className="w-full mt-5 hidden lg:block">
            <Image
              src="/media/strength.avif"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-[500px] h-auto lg:aspect-square aspect-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Our Strengths and Business Scope
            </h2>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              Our main strengths lie in TV advertising shooting and production,
              enterprise advertising video, documentary, short film/short video,
              event planning and implementation, product packaging planning and
              sales, and media campaigns. Combining rich resources and team
              cooperation, our goal is to effectively promote products for
              businesses. We aim to meet the rendering power of business owners
              and brand creation, and create valuable, influential content and
              types for clients&apos; brands.{" "}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <p className="md:text-lg text-gray-700 font-semibold leading-relaxed">
                Branding business performance
              </p>
              <p className="md:text-lg text-gray-700 font-semibold leading-relaxed">
                Media launch party planning{" "}
              </p>
              <p className="md:text-lg text-gray-700 font-semibold leading-relaxed">
                Facebook advertising and management
              </p>
              <p className="md:text-lg text-gray-700 font-semibold leading-relaxed">
                Tik tok advertising and management
              </p>
              <p className="md:text-lg text-gray-700 font-semibold leading-relaxed">
                Design printing
              </p>
              <p className="md:text-lg text-gray-700 font-semibold leading-relaxed">
                LED Board/LED Screen
              </p>
            </div>
          </div>
          <div className="w-full mt-5 lg:hidden ">
            <Image
              src="/soho/sh1.png"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-auto lg:aspect-square aspect-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaStrengths;
