import React, { useState, useEffect } from "react";

const TradingSlider = () => {
  const minValue = 46930.22;
  const maxValue = 49343.83;
  const value = 48637; // Current value

  return (
    <div className="relative w-3/4 h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full">
      {/* <div
        className="absolute left-0 top-0 bottom-0 bg-black w-2 h-full rounded-full"
        style={{
          left: `${((value - minValue) / (maxValue - minValue)) * 100}%`,
        }}
      >
        <div className="w-4 h-4 bg-black rounded-full absolute -top-3 -ml-2 transform rotate-45"></div>
      </div> */}
      <div
        className="absolute top-3 flex flex-col justify-center items-center  transform -translate-x-1/2 text-xs text-gray-500"
        style={{
          left: `${((value - minValue) / (maxValue - minValue)) * 100}%`,
        }}
      >
        <span className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 text-black"
          >
            <path
              fillRule="evenodd"
              d="M10 3.333l-6.667 10h13.334L10 3.333z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        ${value}
      </div>
    </div>
  );
};

const Performance = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-semibold">Performance</h1>
      <div className="flex items-center mt-5 justify-evenly gap-2 w-full">
        <div className="flex flex-col text-xs text-gray-500">
          Today's Low
          <span className="text-black">46930.22</span>
        </div>
        <TradingSlider />
        <div className="flex flex-col text-xs text-gray-500">
          Today's High <span className="text-black">49343.83</span>
        </div>
      </div>

      <div className="flex items-center mt-8 justify-evenly gap-2 w-full">
        <div className="flex flex-col text-xs text-gray-500">
          52W Low
          <span className="text-black">16930.22</span>
        </div>
        <div className="relative w-3/4 h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full"></div>
        <div className="flex flex-col text-xs text-gray-500">
          52W High <span className="text-black">49743.83</span>
        </div>
      </div>

      <h2 className="flex items-center gap-2 text-gray-800">
        <p className="font-medium mb-2 text-gray-600">Fundamentals</p>

        <svg
          height="100px"
          id="Capa_1"
          version="1.1"
          viewBox="0 15  100 100"
          width="15px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M45.385,0.004C19.983,0.344-0.333,21.215,0.004,46.619c0.34,25.393,21.209,45.715,46.611,45.377c25.398-0.342,45.719-21.213,45.381-46.615C91.656,19.986,70.785-0.335,45.385,0.004z M50.484,15.333c4.676,0,6.057,2.714,6.057,5.815c0,3.877-3.104,7.461-8.396,7.461c-4.43,0-6.537-2.229-6.414-5.91C41.731,19.597,44.33,15.333,50.484,15.333z M38.497,74.75c-3.195,0-5.537-1.938-3.301-10.467l3.666-15.125c0.637-2.424,0.744-3.393,0-3.393c-0.959,0-5.107,1.674-7.557,3.322l-1.598-2.617c7.773-6.491,16.712-10.299,20.544-10.299c3.195,0,3.727,3.779,2.131,9.594l-4.199,15.9c-0.744,2.811-0.424,3.779,0.318,3.779c0.961,0,4.102-1.166,7.188-3.59l1.811,2.424C49.939,71.838,41.69,74.75,38.497,74.75z" />
        </svg>
      </h2>
      <div className="flex flex-col  -mt-2 z-10 md:flex-row md:gap-10">
        <div className="flex flex-col w-1/2 ">
          <div className="flex justify-between border-b-2 pb-3 border-gray-200">
            <span>Bitcoin Price</span>
            {data.bitcoin.usd}
          </div>
          <div className="flex justify-between border-b-2 py-3 border-gray-200">
            <span>24h Low / 24h High</span>
            $16,382.07 / $16,874.12
          </div>
          <div className="flex justify-between border-b-2 py-3 border-gray-200">
            <span>7d Low / 7d High</span>
            $16,382.07 / $16,874.12
          </div>
          <div className="flex justify-between border-b-2 py-3 border-gray-200">
            <span>Trading Volume</span>
            {data.bitcoin.usd_24h_vol}
          </div>
          <div className="flex justify-between border-b-2 py-3 border-gray-200">
            <span>Market Cap</span>
            #1
          </div>
        </div>
        <div className="flex flex-col w-1/2 ">
          <div className="flex justify-between border-b-2 pb-3 border-gray-200">
            <span>Market Cap</span>
            {data.bitcoin.usd_market_cap}
          </div>
          <div className="flex justify-between border-b-2 py-3 border-gray-200">
            <span>Market Cap Dominance</span>
            38.343%
          </div>
          <div className="flex justify-between border-b-2 py-3 border-gray-200">
            <span>Volume / Market Cap</span>
            0.0718
          </div>
          <div className="flex justify-between border-b-2 py-3 border-gray-200">
            <span>All-Time High</span>
            $69,044.77 -75.6% Nov 10, 2021 (about 1 year)
          </div>
          <div className="flex justify-between border-b-2 py-3 border-gray-200">
            <span>All-Time Low</span>
            $67.81 24729.1% Jul 06, 2013 (over 9 years)
          </div>
        </div>
      </div>
    </div>
  );
};
export default Performance;
