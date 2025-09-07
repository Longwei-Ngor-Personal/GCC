"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

function SohoAdd() {
  const { t } = useTranslation();

  return (
    <>
      {/* HERO (image only) */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/soho/hero.jpg"
          alt="SOHO Property Management"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
      </section>

      {/* Intro paragraph */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg text-gray-700 text-justify leading-relaxed">
            {t("soho.add.intro")}
          </p>
        </div>
      </section>

      {/* Image-left + 2 paragraphs-right */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="lg:grid grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <Image
              src="/soho/management.jpg"
              alt="Property Management Operations"
              width={1920}
              height={1080}
              className="w-full h-[420px] lg:h-[520px] object-cover rounded-md"
            />

            {/* Right Text */}
            <div className="mt-8 lg:mt-0">
              <p className="text-lg text-gray-600 text-justify my-6">
                {t("soho.add.section.p1")}
              </p>
              <p className="text-lg text-gray-600 text-justify">
                {t("soho.add.section.p2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision strip (image with text on top) */}
      <section className="mt-20">
        <div className="relative w-full text-white">
          <Image
            src="/soho/handshake.jpg"
            alt="handshake"
            width={1920}
            height={1080}
            className="h-[500px] w-full object-top object-cover -z-10"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-45" />
          <div className="absolute top-16 left-5 md:left-14 z-50">
            <p className="mt-4 w-[80%] md:w-1/2 lg:text-lg font-medium text-justify">
              {t("soho.add.vision.l1")}
            </p>
            <p className="mt-4 w-[80%] md:w-1/2 lg:text-lg font-medium text-justify">
              {t("soho.add.vision.l2")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SohoAdd;
