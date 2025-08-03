"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function Introduction() {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <p className="text-lg text-gray-600">
          {t("realestate.intro.opening")}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          <div className="relative w-full h-[350px] lg:h-full order-2 lg:order-1">
            <iframe
              src="https://www.youtube-nocookie.com/embed/rVY0aFvNvX8"
              title="Company Introduction Video"
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-6">
              <Image
                src="/nadi/logo-name.png"
                alt="logo"
                width={100}
                height={100}
              />
              <h1 className="text-4xl font-medium">
                {t("realestate.intro.projectTitle")}
              </h1>
            </div>
            <p className="text-lg text-gray-600 text-justify">
              {t("realestate.intro.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
