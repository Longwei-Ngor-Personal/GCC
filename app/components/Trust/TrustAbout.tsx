"use client";
import { useTranslation } from "react-i18next";

function TrustAbout() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 px-4 ">
      <div className="max-w-5xl mx-auto text-justify">
        <p className="md:text-lg text-gray-700 font-bold leading-relaxed mb-4">
          {t("trust.about.highlight")}
        </p>
        <p className="md:text-lg text-gray-700 leading-relaxed">
          {t("trust.about.description")}
        </p>
      </div>
    </section>
  );
}

export default TrustAbout;
