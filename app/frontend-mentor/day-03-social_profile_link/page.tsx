/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const social_profile_link = () => {
  return (
    <main className="h-dvh flex items-center justify-center bg-[hsl(0,0%,8%)]">
      <article className="text-[hsl(0,0%,100%)] bg-[hsl(0,0%,12%)] rounded-xl flex flex-col gap-6 items-center p-10">
        <img
          src="/images/frontend-mentor/social-profile-link/avatar-jessica.jpeg"
          alt="Social Profile Picture"
          className="h-28 w-28 rounded-full"
        />
        <div className="flex items-center flex-col gap-3 font-medium">
          <h1 className="text-3xl">Jessica Randall</h1>
          <span className="text-lg text-[hsl(75,94%,57%)]">
            London, United Kingdom
          </span>
        </div>
        <section className="flex flex-col gap-4 items-center">
          <span className="text-lg">
            "Front-end developer and avid reader."
          </span>

          <div className="flex flex-col gap-2 items-stretch justify-stretch align-middle w-full">
            <button className="py-2 rounded-lg hover:bg-[hsl(75,94%,57%)] hover:text-black bg-[hsl(0,0%,20%)] font-medium text-lg tracking-wide">
              GitHub
            </button>
            <button className="py-2 rounded-lg hover:bg-[hsl(75,94%,57%)] hover:text-black bg-[hsl(0,0%,20%)] font-medium text-lg tracking-wide">
              Grontend Mentor
            </button>
            <button className="py-2 rounded-lg hover:bg-[hsl(75,94%,57%)] hover:text-black bg-[hsl(0,0%,20%)] font-medium text-lg tracking-wide">
              LinkedIn
            </button>
            <button className="py-2 rounded-lg hover:bg-[hsl(75,94%,57%)] hover:text-black bg-[hsl(0,0%,20%)] font-medium text-lg tracking-wide">
              Twitter
            </button>
            <button className="py-2 rounded-lg hover:bg-[hsl(75,94%,57%)] hover:text-black bg-[hsl(0,0%,20%)] font-medium text-lg tracking-wide">
              Instagram
            </button>
          </div>
        </section>
      </article>
    </main>
  );
};

export default social_profile_link;
