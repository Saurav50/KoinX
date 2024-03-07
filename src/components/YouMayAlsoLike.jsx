import React, { useEffect, useState } from "react";
import axios from "axios";

const YouMayAlsoLike = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [coinsPerRow, setCoinsPerRow] = useState(3); // Initial number of coins per row

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setTrendingCoins(response.data.coins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  useEffect(() => {
    const calculateCoinsPerRow = () => {
      // Calculate number of coins per row based on container width
      const containerWidth =
        document.getElementById("coin-container").clientWidth;
      const coinWidth = 200; // Assuming each coin container has a fixed width of 200px
      const newCoinsPerRow = Math.floor(containerWidth / coinWidth);
      setCoinsPerRow(newCoinsPerRow);
    };

    calculateCoinsPerRow();
    window.addEventListener("resize", calculateCoinsPerRow);

    return () => {
      window.removeEventListener("resize", calculateCoinsPerRow);
    };
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === trendingCoins.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? trendingCoins.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="mx-auto mt-8 p-3 max-w-screen-xl ">
        <div
          id="coin-container"
          className="flex items-center justify-between overflow-x-auto scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          <button onClick={handlePrev} aria-label="Previous" tabIndex="0">
            <svg
              className="w-6 h-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                className="fill-current text-black"
                d="M14 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293A1 1 0 0 1 14 17z"
              />
            </svg>
          </button>
          {trendingCoins.map((coin, index) => (
            <div
              key={coin.item.id}
              className={`p-4 w-md text-black rounded-md mx-2 border-2 border-gray-200 ${
                index >= currentIndex && index < currentIndex + coinsPerRow
                  ? ""
                  : "hidden"
              }`}
            >
              <div className="flex gap-1 items-center">
                <img
                  src={coin.item.small}
                  alt={coin.item.name}
                  className="w-8 h-8  rounded-full p-1"
                />
                <p className="text-center">{coin.item.symbol.toUpperCase()}</p>
                <sup>
                  <p
                    className={`text-center ${
                      coin.item.data.price_change_percentage_24h.usd > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {parseFloat(
                      coin.item.data.price_change_percentage_24h.usd
                    ).toFixed(2)}
                    %
                  </p>
                </sup>
              </div>

              <p className="text-sm">{coin.item.data.price}</p>

              <img
                src={coin.item.data.sparkline}
                alt="Price Graph"
                className="w-full h-16 mx-auto mt-2"
                style={{
                  filter: `hue-rotate(${
                    coin.item.data.price_change_percentage_24h.usd > 0
                      ? "0deg"
                      : "-120deg"
                  })`,
                }}
              />
            </div>
          ))}
          <button onClick={handleNext} aria-label="Next" tabIndex="0">
            <div className="w-4 h-3 -ml-2 text-gray-700">
              <svg
                className="w-6 h-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className="fill-current text-black"
                  d="M14.707 12.707l-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default YouMayAlsoLike;
