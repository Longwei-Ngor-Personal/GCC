"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const GalleryOrussey = () => {
  const { t } = useTranslation();

  return (
    <section className="px-16 py-12 text-slate-800 bg-[#F4F4F4]">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="mt-4">
          <Image
            src="/nadi/orussey1.jpg"
            alt="orussey"
            width={1000}
            height={1000}
            className="w-full h-[300px] object-cover"
          />
          <h1 className="font-medium text-xl text-center mt-4">
            {t("realestate.gallery.indoorMall")}
          </h1>
        </div>
        <div className="mt-4">
          <Image
            src="/nadi/orussey5.jpg"
            alt="orussey"
            width={1000}
            height={1000}
            className="w-full h-[300px] object-cover"
          />
          <h1 className="font-medium text-xl text-center mt-4">
            {t("realestate.gallery.indoorMall")}
          </h1>
        </div>
        <div className="mt-4">
          <Image
            src="/nadi/orussey6.jpg"
            alt="orussey"
            width={1000}
            height={1000}
            className="w-full h-[300px] object-cover"
          />
          <h1 className="font-medium text-xl text-center mt-4">
            {t("realestate.gallery.indoorMall")}
          </h1>
        </div>
        <div className="mt-4">
          <Image
            src="/nadi/orussey3.jpg"
            alt="orussey"
            width={1000}
            height={1000}
            className="w-full h-[300px] object-cover"
          />
          <h1 className="font-medium text-xl text-center mt-4">
            {t("realestate.gallery.rooftopPlaza")}
          </h1>
        </div>
        <div className="mt-4">
          <Image
            src="/nadi/orussey4.jpg"
            alt="orussey"
            width={1000}
            height={1000}
            className="w-full h-[300px] object-cover"
          />
          <h1 className="font-medium text-xl text-center mt-4">
            {t("realestate.gallery.rooftopPlaza")}
          </h1>
        </div>
        <div className="mt-4">
          <Image
            src="/nadi/orussey2.jpg"
            alt="orussey"
            width={1000}
            height={1000}
            className="w-full h-[300px] object-cover"
          />
          <h1 className="font-medium text-xl text-center mt-4">
            {t("realestate.gallery.shopDisplay")}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default GalleryOrussey;
