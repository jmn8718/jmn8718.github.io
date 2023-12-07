import React from "react";
import { Currency, type RewardsData } from "../../types";
import { formatAmount, formatCurrencyAmount } from "../../utils";

function RewardsDisplay({ data }: { data: RewardsData }) {
  return (
    <div className="rewards-wrapper">
      {Object.values(Currency).map((currency) => (
        <div className="rewards-item">
          <span className="item-currency-name">{currency}</span>
          <span className="item-currency-value">
            {formatAmount(
              data[currency].rewards,
              currency,
              true,
              currency !== Currency.Eur ? 4 : undefined,
            )}
          </span>
          <span className="item-currency-value">
            {formatCurrencyAmount(parseFloat(data[currency].currencyRewards))}
          </span>
        </div>
      ))}
    </div>
  );
}

export default RewardsDisplay;
