import Image from "next/image";
import React from "react";

function HotpotEnvironment() {
  return (
    <section className="mt-4 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="overflow-hidden">
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
