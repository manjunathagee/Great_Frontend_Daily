/* eslint-disable @next/next/no-img-element */
import React from "react";

const QRScanner = () => {
  return (
    <div className="h-screen bg-[#D5E1EF] flex items-center justify-center">
      <div className="rounded-lg bg-white p-4 max-w-sm flex flex-col items-center">
        <div className="overflow-hidden rounded-lg">
          <img
            src="/images/frontend-mentor/qr-scanner/image.png"
            alt="qr scanner"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-6 max-w-xs text-center">
          <h1 className="text-2xl font-bold">
            Improve your front-end skills by building projects
          </h1>
          <p className="mt-4 font-light text-lg text-gray-500">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;
