"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";

function MediaLEDBoard() {
  const { t } = useTranslation();

  return (
    <section id="led" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {t("media.led.title")}
          </h2>
          <p className="max-w-2xl mx-auto md:text-lg text-gray-700 leading-relaxed mb-12">
            {t("media.led.description")}
          </p>
        </div>
        <div className="lg:grid grid-cols-2 gap-4 items-start">
          <div className="col-span-1 space-y-4 hidden lg:block">
            <Image
              src="/media/led1.jpg"
              alt="LED Board"
              width={1920}
              height={1080}
              className="w-full h-full aspect-square object-cover"
            />
          </div>
          <div className="col-span-1 space-y-4 mt-4 md:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/media/led4.jpg"
                alt="LED Screen"
                width={1920}
                height={1080}
                className="w-full h-auto aspect-square object-cover"
              />
              <Image
                src="/media/led3.jpg"
                alt="LED View"
                width={1920}
                height={1080}
                className="w-full h-full aspect-square object-cover"
              />
            </div>
            <Image
              src="/media/led2.jpg"
              alt="LED Advertisement"
              width={1920}
              height={1080}
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaLEDBoard;
