import Image from "next/image";
import React from "react";

function JapanTeam() {
  return (
    <section id="team" className="py-20">
      <div className="mx-auto px-4 md:px-16 flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Person In Charge
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80%]">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
            <div className="relative h-96 w-full">
              <Image
                src="/japan/Agnes.png"
                alt="Team Member"
                fill
                className="object-top object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Agnes Yang
              </h3>
              <p className="text-gray-600 mb-4">Cheif Operating Officer</p>
              <p className="text-gray-600 mb-6 text-sm">
                CFA chartered financial analyst, CIPS international real estate
                analyst, NAR member of American Real Estate Association. She has
                worked and lived in Chinese mainland, Japan, the United States
                and Britain, and is proficient in Chinese, Japanese and English.
              </p>
              <p className="text-gray-600 text-sm">
                She had worked for a large Japanese car brand for 5 years. After
                legal and management experience, he entered the real estate
                industry to help developers in Philippines, the United States
                and the United Kingdom find good opportunities to enter the
                Japanese market. She has been involved in Cambodia&apos;s real
                estate business since 2019 and has a deep understanding of
                Cambodia&apos;s housing sales, leasing market and property
                management. Good at market analysis, multinational business
                negotiation, for customers to compare the properties of
                different countries, choose the best overseas investment scheme.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
            <div className="relative h-96 w-full">
              <Image
                src="/japan/Yinglan.png"
                alt="Team Member"
                fill
                className="object-top object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Yinglan Chi
              </h3>
              <p className="text-gray-600 mb-4">Sales Director</p>
              <p className="text-gray-600 mb-6 text-sm">
                She has the qualification of real estate transaction agent, a
                director of management and a master of real estate at Meikai
                University, and is proficient in Chinese and Japanese. She has
                sojourned in Japan for 17 years, and has worked in 2 large
                Japanese real estate development companies to help them to
                develop the Chinese market in mainland China.
              </p>
              <p className="text-gray-600  text-sm">
                With 12 years of real estate experience, involving real estate
                development, sales, leasing management, property management,
                etc., she is good at understanding the needs of customers from
                the perspective of customers and customizing the exclusive real
                estate investment plan for them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JapanTeam;
