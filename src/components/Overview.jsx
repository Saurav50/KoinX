// Component1.js
import React from "react";
import Performance from "../assets/Performance.png";

const Overview = () => (
  <div className="p-4 bg-white w-full">
    {/* <h1 className="text-2xl font-medium">Performance</h1> */}
    <img src={Performance} className="w-full" alt="" />
  </div>
);

export default Overview;
