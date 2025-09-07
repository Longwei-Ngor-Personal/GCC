"use client";

import Image from "next/image";
import React from "react";
import Header from "../Header";
import { useTranslation } from "react-i18next";

function FBHero() {
  const { t } = useTranslation();

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/hotpot/hero.jpg"
          alt="Hotpot Hero"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
      </section>

      {/* Intro paragraph */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            {t("hotpot.hero2.p1")}
          </p>
        </div>
      </section>

      {/* 2x1 Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/hotpot/ingredient1.jpg"
              alt="Hotpot Interior 1"
              width={800}
              height={600}
              className="w-full h-64 object-cover rounded-lg"
            />
            <Image
              src="/hotpot/ingredient2.jpg"
              alt="Hotpot Interior 2"
              width={800}
              height={600}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
        <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            {t("hotpot.hero2.p2")}
          </p>
        </div>
      </section>
      </section>
    </>
  );
}

export default FBHero;
