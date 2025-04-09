import Image from "next/image";
import React from "react";

function Board() {
  return (
    <div className="px-4 md:px-16 pt-20 pb-10">
      <div className="w-full flex-col items-center justify-center hidden md:flex">
        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Board of Directors
        </h3>
      </div>
      <div>
        <div className="md:grid grid-cols-12 gap-2 mt-10 text-gray-600 mb-20">
          <div className="col-span-2 hidden md:block">
            <h2 className="text-lg font-semibold"> Yu Ka Ki </h2>
            <h2 className="font-semibold"> GCC Chairman </h2>
          </div>
          <div className="col-span-2 w-20 h-20 rounded-full relative hidden md:block">
            <div className="absolute top-1/2 left-1/2 w-1 h-[2900px] lg:h-[1850px] bg-primary"></div>
            <Image
              src="/home/yukaki.png"
              alt="GCC Chairman"
              fill
              className="rounded-full"
            />
          </div>
          <div className="col-span-8 w-full">
            <div className="mb-4 md:hidden">
              <h2 className="text-4xl font-semibold"> Yu Ka Ki </h2>
              <h2 className="text-2xl font-semibold"> GCC Chairman </h2>
            </div>
            <p className="text-lg w-full lg:w-[750px]">
              Mr Yu is the chairman of GCC. He has years of experience of
              running business. He is broadly expose to different kinds of
              industries, having achievements on property, information
              technology and financial fields. At the same time, he has strong
              business networks in Cambodia of those fields. In his early years
              of academic, he graduated BBA Hons degree from Oxford Brookes
              University, master degree of Estate Surveying from The University
              of Hong Kong, and Law degree from University of London.
            </p>
            <p className="text-lg lg:w-[750px] mt-4">
              From his age of 26, he was already appointed different positions
              to contribute to the society by Hong Kong government. At the same
              year, he was appointed to become the member of Professional
              Development Committee and Licensing Committee by Real Estate Agent
              Authority, the member of Real Estate Services Training Board by
              Vocational Training Council. He was invited to the meetings of
              Task Force on Land Supply and become the representative of real
              estate industry to attend FATA meeting. His performance was
              excellent and got awards. In recent years, he became the CPPCC
              member of Jiangcheng district, Yeungkong city in Guangdong
              province, contributes to his motherland and community.
            </p>
            <p className="text-lg lg:w-[750px] mt-4">
              In community service, he actively participates in Youth charity
              activities. He was appointed to become the chairman of Hong Kong
              Eastern Youth, vice president of Hong Kong Island Youth
              Organization Union, board member of Hong Kong InnoVision. He holds
              several popular events in the community, founded Youth interactive
              platform, brought youth’s new generation’s skills and talents into
              full play. In the field of estate, he is the vice president and
              the information technology convenor of Hong Kong Real Estate
              Agencies General Association. He founded the Hong Kong popular
              estate information platform and system: eAgent. He built a good
              foundation of technology field in his industry.
            </p>
          </div>

          <div className="col-span-2 mt-20 hidden md:block">
            <h2 className="text-lg font-semibold"> Ricky Lai </h2>
            <h2 className="font-semibold"> GCC Chairman </h2>
          </div>
          <div className="col-span-2 mt-20 w-20 h-20 rounded-full relative hidden md:block">
            <Image
              src="/home/riki.png"
              alt="GCC Chairman"
              fill
              className="rounded-full"
            />
          </div>
          <div className="col-span-8 mt-20">
            <div className="mb-4 md:hidden">
              <h2 className="text-4xl font-semibold"> Ricky Lai </h2>
              <h2 className="text-2xl font-semibold"> GCC CEO </h2>
            </div>
            <p className="text-lg lg:w-[750px]">
              Mr. Lai is the executor director and CEO of GCC, graduated from
              the Hong Kong Polytechnic University, major in Accounting and
              Finance. He is a current registered member of Hong Kong Institute
              of Certified Public Accountants (HKICPA). He used to take up
              senior management roles at PwC Hong Kong and Australia, the
              largest CPA firm around the globe, for more than 10 years,
              focusing on financial consultation, corporate finance, IPO,
              restructuring, merger and acquisition, property and securities
              investments.
            </p>
            <p className="text-lg lg:w-[750px] mt-4">
              Together with his management expertise and business instincts, he
              visited dozens of countries seeking business opportunities in
              China, Cambodia, Myanmar, Thailand, Vietnam, Japan, Malaysia and
              Fiji in early years and established excellent relationship and
              recognition with local government officials. In recent years, he
              has been based and focused on long term development of Cambodian
              market. Using his excellent business skillsets, along with
              partnering of local government agencies, he is able to engage in
              different industries, and achieved outstanding results and
              recognitions.
            </p>
            <p className="text-lg lg:w-[750px] mt-4">
              After working restlessly in leading the company in Cambodia, GCC
              is now one of the top 5 conglomerate enterprises in Cambodia. He
              also established Greater Bay Area Cambodia Association, the first
              business association recognized by the Minister of Interior of
              Cambodia. As the vice president of the association, his dedication
              is well known that being invited by the Minister of Interior as
              their Honorable Advisor and participate in multiple government
              activities. While expanding the businesses in Cambodia, he upholds
              the concept of taking from the community and using it for the
              community, he leads the GCC team to participate in local charity
              events with the aim of contributing back to the society.
            </p>
          </div>

          <div className="col-span-2 mt-20 hidden md:block">
            <h2 className="text-lg font-semibold"> Henry Ng</h2>
            <h2 className="font-semibold"> GCC Chief Marketing Officer </h2>
          </div>
          <div className="col-span-2 mt-20 w-20 h-20 rounded-full  relative hidden md:block">
            <Image
              src="/home/henry.png"
              alt="GCC Chairman"
              fill
              className="rounded-full"
            />
          </div>
          <div className="col-span-8 mt-20">
            <div className="mb-4 md:hidden">
              <h2 className="text-4xl font-semibold"> Henry Ng </h2>
              <h2 className="text-2xl font-semibold">
                {" "}
                GCC Chief Marketing Officer{" "}
              </h2>
            </div>
            <p className="text-lg lg:w-[750px]">
              Chief Marketing Director Henry Ng Mr. Ng was graduated from Oxford
              Brookes University with a degree of BBA. He is also a member of
              The Chartered Institute of Marketing. Right after his graduation,
              he was in a position of Fortune Global 500, responsible for
              financial planning, marketing promotion. He has experience in
              managing sales team for over ten years.
            </p>
            <p className="text-lg lg:w-[750px] mt-4">
              In his early years, he took part in developing property
              information platform system named eAgent. He was in a position of
              director, responsible for overall planning on the whole business
              operation, brand positioning and branding. He also founded market
              unique electronic system via multiple market promotion and
              cooperating with big banks. The performance speaks for itself and
              it was awarded with many market recognized prizes.
            </p>
            <p className="text-lg lg:w-[750px] mt-4">
              In the scope of property selling, he led his team to explore China
              Big Bay area business. He had his whole promotion planning
              management system in Zhuhai, Zhongshan and Huizhou. He cooperated
              with several big listed-company developers selling properties vary
              from residence, apartment carpark with glorious selling results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
