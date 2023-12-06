export interface InvestmentData {
  count: number;
  data: Investment[];
}

export interface Investment {
  currency: Currency;
  dateEnd: string;
  dateFirstReward: string;
  status: InvestmentStatus;
  apy: string;
  timesRewarded: string;
  apyGross: string;
  renewedFrom?: string;
  userId: string;
  id: string;
  product: Product;
  autorenewal: boolean;
  roi: string;
  roiGross: string;
  amount: string;
  dateStart: string;
  expectedAmount: string;
  numberOfRewards: string;
  weeklyReward: string;
}

export enum Currency {
  Btc = "BTC",
  Eur = "EUR",
  Eth = "ETH",
  Usdc = "USDC",
}

export enum Product {
  Earn180 = "EARN_180",
  Earn90 = "EARN_90",
}

export enum InvestmentStatus {
  Completed = "COMPLETED",
  Expired = "EXPIRED",
  Ongoing = "ONGOING",
  Created = "CREATED",
}

export type MarketPrices = {
  [Currency.Btc]: string;
  [Currency.Eth]: string;
  [Currency.Eur]: string;
  [Currency.Usdc]: string;
};

export type RewardsData = Record<
  Currency,
  {
    rewards: string;
    currencyRewards: string;
  }
>;
