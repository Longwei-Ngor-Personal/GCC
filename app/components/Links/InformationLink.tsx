"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const InformationLink = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <a href="#" className="relative font-bold text-sm">
        Information Centre
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-[2px] origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-primary text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary" />
            <AboutUsContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface Link {
  href: string;
  text: string;
}

const AboutUsContent = () => {
  return (
    <div className="w-full bg-primary p-6 shadow-none lg:w-[250px] lg:shadow-xl text-white font-medium">
      <div className="grid grid-cols-2 lg:grid-cols-1">
        <div className="space-y-3">
          <Link href="/investmentqa" className="block text-sm hover:underline">
            Investment Q&A
          </Link>
          <Link
            href="/socialresponsibility"
            className="block text-sm hover:underline"
          >
            Social Responsibility
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InformationLink;
