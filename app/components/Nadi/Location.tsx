"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

const locations = [
  {
    id: "A",
    title: "Win-Win Memorial",
    description: "Mukh Kampul district, Kandal Province, Cambodia",
    image:
      "https://visitlocaltravel.com/blog/wp-content/uploads/2024/02/Win-Win-Memorial-3.png",
  },
  {
    id: "B",
    title: "Calmette Hospital",
    description: "34 Preah Monivong Blvd (93), Phnom Penh, Cambodia",
    image:
      "https://construction-property.com/wp-content/uploads/2023/05/CPM_Calemet4_23-5-23.jpg",
  },
  {
    id: "C",
    title: "Big Golf Resort",
    description: "Live in the heart of the city",
    image:
      "https://images.squarespace-cdn.com/content/v1/513c073be4b0b5df0ebe7312/1669964475741-1TE3S6HGVVLVW4X5DLYS/Angkor-Golf-Resort-Course-Image-02.jpg",
  },
  {
    id: "D",
    title: "Morodok Techo National Stadium",
    description: "St Ly Yongphat St, Phnom Penh 12111, Cambodia",
    image:
      "https://cambodianess.com/uploads/images/1656154052hfbym-1310185108-16315387993831n.jpg",
  },
  {
    id: "E",
    title: "Phnom Penh Safari",
    description: "St Ly Yongphat St, Phnom Penh 12111, Cambodia",
    image:
      "https://helloangkor.com/wp-content/uploads/2019/05/zoo-e1561963809471.jpg",
  },
  {
    id: "F",
    title: "Garden City Water Park",
    description: "St Ly Yongphat St, Phnom Penh 12111, Cambodia",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/a0/0d/ce/pool-party-on-monday.jpg?w=1200&h=-1&s=1",
  },
];

const Card = ({
  imgSrc,
  title,
  description,
}: {
  imgSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <motion.div whileHover="hover" className="w-full h-[300px] relative">
      <div className="h-1/2 p-6 flex flex-col justify-center bg-black">
        <h3 className="text-xl mb-2 font-semibold text-white">{title}</h3>
        <p className="text-sm font-light text-slate-300">{description}</p>
      </div>
      <motion.div
        initial={{
          top: "0%",
          right: "0%",
        }}
        variants={{
          hover: {
            top: "50%",
            right: "50%",
          },
        }}
        className="absolute inset-0 bg-slate-200 z-10 saturate-50"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <a
        href="#"
        rel="nofollow"
        className="w-1/2 h-1/2 absolute bottom-0 right-0 z-0 grid place-content-center bg-white text-black hover:text-indigo-500 transition-colors"
      >
        <div className="flex items-center">
          <span className="text-xs">MORE</span>
          <FiArrowUpRight className="text-lg" />
        </div>
      </a>
    </motion.div>
  );
};

export default function LocationShowcase() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="mt-8 lg:mt-0 lg:top-8">
          <div className="aspect-[3/4] relative rounded-lg overflow-hidden bg-gray-50">
            <Image
              src="/locations.png?height=800&width=600"
              alt="Project Locations Overview"
              fill
              className="contain"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Our Project Locations
          </h2>
          <p className="text-lg text-gray-600">
            Explore our diverse range of project locations, each offering unique
            experiences and opportunities. From beachfront resorts to urban
            landscapes, discover the beauty of our carefully selected sites.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((location) => (
              <Card
                key={location.id}
                imgSrc={location.image}
                title={location.title}
                description={location.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
