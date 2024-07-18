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
  {
    id: 3,
    title: "Day-03 Social Profile Links",
    link: "/frontend-mentor/day-03-social_profile_link",
  },
  {
    id: 4,
    title: "Day-04 Recipe Page",
    link: "/frontend-mentor/day-04-recipe_page",
  },
  {
    id: 5,
    title: "Day-05 Product Review Card",
    link: "/frontend-mentor/day-05-product_review_card",
  },
  {
    id: 6,
    title: "Day-06 Four Card Feature",
    link: "/frontend-mentor/day-06-four_card_feature",
  },
  {
    id: 7,
    title: "Day-07 Password Generator",
    link: "/frontend-mentor/day-07-password_generator",
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
          <div className="font-extralight text-xl dark:text-neutral-200 py-4 grid grid-cols-2 gap-2">
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
