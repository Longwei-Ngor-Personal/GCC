"use client";

import Image from "next/image";
import React from "react";
import Header from "../Header";
import { useTranslation } from "react-i18next";

function HotpotHero() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="pt-32 px-6 lg:px-16">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <Image
              src="/hotpot/logo.png"
              alt="abt"
              width={400}
              height={400}
              className="object-cover h-[150px] mt-4 md:hidden"
            />
            <Image
              src="/hotpot/hotpot.jpg"
              alt="abt"
              width={1920}
              height={1080}
              className="w-full md:h-[670px] lg:h-[485px] object-cover"
            />
            <Image
              src="/hotpot/vip6.jpg"
              alt="abt"
              width={1920}
              height={1080}
              className="w-full md:h-[670px] lg:h-[485px] object-cover hidden md:block"
            />
            <div className="absolute hidden w-40 h-full bg-[#823E16] top-0 left-0 text-white text-center font-medium text-2xl md:flex items-center justify-center">
              <h1>{t("hotpot.hero.sidebar")}</h1>
            </div>
          </div>
          <div className="w-full">
            <p className="text-lg text-gray-600 text-justify mb-6">
              {t("hotpot.hero.p1")}
            </p>
            <Image
              src="/hotpot/banner.jpg"
              alt="abt"
              width={1920}
              height={1080}
              className="w-full h-[300px] object-cover"
            />
            <p className="text-lg text-gray-600 text-justify mt-6">
              {t("hotpot.hero.p2")}
            </p>
            <Image
              src="/hotpot/logo.png"
              alt="abt"
              width={400}
              height={400}
              className="object-cover h-[150px] mt-4 hidden md:block"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HotpotHero;
