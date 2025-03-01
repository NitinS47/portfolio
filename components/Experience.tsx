import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { Timeline } from "./ui/timeline";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-black-100">work experience</span>
      </h1>

      {/* Content Section with bg-black-100 */}
      <div className="mt-16 bg-black-100 rounded-xl py-12">
        {/* <BackgroundBeamsWithCollision> */}
          <Timeline
            data={workExperience.map(({ year, details }) => ({
              title: `${year}: ${details.title}`,
              content: (
                <div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    {details.desc}
                  </p>
                  <img
                    src={details.thumbnail}
                    alt={details.title}
                    className="h-32 w-32 rounded-lg object-cover shadow-md"
                  />
                </div>
              ),
            }))}
          />
        {/* </BackgroundBeamsWithCollision> */}
      </div>
    </div>
  );
};

export default Experience;
