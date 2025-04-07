import Link from "next/link";
import React from "react";

export default function AboutUs() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 text-gray-200 my-10"
      style={{
        backgroundImage: "url('/home/preview.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="mb-4 text-lg">
            GCC, originating from Hong Kong, has established a strong foundation
            in Cambodia and is expanding across the ASEAN market. With expertise
            in finance, property, and information technology, we bring
            world-class industry knowledge to this dynamic country, fostering
            growth and innovation.
          </p>
          <p className="mb-8 text-lg">
            Driven by a global vision and local opportunities, we are committed
            to developing thriving financial and property sectors. As we embark
            on new major projects, we embrace the One Belt One Road initiative,
            working alongside Cambodians to build a vibrant, internationally
            recognized metropolis.
          </p>
          <Link
            href="/about"
            className="inline-block bg-gray-100 text-gray-900 font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-opacity-90"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
