import React from "react";
import { Currency, type RewardsData } from "../../types";
import { formatAmount, formatCurrencyAmount } from "../../utils";

function RewardsDisplay({ investments }: { investments: RewardsData }) {
  return (
    <div className="rewards-wrapper">
      {Object.values(Currency).map((currency) => (
        <div className="rewards-item">
          <span className="item-currency-name">{currency}</span>
          <div>
            <span className="item-currency-value">
              {formatAmount(
                investments[currency].amount,
                currency,
                true,
                currency !== Currency.Eur ? 8 : undefined,
              )}
            </span>
            <span className="item-currency-value">
              {formatCurrencyAmount(
                parseFloat(investments[currency].currencyAmount),
              )}
            </span>
          </div>
          <div>
            <span className="item-currency-value">
              {formatAmount(
                investments[currency].rewards,
                currency,
                true,
                currency !== Currency.Eur ? 8 : undefined,
              )}
            </span>
            <span className="item-currency-value">
              {formatCurrencyAmount(
                parseFloat(investments[currency].currencyRewards),
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RewardsDisplay;
