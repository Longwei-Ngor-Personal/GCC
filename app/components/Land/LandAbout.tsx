import Image from "next/image";

function LandAbout() {
  return (
    <section id="focus" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12">
          <Image
            src="/land/about.png"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-[600px] object-cover hidden lg:block "
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              GC Land
            </h2>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              GC land is one of the brands under GCC. It is a primary land
              developer. Land is a precious resource and also a cornerstone of
              the company. It is very challenging for primary land developer to
              make profit for the company and the investors. At the same time,
              buyers and cooperating party got legal protection and perfectly
              tailored land for development.{" "}
            </p>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              Every high-rise building starts from the ground. Our motto is to
              make good use of land resources, release the potential of land,
              value adding to the land, creating a full district development,
              reviving the urban function, increase public interests, improve
              the city appearance, and bring people a sustainable and
              high-quality living environment through maximization of land
              value.
            </p>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              GC land has in-depth research and professional analysis on
              Cambodian land market. We have excellent professional team, unique
              insight on land, excellent resource integration ability, and make
              the best preparation for the new town project with efficient
              planning and infrastructure construction. Unleased the potential
              of a land and create new opportunities for economic development!
            </p>
          </div>
          <Image
            src="/land/about.png"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-[600px] object-cover lg:hidden "
          />
        </div>
      </div>
    </section>
  );
}

export default LandAbout;
