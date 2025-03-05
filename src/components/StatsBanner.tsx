"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Calendar } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "5+", label: "Projects" },
  { icon: Users, value: "15+", label: "Team Members" },
  { icon: Calendar, value: "2023", label: "Since" },
];

export default function StatsBanner() {
  return (
    <div className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-primary border-2">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <stat.icon className="w-12 h-12 mb-4" />
                  <motion.span
                    className="text-4xl font-bold mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      delay: 0.2 + index * 0.1,
                    }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className=" text-primary text-xl">{stat.label}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
