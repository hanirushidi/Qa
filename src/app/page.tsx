import React from "react";

import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import { MarqueeDemo } from "@/components/Marquee";
import CallToAction from "@/components/CallToAction";
import StatsBanner from "@/components/StatsBanner";

const page = () => {
  return (
    <>
      <HeroSection />
      <Features />
      {/* <Testimonials /> */}
      <MarqueeDemo />
      <StatsBanner />
      <CallToAction />
    </>
  );
};

export default page;
