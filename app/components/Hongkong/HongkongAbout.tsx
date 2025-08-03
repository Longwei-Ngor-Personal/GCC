"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function HongkongAbout() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20">
      <div className="mx-auto px-4 md:px-16">
        <div className="w-full mx-auto text-left mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("branches.hongkong.about.title")}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-start mb-20">
          <div className="w-full md:w-1/2 md:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative h-80 w-full">
                <Image
                  src="/hongkong/1.jpg"
                  alt="GCC Hong Kong Office 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 w-full">
                <Image
                  src="/hongkong/5.jpg"
                  alt="GCC Hong Kong Office 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pr-12 md:text-lg">
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t("branches.hongkong.about.p1")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t("branches.hongkong.about.p2")}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <p className="text-gray-600 mb-6 leading-relaxed md:text-lg md:hidden">
              {t("branches.hongkong.about.p3")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative h-80 w-full">
                <Image
                  src="/hongkong/7.jpg"
                  alt="GCC Hong Kong Office 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 w-full">
                <Image
                  src="/hongkong/8.jpg"
                  alt="GCC Hong Kong Office 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12 md:text-lg">
            <p className="text-gray-600 mb-6 leading-relaxed hidden md:block">
              {t("branches.hongkong.about.p4")}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t("branches.hongkong.about.p5")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HongkongAbout;
