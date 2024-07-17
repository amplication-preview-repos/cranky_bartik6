import * as graphql from "@nestjs/graphql";
import { InvestmentResolverBase } from "./base/investment.resolver.base";
import { Investment } from "./base/Investment";
import { InvestmentService } from "./investment.service";

@graphql.Resolver(() => Investment)
export class InvestmentResolver extends InvestmentResolverBase {
  constructor(protected readonly service: InvestmentService) {
    super(service);
  }
}
