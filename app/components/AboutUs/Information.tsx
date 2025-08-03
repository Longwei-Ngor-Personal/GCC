"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function Information() {
  const { t } = useTranslation();

  return (
    <div className="px-4 md:px-16 py-20">
      <div className="container w-full flex flex-col-reverse md:flex-row items-center justify-center gap-6">
        <div className="w-full space-y-5 md:mr-16">
          <p>{t("aboutus.about.info1")}</p>
          <p>{t("aboutus.about.info2")}</p>
          <p>{t("aboutus.about.info3")}</p>
        </div>
        <div className="md:w-2/3 relative">
          <Image
            src="/hongkong/hongkong.avif"
            alt="about"
            width={1080}
            height={1920}
            className="w-full h-[400px] md:h-[700px] object-cover"
          />
          <div className="hidden md:flex w-14 h-40 bg-[#1F2C57] absolute top-10 -left-14 shadow-2xl shadow-black text-primary font-medium text-center items-center justify-center">
            <p>{t("aboutus.about.title")}</p>
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
            <h2 className="absolute top-16 left-5 md:left-14 w-full h-full text-lg md:text-4xl font-semibold">
              {t("aboutus.about.visionTitle")}
            </h2>
            <p className="absolute top-28 left-5 md:left-14 w-[80%] md:w-1/2 h-full lg:text-lg font-medium ">
              {t("aboutus.about.visionDesc")}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <Image
            src="/about/teamm.jpg"
            alt="team"
            width={1080}
            height={1080}
            className="aspect-square object-cover"
          />
          <div className="w-full">
            <h2 className="text-lg md:text-4xl font-semibold">
              {t("aboutus.about.missionTitle")}
            </h2>
            <p className="mt-4">{t("aboutus.about.missionDesc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
