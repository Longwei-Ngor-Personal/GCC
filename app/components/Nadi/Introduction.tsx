"use client";

import React from "react";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { IconType } from "react-icons";

function Introduction() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Introducing NADI by GC
            </h2>
            <p className="text-lg text-gray-600">
              The project is named “NADI,” it aims to pay respect to Mekong
              river and Tonle Sap river. GC City connects different areas in the
              project with boulevard, using large area of greenery space and
              water garden to create an elegant environment where water and sky
              merge together. We also combine with the contemporary design
              architect, sculpture the prestigious living space, create an
              iconic and high-quality comfortable living experience.
            </p>
            <p className="text-lg text-gray-600">
              It is the rare gem in the city. Surrounded by 32-hectare secluded
              greenery and waterway design, is the key element of NADI.
            </p>
          </div>
          <div className="relative aspect-video">
            <iframe
              src="https://www.youtube-nocookie.com/embed/rVY0aFvNvX8"
              title="Company Introduction Video"
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="relative mt-16 -rotate-1 scale-[1.01] border-y-2 border-zinc-900 bg-white">
        <div className="relative z-0 flex overflow-hidden border-b-2 border-zinc-900">
          <TranslateWrapper>
            <LogoItemsTop />
          </TranslateWrapper>
          <TranslateWrapper>
            <LogoItemsTop />
          </TranslateWrapper>
          <TranslateWrapper>
            <LogoItemsTop />
          </TranslateWrapper>
        </div>
        <div className="relative z-0 flex overflow-hidden">
          <TranslateWrapper reverse>
            <LogoItemsBottom />
          </TranslateWrapper>
          <TranslateWrapper reverse>
            <LogoItemsBottom />
          </TranslateWrapper>
          <TranslateWrapper reverse>
            <LogoItemsBottom />
          </TranslateWrapper>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-white to-white/0" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-white to-white/0" />
      </div>
    </section>
  );
}

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: React.JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon, name }: { Icon: IconType; name: string }) => {
  return (
    <span className="flex items-center justify-center gap-4 px-4 py-2 md:py-4">
      <Icon className="text-primary text-2xl md:text-3xl" />
      <span className="whitespace-nowrap text-xl font-semibold uppercase md:text-2xl">
        {name}
      </span>
    </span>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={GoDotFill} name="GC City" />
    <LogoItem Icon={GoDotFill} name="GC Fund" />
    <LogoItem Icon={GoDotFill} name="GC Trust" />
    <LogoItem Icon={GoDotFill} name="GC Land" />
    <LogoItem Icon={GoDotFill} name="GC Media" />
    <LogoItem Icon={GoDotFill} name="GC Empire" />
    <LogoItem Icon={GoDotFill} name="GC Realty" />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={GoDotFill} name="Nadi by GC" />
    <LogoItem Icon={GoDotFill} name="CM2h" />
    <LogoItem Icon={GoDotFill} name="GC Orussey" />
    <LogoItem Icon={GoDotFill} name="SOHO Mall" />
    <LogoItem Icon={GoDotFill} name="Hong Kong Resturant" />
    <LogoItem Icon={GoDotFill} name="Luk Hot pot" />
    <LogoItem Icon={GoDotFill} name="Singapore Bak Kut Teh" />
    <LogoItem Icon={GoDotFill} name="GC Super" />
  </>
);

export default Introduction;
