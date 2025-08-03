"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";

function MediaEventPlanning() {
  const { t } = useTranslation();

  return (
    <section id="about" className="pt-20 pb-14 bg-[#F3F4F6]">
      <div className="container mx-auto px-4">
        <div className="relative w-full flex items-center justify-center mt-5 lg:mt-0">
          <Image
            src="/media/planning3.jpg"
            alt="Event Planning Background"
            width={1920}
            height={1080}
            className="w-[80%] md:w-[70%] h-auto object-cover"
          />
          <Image
            src="/media/planning2.png"
            alt="Decor Element"
            width={1920}
            height={1080}
            className="absolute w-[100px] md:w-[200px] lg:w-[300px] -bottom-10 lg:-bottom-24 right-2 md:right-16 h-auto object-cover aspect-square"
          />
          <Image
            src="/media/planning1.jpg"
            alt="Decor Element"
            width={1920}
            height={1080}
            className="absolute w-[150px] md:w-[250px] lg:w-[400px] -bottom-10 lg:-bottom-24 left-2 md:left-16 h-auto object-cover"
          />
        </div>
        <div className="mt-32 lg:mt-44 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {t("media.eventPlanning.title")}
          </h2>
          <p className="max-w-2xl mx-auto md:text-lg text-gray-700">
            {t("media.eventPlanning.description")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MediaEventPlanning;
