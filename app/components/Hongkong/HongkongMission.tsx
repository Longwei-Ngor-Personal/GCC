"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function HongkongMission() {
  const { t } = useTranslation();

  return (
    <section id="mission" className="py-16 bg-black/10">
      <div className="container mx-auto px-4 md:px-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("branches.hongkong.mission.title")}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 md:pr-12">
            <p className="text-gray-600 mb-6 leading-relaxed md:text-lg">
              {t("branches.hongkong.mission.p1")}
            </p>
            <p className="text-gray-600 leading-relaxed md:text-lg">
              {t("branches.hongkong.mission.p2")}
            </p>
          </div>
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="relative h-64 md:h-64 w-full">
              <Image
                src="/hongkong/hero.jpg"
                alt="GCC Japan Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HongkongMission;
