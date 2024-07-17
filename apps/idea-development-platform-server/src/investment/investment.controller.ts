import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InvestmentService } from "./investment.service";
import { InvestmentControllerBase } from "./base/investment.controller.base";

@swagger.ApiTags("investments")
@common.Controller("investments")
export class InvestmentController extends InvestmentControllerBase {
  constructor(protected readonly service: InvestmentService) {
    super(service);
  }
}
