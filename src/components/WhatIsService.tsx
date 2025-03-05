import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const WhatIs = ({
  sections,
}: {
  sections: Array<{ heading: string; content: string }>;
}) => {
  return (
    <div className="mt-20 min-h-[50vh]">
      <WobbleCard className="bg-gray-primary  ">
        <div className="flex flex-col gap-5">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h3 className="text-3xl text-white font-bold text-center">
                {section.heading}
              </h3>
              <p className="text-sm text-center text-white">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </WobbleCard>
    </div>
  );
};

export default WhatIs;
