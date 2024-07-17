import { Investment as TInvestment } from "../api/investment/Investment";

export const INVESTMENT_TITLE_FIELD = "id";

export const InvestmentTitle = (record: TInvestment): string => {
  return record.id?.toString() || String(record.id);
};
