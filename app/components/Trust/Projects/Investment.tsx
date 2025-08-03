"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

function InvestmentProjects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-14">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Image
            src="/trust/building&tree.avif"
            alt="building"
            width={1920}
            height={1080}
            className="w-full h-[400px] object-cover -z-10"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 z-0" />
          <h1 className="absolute text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-4xl font-bold">
            {t("trust.investmentProjects.title")}
          </h1>
        </div>

        <div className="md:grid grid-cols-2 gap-4 pt-24">
          <Image
            src="/trust/pic-02.jpg"
            alt="pic"
            width={1000}
            height={1000}
            className="h-full lg:h-auto object-cover"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="text-4xl font-medium">
              {t("trust.investmentProjects.ceo.title")}
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              {t("trust.investmentProjects.ceo.desc1")}
            </p>
            <p className="text-lg text-gray-600 mt-2">
              {t("trust.investmentProjects.ceo.desc2")}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-5">
              <Image src="/trust/pic-01.avif" alt="pic" width={500} height={500} />
              <Image src="/trust/pic-03.avif" alt="pic" width={500} height={500} />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Image
            src="/trust/pic-04.png"
            alt="building"
            width={1920}
            height={1080}
            className="object-cover -z-10"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <Image
            src="/trust/pic-05.png"
            alt="pic"
            width={1000}
            height={1000}
            className="h-full object-cover lg:h-auto order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-medium">
              {t("trust.investmentProjects.lixin.title")}
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              {t("trust.investmentProjects.lixin.desc1")}
            </p>
            <p className="text-lg text-gray-600 mt-2">
              {t("trust.investmentProjects.lixin.desc2")}
            </p>
            <p className="text-lg text-gray-600 mt-2">
              {t("trust.investmentProjects.lixin.desc3")}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <Image
            src="/trust/pic-06.png"
            alt="building"
            width={1920}
            height={1080}
            className="object-cover -z-10"
          />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          <Image src="/trust/pic-07.png" alt="building" width={1920} height={1080} className="object-cover -z-10" />
          <Image src="/trust/pic-08.png" alt="building" width={1920} height={1080} className="object-cover -z-10" />
          <Image src="/trust/pic-09.png" alt="building" width={1920} height={1080} className="object-cover -z-10" />
        </div>

        <div className="mt-24 text-center">
          <h1 className="text-4xl font-medium">{t("trust.investmentProjects.ev.title")}</h1>
          <h1 className="text-4xl font-medium">{t("trust.investmentProjects.ev.subtitle")}</h1>

          <div className="grid md:grid-cols-5 gap-4 mt-4">
            <Image src="/trust/pic-12.jpg" alt="building" width={1920} height={1080} className="w-full h-[400px] object-cover md:col-span-3" />
            <Image src="/trust/pic-11.jpg" alt="building" width={1920} height={1080} className="w-full h-[400px] object-cover md:col-span-2" />
            <Image src="/trust/pic-10.jpg" alt="building" width={1920} height={1080} className="w-full h-[400px] object-cover md:col-span-2" />
            <Image src="/trust/pic-13.jpg" alt="building" width={1920} height={1080} className="w-full h-[400px] object-cover md:col-span-3" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvestmentProjects;
