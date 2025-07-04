import Image from "next/image";

function ChinaAbout() {
  return (
    <section className="container mx-auto pt-18">
      <div className="grid grid-cols-2 gap-4">
        <Image
          src="/hongkong/china.avif"
          alt="hongkong"
          width={1000}
          height={1000}
          className="h-full object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">GCC CHINA</h1>
          <p className="text-gray-600 mb-4 leading-relaxed md:text-lg">
            GCC China is a key branch of Golden Cambodia Century (GCC), an
            international integrated enterprise rooted in Cambodia and centered
            on real estate development. Guided by the shared vision of
            &ldquo;One For All, All For One&rdquo;.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed md:text-lg">
            GCC China operates under a long-term strategic cooperation
            framework, aiming to deliver high-quality, value-driven projects and
            drive strategic market expansion. Through collaborative efforts,
            deep real estate investment experience, and strong marketing
            capabilities, GCC China actively contributes to the sustained
            progress of the Belt and Road Initiative.
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
              className="h-full"
            />
            <Image
              src="/hongkong/4.jpg"
              alt="hongkong"
              width={1000}
              height={1000}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChinaAbout;
