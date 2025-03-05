import React from "react";
import AnimatedShinyText from "./ui/animated-shiny-text";
import { Button } from "./ui/button";
import { ZapIcon } from "lucide-react";
import GridPattern from "./ui/grid-pattern";
import { cn } from "@/lib/utils";
import ShimmerButton from "./ui/shimmer-button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col size-full items-center justify-center overflow-hidden rounded-lg bg-background pt-[80px] min-h-screen px-3 ">
      <div className="z-10 flex flex-col justify-center items-center gap-16">
        <div className="bg-slate-200 w-fit rounded-2xl">
          <AnimatedShinyText className="z-10  inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span className=" text-black">
              <span className="font-bold text-black">#1</span> Best Choice for
              Automation Testing{" "}
            </span>
          </AnimatedShinyText>
        </div>
        <div className="flex-col flex justify-center items-center w-full gap-5">
          <p className="z-10 max-w-screen-md text-[#3a67b4] whitespace-pre-wrap text-center text-4xl sm:text-5xl font-semibold tracking-tighter dark:text-white">
            Revolutionize Your Workflow with the Power of Automation
          </p>
          <p className="z-10 text-xs sm:text-sm max-w-96 text-center whitespace-pre-wrap  ">
            Simplify your workflow by replacing manual tasks with automation.
            Boost accuracy and let your team focus on what matters most.
          </p>
        </div>
        <div>
          <Link href="/contact">
            <ShimmerButton
              shimmerColor="white"
              shimmerSize="0.10em"
              background="#3a67b4"
              className="bg-[#3a67b4] text-sm flex gap-2 "
            >
              <ZapIcon />
              Get Started Now
            </ShimmerButton>
          </Link>
        </div>
      </div>

      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "2xl:[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
};

export default HeroSection;
