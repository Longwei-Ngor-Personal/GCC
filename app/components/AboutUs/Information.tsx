import Image from "next/image";
import React from "react";

function Information() {
  return (
    <div className="px-4 md:px-16 py-20">
      <div className="container w-full flex items-center justify-center gap-6">
        <div className="w-full space-y-5 mr-16">
          <p>
            Golden Cambodia Century Group is Cambodia&apos;s most diversified
            international conglomerate, with business operations spanning across
            Southeast Asia. Upholding the principles of continuous innovation,
            inheritance of experience, and the continuation of entrepreneurial
            spirit, the Group is committed to driving Cambodia&apos;s
            sustainable development and economic growth as its primary mission.
          </p>
          <p>
            The Group&apos;s diversified portfolio includes real estate
            development, asset management, financial investment, land
            investment, media, food and beverage, and leisure and entertainment.
            As one of Cambodia&apos;s largest property developers, the Group
            leads local real estate development and investment, with landmark
            projects such as the high-end Borey NADI by GC City, shopping mall
            GC Orussey Market, the international business-residential complex
            CEO Center, and the shopping complex SOHO Mall.
          </p>
          <p>
            To date, Golden Cambodia Century has accumulated over 3,000 hectares
            of land reserves in Cambodia and holds assets exceeding USD 3
            billion. GCC continuously seeks new opportunities, expanding beyond
            its core real estate and financial sectors to develop complementary
            lifestyle industries in Cambodia. In line with global trends, the
            Group has introduced a variety of international culinary cultures to
            the local market, such as Luk Hot pot (Hong Kong-style hotpot) and
            Bars, striving to create a more internationalized and enriched
            living experience for the Cambodian people.
          </p>
        </div>
        <div className="w-2/3 relative">
          <Image
            src="/hongkong/hongkong.avif"
            alt="about"
            width={1080}
            height={1920}
            className="w-full h-[700px] object-cover"
          />
          <div className="w-14 h-40 bg-[#1F2C57] absolute top-10 -left-14 shadow-2xl shadow-black text-primary font-medium text-center flex items-center justify-center">
            <p>About Us</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="relative w-full text-white">
          <Image
            src="/about/angkor.avif"
            alt="indepedence"
            width={1920}
            height={1080}
            className="h-[500px] object-top object-cover -z-10"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-45 " />
          <div className="z-50">
            <h2 className="absolute top-16 left-5 md:left-14 w-full h-full text-lg lg:text-2xl font-semibold">
              Coporate Vision
            </h2>
            <p className="absolute top-28 left-5 md:left-14 w-[80%] md:w-1/2 h-full lg:text-lg font-medium ">
              To become a leading enterprise rooted in Cambodia, establishing a
              financial and real estate investment bridge that connects ASEAN
              and the Belt and Road Initiative, contributing to economic
              development. At the same time, we are committed to bringing
              kindness and positive experiences to the people of Cambodia,
              giving back to society with compassion.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <Image
            src="/about/teamm.jpg"
            alt="team"
            width={1080}
            height={1080}
            className="aspect-square object-cover"
          />
          <div className="w-full">
            <h2 className="text-lg lg:text-2xl font-semibold">
              Coporate Mission
            </h2>
            <p className="mt-4">
              To integrate international business acumen with local culture and
              traditions, building an innovative enterprise that combines
              finance, real estate, and technology. Through a comprehensive
              management system, we aim to create local employment
              opportunities, stimulate the domestic economy, and attract
              international capital. At the same time, we are dedicated to
              supporting underprivileged communities in Cambodia and showing
              genuine care for society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
