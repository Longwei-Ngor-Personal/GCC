"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const GroupBusinessLink = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit z-50"
    >
      <a href="#" className="relative font-bold">
        Group Businesses
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
            className="absolute left-1/2 top-12  text-black"
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

const AboutUsContent = () => {
  return (
    <div className="grid w-full grid-cols-12 shadow-xl lg:w-[1000px]">
      <div className="col-span-12 grid grid-cols-4 gap-3 bg-primary p-6 text-white">
        <div className="space-y-3">
          <h3 className="font-semibold">Real Estate Development</h3>
          <a href="/nadi" className="block text-sm hover:underline">
            NADI by GC CITY
          </a>
          <a href="/orussey" className="block text-sm hover:underline">
            GC Orussey
          </a>
          <a href="/soho" className="block text-sm hover:underline">
            SOHO Mall
          </a>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">Financial Investment</h3>
          <a href="#" className="block text-sm hover:underline">
            GC Trust
          </a>
          <a href="#" className="block text-sm hover:underline">
            GC Fund
          </a>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">Property Management</h3>
          <a href="#" className="block text-sm hover:underline">
            GC City
          </a>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">Catering & Entertainment</h3>
          <a href="#" className="block text-sm hover:underline">
            Hong Kong Resturant
          </a>
          <a href="#" className="block text-sm hover:underline">
            Luk Hot Pot
          </a>
          <a href="#" className="block text-sm hover:underline">
            Singapore Bak Kut Teh
          </a>
          <a href="#" className="block text-sm hover:underline">
            GC Super
          </a>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">Architectural Design</h3>
          <a href="/design" className="block text-sm hover:underline">
            GC Design
          </a>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">Cultural Communication</h3>
          <a href="#" className="block text-sm hover:underline">
            GC Media
          </a>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold">Charity & Public Welfare</h3>
          <a href="#" className="block text-sm hover:underline">
            GC Care
          </a>
        </div>
      </div>
    </div>
  );
};

export default GroupBusinessLink;
