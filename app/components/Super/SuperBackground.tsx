import Image from "next/image";

function SuperBackground() {
  return (
    <section id="strength" className="pt-20 pb-14 bg-[#F3F4F6]">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-3 gap-12 items-start">
          <h2 className="text-3xl col-span-1 max-w-lg font-bold text-gray-900 mb-6 leading-tight">
            A New Standard for Supermarket Shopping at GC Supermarket{" "}
          </h2>
          <div className="col-span-2">
            <p className="lg:ml-56 md:text-lg text-gray-700 leading-relaxed">
              Responding to changing trends, GC Supermarket leads by creating a
              new shopping experience to build a new supermarket ecology. It
              introduces high-class imported foods, fresh produce, a large
              aquatic product zone, and a wide collection of utility products.
              Carefully selected high-quality items and instant food are
              available. This satisfies consumer needs for better goods and
              shopping environment, allowing them to enjoy a perfect experience
              and driving a more decent consumption life for locals.
            </p>
          </div>
        </div>
        <Image
          src="/super/background.jpg"
          alt="SOHO MALL Interior"
          width={1920}
          height={1080}
          className="w-full h-[600px] object-cover md:mt-20"
        />
      </div>
    </section>
  );
}

export default SuperBackground;
