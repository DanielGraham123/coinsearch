import React, { useEffect, useState } from "react";

import axios from "axios";
import { Sparklines } from "react-sparklines";
import { SparklinesLine } from "react-sparklines";

import { FaTwitter, FaFacebook, FaReddit, FaGithub } from "react-icons/fa";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";

export default function CoinPage() {
  let params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
      console.log(response.data);
    });
  }, [url]);

  return (
    <div className="rounded-div  my-12">
      {/* Top section */}
      <div className="flex items-center py-8">
        <img
          src={coin.image?.large}
          className="w-20 rounded-full mr-3"
          alt=""
        />

        <div className="">
          <p className="text-4xl font-bold">{coin?.name} price</p>
          <p>({coin.symbol?.toUpperCase()} / USD)</p>
        </div>
      </div>

      {/* Middle section */}
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="">
          <div className="flex justify-between items-center mb-4">
            <p className="text-3xl font-bold ">
              ${coin.market_data?.current_price.usd.toLocaleString()}
            </p>

            <p>7 Day</p>
          </div>

          {/* sparkline chart */}
          <Sparklines data={coin.market_data?.sparkline_7d.price}>
            <SparklinesLine color="teal" />
          </Sparklines>

          {/* details */}
          <div className="flex justify-between mt-3">
            <div className="">
              <div className="pb-8">
                <p className="text-xs text-gray-400">Market Cap</p>
                <p className="font-semibold">
                  ${coin.market_data?.market_cap.usd.toLocaleString()}
                </p>
              </div>

              <div className="pb-">
                <p className="text-xs text-gray-400">24h High</p>
                <p className="font-semibold">
                  ${coin.market_data?.high_24h.usd.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="text-right">
              <div>
                <div className="pb-8">
                  <p className="text-xs text-gray-400">Volume (24h)</p>
                  <p className="font-semibold">
                    ${coin.market_data?.total_volume.usd.toLocaleString()}
                  </p>
                </div>

                <div className="pb-4">
                  <p className="text-xs text-gray-400">24h Low</p>
                  <p className="font-semibold">
                    ${coin.market_data?.low_24h.usd.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market stats */}
        <div>
          <h2 className="text-2xl font-bold">Market Stats</h2>

          <div className="grid grid-cols-3 items-center">
            <div className="py-3">
              <p className="text-xs text-gray-500">Market Rank</p>
              {coin.market_cap_rank}
            </div>

            <div>
              <p className="text-xs text-gray-500">Hashing Algorithm</p>
              {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
            </div>

            <div>
              <p className="text-xs text-gray-500">Trust Score</p>
              {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
            </div>
          </div>

          <div className="grid grid-cols-3 items-center">
            <div className="py-3">
              <p className="text-xs text-gray-500">Price Change (24h)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </p>
              ) : null}
            </div>

            <div>
              <p className="text-xs text-gray-500">Price Change (7d)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
              ) : null}
            </div>

            <div>
              <p className="text-xs text-gray-500">Price Change (14d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_14d.toFixed(2)}%
                </p>
              ) : null}
            </div>
          </div>

          <div className="grid grid-cols-3 items-center">
            <div className="py-3">
              <p className="text-xs text-gray-500">Price Change (30d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_30d.toFixed(2)}%
                </p>
              ) : null}
            </div>

            <div>
              <p className="text-xs text-gray-500">Price Change (60d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_60d.toFixed(2)}%
                </p>
              ) : null}
            </div>

            <div>
              <p className="text-xs text-gray-500">Price Change (1y)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>
              ) : null}
            </div>
          </div>

          {/* social icons */}
          <div className="pt-2">
            <div className="flex justify-around text-accent p-8 -ml-8">
              <FaTwitter />
              <FaFacebook />
              <FaReddit />
              <FaGithub />
            </div>
          </div>
        </div>
      </div>

      {/* About the coin */}
      <div className="pb-6">
        <h2 className="text-2xl font-bold py-4">About {coin?.name}</h2>

        <div>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(coin.description?.en),
            }}
          ></p>
        </div>
      </div>
    </div>
  );
}
