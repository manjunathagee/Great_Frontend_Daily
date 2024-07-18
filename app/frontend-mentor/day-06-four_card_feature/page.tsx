/* eslint-disable @next/next/no-img-element */
import React from "react";

const FourSectionFeatures = () => {
  return (
    <main className="font-Poppins h-screen py-20 justify-center flex bg-[#F2F2F2] text-[#4D4F62] ">
      <section className="text-center space-y-6 container mx-auto">
        <div className="space-y-2">
          <h1 className="font-extralight text-2xl md:text-4xl tracking-wide">
            Reliable, efficient delivery
          </h1>
          <h1 className="text-2xl md:text-4xl font-semibold">
            Powered by Technology
          </h1>
          <p className="font-light max-w-xs md:max-w-lg mx-auto">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div className="flex flex-col lg:flex-row space-y-4 md:space-x-4 md:items-center md:justify-center">
          <div className="h-[250px] w-[#350] shadow-2xl rounded-lg border-t-4 p-4 border-[#44D3D2] text-left space-y-2 relative">
            <h2 className="font-semibold">Supervisor</h2>
            <p className="font-light max-w-xs">
              Monitors activity to identify project roadblocks
            </p>
            <img
              src="/images/frontend-mentor/four-section-cards/icon-supervisor.svg"
              alt="Search for project roadblocks"
              className="absolute bottom-8 right-8"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="h-[250px] w-[#350] shadow-2xl rounded-lg border-t-4 p-4 border-[#EA5454] text-left space-y-2 relative">
              <h2 className="font-semibold">Team Builder</h2>
              <p className="font-light max-w-xs">
                Scans our talent network to create the optimal team for your
                project
              </p>
              <img
                src="/images/frontend-mentor/four-section-cards/icon-team-builder.svg"
                alt="Search for project roadblocks"
                className="absolute bottom-8 right-8"
              />
            </div>
            <div className="h-[250px] w-[#350] shadow-2xl rounded-lg border-t-4 p-4 border-[#FCAE4A] text-left space-y-2 relative">
              <h2 className="font-semibold">Karma</h2>
              <p className="font-light max-w-xs">
                Regularly evaluates our talent to endsure quality
              </p>
              <img
                src="/images/frontend-mentor/four-section-cards/icon-karma.svg"
                alt="Search for project roadblocks"
                className="absolute bottom-8 right-8"
              />
            </div>
          </div>
          <div className="h-[250px] w-[#350] shadow-2xl rounded-lg border-t-4 p-4 border-[#549EF2] text-left space-y-2 relative">
            <h2 className="font-semibold">Calculator</h2>
            <p className="font-light max-w-xs">
              Uses data from past projects to provide better delivery estimates
            </p>
            <img
              src="/images/frontend-mentor/four-section-cards/icon-calculator.svg"
              alt="Search for project roadblocks"
              className="absolute bottom-8 right-8"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default FourSectionFeatures;
