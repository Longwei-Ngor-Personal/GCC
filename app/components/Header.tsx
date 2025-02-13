import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutUsLink from "./Links/AboutUsLink";
import GroupBusinessLink from "./Links/GroupBusinessLink";
import OverseaBrandsLink from "./Links/OverseaBrandsLink";
import InformationLink from "./Links/InformationLink";

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
        <Link
          href="/contact"
          className="text-white bg-primary py-1 px-4 rounded-full"
        >
          <p>Contact Us</p>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
