import React from "react";
import { formatAmount } from "../../utils/index.ts";
import { Currency, type MarketPrices } from "../../types";

function PricesDisplay({ prices }: { prices: MarketPrices }) {
  return (
    <div className="prices-wrapper">
      {Object.values(Currency).map((currency) => (
        <div className="prices-item">
          <span className="item-currency-name">{currency}</span>
          <span className="item-currency-value">
            {formatAmount(
              prices[currency],
              Currency.Eur,
              false,
              currency === Currency.Usdc ? 4 : undefined,
            )}
          </span>
        </div>
      ))}
    </div>
  );
}

export default PricesDisplay;
