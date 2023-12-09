import React from "react";
import { Currency, type AccountsRewardsData } from "../../types";
import { formatAmount, formatCurrencyAmount } from "../../utils";
import BigNumber from "bignumber.js";

function AccountRewardsDisplay({ data }: { data: AccountsRewardsData }) {
  return (
    <div className="rewards-wrapper">
      {Object.values(Currency).map((currency) =>
        new BigNumber(data[currency].amount).eq(0) ? (
          <></>
        ) : (
          <div className="rewards-item">
            <div>
              <span className="item-currency-name">{currency}</span>
              <span className="item-currency-value">
                {formatAmount(
                  data[currency].amount,
                  currency,
                  true,
                  currency !== Currency.Eur ? 4 : undefined,
                )}
              </span>
            </div>
            <div>
              <span className="item-currency-value">
                {formatAmount(
                  data[currency].reward,
                  currency,
                  true,
                  currency !== Currency.Eur ? 6 : undefined,
                )}
              </span>
              <span className="item-currency-value">
                {formatCurrencyAmount(
                  parseFloat(data[currency].currencyRewards),
                )}
              </span>
            </div>
          </div>
        ),
      )}
    </div>
  );
}

export default AccountRewardsDisplay;
