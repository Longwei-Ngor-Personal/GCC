import Image from "next/image";
import React from "react";

function SohoEnvironment() {
  return (
    <section className="py-24 bg-gray-100 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-primary">
                Environment
              </span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In terms of the environment, we have repaired some defects and
              added some artistic elements for decoration. Moreover, we have
              introduced a variety of restaurants and entertainment venues
              integrating all the facilities for eating, drinking and
              entertainment. We hope that everyone will come to the mall and
              enjoy a full range of experience here.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              SOHO MALL is modeled with an innovative concept, mirroring the
              unique creative elements of SOHO in London and around the world,
              bringing you a steady stream of freshness and unique artistic
              multicultural atmosphere for local and tourist from all over the
              world creating a comprehensive fashion and entertainment mall.
            </p>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary rounded-full opacity-20 blur-xl"></div>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/soho/sh05.jpg"
                    alt="SOHO MALL Interior 1"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/soho/sh04.jpg"
                    alt="SOHO MALL Interior 2"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="mt-16">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/soho/sh06.jpg"
                    alt="SOHO MALL Interior 3"
                    width={300}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg mt-4">
                  <Image
                    src="/soho/sh07.jpg"
                    alt="SOHO MALL Interior 3"
                    width={300}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SohoEnvironment;
