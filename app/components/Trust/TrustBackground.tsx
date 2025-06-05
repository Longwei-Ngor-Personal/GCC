import Image from "next/image";

function TrustBackground() {
  return (
    <section id="background">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Supporting Cambodia&apos;s Future
            </h2>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              GC Trust is a financial institution established in accordance with
              the Trust Law of the Kingdom of Cambodia to operate trusts. With
              the approval of the Cambodian government and the Securities and
              Exchange Commission, it can operate fund trusts, land trusts, real
              estate trusts, etc. It is the first financial institution in
              Cambodia to obtain a formal trust license.
            </p>
          </div>
          <Image
            src="/trust/certificate.png"
            alt="SOHO MALL Interior"
            width={500}
            height={500}
            className="w-full object-cover md:mt-20"
          />
        </div>
      </div>
    </section>
  );
}

export default TrustBackground;
