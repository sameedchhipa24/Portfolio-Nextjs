"use client";
import Image from "next/image";

import { Download, Linkedin } from "lucide-react";
import { MovingBorderDemo } from "./Accernityui/Button1";
import { Typewriter } from "react-simple-typewriter";
import { WavyBackground } from '../ui/wavy-background';

const handleType = (count: number) => {
  // access word count number
  console.log(count);
};

const handleDone = () => {
  console.log(`Done after 15 loops!`);
};

const heroSection = () => {
  return (
    // <div className="flex justify-between items-center mx=auto">

    
    <div className="flex md:flex-row flex-col justify-between items-center max-w-screen-2xl mx-auto md:px-3 py-20 overflow-hidden">
      <div className="">
        <p className="text-xs "> Hello I am, </p>
        <h1 className="text-[#FF6171] font-bold md:text-4xl text-4xl py-2">
          Sameed Ahmed
        </h1>
        <h2 className="font-extrabold md:text-6xl text-4xl">
          <Typewriter
            words={["Web", "Python", "Blockchain", "GenAI"]}
            loop={5}
            cursor
            cursorStyle="|"
            cursorColor="#ffffff"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
          <div className="md:ml-16 md:py-2">Developer</div>
        </h2>
        <div className=" mt-5">
          <p className="text-wrap md:text-base text-xs md:w-[443px] w-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            laboriosam recusandae sunt eligendi accusamus ipsam laudantium eum
            quo tenetur quasi?Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Vel hic eveniet ut.
          </p>
        </div>
        <div className="flex mt-5 items-center ">
          <div className="md:my-6">
            <MovingBorderDemo title="Hire Me" />
          </div>
          <div className="md:ml-7 md:my-6 my-6">
            <MovingBorderDemo title="Download CV" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-12 md:mr-6 mt-14 md:mt-0">
        <div className="text-2xl ">
          <Image
            src={require("@/../public/assets/IMG_3665.jpg")}
            alt="alt"
            width={100}
            height={100}
            className="object-cover object-center rounded-full md:w-56 md:h-56 h-44 w-44 md:animate-bounce duration-0 delay-0"
          />
        </div>
        <div className="flex mx-auto gap-x-7 ">
          {/* Facebook */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={35}
            height={35}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-facebook  p-1 fill-white text-white border-2 rounded-full"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
          {/* Twitter */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white   p-1 fill-white border-2 rounded-full"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
          {/* Linkedin */}
          <Linkedin
            size={35}
            absoluteStrokeWidth
            className=" p-1 text-white fill-white border-2 rounded-full"
          />
        </div>
      </div>
    </div>
  
    // </div>
  );
};

export default heroSection;
