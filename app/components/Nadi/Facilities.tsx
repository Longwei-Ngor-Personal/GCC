"use client";

import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

function Facilities() {
  return (
    <div className="text-primary pt-20">
      {/* <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl lg:text-4xl text-center">Facilities</h1>
        <p className="text-sm lg:text-lg text-center w-[600px]">
          NADI offers a high-class clubhouse with a swimming pool, gym, café,
          children’s playroom, and multifunctional spaces for leisure and social
          gatherings.
        </p>
      </div>
      <div className="mt-8 space-y-2">
        <div className="relative w-full h-[200px] lg:h-[300px]">
          <Image
            src="/clubhouse.png"
            alt="Hero"
            layout="fill"
            className="absolute top-0 left-0 -z-10 "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
          <h2 className="absolute top-5 left-5 w-full h-full text-lg lg:text-2xl font-semibold">
            {" "}
            High-End Clubhouse
          </h2>
        </div>
        <div className="relative w-full h-[200px] lg:h-[300px]">
          <Image
            src="/venue.png"
            alt="Hero"
            layout="fill"
            className="absolute top-0 left-0 -z-10 "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
          <h2 className="absolute top-5 left-5 w-full h-full text-lg lg:text-2xl font-semibold">
            {" "}
            Festival Venue
          </h2>
        </div>
        <div className="relative w-full h-[200px] lg:h-[300px]">
          <Image
            src="/playground.png"
            alt="Hero"
            layout="fill"
            className="absolute top-0 left-0 -z-10 "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
          <h2 className="absolute top-5 left-5 w-full h-full text-lg lg:text-2xl font-semibold">
            {" "}
            Playground
          </h2>
        </div>
        <div className="relative w-full h-[200px] lg:h-[300px]">
          <Image
            src="/gym.png"
            alt="Hero"
            layout="fill"
            className="absolute top-0 left-0 -z-10 "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
          <h2 className="absolute top-5 left-5 w-full h-full text-lg lg:text-2xl font-semibold">
            {" "}
            Gym
          </h2>
        </div>
        <div className="relative w-full h-[200px] lg:h-[300px]">
          <Image
            src="/pool.png"
            alt="Hero"
            layout="fill"
            className="absolute top-0 left-0 -z-10 "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
          <h2 className="absolute top-5 left-5 w-full h-full text-lg lg:text-2xl font-semibold">
            {" "}
            Swimming Pool
          </h2>
        </div>
      </div> */}
      <Example />
    </div>
  );
}

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#192A4B]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/nadicard.jpg",
    title: "Our Main Facilities",
    id: 7,
  },
  {
    url: "/park.jpg",
    title: "Park",
    id: 1,
  },
  {
    url: "/playground.jpg",
    title: "Playground",
    id: 2,
  },
  {
    url: "/venue.jpg",
    title: "Venue",
    id: 3,
  },
  {
    url: "/pool.jpg",
    title: "Pool",
    id: 4,
  },
  {
    url: "https://d1qzuhxpc9cpmj.cloudfront.net/images/Gym20924a_copy.jpg",
    title: "Gym",
    id: 5,
  },
  {
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Wedding",
    id: 6,
  },
  {
    url: "https://images.unsplash.com/photo-1618482914248-29272d021005?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Security",
    id: 8,
  },
];

export default Facilities;
