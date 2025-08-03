"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const SocialResponsibilityLink = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <a href="/socialresponsibility" className="relative text-sm font-bold">
        {t("navbar.socialResponsibility")}
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-[2px] origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 ease-out"
        />
      </a>
    </div>
  );
};

export default SocialResponsibilityLink;
