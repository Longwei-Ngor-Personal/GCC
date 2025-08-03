"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 text-gray-200 my-10"
      style={{
        backgroundImage: "url('/home/preview.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t("home.about.title")}
          </h2>
          <p className="mb-4 text-lg">
            {t("home.about.paragraph1")}
          </p>
          <p className="mb-8 text-lg">
            {t("home.about.paragraph2")}
          </p>
          <Link
            href="/about"
            className="inline-block bg-gray-100 text-gray-900 font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-opacity-90"
          >
            {t("home.about.button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
