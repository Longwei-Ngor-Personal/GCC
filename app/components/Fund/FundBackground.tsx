"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

function FundBackground() {
  const { t } = useTranslation();

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
              {t("trust.fundbackground.p1")}
            </p>
            <p className="md:text-lg text-gray-700 leading-relaxed ">
              {t("trust.fundbackground.p2")}
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
