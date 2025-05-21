import Image from "next/image";

function CareActivities() {
  return (
    <section id="activities" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div>
            <h2 className="max-w-2xl mx-auto text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
              Remote Rural Area School Charity Activities
            </h2>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-8">
              Our Commitment to Education in Remote Areas
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Image
              src="/care/c1.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
            <Image
              src="/care/c2.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
            <Image
              src="/care/c3.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
            <Image
              src="/care/c4.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
            <Image
              src="/care/c5.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
            <Image
              src="/care/c6.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
            <Image
              src="/care/c7.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
            <Image
              src="/care/c8.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
            <Image
              src="/care/c9.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
            <Image
              src="/care/c10.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
            <Image
              src="/care/c11.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] object-cover"
            />
            <Image
              src="/care/c12.jpg"
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

export default CareActivities;
