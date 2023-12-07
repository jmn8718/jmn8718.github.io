import React, { useEffect, useState } from "react";
import {
  calculateAccumulatedInvestedAmount,
  calculateAccumulatedRewards,
  fetchPrices,
  formatCurrencyAmount,
} from "../../utils/index.ts";
import {
  Currency,
  type Investment,
  type MarketPrices,
  type RewardsData,
} from "../../types";
import PricesDisplay from "./PricesDisplay.tsx";
import RewardsDisplay from "./RewardsDisplay.tsx";

const DEFAULT_REWARDS_DATA = {
  [Currency.Btc]: {
    rewards: "0",
    currencyRewards: "0",
  },
  [Currency.Eth]: {
    rewards: "0",
    currencyRewards: "0",
  },
  [Currency.Eur]: {
    rewards: "0",
    currencyRewards: "0",
  },
  [Currency.Usdc]: {
    rewards: "0",
    currencyRewards: "0",
  },
};
function Hero({ data }: { data: Investment[] }) {
  const [prices, setPrices] = useState<MarketPrices | undefined>();
  const [heroData, setHeroData] = useState<{
    totalInvestments: number;
    totalRewards: number;
    rewards: RewardsData;
    investments: RewardsData;
  }>({
    totalInvestments: 0,
    totalRewards: 0,
    rewards: DEFAULT_REWARDS_DATA,
    investments: DEFAULT_REWARDS_DATA,
  });
  useEffect(() => {
    async function run() {
      const pricesData = await fetchPrices();
      setPrices(pricesData);
    }
    run();
    setTimeout(() => {
      run();
    }, 10000);
  }, []);

  useEffect(() => {
    if (prices) {
      const rewards = calculateAccumulatedRewards(data, prices);
      const investments = calculateAccumulatedInvestedAmount(data, prices);
      const totalRewards = Object.values(rewards).reduce(
        (acc, current) => acc + parseFloat(current.currencyRewards),
        0,
      );
      const totalInvestments = Object.values(investments).reduce(
        (acc, current) => acc + parseFloat(current.currencyRewards),
        0,
      );
      setHeroData({
        totalInvestments,
        totalRewards,
        rewards,
        investments,
      });
    }
  }, [prices]);

  return (
    <div className="hero-wrapper">
      {prices ? (
        <div className="hero-row">
          <PricesDisplay prices={prices} />
          <div className="hero-column">
            <span className="hero-title">
              Weekly Rewards ({formatCurrencyAmount(heroData.totalRewards)})
            </span>
            <RewardsDisplay data={heroData.rewards} />
            <span className="hero-title">
              Invested ({formatCurrencyAmount(heroData.totalInvestments)})
            </span>
            <RewardsDisplay data={heroData.investments} />
          </div>
        </div>
      ) : (
        <div className="hero-row">loading</div>
      )}
    </div>
  );
}

export default Hero;
