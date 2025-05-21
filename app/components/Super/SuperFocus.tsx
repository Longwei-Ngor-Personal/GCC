import Image from "next/image";

function SuperFocus() {
  return (
    <section id="focus" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Focus on Quality and Customer Experience at GC Super
            </h2>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              In GC Super, we put our efforts on the food quality, freshness and
              safety. We uphold the mission of customers eat well and eat
              healthily.
            </p>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              In order to create a relax and enjoyable shopping moment for the
              customers, our team focuses on product display and space design.
              The clear shopping line planning not only saves time for the
              customers to find what product they need, but also make them have
              more time to enjoy their leisure time other than shopping.{" "}
            </p>
          </div>
          <Image
            src="/super/focus.jpg"
            alt="SOHO MALL Interior"
            width={1920}
            height={1080}
            className="w-full h-[600px] object-cover md:mt-20"
          />{" "}
        </div>
      </div>
    </section>
  );
}

export default SuperFocus;
