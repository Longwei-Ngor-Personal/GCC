import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutUsLink from "./Links/AboutUsLink";
import GroupBusinessLink from "./Links/GroupBusinessLink";
import OverseaBrandsLink from "./Links/OverseaBrandsLink";
import InformationLink from "./Links/InformationLink";
import { FiArrowRight } from "react-icons/fi";

function Header() {
  return (
    <nav className="flex justify-between items-center py-4">
      <Link href="/" className="hidden lg:block">
        <Image src="/logo.png" alt="Logo" width={250} height={100} />
      </Link>
      <Link href="/" className="lg:hidden">
        <Image src="/logo.png" alt="Logo" width={200} height={100} />
      </Link>
      <div className="lg:hidden">
        <button>
          <Menu size={32} color="#D6B072" />
        </button>
      </div>
      <div className="hidden lg:flex items-center space-x-8 font-medium">
        <AboutUsLink />
        <GroupBusinessLink />
        <OverseaBrandsLink />
        <InformationLink />
        <section className="grid place-content-center">
          <button className="group flex h-10 items-center gap-2 rounded-full bg-neutral-500 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-neutral-600 hover:pl-2 hover:text-primary active:bg-neutral-700">
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
