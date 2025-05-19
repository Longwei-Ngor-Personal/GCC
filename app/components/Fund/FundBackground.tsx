import Image from "next/image";

function FundBackground() {
  return (
    <section id="about" className="py-14">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Cambodia's Economy and Investment Opportunities{" "}
            </h2>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              Cambodia's economy is skyrocketing. Its average GDP growth rate
              hit 7% for 7 consecutive years, the highest in ASEAN in 2019. Its
              industry chain is also skyrocketing, from textiles to electronics
              and vehicle parts. Cambodia became the new "Asian Tiger."
            </p>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 leading-tight">
                  Economic Growth
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Since entering the WTO in 2004, Cambodia's poverty rate
                  dropped sharply from 53.2% to 10%. This rapid reduction
                  reflects significant economic improvement.
                </p>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 leading-tight">
                  Attracting Foreign Investment
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  To attract foreign investment, the Cambodian government
                  provides preferential policies, including 100% ownership
                  release and tax-free periods. This attracts capital into
                  finance, property, manufacturing, and telecommunication.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-5 lg:mt-0">
            <Image
              src="/soho/sh1.png"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="lg:w-[500px] w-full h-auto lg:aspect-square aspect-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FundBackground;
