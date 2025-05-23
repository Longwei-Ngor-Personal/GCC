"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

interface Link {
  href: string;
  text: string;
}

const CategoryDropdown = ({
  title,
  links,
}: {
  title: string;
  links: Link[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full font-semibold"
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="space-y-2 ml-2">
              {links.map((link: Link, index: number) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm hover:underline"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AboutUsContent = () => {
  const categories = [
    {
      title: "Real Estate Development",
      links: [
        { href: "/nadi", text: "NADI by GC CITY" },
        { href: "/orussey", text: "GC Orussey" },
        { href: "/soho", text: "SOHO Mall" },
      ],
    },
    {
      title: "Financial Investment",
      links: [
        { href: "#", text: "GC Trust" },
        { href: "/fund", text: "GC Fund" },
      ],
    },
    {
      title: "Property Management",
      links: [{ href: "#", text: "GC City" }],
    },
    {
      title: "Catering & Entertainment",
      links: [
        { href: "/hongkongresturant", text: "Hong Kong Resturant" },
        { href: "/hotpot", text: "Luk Hot Pot" },
        { href: "/bakkutteh", text: "Singapore Bak Kut Teh" },
        { href: "/super", text: "GC Super" },
      ],
    },
    {
      title: "Architectural Design",
      links: [{ href: "/design", text: "GC Design" }],
    },
    {
      title: "Cultural Communication",
      links: [{ href: "/media", text: "GC Media" }],
    },
    {
      title: "Charity & Public Welfare",
      links: [{ href: "/care", text: "GC Care" }],
    },
  ];

  return (
    <div className="grid w-full grid-cols-1 shadow-xl lg:w-[1000px]">
      <div className="col-span-12 gap-4 bg-primary p-6 text-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <CategoryDropdown
              key={index}
              title={category.title}
              links={category.links}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupBusinessLink;
