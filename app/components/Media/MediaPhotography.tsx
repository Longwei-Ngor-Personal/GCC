"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";

function MediaPhotography() {
  const { t } = useTranslation();

  return (
    <section id="photography" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t("media.photography.title")}
            </h2>
            <p className="w-full lg:w-[90%] md:text-lg text-gray-700 leading-relaxed mb-6">
              {t("media.photography.description")}
            </p>
          </div>
          <div className="relative w-full flex items-center justify-center mt-5 lg:mt-0">
            <Image
              src="/media/photography1.jpg"
              alt="Business Event 1"
              width={1920}
              height={1080}
              className="w-[250px] h-[400px] md:w-[400px] md:h-[600px] object-cover"
            />
            <Image
              src="/media/photography2.jpg"
              alt="Business Event 2"
              width={1920}
              height={1080}
              className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] absolute right-2 lg:-right-5 top-10 object-cover"
            />
            <Image
              src="/media/photography3.jpg"
              alt="Business Event 3"
              width={1920}
              height={1080}
              className="w-[200px] h-[120px] md:w-[300px] md:h-[200px] absolute left-0 bottom-10 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaPhotography;
