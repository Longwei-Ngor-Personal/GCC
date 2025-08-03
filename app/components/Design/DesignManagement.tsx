"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function DesignManagement() {
  const { t } = useTranslation();

  return (
    <section id="management" className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex items-center justify-center">
            <Image
              src="/design/management.avif"
              width={600}
              height={400}
              alt="Project Management"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {t("design.management.title")}
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              {t("design.management.p1")}
            </p>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              {t("design.management.p2")}
            </p>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              {t("design.management.p3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignManagement;
