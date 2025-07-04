import Image from "next/image";
import React from "react";
import Header from "../Header";

function HongKongHero() {
  return (
    <>
      <Header />
      <section className="container mx-auto pt-32">
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/hongkong/hongkong.avif"
            alt="hongkong"
            width={1000}
            height={1000}
            className="h-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              GCC HONG KONG
            </h1>
            <p className="text-gray-600 mb-4 leading-relaxed md:text-lg">
              Golden Cambodia Century (GCC) - Hong Kong Headquarters was
              established in late 2020 in Central, the heart of Hong Kong&apos;s
              commercial district. Upholding the Group&apos;s philosophy of
              &ldquo;One For All, All For One&rdquo; our goal is to build a
              strategic platform in Hong Kong and serve as the Group&apos;s key
              liaison for sustainable development in the region.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed md:text-lg">
              Our mission is to provide comprehensive services and support to
              partners, agents, investors, and buyers in Hong Kong. We regularly
              organize exhibitions and seminars, proactively responding to
              client needs. We are committed to collaborating with every company
              and individual interested in developing in . Cambodia-working
              together to seize local opportunities and shape a promising
              future.
            </p>
            <Image
              src="/hongkong/2.jpg"
              alt="hongkong"
              width={1000}
              height={1000}
              className="h-[300px] object-cover"
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Image
                src="/hongkong/23.jpg"
                alt="hongkong"
                width={1000}
                height={1000}
                className="h-full object-cover"
              />
              <Image
                src="/hongkong/4.jpg"
                alt="hongkong"
                width={1000}
                height={1000}
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HongKongHero;
