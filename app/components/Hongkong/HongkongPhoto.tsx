"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function HongkongPhoto() {
  return <ScrollingTestimonials />;
}

const ScrollingTestimonials = () => {
  return (
    <div className="py-12">
      <h2 className="text-center text-3xl font-bold mb-8">
        Activities and Exibitions
      </h2>
      <div className="p-4 overflow-x-hidden relative">
        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.top} duration={75} />
          <TestimonialList list={testimonials.top} duration={75} />
          <TestimonialList list={testimonials.top} duration={75} />
        </div>
        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.middle} duration={35} reverse />
          <TestimonialList list={testimonials.middle} duration={35} reverse />
          <TestimonialList list={testimonials.middle} duration={35} reverse />
        </div>
        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.bottom} duration={100} />
          <TestimonialList list={testimonials.bottom} duration={100} />
          <TestimonialList list={testimonials.bottom} duration={100} />
        </div>
      </div>
    </div>
  );
};

const TestimonialList = ({
  list,
  reverse = false,
  duration = 50,
}: {
  list: typeof testimonials.top;
  reverse?: boolean;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {list.map((t) => {
        return (
          <div
            key={t.id}
            className="shrink-0 w-[400px] rounded-lg overflow-hidden relative"
          >
            <Image
              src={t.img}
              alt={t.name}
              width={1920}
              height={1080}
              className="w-[400px] h-72 object-cover"
            />
          </div>
        );
      })}
    </motion.div>
  );
};

const testimonials = {
  top: [
    {
      id: 1,
      img: "/hongkong/1.jpg",
      name: "Jen S.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!",
    },
    {
      id: 2,
      img: "/hongkong/2.jpg",
      name: "Paul A,",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.",
    },
    {
      id: 3,
      img: "/hongkong/3.jpg",
      name: "Cindy J.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam.",
    },
    {
      id: 4,
      img: "/hongkong/4.jpg",
      name: "Danica W.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor.",
    },
    {
      id: 5,
      img: "/hongkong/5.jpg",
      name: "Peter H.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore.",
    },
    {
      id: 6,
      img: "/hongkong/6.jpg",
      name: "Lanny B.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse!",
    },
    {
      id: 7,
      img: "/hongkong/7.jpg",
      name: "Andrea B.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere!",
    },
    {
      id: 8,
      img: "/hongkong/8.jpg",
      name: "Andrea B.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere!",
    },
  ],
  middle: [
    {
      id: 1,
      img: "/hongkong/9.jpg",
      name: "Alex F.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam.",
    },
    {
      id: 2,
      img: "/hongkong/10.jpg",
      name: "Claude O.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt.",
    },
    {
      id: 3,
      img: "/hongkong/11.jpg",
      name: "Max Q.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.",
    },
    {
      id: 4,
      img: "/hongkong/12.jpg",
      name: "Jeff R.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!",
    },
    {
      id: 5,
      img: "/hongkong/13.jpg",
      name: "Kevin K.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit!",
    },
    {
      id: 6,
      img: "/hongkong/14.jpg",
      name: "Andrea B.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere!",
    },
    {
      id: 7,
      img: "/hongkong/15.jpg",
      name: "Andrea B.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere!",
    },
    {
      id: 8,
      img: "/hongkong/16.jpg",
      name: "Andrea B.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere!",
    },
  ],
  bottom: [
    {
      id: 1,
      img: "/hongkong/17.jpg",
      name: "Danny G.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!",
    },
    {
      id: 2,
      img: "/hongkong/18.jpg",
      name: "Ian D.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere.",
    },
    {
      id: 3,
      img: "/hongkong/19.jpg",
      name: "Ben S.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      img: "/hongkong/20.jpg",
      name: "Matthew I.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!",
    },
    {
      id: 5,
      img: "/hongkong/21.jpg",
      name: "Garrett P.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia.",
    },
    {
      id: 6,
      img: "/hongkong/22.jpg",
      name: "Xavier C.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur.",
    },
    {
      id: 7,
      img: "/hongkong/23.jpg",
      name: "Andrea B.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere!",
    },
  ],
};

export default HongkongPhoto;
