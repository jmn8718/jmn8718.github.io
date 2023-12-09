import React, { useEffect, useState } from "react";
import {
  calculateAccumulatedAccountRewards,
  calculateAccumulatedInvestedAmount,
  calculateAccumulatedRewards,
  fetchPrices,
  formatCurrencyAmount,
} from "../../utils/index.ts";
import {
  Currency,
  type Account,
  type Investment,
  type MarketPrices,
  type RewardsData,
  type AccountParameters,
  type AccountsRewardsData,
} from "../../types";
import PricesDisplay from "./PricesDisplay.tsx";
import RewardsDisplay from "./RewardsDisplay.tsx";
import AccountRewardsDisplay from "./AccountRewardsDisplay.tsx";

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

const DEFAULT_ACCOUNT_REWARDS_DATA = {
  totalInvested: 0,
  totalRewards: 0,
  [Currency.Btc]: {
    amount: "0",
    reward: "0",
    currencyRewards: "0",
  },
  [Currency.Eth]: {
    amount: "0",
    reward: "0",
    currencyRewards: "0",
  },
  [Currency.Eur]: {
    amount: "0",
    reward: "0",
    currencyRewards: "0",
  },
  [Currency.Usdc]: {
    amount: "0",
    reward: "0",
    currencyRewards: "0",
  },
};

function Hero({
  investments,
  accounts,
  accountParameters,
}: {
  investments: Investment[];
  accounts: Account[];
  accountParameters: AccountParameters;
}) {
  const [prices, setPrices] = useState<MarketPrices | undefined>();
  const [accountsHeroData, setAccountsHeroData] = useState<AccountsRewardsData>(
    DEFAULT_ACCOUNT_REWARDS_DATA,
  );
  const [investmentsHeroData, setInvestmentsHeroData] = useState<{
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
      const rewardsData = calculateAccumulatedRewards(investments, prices);
      const investmentsAccumulatedData = calculateAccumulatedInvestedAmount(
        investments,
        prices,
      );
      const totalRewards = Object.values(rewardsData).reduce(
        (acc, current) => acc + parseFloat(current.currencyRewards),
        0,
      );
      const totalInvestments = Object.values(investmentsAccumulatedData).reduce(
        (acc, current) => acc + parseFloat(current.currencyRewards),
        0,
      );
      setInvestmentsHeroData({
        totalInvestments,
        totalRewards,
        rewards: rewardsData,
        investments: investmentsAccumulatedData,
      });

      const accountRewards = calculateAccumulatedAccountRewards(
        accounts,
        accountParameters,
        prices,
      );
      setAccountsHeroData(accountRewards);
    }
  }, [prices]);
  console.log(accountsHeroData);
  return (
    <div className="hero-wrapper">
      {prices ? (
        <div className="hero-row">
          <PricesDisplay prices={prices} />
          <div className="hero-column">
            <span className="hero-title">
              Weekly Rewards (
              {formatCurrencyAmount(investmentsHeroData.totalRewards)})
            </span>
            <RewardsDisplay data={investmentsHeroData.rewards} />
            <span className="hero-title">
              Invested (
              {formatCurrencyAmount(investmentsHeroData.totalInvestments)})
            </span>
            <RewardsDisplay data={investmentsHeroData.investments} />
          </div>
          <div className="hero-column">
            <span className="hero-title">
              Accounts ({formatCurrencyAmount(accountsHeroData.totalRewards)})
            </span>
            <AccountRewardsDisplay data={accountsHeroData} />
            <span className="hero-title">
              Invested ({formatCurrencyAmount(accountsHeroData.totalInvested)})
            </span>
          </div>
        </div>
      ) : (
        <div className="hero-row">loading</div>
      )}
    </div>
  );
}

export default Hero;
