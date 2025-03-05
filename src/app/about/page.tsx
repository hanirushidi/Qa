"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { div } from "framer-motion/m";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries and embracing new ideas",
    },
    {
      title: "Collaboration",
      description: "Working together to achieve greatness",
    },
    {
      title: "Integrity",
      description: "Upholding the highest ethical standards",
    },
    {
      title: "Excellence",
      description: "Striving for the best in everything we do",
    },
  ];

  const team = [
    {
      name: "John Doe",
      role: "CEO",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Mike Johnson",
      role: "Lead Designer",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sarah Brown",
      role: "Marketing Director",
      image: "/placeholder.svg?height=100&width=100",
    },
  ];

  return (
    <div className="flex justify-center items-center pt-[80px] ">
      <div className="min-h-screen  max-w-screen-xl ">
        <div className="container mx-auto px-4 py-16">
          <motion.section
            className="mb-20"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Our Story
            </h2>
            <Card className="border-none">
              <CardContent className="p-6 border-none">
                <p className="text-md text-center text-gray-700 leading-relaxed border-none">
                  Founded in 2023, our company has been at the forefront of
                  innovation in the tech industry. We started with a simple
                  idea: to make technology more accessible and user-friendly for
                  everyone. Since then, we've grown into a team of passionate
                  individuals dedicated to pushing the boundaries of what's
                  possible. Our journey has been marked by continuous learning,
                  adaptation, and a commitment to excellence. We've faced
                  challenges head-on and celebrated victories together, always
                  keeping our users at the heart of everything we do.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            className="mb-20"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Our Values
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerChildren}
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full border-primary border-2 hover:scale-105">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <h3 className="text-xl font-semibold mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Our Team
            </h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerChildren}
            >
              {team.map((member, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full border-primary border-2 hover:scale-105">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Avatar className="w-24 h-24 mb-4">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-semibold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{member.role}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleSection(member.name)}
                        className="mt-auto"
                      >
                        {expandedSection === member.name
                          ? "Less Info"
                          : "More Info"}
                        <ChevronDown
                          className={`ml-2 h-4 w-4 transition-transform ${
                            expandedSection === member.name ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                      {expandedSection === member.name && (
                        <motion.p
                          className="mt-4 text-sm text-gray-600"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {member.name} brings years of experience and passion
                          to our team. Their innovative thinking and leadership
                          have been instrumental in our success.
                        </motion.p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
