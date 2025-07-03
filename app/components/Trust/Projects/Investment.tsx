import Image from "next/image";

function InvestmentProjects() {
  return (
    <section id="projects" className="py-14">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Image
            src="/trust/building&tree.avif"
            alt="building"
            width={1920}
            height={1080}
            className="w-full h-[400px] object-cover -z-10"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 z-0" />
          <h1 className="absolute text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-4xl font-bold">
            Investment Projects
          </h1>
        </div>
        <div className="md:grid grid-cols-2 gap-4 pt-24">
          <Image
            src="/trust/pic-02.jpg"
            alt="pic"
            width={1000}
            height={1000}
            className="h-full lg:h-auto object-cover"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="text-4xl font-medium">
              CEO Wyndham Hotel & Residences
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              CEO Wyndham Residences is located in Makara District, the prime
              and central area of Phnom Penh. As the city&apos;s first
              international business-residential landmark, the project features
              a 33-storey, 128-meter tall, twin-tower design with sleek
              architectural lines. countries.
            </p>
            <p className="text-lg text-gray-600 mt-2">
              The project has been honored with multiple accolades at the
              Cambodia Property Awards, including: Best Condo Development. Best
              Architectural Design, Best Office Development. The world-renowned
              Wyndham Hotels & Resorts, with over 8,000 hotels across 78
              countries.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-5">
              <Image
                src="/trust/pic-01.avif"
                alt="pic"
                width={500}
                height={500}
              />
              <Image
                src="/trust/pic-03.avif"
                alt="pic"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Image
            src="/trust/pic-04.png"
            alt="building"
            width={1920}
            height={1080}
            className="object-cover -z-10"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <Image
            src="/trust/pic-05.png"
            alt="pic"
            width={1000}
            height={1000}
            className="h-full object-cover lg:h-auto order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-medium">
              Lixin Century Creative Park
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Located at the heart of Ream National Park in Sihanoukville, the
              Lixin Century Creative Park spans an area of 2,500 hectares within
              a 12-kilometer radius. It boasts the second-largest and most
              beautiful mangrove landscape in the world. Surrounded by rare
              natural resources —flanked by two mountains and facing the bay—the
              site lies east of Banda Mountain and Deben Mountain. Leveraging
              the natural terrain of the mountains, the project promotes a
              lifestyle that embraces nature, enjoys nature, and protects
              nature, while reflecting the charm and cultural essence of
              Cambodia. It is envisioned as a world-class destination for
              high-end international business, entertainment, leisure, and
              tourism.
            </p>
            <p className="text-lg text-gray-600 mt-2">
              With environmental preservation as its guiding principle, and in
              line with national development policies, the project anchors its
              cultural strategy on regional integration with Sihanoukville,
              tapping into local features and surrounding resources. The result
              will be a vibrant, internationally influential destination that
              integrates tourism, leisure, ecological experiences, commercial
              finance, and entertainment— positioning itself as: A new economic
              and financial city of Cambodia, A Southeast Asian industrial
            </p>
          </div>
        </div>
        <div className="mt-4">
          <Image
            src="/trust/pic-06.png"
            alt="building"
            width={1920}
            height={1080}
            className="object-cover -z-10"
          />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <Image
            src="/trust/pic-07.png"
            alt="building"
            width={1920}
            height={1080}
            className="object-cover -z-10"
          />
          <Image
            src="/trust/pic-08.png"
            alt="building"
            width={1920}
            height={1080}
            className="object-cover -z-10"
          />
          <Image
            src="/trust/pic-09.png"
            alt="building"
            width={1920}
            height={1080}
            className="object-cover -z-10"
          />
        </div>
        <div className="mt-24 text-center">
          <h1 className="text-4xl font-medium">
            Cambodia New Energy Development Plan -{" "}
          </h1>
          <h1 className="text-4xl font-medium">
            EV Charging Station Handover Ceremony
          </h1>
          <div className="grid md:grid-cols-5 gap-4 mt-4">
            <Image
              src="/trust/pic-12.jpg"
              alt="building"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover  md:col-span-3"
            />
            <Image
              src="/trust/pic-11.jpg"
              alt="building"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover  md:col-span-2"
            />
            <Image
              src="/trust/pic-10.jpg"
              alt="building"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover  md:col-span-2"
            />
            <Image
              src="/trust/pic-13.jpg"
              alt="building"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover  md:col-span-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvestmentProjects;
