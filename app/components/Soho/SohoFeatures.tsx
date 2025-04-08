import React from "react";
import {
  CalendarRange,
  FerrisWheel,
  Palette,
  ShoppingCart,
  Soup,
} from "lucide-react";

function SohoFeatures() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 leading-tight">
          Mall{" "}
          <span className="text-transparent bg-clip-text bg-primary">
            Features
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Dining",
              description:
                "Explore a variety of restaurants offering cuisines from around the world.",
              icon: <Soup />,
            },
            {
              title: "Shopping",
              description:
                "Discover hundreds of shops featuring local and international brands.",
              icon: <ShoppingCart />,
            },
            {
              title: "Entertainment",
              description:
                "Enjoy various entertainment options for visitors of all ages.",
              icon: <FerrisWheel />,
            },
            {
              title: "Art & Culture",
              description:
                "Experience artistic elements and cultural exhibitions throughout the mall.",
              icon: <Palette />,
            },
            {
              title: "Events",
              description:
                "Participate in regular events and themed activities for the whole family.",
              icon: <CalendarRange />,
            },
            {
              title: "Relaxation",
              description:
                "Find spaces designed for relaxation and unwinding during your visit.",
              icon: "☕",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-3xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 ">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SohoFeatures;
