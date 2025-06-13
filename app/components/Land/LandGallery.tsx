import Image from "next/image";

function LandGallery() {
  return (
    <section id="gallery" className="pt-20 pb-14 bg-[#F3F4F6]">
      <div className="container mx-auto px-4">
        <div className="space-y-2 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Project Planning and Development Overview
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            Comprehensive Approach to Land Utilization and Infrastructure Design
          </p>
          <p className="pt-6 text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            1. Research and Analysis Scope This phase focuses on evaluating the
            environmental conditions, landscape characteristics, and the
            potential value of the site. Key activities include in-depth land
            surveys and legal research to understand zoning laws, ownership, and
            development limitations.{" "}
          </p>
          <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            2. Master Planning and Engineering Design This involves creating the
            overall site plan and designing the landform layout. It also covers
            all necessary civil engineering works, such as the construction of
            main roads, branch roads, drainage systems, and electrical
            infrastructure to support land development.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="aspect-square relative group overflow-hidden">
            <Image
              src="/land/img1.png"
              width={1920}
              height={1080}
              alt="Apartment Project 1"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="aspect-square relative group overflow-hidden">
            <Image
              src="/land/img2.png"
              width={1920}
              height={1080}
              alt="Apartment Project 2"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="aspect-square relative group overflow-hidden ">
            <Image
              src="/land/img3.png"
              width={1920}
              height={1080}
              alt="Apartment Project 3"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="aspect-square relative group overflow-hidden">
            <Image
              src="/land/img4.png"
              width={1920}
              height={1080}
              alt="Apartment Project 4"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="aspect-square relative group overflow-hidden">
            <Image
              src="/land/img5.png"
              width={1920}
              height={1080}
              alt="Apartment Project 5"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="aspect-square relative group overflow-hidden">
            <Image
              src="/land/img6.png"
              width={1920}
              height={1080}
              alt="Apartment Project 6"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandGallery;
