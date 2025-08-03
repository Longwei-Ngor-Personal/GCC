"use client";

import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";

function InvestmentQAPage() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section className="container mx-auto pt-32">
        <div className="relative md:grid grid-cols-5 gap-4 space-y-2 md:space-y-0">
          <div className="md:absolute md:right-0 md:top-0 bg-[#931E27] h-24 md:h-full w-full md:w-32 lg:w-40 flex items-center justify-center text-center text-xl lg:text-2xl font-medium text-white z-20">
            <h2>{t("gca.title")}</h2>
          </div>
          <Image
            src="/qa/pic1.jpg"
            alt="Government Cooperation 1"
            width={1920}
            height={1080}
            className="col-span-2 h-[500px] object-cover"
          />
          <Image
            src="/qa/pic2.jpg"
            alt="Government Cooperation 2"
            width={1920}
            height={1080}
            className="col-span-3 h-[500px] object-cover"
          />
          <Image
            src="/qa/pic3.jpg"
            alt="Government Cooperation 3"
            width={1920}
            height={1080}
            className="col-span-3 h-[500px] object-cover"
          />
          <Image
            src="/qa/pic4.jpg"
            alt="Government Cooperation 4"
            width={1920}
            height={1080}
            className="col-span-2 h-[500px] object-cover"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default InvestmentQAPage;
