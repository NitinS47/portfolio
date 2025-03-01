"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";

// import Lottie from "react-lottie";

import { cn } from "@/lib/utils";


import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/confetti.json";
import {MagicButton} from "./MagicButton";
import { WavyBackground } from "./wavy-background";
import { Meteors } from "./meteors";
import { EvervaultCard } from "./evervault-card";
import { div } from "framer-motion/client";
import { FlipWords } from "./flip-words";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Java", "Python"];
  const rightLists = ["C#", "NextJS", "AIML"];
  const words = ["Development", "Networking", "AIML", "Cybersecurity"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    // animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // const handleCopy = () => {
  //   const text = "nitinpeter147@gmail.com";
  //   navigator.clipboard.writeText(text);
  //   setCopied(true);
  // };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 1 && (
          // add background animation , remove the p tag
          // <div className="relative overflow-hidden">
  <WavyBackground>
    <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
  </WavyBackground>
// </div>
        )}

          
          {id === 2 && <Meteors number={20}/>}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-2 md:gap-2 lg:gap-4">
  {leftLists.map((item, i) => (
    <span
      key={i}
      className="lg:py-3 lg:px-2 py-2 px-2 text-xs lg:text-sm opacity-50 
      lg:opacity-100 rounded-lg text-center bg-[#10132E]"
    >
      {item}
    </span>
  ))}
  <span className="lg:py-3 lg:px-2 py-3 px-2 rounded-lg text-center bg-[#10132E]"></span>
</div>
<div className="flex flex-col gap-2 md:gap-2 lg:gap-4">
  <span className="lg:py-3 lg:px-2 py-3 px-2 rounded-lg text-center bg-[#10132E]"></span>
  {rightLists.map((item, i) => (
    <span
      key={i}
      className="lg:py-3 lg:px-2 py-2 px-2 text-xs lg:text-sm opacity-50 
      lg:opacity-100 rounded-lg text-center bg-[#10132E]"
    >
      {item}
    </span>
  ))}
</div>

            </div>
          )}

          {id === 4 && <EvervaultCard text="Specialized in CyberSecurity"/>}
          {id === 5 && <div className="h-[20rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        I am Flexible in
        <FlipWords words={words} /> <br />
        ready to tackle new opportunities.
      </div>
    </div>}

          {id === 6 && (
            <div className="mt-5 relative">
              
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
               
                {/* <Lottie options={{loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  }
                }} height={200} width={400} /> */}
              </div>

              <a href='nitinpeter147@gmail.com'>
                              <MagicButton
                              title="let's get in touch"
                              icon={<FaLocationArrow/>}
                              position='right'
                              />
                          </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
