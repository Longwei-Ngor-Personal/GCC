"use client";

import Image from "next/image";
import React from "react";
import Header from "../Header";
import { useTranslation } from "react-i18next";

function HongKongHero() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section className="container mx-auto pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src="/hongkong/hongkong.avif"
            alt="hongkong"
            width={1000}
            height={1000}
            className="h-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {t("branches.hongkong.title")}
            </h1>
            <p className="text-gray-600 mb-4 leading-relaxed md:text-lg">
              {t("branches.hongkong.p1")}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed md:text-lg">
              {t("branches.hongkong.p2")}
            </p>
            <Image
              src="/hongkong/2.jpg"
              alt="hongkong"
              width={1000}
              height={1000}
              className="h-[300px] object-cover"
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Image
                src="/hongkong/23.jpg"
                alt="hongkong"
                width={1000}
                height={1000}
                className="h-full object-cover"
              />
              <Image
                src="/hongkong/4.jpg"
                alt="hongkong"
                width={1000}
                height={1000}
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HongKongHero;
