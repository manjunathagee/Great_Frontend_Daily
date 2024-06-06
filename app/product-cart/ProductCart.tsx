/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProductCart = () => {
  return (
    <section className="shadow-2xl bg-white p-4 md:p-8 rounded-xl">
      <div className="flex flex-col md:flex-row space-y-4 md:space-x-8 md:space-y-0">
        <div className="mx-auto">
          <img
            src="/images/product-cart/headphone.png"
            alt=""
            className="object-fit h-48 w-48 md:h-36 md:w-36"
          />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div>
            <button className="bg-black text-white rounded-2xl p-2">
              Free shipping
            </button>
          </div>
          <p className="text-center max-w-sm text-2xl font-medium tracking-wide">
            Razer Kraken Kitty Edt Gaming Headset Quartz
          </p>
          <span className="line-through">$799</span>
          <span className="text-5xl font-bold translate-x-2">$599</span>
          <p className="font-light text-center text-lg text-zinc-400">
            This offer is valid until April 3rd or as long as stock lasts!
          </p>
          <button className="w-full mx-4 text-center rounded-lg text-white bg-blue-400 hover:bg-blue-500 py-4 hover:scale-y-105">
            Add to cart
          </button>
          <div className="flex gap-4">
            <span className="relative top-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
            </span>
            <span>50+ pcs. in stock</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCart;
