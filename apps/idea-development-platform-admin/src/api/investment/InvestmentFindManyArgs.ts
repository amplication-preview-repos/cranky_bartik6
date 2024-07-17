import { InvestmentWhereInput } from "./InvestmentWhereInput";
import { InvestmentOrderByInput } from "./InvestmentOrderByInput";

export type InvestmentFindManyArgs = {
  where?: InvestmentWhereInput;
  orderBy?: Array<InvestmentOrderByInput>;
  skip?: number;
  take?: number;
};
