"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";

function MediaSocialResources() {
  const { t } = useTranslation();

  return (
    <section id="social" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <div className="relative w-full flex items-center justify-center mt-5 lg:mt-0">
            <Image
              src="/media/social4.avif"
              alt="Social Media Resource"
              width={1920}
              height={1080}
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover"
            />
          </div>
          <div className="md:ml-10 mt-12 lg:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t("media.social.title")}
            </h2>
            <p className="w-full lg:w-[90%] md:text-lg text-gray-700 leading-relaxed mb-6">
              {t("media.social.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaSocialResources;
