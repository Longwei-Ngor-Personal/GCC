"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function Board() {
  const { t } = useTranslation();

  return (
    <div className="px-4 md:px-16 pt-20 pb-10">
      <div className="w-full flex-col items-center justify-center hidden md:flex">
        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
          {t("board.title")}
        </h3>
      </div>
      <div>
        <div className="md:grid grid-cols-12 gap-2 mt-10 text-gray-600 mb-20">
          {/* Member 1 */}
          <div className="col-span-2 hidden md:block">
            <h2 className="text-lg font-semibold">{t("board.member1.name")}</h2>
            <h2 className="font-semibold">{t("board.member1.title")}</h2>
          </div>
          <div className="col-span-2 w-20 h-20 rounded-full relative hidden md:block">
            <div className="absolute top-1/2 left-1/2 w-1 h-[2900px] lg:h-[1850px] bg-primary"></div>
            <Image
              src="/home/yukaki.png"
              alt="GCC Chairman"
              fill
              className="rounded-full"
            />
          </div>
          <div className="col-span-8 w-full">
            <div className="mb-4 md:hidden">
              <h2 className="text-4xl font-semibold">{t("board.member1.name")}</h2>
              <h2 className="text-2xl font-semibold">{t("board.member1.title")}</h2>
            </div>
            {["desc1", "desc2", "desc3"].map((desc, i) => (
              <p key={i} className="text-lg lg:w-[750px] mt-4">
                {t(`board.member1.${desc}`)}
              </p>
            ))}
          </div>

          {/* Member 2 */}
          <div className="col-span-2 mt-20 hidden md:block">
            <h2 className="text-lg font-semibold">{t("board.member2.name")}</h2>
            <h2 className="font-semibold">{t("board.member2.title")}</h2>
          </div>
          <div className="col-span-2 mt-20 w-20 h-20 rounded-full relative hidden md:block">
            <Image
              src="/home/riki.png"
              alt="GCC CEO"
              fill
              className="rounded-full"
            />
          </div>
          <div className="col-span-8 mt-20">
            <div className="mb-4 md:hidden">
              <h2 className="text-4xl font-semibold">{t("board.member2.name")}</h2>
              <h2 className="text-2xl font-semibold">{t("board.member2.title")}</h2>
            </div>
            {["desc1", "desc2", "desc3"].map((desc, i) => (
              <p key={i} className="text-lg lg:w-[750px] mt-4">
                {t(`board.member2.${desc}`)}
              </p>
            ))}
          </div>

          {/* Member 3 */}
          <div className="col-span-2 mt-20 hidden md:block">
            <h2 className="text-lg font-semibold">{t("board.member3.name")}</h2>
            <h2 className="font-semibold">{t("board.member3.title")}</h2>
          </div>
          <div className="col-span-2 mt-20 w-20 h-20 rounded-full relative hidden md:block">
            <Image
              src="/home/henry.png"
              alt="GCC CMO"
              fill
              className="rounded-full"
            />
          </div>
          <div className="col-span-8 mt-20">
            <div className="mb-4 md:hidden">
              <h2 className="text-4xl font-semibold">{t("board.member3.name")}</h2>
              <h2 className="text-2xl font-semibold">{t("board.member3.title")}</h2>
            </div>
            {["desc1", "desc2", "desc3"].map((desc, i) => (
              <p key={i} className="text-lg lg:w-[750px] mt-4">
                {t(`board.member3.${desc}`)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
