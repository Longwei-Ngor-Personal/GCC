"use client";

import React from "react";
import { useTranslation } from "react-i18next";

function Introduction() {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              {t("home.introduction.title")}
            </h2>
            <p className="text-lg text-gray-600">
              {t("home.introduction.paragraph1")}
            </p>
            <p className="text-lg text-gray-600 hidden lg:block">
              {t("home.introduction.paragraph2")}
            </p>
          </div>
          <div className="relative aspect-video">
            <iframe
              src="https://drive.google.com/file/d/1APQ0lDi68Pdh5w350wBrrkUIrXdbxmPh/preview"
              title="Company Introduction Video"
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
