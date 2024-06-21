/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const EmailSubscribe = () => {
  return (
    <section className="rounded-2xl bg-zinc-800 p-2">
      <div className="flex flex-col md:flex-row rouded-l-xl">
        <img
          src="/images/email-subscribe/image.jpg"
          alt=""
          className="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
        />
        <div className="p-6 md:p-12">
          <h2 className="text-white text-xl font-serif tracking-wide font-medium text-center md:text-left">
            Get diet and fitness tips in your inbox
          </h2>
          <p className="text-center md:text-left text-white text-md my-4 max-w-xs leading-5 tracking-wide">
            Eat better and exercise better. Sign up for teh Diet&Fitness
            newsletter.
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-6">
            <input
              type="text"
              className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
              placeholder="Enter your email address"
            />
            <button className="bg-lime-500 px-4 py-2 text-zinc-800 hover:text-white hover:bg-lime-600 rounded-lg font-light transform duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscribe;
