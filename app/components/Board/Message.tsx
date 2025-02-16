import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Message() {
  return (
    <div className="text-primary px-16 pt-20">
      <div className="w-full flex flex-col items-center justify-center">
        <h3 className="text-3xl lg:text-4xl">Chairman Message</h3>
        <p className="text-lg lg:text-xl mt-2 italic w-[600px] lg:w-[900px] text-center relative">
          <span className="absolute -top-2 -left-10">
            <FaQuoteLeft size={32} color="#D6B072" />
          </span>
          It is fortunate for GCC to exert our professionals in different areas
          in the Kingdom of Cambodia. As a young and energetic integrated
          enterprise, we entered a high growth period in short period of time,
          managing different areas including properties, finance and information
          technology. At the same time, we build a friendly business platform
          for employees and tactic partners to create a win-win situation. With
          the work-together team spirit, we solve every problem that we
          countered.
        </p>
        <p className="text-lg lg:text-xl mt-4 italic w-[600px] lg:w-[900px] text-center">
          Our name implied that we root in Cambodia, this beautiful country, in
          this golden age. We work together and we build our own century
          together. We make our dream come true.
        </p>
        <p className="text-lg lg:text-xl mt-4 italic w-[600px] lg:w-[900px] text-center relative">
          With global professional knowledge and local wisdom, we manage to
          create ideal returns for investors. We provide clients products and
          services with highest quality. We utilize business power to enhance
          citizens quality of life and environment. At the same time, we care
          about the society and execute social responsibility. We support local
          disadvantaged community. We grow healthily and create a good life
          together.
          <span className="absolute bottom-0 -right-8">
            <FaQuoteRight size={32} color="#D6B072" />
          </span>
        </p>
      </div>
    </div>
  );
}

export default Message;
