import React, { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "react-feather";

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => response.json())
      .then((data) => {
        setTrendingCoins(data.coins.slice(0, 3));
      })
      .catch((error) => {
        console.error("Error fetching trending coins:", error);
      });
  }, []);

  return (
    <div className="w-lg px-8 py-5 mt-8 bg-white rounded-lg">
      <h2 className="text-xl mb-4 ">Trending Coins (24h)</h2>
      <ul className="divide-y divide-gray-200">
        {trendingCoins.map((coin) => (
          <li
            key={coin.item.id}
            className="py-2 flex justify-between items-center"
          >
            <div className="flex text-sm">
              <img src={coin.item.small} alt="" className="w-6 mr-2" />
              <strong className="mr-1 text-sm">{coin.item.name}</strong> (
              {coin.item.symbol})
            </div>
            <div
              className={`max-w-15 flex items-center gap-2 text-xs w-20  ${
                parseFloat(coin.item.data.price_change_percentage_24h.usd) >= 0
                  ? "bg-green-100"
                  : "bg-red-100"
              }`}
            >
              {parseFloat(coin.item.data.price_change_percentage_24h.usd) <
              0 ? (
                <svg
                  fill="#c90808"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 96.154 96.154"
                  xmlSpace="preserve"
                  className="w-3 h-3"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61 c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056 c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"></path>
                    </g>
                  </g>
                </svg>
              ) : (
                <img
                  src="https://img.icons8.com/officel/16/triangle-stroked.png"
                  alt="triangle-stroked"
                  className="w-3 h-3"
                />
              )}
              {parseFloat(
                coin.item.data.price_change_percentage_24h.usd
              ).toFixed(2)}
              %
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;
