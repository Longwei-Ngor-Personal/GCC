"use client";

import React from "react";

function Introduction() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Introducing NADI by GC
            </h2>
            <p className="text-lg text-gray-600">
              The project is named “NADI,” it aims to pay respect to Mekong
              river and Tonle Sap river. GC City connects different areas in the
              project with boulevard, using large area of greenery space and
              water garden to create an elegant environment where water and sky
              merge together. We also combine with the contemporary design
              architect, sculpture the prestigious living space, create an
              iconic and high-quality comfortable living experience.
            </p>
            <p className="text-lg text-gray-600">
              It is the rare gem in the city. Surrounded by 32-hectare secluded
              greenery and waterway design, is the key element of NADI.
            </p>
          </div>
          <div className="relative aspect-video">
            <iframe
              src="https://www.youtube-nocookie.com/embed/rVY0aFvNvX8"
              title="Company Introduction Video"
              className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
