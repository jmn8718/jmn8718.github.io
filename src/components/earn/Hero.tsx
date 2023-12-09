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
    amount: "0",
    currencyAmount: "0",
    rewards: "0",
    currencyRewards: "0",
  },
  [Currency.Eth]: {
    amount: "0",
    currencyAmount: "0",
    rewards: "0",
    currencyRewards: "0",
  },
  [Currency.Eur]: {
    amount: "0",
    currencyAmount: "0",
    rewards: "0",
    currencyRewards: "0",
  },
  [Currency.Usdc]: {
    amount: "0",
    currencyAmount: "0",
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
    investments: RewardsData;
  }>({
    totalInvestments: 0,
    totalRewards: 0,
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
      const investmentsAccumulatedData = calculateAccumulatedInvestedAmount(
        investments,
        prices,
      );
      const totalRewards = Object.values(investmentsAccumulatedData).reduce(
        (acc, current) => acc + parseFloat(current.currencyRewards),
        0,
      );
      const totalInvestments = Object.values(investmentsAccumulatedData).reduce(
        (acc, current) => acc + parseFloat(current.currencyAmount),
        0,
      );
      setInvestmentsHeroData({
        totalInvestments,
        totalRewards,
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
  return (
    <div className="hero-wrapper">
      {prices ? (
        <div className="hero-row">
          <div className="hero-column">
            <PricesDisplay prices={prices} />
            <span className="hero-title pt-4">
              Investments (
              {formatCurrencyAmount(investmentsHeroData.totalInvestments)})
            </span>
            <span className="hero-subtitle pt-4">
              Rewards ({formatCurrencyAmount(investmentsHeroData.totalRewards)})
            </span>
            <span className="hero-title pt-4">
              Accounts ({formatCurrencyAmount(accountsHeroData.totalInvested)})
            </span>
            <span className="hero-subtitle pt-4">
              Reward ({formatCurrencyAmount(accountsHeroData.totalRewards)})
            </span>
          </div>
          <div className="hero-column">
            <span className="hero-subtitle">Investments</span>
            <RewardsDisplay investments={investmentsHeroData.investments} />
          </div>
          <div className="hero-column">
            <span className="hero-subtitle">Accounts</span>
            <AccountRewardsDisplay data={accountsHeroData} />
          </div>
        </div>
      ) : (
        <div className="hero-row">loading</div>
      )}
    </div>
  );
}

export default Hero;
