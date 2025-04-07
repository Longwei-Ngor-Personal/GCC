import Image from "next/image";
import React from "react";

function DesignProjects() {
  return (
    <section id="projects" className="w-full py-12 md:py-20 bg-muted">
      <div className="px-4 md:px-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Our Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Explore our diverse portfolio of residential and commercial
              projects.
            </p>
          </div>
        </div>

        {/* Project Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button className="px-6 py-2 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50">
            All Projects
          </button>
          <button className="px-6 py-2 rounded-full bg-white/70 backdrop-blur-sm font-medium transition-all hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50">
            Apartment
          </button>
          <button className="px-6 py-2 rounded-full bg-white/70 backdrop-blur-sm font-medium transition-all hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50">
            Commercial
          </button>
          <button className="px-6 py-2 rounded-full bg-white/70 backdrop-blur-sm font-medium transition-all hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50">
            Office
          </button>
          <button className="px-6 py-2 rounded-full bg-white/70 backdrop-blur-sm font-medium transition-all hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50">
            Restaurant
          </button>
        </div>

        {/* Project Categories */}
        <div className="space-y-16">
          {/* Apartment Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-primary rounded-full mr-3"></span>
              Apartment Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/apartment/1.jpg"
                  width={600}
                  height={600}
                  alt="Apartment Project 1"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/apartment/7.jpg"
                  width={600}
                  height={600}
                  alt="Apartment Project 2"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/apartment/3.jpg"
                  width={600}
                  height={600}
                  alt="Apartment Project 3"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/apartment/8.jpg"
                  width={600}
                  height={600}
                  alt="Apartment Project 4"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/apartment/5.jpg"
                  width={600}
                  height={600}
                  alt="Apartment Project 5"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/apartment/6.jpg"
                  width={600}
                  height={600}
                  alt="Apartment Project 6"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Commercial Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-primary rounded-full mr-3"></span>
              Commercial Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/commercial/7.jpg"
                  width={600}
                  height={600}
                  alt="Commercial Project 1"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/commercial/2.jpg"
                  width={600}
                  height={600}
                  alt="Commercial Project 2"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/commercial/3.jpg"
                  width={600}
                  height={600}
                  alt="Commercial Project 3"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/commercial/4.jpg"
                  width={600}
                  height={600}
                  alt="Commercial Project 4"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/commercial/5.jpg"
                  width={600}
                  height={600}
                  alt="Commercial Project 5"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/commercial/6.jpg"
                  width={600}
                  height={600}
                  alt="Commercial Project 6"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Office Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-primary rounded-full mr-3"></span>
              Office Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/office/8.jpg"
                  width={600}
                  height={600}
                  alt="Office Project 1"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/office/2.jpg"
                  width={600}
                  height={600}
                  alt="Office Project 2"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/office/3.jpg"
                  width={600}
                  height={600}
                  alt="Office Project 3"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/office/4.jpg"
                  width={600}
                  height={600}
                  alt="Office Project 4"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/office/5.jpg"
                  width={600}
                  height={600}
                  alt="Office Project 5"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/office/6.jpg"
                  width={600}
                  height={600}
                  alt="Office Project 6"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Restaurant Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-primary rounded-full mr-3"></span>
              Restaurant Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/restaurant/1.jpg"
                  width={600}
                  height={600}
                  alt="Restaurant Project 1"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/restaurant/2.jpg"
                  width={600}
                  height={600}
                  alt="Restaurant Project 2"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/restaurant/3.jpg"
                  width={600}
                  height={600}
                  alt="Restaurant Project 3"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/restaurant/4.jpg"
                  width={600}
                  height={600}
                  alt="Restaurant Project 4"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/restaurant/5.jpg"
                  width={600}
                  height={600}
                  alt="Restaurant Project 5"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="aspect-square relative group overflow-hidden rounded-lg">
                <Image
                  src="/design/restaurant/6.jpg"
                  width={600}
                  height={600}
                  alt="Restaurant Project 6"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignProjects;
