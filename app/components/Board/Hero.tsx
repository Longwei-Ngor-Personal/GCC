"use client";

import Image from "next/image";
import React from "react";
import Header from "../Header";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full h-[760px] text-primary">
      <Image
        src="/home/hero-b.png"
        alt="Hero"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 -z-10 blur-[1px]"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65 -z-10"></div>
      <div className="w-full h-full z-10">
        <Header />
        <div className="w-full h-full flex items-center">
          <div className="px-4 md:px-16">
            <h1 className="text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl font-semibold">
              {t("board.hero.title")}
            </h1>
            <p className="text-lg lg:text-xl italic md:w-[600px] lg:w-[900px]">
              {t("board.hero.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
