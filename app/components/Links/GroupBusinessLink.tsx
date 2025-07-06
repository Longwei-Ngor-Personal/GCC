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
      <a href="#" className="relative text-sm font-bold">
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

const CategoryDropdown = ({ title, href }: { title: string; href: string }) => {
  return (
    <a href={href} className="block hover:underline">
      {title}
    </a>
  );
};

const AboutUsContent = () => {
  const categories = [
    { title: "Real Estate Development", href: "/nadi" },
    { title: "Financial Investment", href: "/trust" },
    { title: "Property Management", href: "/property" },
    { title: "F&B Entertainments", href: "/hotpot" },
    { title: "Architectural Design", href: "/design" },
    { title: "Cultural Popularization", href: "/media" },
    { title: "Charity & Public Welfare", href: "/care" },
  ];

  return (
    <div className="grid w-full grid-cols-1 shadow-xl lg:w-[300px]">
      <div className="col-span-12 gap-4 bg-primary p-6 text-white">
        <div className="space-y-3 text-sm">
          {categories.map((category, index) => (
            <CategoryDropdown
              key={index}
              title={category.title}
              href={category.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupBusinessLink;
