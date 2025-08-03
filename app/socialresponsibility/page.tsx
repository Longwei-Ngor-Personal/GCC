"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

function SocialResponsibilityPage() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section className="py-44">
        <div className="container mx-auto px-4">
          <div className="lg:grid grid-cols-2 gap-12 items-center">
            <div className="order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {t("csr.title")}
              </h2>
              <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
                {t("csr.p1")}
              </p>
              <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
                {t("csr.p2")}
              </p>
            </div>
            <Image
              src="/social.png"
              alt="CSR"
              width={1920}
              height={1080}
              className="w-full h-auto object-contain order-1"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SocialResponsibilityPage;
