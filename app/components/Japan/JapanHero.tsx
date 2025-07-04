import Image from "next/image";

export default function JapanHero() {
  return (
    <section className="container mx-auto pt-32">
      <div className="grid grid-cols-2 gap-4">
        <Image
          src="/japan/tokyo.avif"
          alt="hongkong"
          width={1000}
          height={1000}
          className="h-full object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">GCC JAPAN</h1>
          <p className="text-gray-600 mb-4 leading-relaxed md:text-lg">
            Our core business focuses on the promotion and sales of Cambodian
            real estate projects in Japan. We also assist Japanese developers in
            entering the Cambodian property market and offer consulting services
            related to Cambodian law and other sectors. Leveraging our deep
            expertise in Cambodia&apos;s financial and real estate sectors, we
            help Japanese clients gain a comprehensive understanding of the
            local market by providing professional, timely, and trustworthy
            investment insights.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed md:text-lg">
            We are committed to offering high-quality products and market
            information, tailored to a wide range of segments— from affordable
            to luxury— ensuring a seamless, reliable, and convenient one-stop
            service for our Japanese clientele.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Image
              src="/japan/showcase6.jpg"
              alt="japan"
              width={1000}
              height={1000}
              className="h-full"
            />
            <Image
              src="/japan/showcase5.jpg"
              alt="japan"
              width={1000}
              height={1000}
              className="h-full"
            />
            <Image
              src="/japan/group2.jpg"
              alt="japan"
              width={1000}
              height={1000}
              className="h-[300px] object-cover"
            />
            <Image
              src="/japan/2.jpg"
              alt="japan"
              width={1000}
              height={1000}
              className="h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
