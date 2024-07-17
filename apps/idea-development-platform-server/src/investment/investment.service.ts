import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InvestmentServiceBase } from "./base/investment.service.base";

@Injectable()
export class InvestmentService extends InvestmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
