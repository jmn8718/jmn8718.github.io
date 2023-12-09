import React from "react";
import { Currency, type AccountsRewardsData } from "../../types";
import { formatAmount, formatCurrencyAmount } from "../../utils";

function AccountRewardsDisplay({ data }: { data: AccountsRewardsData }) {
  return (
    <div className="rewards-wrapper">
      {Object.values(Currency).map((currency) => (
        <div className="rewards-item">
          <span className="item-currency-name">{currency}</span>
          <span className="item-currency-value">
            {formatAmount(
              data[currency].amount,
              currency,
              true,
              currency !== Currency.Eur ? 4 : undefined,
            )}
          </span>
          <span className="item-currency-value">
            {formatAmount(
              data[currency].reward,
              currency,
              true,
              currency !== Currency.Eur ? 6 : undefined,
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

export default AccountRewardsDisplay;
