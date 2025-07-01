import { Layout, Lightbulb, PenTool, Sofa } from "lucide-react";
import React from "react";

function DesignServices() {
  return (
    <section id="services" className="w-full py-12 md:py-24 bg-[#F3F4F6]">
      <div className="px-4 md:px-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Our Services
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Our interior design is a combination of art and science, coming
              from design includes:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Layout className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Space Planning</h3>
            </div>
            <div className="text-center px-6 pb-6">
              <p className="text-sm text-muted-foreground">
                Floorplan, 3D drawing and detailed drawing to visualize your
                space before construction begins.
              </p>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-6">
              <div className="p-3 rounded-full bg-primary/10">
                <PenTool className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Hand Drawing</h3>
            </div>
            <div className="text-center px-6 pb-6">
              <p className="text-sm text-muted-foreground">
                Detailed hand drawings and standardized parts to ensure
                precision in every element of your design.
              </p>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Sofa className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Custom Furniture</h3>
            </div>
            <div className="text-center px-6 pb-6">
              <p className="text-sm text-muted-foreground">
                Bespoke furniture and wooden products designed specifically for
                your space and needs.
              </p>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 border-none shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col items-center text-center space-y-2 p-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Lighting Design</h3>
            </div>
            <div className="text-center px-6 pb-6">
              <p className="text-sm text-muted-foreground">
                Expert lighting solutions and custom designs to enhance the
                ambiance of your space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignServices;
