import Image from "next/image";

function CareAbout() {
  return (
    <section id="focus" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Supporting Cambodia&apos;s Future
            </h2>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              With the high-speed economic growth in the past decade, Cambodia
              has become the market economy country with the highest growth rate
              in ASEAN country. However, there are still some areas in remote
              area with no better life quality because of the environment
              factor. Every kid will be the backbone of our country in the
              future. During their growth, learning is especially an
              indispensable element. Besides the basic needs of food and
              shelter, inspiring their potential by education is also important.
              It also makes them more looking forward to the future. Upholding
              the beginner mind of creating more beautiful blueprint in
              Cambodia, we hope to bring more warmth to more people in need with
              our best effort.
            </p>
          </div>
          <Image
            src="/care/about.jpg"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-[600px] object-cover md:mt-20"
          />{" "}
        </div>
      </div>
    </section>
  );
}

export default CareAbout;
