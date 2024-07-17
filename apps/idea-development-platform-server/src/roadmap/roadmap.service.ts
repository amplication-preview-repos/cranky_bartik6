import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RoadmapServiceBase } from "./base/roadmap.service.base";

@Injectable()
export class RoadmapService extends RoadmapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
