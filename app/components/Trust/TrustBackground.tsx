"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

function TrustBackground() {
  const { t } = useTranslation();

  return (
    <section id="background">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <Image
            src="/trust/certificate.png"
            alt="SOHO MALL Interior"
            width={500}
            height={500}
            className="w-full object-cover md:mt-20"
          />
          <div>
            <Image
              src="/home/trustlogo.png"
              alt="logo"
              width={350}
              height={200}
              className="mb-8"
            />

            <p className="md:text-lg text-gray-700 font-bold leading-relaxed mb-6">
              {t("trust.background.statement1")}
            </p>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              {t("trust.background.statement2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustBackground;
