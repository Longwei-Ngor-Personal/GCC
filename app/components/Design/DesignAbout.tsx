import React from "react";
import Image from "next/image";

function AboutDesign() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-16"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              About GC Design
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              In GC Design, we take care of our clients&apos; demands in every
              way. Our design concept conveys the thirst and pursue of healthy
              life. No matter it is for commercial or residential use, we always
              persist to provide an ideal environment and comfort life to
              clients.
            </p>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Through our thorough listening, we treat every client as our
              family. We sculpture design into clients&apos; dream. In the
              execution stage of every project, we use our sophisticated
              creative resource, most supreme standard professional and
              craftsman, top-notch material and advance technique. We use
              supreme, efficient and most importantly, humane way to finish in
              time and in budget.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/designabout.avif"
              width={600}
              height={400}
              alt="Interior Design Example"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDesign;
