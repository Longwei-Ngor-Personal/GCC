import Image from "next/image";

function SuperAbout() {
  return (
    <section id="strength" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <div className="w-full mt-5 hidden lg:block">
            <Image
              src="/super/about.png"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-[500px] h-auto lg:aspect-square aspect-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              GC Supermarket: Meeting the Needs of Cambodia&apos;s Growing
              Consumer Market
            </h2>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              With the recovery of the worldwide economy, ASEAN has become a
              spotlight of exploring business opportunity. Cambodia, in the
              meantime, has steadily become more of a market economy system. In
              this stage of high-speed economic growth, the capital Phnom Penh
              became a popular spot of both local and foreign population. The
              population growth also made the consumer market grows
              continuously.{" "}
            </p>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              Since the current supermarket retail industry is still adopting a
              relatively convention operating system, there is a lack of variety
              of fresh food ingredients and imported high-class food. It cannot
              fully satisfy the purchasing needs of the consumer segment.
              Through different market research and combination of innovation
              elements, GC Supermarket embraces the customer-oriented culture
              and builds a new anchor of purchasing market.
            </p>
          </div>
          <div className="w-full mt-5 lg:hidden ">
            <Image
              src="/super/about.png"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-auto lg:aspect-square aspect-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuperAbout;
