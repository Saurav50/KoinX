import React, { useState } from "react";
import Overview from "./Overview";

const AccordionList = () => {
  const [activeItem, setActiveItem] = useState(0); // Initialize activeItem to 0 for "Overview"

  const handleClick = (index) => {
    setActiveItem(index);
  };

  const buttonNames = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  return (
    <div className="mx-auto ">
      <div className="flex  border-b-2 border-l-amber-800 overflow-scroll">
        {buttonNames.map((name, index) => (
          <div key={index} className="mb-2">
            <button
              className={`w-full text-left py-2 px-4  focus:outline-none ${
                activeItem === index
                  ? "font-bold text-blue-700 border-b-2 border-blue-800"
                  : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {name}
            </button>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 w-full">
        {activeItem !== null && <Overview title={buttonNames[activeItem]} />}
      </div>
    </div>
  );
};

export default AccordionList;
