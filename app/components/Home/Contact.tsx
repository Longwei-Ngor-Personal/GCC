import Image from "next/image";
import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <div className="text-white w-full h-full mt-24 pt-20 bg-primary">
      <div className="px-16">
        <Image src="/logo-name.png" alt="logo" width={120} height={100} />
        <div className="flex items-start justify-between mt-10">
          <div>
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p>39F, No.758, Example S. Rd., South Example.,</p>
              <p> Phnom Penh City 40255, Cambodia</p>
              <h3 className="text-lg font-semibold mt-2">Phone</h3>
              <p>+855(0)12 345 678</p>
              <h3 className="text-lg font-semibold mt-2">Mail</h3>
              <p>example@gmail.com</p>
            </div>
          </div>
          <div className="text-right flex flex-col space-y-3">
            <Link href="/contact">
              <p className="text-xl font-semibold cursor-pointer">
                Group Business
              </p>
            </Link>
            <Link href="/contact">
              <p className="text-xl font-semibold cursor-pointer">
                Oversea Brand
              </p>
            </Link>
            <Link href="/contact">
              <p className="text-xl font-semibold cursor-pointer">
                Information
              </p>
            </Link>
            <Link href="/contact">
              <p className="text-xl font-semibold cursor-pointer">Contact Us</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white mt-10" />
      <div className="px-16 py-4 text-sm">
        <p>Coppyright © 2025 Example. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Contact;
