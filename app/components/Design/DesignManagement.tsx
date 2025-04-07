import Image from "next/image";
import React from "react";

function DesignManagement() {
  return (
    <section id="management" className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex items-center justify-center">
            <Image
              src="/design/management.avif"
              width={600}
              height={400}
              alt="Project Management"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Project Management
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              No matter the size of the production, every chorus needs a
              conductor. Experience tells us. Project leader is effective in
              hierarchical and project needs to be organized.
            </p>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              We fully involve in building, project coordinating, act as a
              representative of clients. We promote bids and monitor the site
              work with professionals like architect, engineer, purchasing
              representative, developer, project manager.
            </p>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Therefore, we are a professional team that executes honestly,
              respects time frame, respects budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignManagement;
