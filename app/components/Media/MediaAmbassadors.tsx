"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";

function MediaAmbassadors() {
  const { t } = useTranslation();

  return (
    <section id="ambassadors" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t("media.ambassadors.title")}
            </h2>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              {t("media.ambassadors.description")}
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-center md:space-x-32 mt-5">
            <div>
              <Image
                src="/media/ambassador1.png"
                alt="Vivo Phone"
                width={1920}
                height={1080}
                className="w-[250px] h-[350px] object-cover"
              />
              <p className="text-gray-700 font-semibold mt-5 text-center">
                {t("media.ambassadors.client1")}
              </p>
            </div>
            <div>
              <Image
                src="/media/ambassador2.png"
                alt="Toshiba Electronics"
                width={1920}
                height={1080}
                className="w-[250px] h-[350px] object-cover mt-10 md:mt-0"
              />
              <p className="text-gray-700 font-semibold mt-5 text-center">
                {t("media.ambassadors.client2")}
              </p>
            </div>
            <div>
              <Image
                src="/media/ambassador3.png"
                alt="SMART Telecom"
                width={1920}
                height={1080}
                className="w-[250px] h-[350px] object-cover mt-10 md:mt-0"
              />
              <p className="text-gray-700 font-semibold mt-5 text-center">
                {t("media.ambassadors.client3")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaAmbassadors;
