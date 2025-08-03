"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

function ChinaAbout() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto pt-18">
      <div className="grid grid-cols-2 gap-4">
        <Image
          src="/hongkong/china.avif"
          alt="hongkong"
          width={1000}
          height={1000}
          className="h-full object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t("branches.china.title")}
          </h1>
          <p className="text-gray-600 mb-4 leading-relaxed md:text-lg">
            {t("branches.china.p1")}
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed md:text-lg">
            {t("branches.china.p2")}
          </p>
          <Image
            src="/hongkong/2.jpg"
            alt="hongkong"
            width={1000}
            height={1000}
            className="h-[300px] object-cover"
          />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Image
              src="/hongkong/23.jpg"
              alt="hongkong"
              width={1000}
              height={1000}
              className="h-full"
            />
            <Image
              src="/hongkong/4.jpg"
              alt="hongkong"
              width={1000}
              height={1000}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChinaAbout;
