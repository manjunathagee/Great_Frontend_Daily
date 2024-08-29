"use client";
import React, { useEffect } from "react";
import { createSwapy } from "swapy";

const SwappyRearrangeCards = () => {
  useEffect(() => {
    const container = document.querySelector(".container")!;
    const swapy = createSwapy(container, { animation: "spring" });
    swapy.onSwap(({ data }) => {
      localStorage.setItem("slotItem", JSON.stringify(data.object));
    });
    swapy.enable(true);
  }, []);
  return (
    <div className="w-[1/2] container mx-auto bg-slate-200 rounded-lg grid grid-cols-4 grid-rows-2 gap-2 p-4">
      <div data-swapy-slot="a">
        <div
          className="p-4 bg-slate-400 rounded-sm cursor-pointer"
          data-swapy-item="a"
        >
          A
        </div>
      </div>

      <div data-swapy-slot="b">
        <div
          className="p-4 bg-slate-400 rounded-sm cursor-pointer"
          data-swapy-item="b"
        >
          B
        </div>
      </div>

      <div data-swapy-slot="c">
        <div
          className="p-4 bg-slate-400 rounded-sm cursor-pointer"
          data-swapy-item="c"
        >
          C
        </div>
      </div>

      <div data-swapy-slot="d">
        <div
          className="p-4 bg-slate-400 rounded-sm cursor-pointer"
          data-swapy-item="d"
        >
          D
        </div>
      </div>

      <div data-swapy-slot="e">
        <div
          className="p-4 bg-slate-400 rounded-sm cursor-pointer"
          data-swapy-item="e"
        >
          E
        </div>
      </div>

      <div data-swapy-slot="f">
        <div
          className="p-4 bg-slate-400 rounded-sm cursor-pointer"
          data-swapy-item="f"
        >
          F
        </div>
      </div>
    </div>
  );
};

export default SwappyRearrangeCards;
