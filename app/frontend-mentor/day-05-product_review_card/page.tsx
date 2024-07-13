/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductReviewCard = () => {
  return (
    <main className="h-dvh flex justify-center items-center bg-[#F2EAE2]">
      <article className="rounded-xl bg-white flex flex-col md:flex-row space-y-4 md:space-y-0 w-[375px] md:w-[600px]">
        <img
          src="/images/frontend-mentor/product-review-card/image-product-mobile.jpg"
          alt="Perfume Chanel"
          className="md:hidden w-full h-[240px] rounded-t-xl"
        />
        <img
          src="/images/frontend-mentor/product-review-card/image-product-desktop.jpg"
          alt="Perfume Chanel"
          className="hidden md:block w-full h-[450px] rounded-l-xl"
        />
        <div className="py-2 px-6 space-y-4">
          <div className="uppercase font-Montserrat font-extralight tracking-widest">
            perfume
          </div>
          <h1 className="text-[#1C232B] text-4xl font-Fraunces font-bold">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-[#6C7289] font-Montserrat text-[#14px]">
            A floral, solar and voluptuous interpretation ocmposed by Oliveier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex gap-4 items-center">
            <span className="text-[#3D8168] font-Fraunces text-4xl font-bold">
              $149.99
            </span>
            <span className="font-light line-through text-[#6C7289]">
              $169.99
            </span>
          </div>
          <button className="bg-[#3D8168] w-full rounded-xl flex items-center justify-center py-4 text-white tracking-wide font-semibold gap-2 hover:cursor-pointer hover:bg-[#1A4032]">
            <MdOutlineShoppingCart />
            <span className="text-lg">Add to Cart</span>
          </button>
        </div>
      </article>
    </main>
  );
};

export default ProductReviewCard;
