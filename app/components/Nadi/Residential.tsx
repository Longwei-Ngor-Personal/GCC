"use client";

import Image from "next/image";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const Residential = () => {
  return (
    <section className="mx-auto max-w-7xl px-16 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4">
        <h2 className="max-w-lg text-xl font-bold md:text-3xl">
          Residential Types
        </h2>
        <p className="max-w-xl text-sm md:text-lg">
          Explore a variety of high-end living options, from luxurious villas to
          modern apartments, all designed to blend elegance with nature.{" "}
        </p>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Shop House</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-12 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <Image
              src="/shophouse.webp"
              alt="Shop House"
              layout="fill"
              objectFit="cover"
              className="rounded-t-2xl"
            />
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Link House</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-12 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <Image
              src="/linkhouse.webp"
              alt="Shop House"
              layout="fill"
              objectFit="cover"
              className="rounded-t-2xl"
            />
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Queen Villa</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-12 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <Image
              src="/queenvilla.webp"
              alt="Shop House"
              layout="fill"
              objectFit="cover"
              className="rounded-t-2xl"
            />
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>King Villa</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-12 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <Image
              src="/kingvilla.webp"
              alt="Shop House"
              layout="fill"
              objectFit="cover"
              className="rounded-t-2xl"
            />
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Twin Villa</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-12 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <Image
              src="/twinvilla.webp"
              alt="Shop House"
              layout="fill"
              objectFit="cover"
              className="rounded-t-2xl"
            />
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Apartment</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-12 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <Image
              src="/apartment.webp"
              alt="Shop House"
              layout="fill"
              objectFit="cover"
              className="rounded-t-2xl"
            />
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-primary/10 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};

export default Residential;
