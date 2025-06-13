import Image from "next/image";

function FundPartners() {
  return (
    <section className="py-14 bg-[#F3F4F6]">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Investing Partners
          </h2>
          <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
            A renowned figure in the entertainment industry, Jacky brings unique
            insights into investment strategies.
          </p>
        </div>
        <div className="space-y-10">
          <div className="md:grid grid-cols-4 gap-10">
            <Image
              src="/fund/hero.png"
              width={1080}
              height={1920}
              alt="jack"
              className="w-full h-auto md:aspect-square mb-4 md:mb-0"
            />
            <div className="col-span-3">
              <h3 className="md:text-lg font-semibold text-gray-900">
                Jacky Chan 陳卓基
              </h3>
              <p className="text-gray-700">Investor Partner</p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-6">
                Mr Chan holds a degree of Economic and Finance in Hong Kong
                University. In 2017, he was in a position of analyst, senior
                project manager and Asia Pacific business manager. He was the
                CEO of Global Vision Fund. He held senior position in 3 big fund
                management company in Hong Kong, including GLM asset management
                limited, KGI and CASH financial service group. From January
                2018, he held a position of Vice President in asset sales
                management in greater China department in HT FUND. He has more
                than 15 years’ experience on global financial analyze and
                capital investment field. During his service in HT FUND, he
                mainly focused on research and develop midcap fund, including
                BRAVO Arbitrary fixed capital return fund, SWENSON Arbitrary
                fixed asset return fund, Hong Kong Special Project fund, Global
                IPO Alpha Fund. Besides his professional experience in fund
                management, he also held a position of senior researcher and
                consultant in Boom Securities (HK) Limited and the Bank of East
                Asia. He acquired vivid experience on asset consultancy and
                research.
              </p>
            </div>
          </div>

          <div className="md:grid grid-cols-4 gap-10">
            <Image
              src="/fund/hero.png"
              width={1080}
              height={1920}
              alt="jack"
              className="w-full h-auto md:aspect-square mb-4 md:mb-0"
            />
            <div className="col-span-3">
              <h3 className="text-lg font-semibold text-gray-900">
                Cruise Yang 楊慶勇
              </h3>
              <p className="text-gray-700">Investor Partner</p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-6">
                Mr Young graduated from Dongbei University of Finance and
                Economics with a degree of Accounting and a master degree of
                National Economics. He also graduated from Nanyang Technological
                University, Singapore with a master degree of Science. He has
                been working in the field of investment and investment
                consultancy for almost 20 years.Before 2001, he mainly
                participated and led the listing and investment project of China
                concepts stocks in Hong Kong, United Kingdom, Singapore and
                United States. He participated and invested in the projects of
                listing, merging and reverse takeover of twelve companies.From
                2010 to now, he mainly participates in the listing and
                investment works of China A Shares main board, SME board, GEM
                board, Sci-Tech innovation board. He also participates in the
                work of capital raising and investing of Hong Sheng capital
                management, directly and indirectly participates in the
                investing and merging of 5 A shares listing companies. He is now
                the managing partner of Hong Sheng capital management co. ltd,
                owner of 英納投資（天津）有限公司 and
                海納德圓（北京）投資諮詢有限公司.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FundPartners;
