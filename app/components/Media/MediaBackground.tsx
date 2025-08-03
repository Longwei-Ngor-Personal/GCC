"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";

function MediaBackground() {
  const { t } = useTranslation();

  return (
    <section id="strength" className="pt-20 pb-14 bg-[#F3F4F6]">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-3 gap-12 items-start">
          <h2 className="text-3xl col-span-1 max-w-lg font-bold text-gray-900 mb-6 leading-tight">
            {t("media.background.title")}
          </h2>
          <div className="col-span-2">
            <p className="md:text-lg text-gray-700 leading-relaxed">
              {t("media.background.paragraph1")}
            </p>
            <p className="md:text-lg text-gray-700 leading-relaxed mt-2">
              {t("media.background.paragraph2")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-12">
          <Image
            src="/media/camera.avif"
            alt="Camera Setup"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <Image
            src="/media/editing.avif"
            alt="Editing Studio"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <Image
            src="/media/studio.avif"
            alt="Media Studio"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <Image
            src="/media/team.avif"
            alt="Media Team"
            width={1920}
            height={1080}
            className="w-full h-full object-cover aspect-square"
          />
        </div>
        <div className="w-full flex item-center justify-center text-center">
          <p className="w-[90%] text-gray-700 leading-relaxed">
            {t("media.background.paragraph3")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MediaBackground;
