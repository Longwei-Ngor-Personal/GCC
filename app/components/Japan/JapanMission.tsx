"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function JapanMission() {
  const { t } = useTranslation();

  return (
    <section id="mission" className="py-16 bg-black/10">
      <div className="mx-auto px-4 md:px-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("branches.japan.mission.title")}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="relative h-64 md:h-80 w-full overflow-hidden shadow-lg">
              <Image
                src="/japan/fuji2.jpeg"
                alt="GCC Japan Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-gray-600 mb-6 leading-relaxed md:text-lg">
              {t("branches.japan.mission.p1")}
            </p>
            <p className="text-gray-600 leading-relaxed md:text-lg">
              {t("branches.japan.mission.p2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JapanMission;
