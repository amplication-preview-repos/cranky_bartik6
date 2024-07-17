import { Module } from "@nestjs/common";
import { InvestmentModuleBase } from "./base/investment.module.base";
import { InvestmentService } from "./investment.service";
import { InvestmentController } from "./investment.controller";
import { InvestmentResolver } from "./investment.resolver";

@Module({
  imports: [InvestmentModuleBase],
  controllers: [InvestmentController],
  providers: [InvestmentService, InvestmentResolver],
  exports: [InvestmentService],
})
export class InvestmentModule {}
