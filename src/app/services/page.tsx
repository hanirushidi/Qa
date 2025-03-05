import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const services = [
  {
    label: "Manual Testing",
    description:
      "Manual execution of test cases to identify defects and ensure quality.",
    href: "/services/manual-testing",
  },
  {
    label: "Automated Testing",
    description:
      "Using tools to automatically execute tests, enhancing efficiency and coverage.",
    href: "/services/automated-testing",
  },
  {
    label: "Web Application Testing",
    description:
      "Evaluating web apps for functionality and usability across browsers and devices.",
    href: "/services/web-application-testing",
  },
  {
    label: "Mobile Application Testing",
    description:
      "Testing mobile apps on various devices to ensure performance and compatibility.",
    href: "/services/mobile-application-testing",
  },
  {
    label: "iOS Application Testing",
    description:
      "Testing iOS apps for functionality and compliance with App Store guidelines.",
    href: "/services/ios-application-testing",
  },
  {
    label: "Android Application Testing",
    description:
      "Validating Android apps for performance and security across devices.",
    href: "/services/android-application-testing",
  },
  {
    label: "Desktop Application Testing",
    description:
      "Testing desktop applications for functionality across different operating systems.",
    href: "/services/desktop-application-testing",
  },
  {
    label: "API Testing",
    description:
      "Evaluating APIs for functionality, data integrity, and security vulnerabilities.",
    href: "/services/api-testing",
  },
  {
    label: "Dedicated QA Team",
    description:
      "A specialized team providing tailored testing services for your projects.",
    href: "/services/dedicated-qa-team",
  },
  {
    label: "QA Consulting & Audit",
    description:
      "Assessment and guidance to improve your QA processes and methodologies.",
    href: "/services/qa-consulting-audit",
  },
  {
    label: "Cybersecurity",
    description:
      "Identifying vulnerabilities and security flaws in software applications.",
    href: "/services/cybersecurity",
  },
  {
    label: "Hire QA Engineers",
    description:
      "Connecting businesses with qualified QA engineers for testing support.",
    href: "/services/hire-qa-engineers",
  },
];

const page = () => {
  return (
    <div className="min-h-screen pt-32 md:pt-32 xl:pt-0 flex flex-col gap-10 items-center justify-center p-3">
      <h1 className="text-3xl font-bold text-primary">Our Services</h1>
      <div className="max-w-screen-xl gap-5 grid xl:grid-cols-4 grid-cols-1 md:grid-cols-2   ">
        {services.map((service, index) => (
          <div
            key={index}
            className="max-w-[300px] flex flex-col items-center justify-between  gap-2 px-2 py-4 border border-primary rounded-md hover:shadow-md cursor-pointer hover:scale-105"
          >
            <div className="text-lg font-semibold ">{service.label}</div>
            <div className="xl:text-sm text-xs  text-gray-600 text-center ">
              {service.description}
            </div>
            <Link href={service.href}>
              <Button className="mt-4 my-auto">Learn more</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
