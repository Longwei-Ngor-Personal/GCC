"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function JapanAbout() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20">
      <div className="mx-auto px-4 md:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("branches.japan.about.title")}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-20">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <p className="text-gray-600 mb-6 leading-relaxed md:text-lg md:hidden">
              {t("branches.japan.about.p1")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["showcase1", "showcase2", "showcase3"].map((img, index) => (
                <div
                  key={index}
                  className="relative h-96 w-full overflow-hidden shadow-lg"
                >
                  <Image
                    src={`/japan/${img}.jpg`}
                    alt={`GCC Japan Office ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12 md:text-lg">
            <p className="text-gray-600 mb-6 leading-relaxed hidden md:block">
              {t("branches.japan.about.p1")}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t("branches.japan.about.p2")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t("branches.japan.about.p3")}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["showcase4", "showcase5", "showcase6"].map((img, index) => (
                <div
                  key={index}
                  className="relative h-96 w-full overflow-hidden shadow-lg"
                >
                  <Image
                    src={`/japan/${img}.jpg`}
                    alt={`GCC Japan Office ${index + 4}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 md:pr-12 md:text-lg">
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t("branches.japan.about.p4")}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t("branches.japan.about.p5")}
            </p>
            <p className="text-gray-600 leading-relaxed">
              GCC JAPAN:{" "}
              <a
                href="https://www.gccjapan.co.jp"
                className="text-blue-500 underline"
              >
                https://www.gccjapan.co.jp
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JapanAbout;
