import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="rounded-md shadow-lg p-4 max-w-md m-2 bg-white">
      <div className="flex mb-4 gap-2">
        <Image
          src="/card/profile-thumbnail.png"
          width={50}
          height={40}
          alt="profile picture"
        />
        <div>
          <h2 className="font-medium tracking-wide text-lg truncate">
            Sarah Dole
          </h2>
          <span className="font-light">@sarahdole</span>
        </div>
      </div>
      <p className="font-light">
        I&apos;ve been searching for high-quality abstract images for my design
        projects, and I&apos;m thrilled to have found this platform. The variety
        and depth of creativity are astounding!
      </p>
    </div>
  );
};

export default Card;
