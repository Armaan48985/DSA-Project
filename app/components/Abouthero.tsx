﻿import Image from "next/image";
import React from "react";
import bhati from "../assests/bhati.jpeg";
import armaan from "../assests/armaan.jpeg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { slideAnimation } from "../motion";
import { poppins } from "../fonts";

const Abouthero = () => {
  return (
    <div className={`${poppins}`}>
      <h1 className="text-8xl font-extrabold mb-10 max-lg:text-7xl text-center p-2">
        About US
      </h1>
      <div className="w-full h-auto bg-pink-100 flex justify-around p-10 items-center max-sm:block  max-lg:block">
        <div className="flex my-8">
          <span className="block w-[230px] h-[230px] max-sm:w-[200px] max-sm:h-[200px] rounded-full overflow-hidden border-4 border-white z-40">
            <Image
              src={bhati}
              alt="luffy"
              width={200}
              height={200}
              className="object-cover w-full h-full rounded-full p-[2px]"
            />
          </span>
          <span className="block ml-[-80px] w-[230px] max-sm:w-[200px] max-sm:h-[200px] h-[230px] rounded-full overflow-hidden border-4 border-white z-30">
            <Image
              src={armaan}
              alt="luffy"
              width={200}
              height={200}
              className="object-cover w-full h-full rounded-full p-[2px]"
            />
          </span>
          <span className="block bg-gray-100 max-sm:w-[200px] max-sm:h-[200px] ml-[-150px] w-[230px] h-[230px] rounded-full overflow-hidden border-4 border-white z-20" />
          <span className="block bg-gray-100 max-sm:w-[200px] max-sm:h-[200px] ml-[-150px] w-[230px] h-[230px] rounded-full overflow-hidden border-4 border-white z-10" />
        </div>

        <div className="w-auto max-w-[600px] text-left whitespace-normal max-sm:w-auto py-6 mb-6">
          <p className="text-wrap text-2xl text-gray-700 leading-[40px] font-bold max-sm:text-[1.33rem] max-sm:leading-8 ">
            Hello Everyone ! We are students from IPS ACADEMY INDORE. We are in
            first year AIML and we are very cool people and we find tech
            interesting and also people who are into tech so if you want to join
            us , please reach out to us Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Assumenda veritatis quos perspiciatis ab, dolore
            asperiores? Quo accusantium architecto aliquid obcaecati.
          </p>

          <a href="/about" className="opacity-[80%] hover:opacity-[100%]">
            <h4 className="text-2xl font-bold text-red-900 flex items-center mt-8">
              More
              <span className="ml-2 text-3xl animate-[wiggle_1s_ease-in-out_infinite]">
                <HiOutlineArrowNarrowRight />
              </span>
            </h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Abouthero;
