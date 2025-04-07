"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "../Header";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const images = [
  "/gccity.webp",
  "/gcfund.webp",
  "/gctrust.webp",
  "/gcdesign.avif", // Add more image paths as needed
  "/gcland.webp",
];

const logos = [
  "/gclogo.webp",
  "/fundlogo.png",
  "/trustlogo.png",
  "/designlogo.png",
  "/landlogo.png", // Add more logo paths as needed
];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

    setCurrentLogoIndex((prevIndex) =>
      prevIndex === 0 ? logos.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

    setCurrentLogoIndex((prevIndex) =>
      prevIndex === logos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[760px] text-primary">
      {/* Image with motion effect */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full -z-20"
        >
          <Image
            src={images[currentImageIndex]}
            alt="Hero"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 -z-20" />

      {/* Content */}
      <div className="w-full h-full ">
        <Header />
        <div className="w-full h-[80%] flex items-center justify-center -z-10">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="relative w-[400px] h-[400px]"
          >
            <Image
              src={logos[currentLogoIndex]}
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={handlePrevClick}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 h-full w-10 pl-2 bg-black/0 hover:bg-black/10 transition-all duration-300 ease-in-out"
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full w-10 pl-2 bg-black/0 hover:bg-black/10 transition-all duration-300 ease-in-out"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </div>
  );
}

export default Hero;
