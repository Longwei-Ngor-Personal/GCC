import Image from "next/image";
import React from "react";

function HotpotEnvironment() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Environment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={`/hotpot/vip${item}.jpg`}
                alt={`Restaurant interior ${item}`}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HotpotEnvironment;
