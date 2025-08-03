"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function JapanTeam() {
  const { t } = useTranslation();

  return (
    <section id="team" className="py-20">
      <div className="mx-auto px-4 md:px-16 flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("branches.japan.team.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80%]">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
            <div className="relative h-96 w-full">
              <Image
                src="/japan/Agnes.png"
                alt="Team Member"
                fill
                className="object-top object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t("branches.japan.team.agnes.name")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t("branches.japan.team.agnes.title")}
              </p>
              <p className="text-gray-600 mb-6 text-sm">
                {t("branches.japan.team.agnes.p1")}
              </p>
              <p className="text-gray-600 text-sm">
                {t("branches.japan.team.agnes.p2")}
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
            <div className="relative h-96 w-full">
              <Image
                src="/japan/Yinglan.png"
                alt="Team Member"
                fill
                className="object-top object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t("branches.japan.team.yinglan.name")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t("branches.japan.team.yinglan.title")}
              </p>
              <p className="text-gray-600 mb-6 text-sm">
                {t("branches.japan.team.yinglan.p1")}
              </p>
              <p className="text-gray-600 text-sm">
                {t("branches.japan.team.yinglan.p2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JapanTeam;
