// LandAbout.tsx (with i18n translation applied)
"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

function LandAbout() {
  const { t } = useTranslation();

  return (
    <section id="focus" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12">
          <Image
            src="/land/about.png"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-[600px] object-cover hidden lg:block "
          />
          <div>
            <Image
              src="/home/landlogo.png"
              alt="logo"
              width={300}
              height={300}
            />
            <p className="md:text-lg text-gray-700 leading-relaxed my-6">
              {t("trust.landabout.p1")}
            </p>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              {t("trust.landabout.p2")}
            </p>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              {t("trust.landabout.p3")}
            </p>
          </div>
          <Image
            src="/land/about.png"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-[600px] object-cover lg:hidden "
          />
        </div>
      </div>
    </section>
  );
}

export default LandAbout;