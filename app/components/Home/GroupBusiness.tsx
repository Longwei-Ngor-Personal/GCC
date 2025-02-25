"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

function GroupBusiness() {
  return (
    <section className="pt-10">
      <div className="container w-full px-4 mx-auto text-gray-900">
        <div className="w-full flex flex-col text-center">
          <h3 className="text-3xl font-bold">Group Businesses</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the vibrant community and thriving businesses that make up
            our group of companies.
          </p>
        </div>
        <div className="mt-8 lg:mt-14">
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 w-full mx-auto">
              <Card
                heading="Cambodia My 2nd Home"
                description="CM2H offers a 10-year Golden Visa with no entry restrictions and a pathway to Cambodian citizenship after five years. It is the only government-approved program for obtaining a Cambodian passport."
                imgSrc="/cm2h.jpg"
                link="https://cm2h.com/"
              />
              <Card
                heading="NADI by GC CITY"
                description="GC CITY NADI is located in the Chroy Changvar of Cambodian capital Phnom Penh, space project 34 hectares (3 Phases in total)."
                imgSrc="/hero.png"
                link="/nadi"
              />
              <Card
                heading="GC Orussey"
                description="GC Orussey Market is elaborately built by GCC group, integrating Khmer architectural wisdom and modern real estate development."
                imgSrc="gc_orussey.jpg"
                link="https://gcc-gp.com/en/gc-orussey-market/"
              />
              <Card
                heading="GC Media"
                description="GC media is an advertising media company focusing on high-end media operation strongly built by GCC, having rich media resources and core advantages businesses, including brand image promotion, advertising production and promotion, event banquet, etc."
                imgSrc="/gcmedia.png"
                link="https://gcc-gp.com/en/gc-media/"
              />
              <Card
                heading="GC Fund"
                description="GC media is an advertising media company focusing on high-end media operation strongly built by GCC, having rich media resources and core advantages businesses, including brand image promotion, advertising production and promotion, event banquet, etc."
                imgSrc="/gcfund.webp"
                link="https://gcc-gp.com/en/gc-fund/"
              />
              <Card
                heading="GC Trust"
                description="GC media is an advertising media company focusing on high-end media operation strongly built by GCC, having rich media resources and core advantages businesses, including brand image promotion, advertising production and promotion, event banquet, etc."
                imgSrc="/gctrust.webp"
                link="https://gcc-gp.com/en/gc-trust/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Card = ({
  heading,
  description,
  imgSrc,
  link,
}: {
  heading: string;
  description: string;
  imgSrc: string;
  link?: string;
}) => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.035,
      }}
      whileHover="hover"
      className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative"
    >
      <Link href={`${link}`} target="_blank">
        <div
          className="absolute inset-0 saturate-100 md:saturate-50 md:group-hover:saturate-100 md:group-hover: group-hover:scale-110 transition-all duration-500"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
        </div>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
        <div className="p-4 relative z-20 h-full text-gray-300 group-hover:text-primary font-medium transition-colors duration-500 flex flex-col justify-between">
          <FiArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
          <div>
            <h4>
              {heading.split("").map((l, i) => (
                <ShiftLetter letter={l} key={i} />
              ))}
            </h4>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ShiftLetter = ({ letter }: { letter: string }) => {
  return (
    <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default GroupBusiness;
