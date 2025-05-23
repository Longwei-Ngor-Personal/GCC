import Image from "next/image";

function BakkuttehGallery() {
  return (
    <section id="features" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="md:ml-16">
          <h2 className="max-w-2xl mx-auto text-center text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Environment Sketch
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="space-y-6">
            <Image
              src="/bakkutteh/p1.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />{" "}
            <Image
              src="/bakkutteh/p2.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <Image
              src="/bakkutteh/p3.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />{" "}
            <Image
              src="/bakkutteh/p4.jpg"
              alt="SOHO MALL Interior"
              width={1920}
              height={1080}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BakkuttehGallery;
