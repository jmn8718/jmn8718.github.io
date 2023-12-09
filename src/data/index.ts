import {
  type InvestmentData,
  type AccountsData,
  type AccountParameters,
} from "../types";

import investmentsData from "./investments/production.json";
import accountsData from "./accounts/data.json";
import accountsParameters from "./accounts/parameters.json";

export const investments = investmentsData as InvestmentData;
export const accounts = accountsData as AccountsData;
export const parameters = accountsParameters as AccountParameters;
