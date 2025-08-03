"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function IntroductionOrussey() {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          <div className="relative w-full h-full">
            <Image
              src="/nadi/orussey-about.jpeg"
              alt="logo"
              width={1920}
              height={1080}
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <Image
                src="/nadi/orussey-logo.png"
                alt="logo"
                width={100}
                height={100}
              />
              <h1 className="text-4xl font-medium">
                {t("realestate.orussey.title")}
              </h1>
            </div>
            <p className="text-lg text-gray-600 text-justify">
              {t("realestate.orussey.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionOrussey;
