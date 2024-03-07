import React from "react";
import TradingMobile from "../assets/TradingMobile.webp";
import TradingMobile2 from "../assets/TradingMobile2.webp";

const AboutBitcoin = () => {
  return (
    <section className="bg-white mt-14 rounded-md p-8">
      <h1 className="text-xl font-semibold mb-4">About Bitcoin</h1>
      <article>
        <h2 className="font-bold mb-2">What is Bitcoin?</h2>
        <p className="pb-4 border-b-2  border-gray-200 text-md text-paraGray">
          Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </article>
      <article>
        <h2 className="font-bold my-3">Lorem ipsum dolor sit amet </h2>
        <p className="pb-4  text-md text-paraGray">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.
        </p>
      </article>
      <article>
        <p className="pb-4 b text-md text-paraGray tracking-wide">
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
          vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
          felis pellentesque interdum. Odio cursus phasellus velit in senectus
          enim dui. Turpis tristique placerat interdum sed volutpat. Id
          imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi
          nunc praesent massa turpis a. Integer dignissim augue viverra nulla et
          quis lobortis phasellus. Integer pellentesque enim convallis ultricies
          at.
        </p>
      </article>
      <article>
        <p className="pb-4 border-b-2 border-gray-200 text-md text-paraGray">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </article>
      <div className="border-b-2 border-gray-200 pb-5">
        <h1 className="text-xl font-semibold my-4">Already Holding Bitcoin?</h1>
        <div className="flex flex-col gap-6  md:flex-row md:gap-20">
          <div className="flex gap-5 md:w-1/2 bg-gradient-to-br from-grenGradient  to-blue-800  p-6  rounded-md">
            <div className="h-30">
              <img src={TradingMobile2} alt="" className=" rounded-md h-24" />
            </div>
            <div>
              <p className="text-white font-bold text-lg md:text-2xl mb-3">
                Calculate your Profits
              </p>
              <a
                href="#profits"
                className=" bg-white text-xs px-4 py-2 rounded-md"
              >
                Check Now -&gt;
              </a>
            </div>
          </div>
          <div className="flex gap-5 md:w-1/2 bg-gradient-to-br from-orange-300 to-red-600  p-6  rounded-md">
            <div className="h-30">
              <img src={TradingMobile} alt="" className=" rounded-md h-24" />
            </div>
            <div>
              <p className="text-white font-bold  text-lg sm:text-2xl mb-3">
                Calculate your tax liability
              </p>
              <a
                href="#profits"
                className=" bg-white text-xs px-4 py-2 rounded-md"
              >
                Check Now -&gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBitcoin;
