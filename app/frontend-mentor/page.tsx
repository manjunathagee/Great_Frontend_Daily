"use client";
import { Navbar } from "@/components/ui/Navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    title: "Day-01 QR Scanner",
    link: "/frontend-mentor/day-01-qr_scanner",
  },
  {
    id: 2,
    title: "Day-02 Blog preview card",
    link: "/frontend-mentor/day-02-blog_preview_card",
  },
];

const FrontendMentor = () => {
  return (
    <>
      <Navbar />
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center px-4"
        >
          <div className="md:text-4xl font-bold dark:text-white text-center">
            Daily UI Challenges from Frontend Mentors.
          </div>
          <div className="font-extralight text-xl dark:text-neutral-200 py-4 grid grid-cols-2">
            {links.map((link) => (
              <Link
                href={link.link}
                key={link.id}
                className="hover:text-blue-400"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </motion.div>
      </AuroraBackground>
    </>
  );
};

export default FrontendMentor;
