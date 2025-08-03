"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function SohoEnvironment() {
  const { t } = useTranslation();

  return (
    <section className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="items-center">
          <div className="flex items-center">
            <Image src="/soho/logo.png" alt="logo" width={500} height={500} />
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t("soho.environment.p1")}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("soho.environment.p2")}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Image src="/soho/sh1.png" alt="soho" width={1920} height={1080} />
            <div className="grid grid-cols-2 gap-2 mt-2">
              <Image
                src="/soho/sh05.jpg"
                alt="SOHO MALL Interior 1"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
              <Image
                src="/soho/sh03.jpg"
                alt="SOHO MALL Interior 2"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SohoEnvironment;
