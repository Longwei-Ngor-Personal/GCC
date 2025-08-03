"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Header from "../Header";

function MediaHero() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="py-32 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="w-full">
            <div className="flex items-center justify-center w-full">
              <Image
                src="/media/media-logo.png"
                alt="logo"
                width={300}
                height={300}
                className="h-[100px] object-cover"
              />
            </div>

            {/* ✅ Paragraph 1 */}
            <p className="text-lg text-gray-600 text-justify">
              {t("media.hero.paragraph1")}
            </p>

            {/* ✅ Paragraph 2 */}
            <p className="text-lg text-gray-600 text-justify mt-2">
              {t("media.hero.paragraph2")}
            </p>

            <div className="grid grid-cols-5 gap-2 mt-6">
              <div className="col-span-2">
                <Image
                  src="/media/3.jpg"
                  alt="abt"
                  width={1920}
                  height={1080}
                  className="w-full h-[150px] object-cover"
                />
                <Image
                  src="/media/4.jpg"
                  alt="abt"
                  width={1920}
                  height={1080}
                  className="w-full h-[150px] object-cover"
                />
              </div>
              <Image
                src="/media/2.jpg"
                alt="abt"
                width={1920}
                height={1080}
                className="w-full h-[300px] object-cover col-span-3"
              />
              <Image
                src="/media/5.jpg"
                alt="abt"
                width={1920}
                height={1080}
                className="w-full h-[300px] object-cover col-span-3"
              />
              <Image
                src="/media/7.jpg"
                alt="abt"
                width={1920}
                height={1080}
                className="w-full h-[300px] object-cover col-span-2"
              />
            </div>
          </div>

          <div className="relative hidden md:block">
            <Image
              src="/media/hero.jpg"
              alt="abt"
              width={1920}
              height={1080}
              className="w-full md:h-[1300px] lg:h-[1050px] object-cover object-left"
            />
            <div className="absolute hidden w-32 lg:w-44 h-full bg-[#471D88] top-0 right-0 text-white text-center font-medium text-lg lg:text-2xl md:flex items-center justify-center">
              {/* ✅ Side label */}
              <h1>{t("media.hero.sideLabel")}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MediaHero;
