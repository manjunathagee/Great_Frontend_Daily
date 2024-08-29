import React from "react";
import SwappyRearrangeCards from "./SwappyRearrangeCards";
import AutoAnimateDemo from "./AutoAnimateDemo";

const SwappyCardWrapper = () => {
  return (
    <div className="divide-y divide-dashed space-y-2">
      <AutoAnimateDemo />
      <SwappyRearrangeCards />
    </div>
  );
};
export default SwappyCardWrapper;
