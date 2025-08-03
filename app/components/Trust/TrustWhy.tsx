"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function TrustWhy() {
  const { t } = useTranslation();

  return (
    <section id="services" className="w-full mt-20 py-12 bg-[#F3F4F6]">
      <div className="px-4 md:px-16">
        <div className="flex items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            {t("trust.trustwhy.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 lg:col-span-3 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-sm overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-4 bg-[#163E65]">
              <h3 className="text-xl font-bold text-white ">
                {t("trust.trustwhy.point1.title")}
              </h3>
            </div>
            <div className="text-justify px-6 pb-6 mt-2 space-y-2">
              <p className="text-sm text-muted-foreground">
                {t("trust.trustwhy.point1.description1")}
              </p>
              <p>{t("trust.trustwhy.point1.description2")}</p>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-sm overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-4 bg-[#163E65]">
              <h3 className="text-xl font-bold text-white">
                {t("trust.trustwhy.point2.title")}
              </h3>
            </div>
            <div className="text-justify px-6 pb-6 mt-2">
              <p className="text-sm text-muted-foreground">
                {t("trust.trustwhy.point2.description")}
              </p>
            </div>
          </div>

          <div className="md:hidden lg:block bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-sm overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-4 bg-[#163E65]">
              <h3 className="text-xl font-bold text-white">
                {t("trust.trustwhy.point3.title")}
              </h3>
            </div>
            <div className="text-justify px-6 pb-6 mt-2">
              <p className="text-sm text-muted-foreground">
                {t("trust.trustwhy.point3.description")}
              </p>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-sm overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-4 bg-[#163E65]">
              <h3 className="text-xl font-bold text-white">
                {t("trust.trustwhy.point4.title")}
              </h3>
            </div>
            <div className="text-justify px-6 pb-6 mt-2">
              <p className="text-sm text-muted-foreground">
                {t("trust.trustwhy.point4.description")}
              </p>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-sm overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-4 bg-[#163E65]">
              <h3 className="text-xl font-bold text-white">
                {t("trust.trustwhy.point5.title")}
              </h3>
            </div>
            <div className="text-justify px-6 pb-6 mt-2">
              <p className="text-sm text-muted-foreground">
                {t("trust.trustwhy.point5.description")}
              </p>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-sm overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-4 bg-[#163E65] ">
              <h3 className="text-xl font-bold text-white">
                {t("trust.trustwhy.point6.title")}
              </h3>
            </div>
            <div className="text-justify px-6 pb-6 mt-2">
              <p className="text-sm text-muted-foreground">
                {t("trust.trustwhy.point6.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-16 mt-14">
        <div className="flex items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            {t("trust.trustwhy.caseTitle")}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-sm overflow-hidden"
            >
              <div className="p-4 bg-[#163E65]">
                <h3 className="text-xl font-bold text-white">
                  {t(`trust.trustwhy.case${i}.title`)}
                </h3>
              </div>
              <div className="text-justify px-6 pb-6 mt-2">
                <p className="text-sm text-muted-foreground">
                  {t(`trust.trustwhy.case${i}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustWhy;
