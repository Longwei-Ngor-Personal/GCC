import Image from "next/image";

function TrustBackground() {
  return (
    <section id="background">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <Image
            src="/trust/certificate.png"
            alt="SOHO MALL Interior"
            width={500}
            height={500}
            className="w-full object-cover md:mt-20"
          />
          <div>
            <Image
              src="/home/trustlogo.png"
              alt="logo"
              width={350}
              height={200}
              className="mb-8"
            />

            <p className="md:text-lg text-gray-700 font-bold leading-relaxed mb-6">
              GC Trust is a financial institution established under the Trust
              Law of the Kingdom of Cambodia to operate trust services.
            </p>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              Approved by the Cambodian government and the Securities and
              Exchange Commission, it is authorized to manage fund trusts, land
              trusts, and property trusts. It is one of the formally licensed
              trust institutions in Cambodia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustBackground;
