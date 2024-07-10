/* eslint-disable @next/next/no-img-element */
import React from "react";

const BlogPreviewCard = () => {
  return (
    <main className="h-dvh flex items-center justify-center bg-[hsl(47,88%,63%)]">
      <article className="border border-black rounded-2xl shadow-5xl hover:shadow-14xl p-4 bg-white max-w-sm">
        <img
          src="/images/frontend-mentor/blog-preview-card/illustration-article.svg"
          alt="Blog Preview Card"
          className="rounded-xl w-full"
        />
        <button className="mt-6 font-medium rounded-md px-2 py-1 bg-[hsl(47,88%,63%)]">
          Learning
        </button>

        <span className="mt-4 font-medium text-sm block">
          Published 21 Dec 2024
        </span>

        <h1 className="font-bold mt-4 text-2xl hover:cursor-pointer hover:text-[hsl(47,88%,63%)]">
          HTML & CSS foundations
        </h1>

        <p className="mt-4 text-gray-500 max-w-sm">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>

        <div className="mt-6 flex gap-2 items-center">
          <img
            src="/images/frontend-mentor/blog-preview-card/image-avatar.webp"
            alt="Profile picture"
            className="h-10 w-10 rounded-full"
          />
          <span className="font-bold text-sm">Greg Hooper</span>
        </div>
      </article>
    </main>
  );
};

export default BlogPreviewCard;
