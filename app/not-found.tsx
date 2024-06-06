"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import React from "react";

const NotFound = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="felx flex-col">
          <p className="text-xl text-blue-800  md:text-left">Not found</p>
          <h2 className="mt-2 text-4xl font-medium leading-10  md:text-left">
            We can&apos;t find the page
          </h2>
          <p className="mt-4 text-xl max-w-md md:text-left font-light text-zinc-400">
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </p>
          <button className="text-center text-white bg-blue-800  p-4 mt-8 rounded-lg md:text-left sm:w-full">
            Back to Home
          </button>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default NotFound;
