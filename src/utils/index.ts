import { format as dateFns } from "date-fns";
import BigNumber from "bignumber.js";
import {
  Currency,
  MarketPrices,
  type Investment,
  type RewardsData,
} from "../types/index";

const getDecimals = (currency: Currency) => {
  switch (currency) {
    case Currency.Btc:
      return 8;
    case Currency.Eth:
      return 18;
    case Currency.Usdc:
      return 6;
    default:
      return 2;
  }
};

const getCurrencySymol = (currency: Currency) => {
  switch (currency) {
    case Currency.Btc:
      return "₿";
    case Currency.Eth:
      return "E";
    case Currency.Usdc:
      return "$";
    default:
      return "€";
  }
};

export const baseAmountToCurrencyAmount = (
  amount: string,
  currency: Currency,
) => {
  const decimals = getDecimals(currency);
  const conversion = new BigNumber(10).pow(decimals);
  const number = new BigNumber(amount);
  return number.div(conversion).toFixed(decimals);
};

export const formatCurrencyAmount = (amount: string) => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(parseFloat(amount));
};
export const formatAmount = (
  amount: string,
  currency: Currency,
  applyConversion = false,
  forceDecimals?: number,
) => {
  const decimals = getDecimals(currency);
  const conversion = new BigNumber(applyConversion ? 10 : 1).pow(decimals);
  const number = new BigNumber(amount);
  return `${number
    .div(conversion)
    .toFixed(forceDecimals ?? decimals)} ${getCurrencySymol(currency)}`;
};

export const formatDate = (date: string, format = "yyyy-MM-dd") => {
  return dateFns(new Date(date), format);
};

const KRAKEN_API_URL = "https://api.kraken.com/0/public/Ticker";
export const fetchKrakenPairPrice = async (symbol: string) => {
  const res = await fetch(`${KRAKEN_API_URL}?pair=${symbol}`);
  const { error, result } = await res.json();
  if (error.length > 0) {
    console.error(error);
    return "-1";
  }
  if (result[symbol]) return result[symbol].c[0] as string;
  return "0";
};

export const fetchPrices = async (): Promise<MarketPrices> => {
  const [btcPrice, ethPrice, usdcPrice] = await Promise.allSettled([
    fetchKrakenPairPrice("XXBTZEUR"),
    fetchKrakenPairPrice("XETHZEUR"),
    fetchKrakenPairPrice("USDCEUR"),
  ]);
  return {
    [Currency.Btc]: btcPrice.status === "fulfilled" ? btcPrice.value : "0",
    [Currency.Eth]: ethPrice.status === "fulfilled" ? ethPrice.value : "0",
    [Currency.Eur]: "1",
    [Currency.Usdc]: usdcPrice.status === "fulfilled" ? usdcPrice.value : "0",
  };
};

export const calculateAccumulatedRewards = (
  data: Investment[],
  prices: MarketPrices,
) => {
  const accumulatedRewards = data.reduce(
    (currentAccumulatedData, currentInvestment) => {
      const currentInvestmentCurrency = currentInvestment.currency as Currency;
      const currentAccumulatedReward =
        currentAccumulatedData[currentInvestmentCurrency];
      return {
        ...currentAccumulatedData,
        [currentInvestmentCurrency]: new BigNumber(currentAccumulatedReward)
          .plus(currentInvestment.weeklyReward)
          .toString(),
      };
    },
    {
      [Currency.Btc]: "0",
      [Currency.Eth]: "0",
      [Currency.Eur]: "0",
      [Currency.Usdc]: "0",
    } as Record<Currency, string>,
  );
  return Object.keys(prices).reduce(
    (acc, currentCurrency) => {
      const currencyRewards =
        accumulatedRewards[currentCurrency as Currency] ?? "0";
      return {
        ...acc,
        [currentCurrency]: {
          rewards: currencyRewards,
          currencyRewards: currencyToPriceCurrency(
            baseAmountToCurrencyAmount(
              currencyRewards,
              currentCurrency as Currency,
            ),
            prices[currentCurrency as Currency],
          ),
        },
      };
    },
    {
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
    } as RewardsData,
  );
};

export const calculateAccumulatedInvestedAmount = (
  data: Investment[],
  prices: MarketPrices,
) => {
  const accumulatedInvestments = data.reduce(
    (currentAccumulatedData, currentInvestment) => {
      const currentInvestmentCurrency = currentInvestment.currency as Currency;
      const currentAccumulatedReward =
        currentAccumulatedData[currentInvestmentCurrency];
      return {
        ...currentAccumulatedData,
        [currentInvestmentCurrency]: new BigNumber(currentAccumulatedReward)
          .plus(currentInvestment.amount)
          .toString(),
      };
    },
    {
      [Currency.Btc]: "0",
      [Currency.Eth]: "0",
      [Currency.Eur]: "0",
      [Currency.Usdc]: "0",
    } as Record<Currency, string>,
  );
  return Object.keys(prices).reduce(
    (acc, currentCurrency) => {
      const currencyRewards =
        accumulatedInvestments[currentCurrency as Currency] ?? "0";
      return {
        ...acc,
        [currentCurrency]: {
          rewards: currencyRewards,
          currencyRewards: currencyToPriceCurrency(
            baseAmountToCurrencyAmount(
              currencyRewards,
              currentCurrency as Currency,
            ),
            prices[currentCurrency as Currency],
          ),
        },
      };
    },
    {
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
    } as RewardsData,
  );
};

export const currencyToPriceCurrency = (amount: string, price: string) =>
  new BigNumber(amount).multipliedBy(price).toString();
