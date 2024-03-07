import React from "react";
import KoinXApp from "../assets/koinXApp.png";

function GetStartedCard() {
  return (
    <div className="max-w-sm mx-auto py-10 flex flex-col justify-center align-middle items-center text-white text-center bg-navBlue1 shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-2">
        <h2 className="text-xl font-bold mb-2">Get Started with KoinX</h2>
        <h2 className="text-xl font-bold mb-2">for Free</h2>
        <p className="text-white text-xs max-w-xs px-10">
          Koinxx is a platform for trading cryptocurrencies. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex justify-center">
        <img src={KoinXApp} alt="Koinxx" className="w-28" />
      </div>

      <div className="px-4 py-2 ">
        <button className="bg-white text-sm flex  text-black font-bold py-2 px-4 rounded">
          Get Started for FREE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-10 -5 30 40"
            className="w-6 h-6"
          >
            <path
              style={{ fill: "#232326" }}
              d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
              data-name="Right"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default GetStartedCard;
