"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-12 text-gray-600 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section: Logo and Contact Information */}
          <div className="mb-8 md:mb-0 space-y-4 text-sm lg:text-base">
            <Image
              src="/home/gcc-logo.png"
              alt="Logo"
              width={250}
              height={100}
            />
            <div className="flex items-center space-x-2 pt-10">
              <MapPin className="h-5 w-5" />
              <span className="max-w-lg">
                {t("footer.address")}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>{t("footer.phone")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>{t("footer.email")}</span>
            </div>
          </div>

          {/* Right Section: Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
            {/* About Us */}
            <div>
              <h3 className="font-semibold lg:text-lg mb-4 text-gray-900">
                {t("footer.about.title")}
              </h3>
              <ul className="space-y-2 text-sm lg:text-base">
                <li>
                  <Link href="/about" className="hover:underline">
                    {t("footer.about.aboutGCCity")}
                  </Link>
                </li>
                <li>
                  <Link href="/board" className="hover:underline">
                    {t("footer.about.chairmanAndBoard")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Groups */}
            <div>
              <h3 className="font-semibold lg:text-lg mb-4 text-gray-900">
                {t("footer.groups.title")}
              </h3>
              <ul className="space-y-2 text-sm lg:text-base">
                <li>
                  <Link href="https://cm2h.com/" className="hover:underline">
                    {t("footer.groups.cm2h")}
                  </Link>
                </li>
                <li>
                  <Link href="/nadi" className="hover:underline">
                    {t("footer.groups.nadi")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://gcc-gp.com/en/gc-orussey-market/"
                    className="hover:underline"
                  >
                    {t("footer.groups.orussey")}
                  </Link>
                </li>
                <li>
                  <Link href="/media" className="hover:underline">
                    {t("footer.groups.media")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Branches */}
            <div>
              <h3 className="font-semibold lg:text-lg mb-4 text-gray-900">
                {t("footer.branches.title")}
              </h3>
              <ul className="space-y-2 text-sm lg:text-base">
                <li>
                  <Link href="/hongkong" className="hover:underline">
                    {t("footer.branches.hk")}
                  </Link>
                </li>
                <li>
                  <Link href="/japan" className="hover:underline">
                    {t("footer.branches.jp")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-sm lg:text-base">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}
