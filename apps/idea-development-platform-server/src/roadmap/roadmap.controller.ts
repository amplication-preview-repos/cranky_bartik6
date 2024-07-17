import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RoadmapService } from "./roadmap.service";
import { RoadmapControllerBase } from "./base/roadmap.controller.base";

@swagger.ApiTags("roadmaps")
@common.Controller("roadmaps")
export class RoadmapController extends RoadmapControllerBase {
  constructor(protected readonly service: RoadmapService) {
    super(service);
  }
}
