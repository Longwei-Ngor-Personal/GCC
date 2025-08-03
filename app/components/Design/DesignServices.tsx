"use client";

import { Layout, Lightbulb, PenTool, Sofa } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

function DesignServices() {
  const { t } = useTranslation();

  return (
    <section id="services" className="w-full py-12 md:py-24 bg-[#F3F4F6]">
      <div className="px-4 md:px-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {t("design.services.title")}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              {t("design.services.description")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Space Planning */}
          <div className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Layout className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t("design.services.space.title")}</h3>
            </div>
            <div className="text-center px-6 pb-6">
              <p className="text-sm text-muted-foreground">
                {t("design.services.space.description")}
              </p>
            </div>
          </div>

          {/* Hand Drawing */}
          <div className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-6">
              <div className="p-3 rounded-full bg-primary/10">
                <PenTool className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t("design.services.hand.title")}</h3>
            </div>
            <div className="text-center px-6 pb-6">
              <p className="text-sm text-muted-foreground">
                {t("design.services.hand.description")}
              </p>
            </div>
          </div>

          {/* Custom Furniture */}
          <div className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Sofa className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t("design.services.furniture.title")}</h3>
            </div>
            <div className="text-center px-6 pb-6">
              <p className="text-sm text-muted-foreground">
                {t("design.services.furniture.description")}
              </p>
            </div>
          </div>

          {/* Lighting Design */}
          <div className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">{t("design.services.lighting.title")}</h3>
            </div>
            <div className="text-center px-6 pb-6">
              <p className="text-sm text-muted-foreground">
                {t("design.services.lighting.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignServices;
