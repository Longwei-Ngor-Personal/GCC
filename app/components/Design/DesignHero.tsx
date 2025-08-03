"use client";

import Header from "../Header";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="py-32 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <Image
              src="/design/abt1.jpg"
              alt="abt"
              width={1920}
              height={1080}
              className="w-full md:h-[950px] lg:h-[1000px] object-cover"
            />
            <div className="absolute hidden w-36 h-full bg-[#823E16] top-0 left-0 text-white text-center font-medium text-2xl md:flex items-center justify-center">
              <h1>{t("design.hero.title")}</h1>
            </div>
          </div>
          <div className="w-full">
            <p className="text-lg text-gray-600 text-justify">
              {t("design.hero.p1")}
            </p>
            <p className="text-lg text-gray-600 text-justify mt-2">
              {t("design.hero.p2")}
            </p>
            <div className="grid grid-cols-2 gap-2 mt-6">
              <Image
                src="/design/abt2.jpg"
                alt="abt"
                width={1920}
                height={1080}
                className="w-full h-[300px] object-cover"
              />
              <Image
                src="/design/abt3.jpg"
                alt="abt"
                width={1920}
                height={1080}
                className="w-full h-[300px] object-cover"
              />
            </div>
            <Image
              src="/design/abt4.jpg"
              alt="abt"
              width={1920}
              height={1080}
              className="w-full h-[320px] object-cover object-top mt-2 block md:hidden lg:block"
            />
          </div>
        </div>
      </div>
    </>
  );
}
