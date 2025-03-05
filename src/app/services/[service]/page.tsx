// app/our-services/[service]/page.tsx
import servicesContent from "@/../data/services.json";
import { Button } from "@/components/ui/button";
import GridPattern from "@/components/ui/grid-pattern";

import { cn } from "@/lib/utils";

import WhatIs from "@/components/WhatIsService";
import WhyThisService from "@/components/WhyThisService";

import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import { MarqueeDemo } from "@/components/Marquee";

interface ServiceData {
  title: string;
  description: string;
  sections: Array<{ heading: string; content: string }>;
}

const whyUs = [
  {
    heading: "Quality",
    content:
      "We are committed to delivering high-quality solutions that meet your needs.",
  },
  {
    heading: "Innovation",
    content:
      "We use the latest tools and technologies to provide innovative solutions.",
  },
  {
    heading: "Client Success",
    content:
      "We work closely with you to ensure the success of your projects and goals.",
  },
  {
    heading: "Reliability",
    content:
      "Our team is dedicated to consistent, dependable support that you can trust to drive results.",
  },
];

type ServiceKeys = keyof typeof servicesContent;

// This function generates the paths for static generation
export async function generateStaticParams() {
  return Object.keys(servicesContent).map((service) => ({
    service,
  }));
}

export default function ServicePage({
  params,
}: {
  params: { service: ServiceKeys };
}) {
  const service = params.service;
  const serviceData = servicesContent[service];

  if (!serviceData) {
    // Handle the case where the service doesn't exist
    return (
      <div className="flex flex-col min-h-screen justify-center items-center gap-5">
        <p className="text-3xl font-semibold text-primary">Service not found</p>
        <Button>Go to homepage</Button>
      </div>
    );
  }

  const { title, description, whyThisService } = serviceData;
  const sections = "sections" in serviceData ? serviceData.sections : [];
  const issues =
    "issues" in serviceData
      ? serviceData.issues.map((issue) => ({
          ...issue,
          number: Number(issue.number),
        }))
      : [];

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center px-10 xl:px-0 ">
      <ServiceHeroSection
        title={title}
        description={description}
        sections={sections}
      />

      <div className="flex flex-col xl:flex-row max-w-screen-xl w-full items-center justify-between pt-20 gap-10">
        <div className="flex flex-col gap-3 max-w-[500px] ">
          <h1 className="text-4xl font-semibold ">Why choose us</h1>
          <p>
            Choose us for our commitment to quality, innovation, and client
            success. With a skilled team and proven methods, we ensure precise,
            reliable solutions tailored to your needs.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 w-full mt-10">
          {whyUs.map((service, index) => (
            <div
              key={index}
              className=" flex flex-col  items-center justify-between  gap-2 px-2 py-4 border border-primary rounded-md hover:shadow-md cursor-pointer hover:scale-105"
            >
              <div className="text-lg font-semibold ">{service.heading}</div>
              <div className="xl:text-sm text-xs  text-gray-600 text-center ">
                {service.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex max-w-screen-xl mt-20">
        <WhatIs sections={sections} />
      </div>

      <div className="flex flex-col text-start xl:text-center items-start xl:items-center mt-20 xl:mt-10">
        <div className="flex flex-col gap-3 max-w-screen-lg ">
          <h1 className="text-4xl font-semibold ">Why choose {title}</h1>
          <p className="text-xs xl:text-sm ">{whyThisService}</p>
        </div>
        <WhyThisService issues={issues} />
      </div>

      <MarqueeDemo />
    </div>
  );
}

const ServiceHeroSection = ({ title, description, sections }: ServiceData) => (
  <div className="relative flex flex-col size-full items-center justify-center overflow-hidden rounded-lg bg-background py-[80px] border-b-[1px]   ">
    <div className="z-10 flex flex-col justify-start max-w-screen-xl w-full items-start gap-16 ">
      <div className="bg-slate-200  rounded-2xl"></div>
      <div className="flex-col flex justify-center items-start  w-full gap-5">
        <p className="z-10 max-w-screen-md text-[#3a67b4] whitespace-pre-wrap  text-4xl sm:text-5xl font-semibold tracking-tighter dark:text-white">
          {title}
        </p>
        <p className="z-10 text-xs sm:text-sm max-w-[520px] xl:max-w-screen-sm  whitespace-pre-wrap  ">
          {description}
        </p>
        <Link href="/contact">
          <Button>Request Consultation</Button>
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
        "2xl:[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
      )}
    />
  </div>
);
