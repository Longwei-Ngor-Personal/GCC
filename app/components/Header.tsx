"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import AboutUsLink from "./Links/AboutUsLink";
import GroupBusinessLink from "./Links/GroupBusinessLink";
import OverseaBrandsLink from "./Links/OverseaBrandsLink";
import InformationLink from "./Links/InformationLink";
import { FiArrowRight } from "react-icons/fi";
import { MobileNav } from "./MobileNav";
import InvestmentQALink from "./Links/InvestmentQALink";
import SocialResponsibilityLink from "./Links/SocialResponsibilityLink";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full flex justify-between items-center z-50 py-4 px-4 md:px-16 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md" : ""
      }`}
    >
      <Link href="/" className="hidden lg:block">
        <Image src="/home/logo.png" alt="Logo" width={250} height={100} />
      </Link>
      <Link href="/" className="lg:hidden">
        <Image src="/home/logo.png" alt="Logo" width={200} height={100} />
      </Link>
      <div className="absolute top-0 right-0 lg:hidden">
        <MobileNav />
      </div>
      <div className="hidden lg:flex items-center space-x-6 font-medium">
        <AboutUsLink />
        <GroupBusinessLink />
        <OverseaBrandsLink />
        <InformationLink />
        <InvestmentQALink />
        <SocialResponsibilityLink />
        <section className="grid place-content-center">
          <button className="group text-sm flex h-10 items-center gap-2 rounded-full bg-neutral-500 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-neutral-600 hover:pl-2 hover:text-primary active:bg-neutral-700">
            <span className="rounded-full bg-primary p-1 text-sm transition-colors duration-300 group-hover:bg-neutral-primary">
              <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-white group-active:-rotate-45" />
            </span>
            <span>Contact Us</span>
          </button>
        </section>
      </div>
    </nav>
  );
}

export default Header;
