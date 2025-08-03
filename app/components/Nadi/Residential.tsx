"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const Residential = () => {
  const { t } = useTranslation();
  return (
    <section className=" px-16 py-12 text-slate-800 bg-[#F4F4F4]">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="w-full text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Image
              src="/nadi/shophouse.webp"
              alt="shophouse"
              width={500}
              height={500}
              className="object-stretch lg:w-64 h-44 lg:h-32"
            />
            <Image
              src="/nadi/shophouse2.jpeg"
              alt="shophouse"
              width={500}
              height={500}
              className="object-stretch lg:w-64 h-44 lg:h-32"
            />
          </div>
          <h1 className="text-xl font-medium mt-4">{t("realestate.residential.shophouse")}</h1>
        </div>
        <div className="w-full text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Image
              src="/nadi/link-house.png"
              alt="shophouse"
              width={500}
              height={500}
              className="object-stretch lg:w-64 h-44 lg:h-32"
            />
            <Image
              src="/nadi/link-house2.jpeg"
              alt="shophouse"
              width={500}
              height={500}
              className="object-stretch lg:w-64 h-44 lg:h-32"
            />
          </div>
          <h1 className="text-xl font-medium mt-6">{t("realestate.residential.linkhouse")}</h1>
        </div>
        <div className="w-full text-center mt-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Image
              src="/nadi/queenvilla.webp"
              alt="shophouse"
              width={500}
              height={500}
              className="object-stretch lg:w-64 h-44 lg:h-32"
            />
            <Image
              src="/nadi/queen-villa2.jpg"
              alt="shophouse"
              width={500}
              height={500}
              className="object-stretch lg:w-64 h-44 lg:h-32"
            />
          </div>
          <h1 className="text-xl font-medium mt-6">{t("realestate.residential.singlevilla")}</h1>
        </div>
        <div className="w-full text-center mt-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Image
              src="/nadi/kingvilla.webp"
              alt="shophouse"
              width={500}
              height={500}
              className="object-stretch lg:w-64 h-44 lg:h-32"
            />
            <Image
              src="/nadi/king-villa.png"
              alt="shophouse"
              width={500}
              height={500}
              className="object-stretch lg:w-64 h-44 lg:h-32"
            />
          </div>
          <h1 className="text-xl font-medium mt-6">{t("realestate.residential.grandvilla")}</h1>
        </div>
        <div className="w-full text-center mt-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Image
              src="/nadi/twinvilla.webp"
              alt="shophouse"
              width={500}
              height={500}
              className="object-stretch lg:w-64 h-44 lg:h-32"
            />
            <Image
              src="/nadi/twin-villa.png"
              alt="shophouse"
              width={500}
              height={500}
              className="object-stretch lg:w-64 h-44 lg:h-32"
            />
          </div>
          <h1 className="text-xl font-medium mt-6">{t("realestate.residential.twinvilla")}</h1>
        </div>
        <div className="w-full text-center mt-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Image
              src="/nadi/apartment.webp"
              alt="shophouse"
              width={500}
              height={500}
              className="object-stretch lg:w-64 h-44 lg:h-32"
            />
            <Image
              src="/nadi/apartment.jpeg"
              alt="shophouse"
              width={500}
              height={500}
              className="object-stretch lg:w-64 h-44 lg:h-32"
            />
          </div>
          <h1 className="text-xl font-medium mt-6">{t("realestate.residential.condo")}</h1>
        </div>
      </div>
    </section>
  );
};

export default Residential;
