"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bell, Menu, Languages, ChevronDown } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  const services = [
    { href: "/services/manual-testing", label: "Manual Testing" },
    { href: "/services/automated-testing", label: "Automated Testing" },
    {
      href: "/services/web-application-testing",
      label: "Web Application Testing",
    },
    {
      href: "/services/mobile-app-testing",
      label: "Mobile Application Testing",
    },
    {
      href: "/services/ios-application-testing",
      label: "iOS Application Testing",
    },
    {
      href: "/services/android-application-testing",
      label: "Android Application Testing",
    },
    {
      href: "/services/desktop-application-testing",
      label: "Desktop Application Testing",
    },
    { href: "/services/api-testing", label: "API Testing" },
    { href: "/services/dedicated-qa-team", label: "Dedicated QA Team" },
    {
      href: "/services/qa-consulting-audit",
      label: "QA Consulting & Audit",
    },
    { href: "/services/cybersecurity", label: "Cybersecurity" },
    { href: "/services/hire-qa-engineers", label: "Hire QA Engineers" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0.4, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="bg-white bg-opacity-50 z-50 backdrop-blur-[8px] flex flex-row w-full justify-center fixed">
      <div className="flex max-w-screen-xl w-full h-fit justify-between items-center px-10 xl:px-0 py-5 ">
        <div className="flex items-center gap-2 ">
          <Link href="/" className="flex items-center gap-2">
            <Image src={"/logoo.png"} alt="logo" width={38} height={38} />
            <span className="font-black text-slate-900">Aflow</span>
          </Link>
        </div>
        <div className="lg:flex hidden">
          <ul className="flex gap-5  justify-center items-center text-sm font-normal text-neutral-600">
            <Link className="hover:scale-105" href="/">
              <li>Home</li>
            </Link>

            {/* Services Dropdown */}
            <li className="relative hover:scale-105">
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="">
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 text-neutral-600 font-normal text-sm hover:text-neutral-900"
                  >
                    Services <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-screen hidden lg:flex items-center justify-center  ">
                  <div className="grid grid-cols-3 gap-5 gap-x-20 p-5  items-center justify-center  max-w-screen-xl">
                    {services.map((service) => (
                      <DropdownMenuItem asChild>
                        <Link href={service.href}>{service.label}</Link>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem asChild>
                      <Link
                        href="/services/hire-qa-engineers"
                        className="text-primary font-semibold"
                      >
                        Hire QA Engineers
                      </Link>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <Link className="hover:scale-105" href="/about">
              <li>About</li>
            </Link>
            <Link className="hover:scale-105" href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="text-sm items-center gap-2 hover:scale-105 lg:flex hidden">
          <Languages width={20} />
          <p>Language</p>
        </div>
        <div className="lg:hidden flex">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="flex flex-col  justify-between"
            >
              <SheetHeader>
                <motion.ul
                  className="mt-10 flex flex-col items-start gap-3 text-3xl font-semibold text-primary"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <AnimatePresence>
                    {isOpen &&
                      menuItems.map((item) => (
                        <motion.li
                          key={item.href}
                          variants={itemVariants}
                          exit={{ opacity: 0, x: -20 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </motion.li>
                      ))}

                    <motion.li
                      variants={itemVariants}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="flex items-center p-0 text-primary font-semibold text-3xl hover:text-neutral-900"
                          >
                            Services <ChevronDown className="ml-1 h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className=" items-center justify-center shadow-none border-none  ">
                          <div className="flex flex-col gap-2 pl-5">
                            {services.map((service) => (
                              <DropdownMenuItem
                                asChild
                                key={service.href}
                                className="text-primary"
                              >
                                <Link href={service.href}>{service.label}</Link>
                              </DropdownMenuItem>
                            ))}
                          </div>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </motion.li>
                  </AnimatePresence>
                </motion.ul>
              </SheetHeader>
              <SheetDescription>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <SheetClose asChild>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Button className="w-full rounded-xl bg-primary">
                        Contact us
                      </Button>
                    </motion.div>
                  </SheetClose>
                </Link>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
