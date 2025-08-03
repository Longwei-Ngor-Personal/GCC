"use client";

import React from "react";
import { useTranslation } from "react-i18next";

function FundAbout() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-4 ">
      <div className="max-w-5xl mx-auto text-justify">
        <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
          {t("trust.fundabout.p1")}
        </p>
      </div>
    </section>
  );
}

export default FundAbout;
