import { useState } from "react";
import Navbar from "./components/Navbar";
import Chart from "./components/Chart";
import GetStartedCard from "./components/GetStartedCard";
import TrendingCoins from "./components/TrendingCoins";
import AccordionList from "./components/AccordionList";
import "./App.css";
import YouMayAlsoLike from "./components/YouMayAlsoLike";
import Team from "./components/Team";
import Tokenomics from "./components/Tokenomics";
import AboutBitcoin from "./components/AboutBitcoin";
import Sentiment from "./components/Sentiment";

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-14 my-4 text-xs">
        <span className="text-textGray">Cryptocurrencies &gt;&gt;</span> Bitcoin
      </div>
      <div className="flex flex-col mx-4 md:flex-row md:mx-14 gap-5 font-sans">
        <div className="w-full  md:w-3/4 md:pr-1">
          <Chart />
          <AccordionList />
          <Sentiment />
          <AboutBitcoin />
          <Tokenomics />
          <Team />
        </div>
        <div className="md:mx-auto md:flex md:flex-col hidden ">
          <GetStartedCard />
          <TrendingCoins />
        </div>
      </div>

      <section className="bg-white mt-14 py-12">
        <h2 className="text-xl font-medium mx-14 my-4 pl-15">
          You May Also Like
        </h2>
        <YouMayAlsoLike />
        <h2 className="text-xl font-medium mx-14 my-4">Trending Coins</h2>
        <YouMayAlsoLike />
      </section>

      <div className=" flex flex-col md:hidden ">
        <GetStartedCard />
        <TrendingCoins />
      </div>
    </>
  );
}

export default App;
