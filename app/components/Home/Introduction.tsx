"use client";

import React from "react";

function Introduction() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Introducing GCC
            </h2>
            <p className="text-lg text-gray-600">
              GCC is a well-known Hong Kong-funded enterprise rooted in
              Cambodia. Since its establishment in 2015, the group employs more
              than 1000 employees. With the increase of elite talents and the
              growing team, as well as the core management&apos;s rich
              experience in financial business, real estate development and
              information technology, many large-scale projects have been
              completed in Cambodia with excellent results.
            </p>
            <p className="text-lg text-gray-600 hidden lg:block">
              With the rapid macroeconomic development, the group has broadened
              its vision to different fields, and extended its development to
              entertainment, media, catering, and retail related industries.
            </p>
          </div>
          <div className="relative aspect-video">
            <iframe
              src="https://drive.google.com/file/d/1APQ0lDi68Pdh5w350wBrrkUIrXdbxmPh/preview"
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
