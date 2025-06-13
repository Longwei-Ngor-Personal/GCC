import Image from "next/image";

function LandTargets() {
  return (
    <section id="targets" className="pt-14 pb-20">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              GC land Primary land developer collaboration targets
            </h2>
            <p className="md:text-lg text-gray-700 leading-relaxed mt-4">
              GC Land welcomes collaboration with a wide range of partners who
              share a vision for responsible and profitable land development.
              Our primary collaboration targets include:
            </p>
            <div className="md:grid grid-cols-2 gap-4 font-semibold">
              <p>General and professional investors</p>
              <p>Land investors</p>
              <p>Property developers </p>
              <p>Family trust and foundation</p>
            </div>
            <p className="md:text-lg text-gray-700 leading-relaxed mt-4">
              If you would like to know more about the issues of land investment
              cooperation plan and land buying, you are more than welcome to
              contact us.
            </p>
          </div>
          <Image
            src="/land/target.png"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-[600px] object-cover mt-20 md:mt-0"
          />
        </div>
      </div>
    </section>
  );
}

export default LandTargets;
