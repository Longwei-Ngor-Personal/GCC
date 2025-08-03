"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function JapanHero() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto pt-32">
      <div className="grid grid-cols-2 gap-4">
        <Image
          src="/japan/tokyo.avif"
          alt="hongkong"
          width={1000}
          height={1000}
          className="h-full object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t("branches.japan.title")}
          </h1>
          <p className="text-gray-600 mb-4 leading-relaxed md:text-lg">
            {t("branches.japan.p1")}
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed md:text-lg">
            {t("branches.japan.p2")}
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Image
              src="/japan/showcase6.jpg"
              alt="japan"
              width={1000}
              height={1000}
              className="h-full"
            />
            <Image
              src="/japan/showcase5.jpg"
              alt="japan"
              width={1000}
              height={1000}
              className="h-full"
            />
            <Image
              src="/japan/group2.jpg"
              alt="japan"
              width={1000}
              height={1000}
              className="h-[300px] object-cover"
            />
            <Image
              src="/japan/2.jpg"
              alt="japan"
              width={1000}
              height={1000}
              className="h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
