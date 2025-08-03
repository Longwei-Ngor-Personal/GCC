"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function DesignProjects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="w-full py-12 md:py-20 bg-muted">
      <div className="px-4 md:px-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {t("design.projects.title")}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              {t("design.projects.subtitle")}
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {/* Apartment Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-primary rounded-full mr-3"></span>
              {t("design.projects.categories.apartment")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["1", "7", "3", "8", "5", "6"].map((num, i) => (
                <div key={i} className="aspect-square relative group overflow-hidden rounded-lg">
                  <Image
                    src={`/design/apartment/${num}.jpg`}
                    width={1920}
                    height={1080}
                    alt={`Apartment Project ${i + 1}`}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Commercial Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-primary rounded-full mr-3"></span>
              {t("design.projects.categories.commercial")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["7", "2", "3", "4", "5", "6"].map((num, i) => (
                <div key={i} className="aspect-square relative group overflow-hidden rounded-lg">
                  <Image
                    src={`/design/Commercial/${num}.jpg`}
                    width={1920}
                    height={1080}
                    alt={`Commercial Project ${i + 1}`}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Office Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-primary rounded-full mr-3"></span>
              {t("design.projects.categories.office")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["8", "2", "3", "4", "5", "6"].map((num, i) => (
                <div key={i} className="aspect-square relative group overflow-hidden rounded-lg">
                  <Image
                    src={`/design/office/${num}.jpg`}
                    width={1920}
                    height={1080}
                    alt={`Office Project ${i + 1}`}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Restaurant Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-primary rounded-full mr-3"></span>
              {t("design.projects.categories.restaurant")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["1", "2", "3", "4", "5", "6"].map((num, i) => (
                <div key={i} className="aspect-square relative group overflow-hidden rounded-lg">
                  <Image
                    src={`/design/Restaurant/${num}.jpg`}
                    width={1920}
                    height={1080}
                    alt={`Restaurant Project ${i + 1}`}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignProjects;
