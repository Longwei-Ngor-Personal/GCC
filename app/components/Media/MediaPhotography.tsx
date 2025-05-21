import Image from "next/image";

function MediaPhotography() {
  return (
    <section id="photography" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Business event taking/photography
            </h2>
            <p className="w-full lg:w-[90%] md:text-lg text-gray-700 leading-relaxed mb-6">
              For enterprise/business event advertising content design, video,
              photo shooting, etc., we have our own professional team, from
              planning, design, overall planning, production, to understand
              customer needs and formulate different strategies to produce
              high-quality advertising plans.
            </p>
          </div>
          <div className="relative w-full flex items-center justify-center mt-5 lg:mt-0">
            <Image
              src="/media/photography1.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-[250px] h-[400px] md:w-[400px] md:h-[600px] object-cover"
            />
            <Image
              src="/media/photography2.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] absolute right-2 lg:-right-5 top-10 object-cover"
            />
            <Image
              src="/media/photography3.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-[200px] h-[120px] md:w-[300px] md:h-[200px] absolute left-0 bottom-10 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaPhotography;
