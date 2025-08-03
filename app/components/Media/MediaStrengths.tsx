"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";

function MediaStrengths() {
  const { t } = useTranslation();

  return (
    <section id="strength" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <div className="w-full mt-5 hidden lg:block">
            <Image
              src="/media/strength.avif"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-[500px] h-auto lg:aspect-square aspect-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t("media.strengths.title")}
            </h2>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              {t("media.strengths.description")}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <p className="md:text-lg text-gray-700 font-semibold leading-relaxed">
                {t("media.strengths.points.branding")}
              </p>
              <p className="md:text-lg text-gray-700 font-semibold leading-relaxed">
                {t("media.strengths.points.launch")}
              </p>
              <p className="md:text-lg text-gray-700 font-semibold leading-relaxed">
                {t("media.strengths.points.facebook")}
              </p>
              <p className="md:text-lg text-gray-700 font-semibold leading-relaxed">
                {t("media.strengths.points.tiktok")}
              </p>
              <p className="md:text-lg text-gray-700 font-semibold leading-relaxed">
                {t("media.strengths.points.design")}
              </p>
              <p className="md:text-lg text-gray-700 font-semibold leading-relaxed">
                {t("media.strengths.points.led")}
              </p>
            </div>
          </div>
          <div className="w-full mt-5 lg:hidden ">
            <Image
              src="/soho/sh1.png"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-auto lg:aspect-square aspect-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaStrengths;
