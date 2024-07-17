import { Module } from "@nestjs/common";
import { RoadmapModuleBase } from "./base/roadmap.module.base";
import { RoadmapService } from "./roadmap.service";
import { RoadmapController } from "./roadmap.controller";
import { RoadmapResolver } from "./roadmap.resolver";

@Module({
  imports: [RoadmapModuleBase],
  controllers: [RoadmapController],
  providers: [RoadmapService, RoadmapResolver],
  exports: [RoadmapService],
})
export class RoadmapModule {}
