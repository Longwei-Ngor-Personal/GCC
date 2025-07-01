import Image from "next/image";

function FundBackground() {
  return (
    <section id="background" className="py-14">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/home/fundlogo.png"
              alt="logo"
              width={300}
              height={300}
            />
            <p className="md:text-lg text-gray-700 leading-relaxed my-6">
              Cambodia&apos;s economy is growing rapidly, with an average GDP
              growth rate of 7% for seven consecutive years. Its industrial
              chain has also risen rapidly, from garments to electronics and
              auto parts, becoming the new &ldquo;Asian Tiger&rdquo;. Since
              joining the WTO in 2004, the poverty rate has dropped rapidly from
              53.2% to around 10%. In order to strengthen foreign investment,
              the government has released preferential policies such as 100%
              foreign ownership and a 9- year tax exemption period, which has
              enabled foreign investment to actively invest in finance, real
              estate, manufacturing and telecommunications.
            </p>
            <p className="md:text-lg text-gray-700 leading-relaxed ">
              GC Fund has gained the trust of many clients with its strong
              investment network and ability to lead the market in Cambodia. The
              fund products it serves include Cambodia Real Estate Management
              Investment Special Fund and Cambodia Real Estate Development Fund.
              All of the above products are entrusted to an independent third
              party in Hong Kong as the project manager.
            </p>
          </div>
          <div className="w-full flex items-center justify-center mt-5 lg:mt-0">
            <Image
              src="/fund/fund.avif"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="lg:w-[500px] w-full h-auto lg:aspect-square aspect-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FundBackground;
