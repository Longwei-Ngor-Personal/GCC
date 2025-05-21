import Image from "next/image";

function SuperSketches() {
  return (
    <section id="sketches" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Environment Sketches{" "}
            </h2>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              Explore our successful projects in Cambodia&apos;s thriving
              industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Image
              src="/super/s1.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
            <Image
              src="/super/s2.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
            <Image
              src="/super/s3.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
            <Image
              src="/super/s4.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
            <Image
              src="/super/s5.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
            <Image
              src="/super/s6.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
            <Image
              src="/super/s7.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
            <Image
              src="/super/s8.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
            <Image
              src="/super/s9.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuperSketches;
