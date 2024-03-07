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
              aria-label={`Price change: ${parseFloat(
                coin.item.data.price_change_percentage_24h.usd
              ).toFixed(2)}%`}
            >
              {parseFloat(coin.item.data.price_change_percentage_24h.usd) <
              0 ? (
                <ArrowDown className="w-3 h-3 text-red-500" />
              ) : (
                <ArrowUp className="w-3 h-3 text-green-500" />
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
