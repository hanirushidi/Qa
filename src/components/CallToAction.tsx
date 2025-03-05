import React from "react";
import GridPattern from "./ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { WobbleCard } from "./ui/wobble-card";

const CallToAction = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-slate-100 py-10 px-3">
        <div className="flex flex-col justify-center items-center gap-10 max-w-screen-lg">
          <div className="text-center items-center flex flex-col gap-4">
            <p className="uppercase text-primary">
              Transform Your Testing Today
            </p>

            <p className="text-black text-3xl sm:text-4xl text-center font-semibold ">
              Join us in revolutionizing the way you approach automated testing.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-full max-w-screen-lg rounded-2xl bg-white p-10">
            <WobbleCard className="flex flex-col justify-center items-center gap-5">
              <p className="text-sm text-white text-center max-w-screen-md ">
                Ready to elevate your testing? Our platform simplifies and
                accelerates automated testing with seamless integrations and
                customizable scenarios—ensuring top-quality results quickly.
              </p>
              <Button
                variant="outline"
                className="w-fit z-10 bg-white p-4 hover:cursor-pointer"
              >
                Get Started Now
              </Button>
            </WobbleCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
