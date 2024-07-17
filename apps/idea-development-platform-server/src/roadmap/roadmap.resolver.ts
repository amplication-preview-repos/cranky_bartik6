import * as graphql from "@nestjs/graphql";
import { RoadmapResolverBase } from "./base/roadmap.resolver.base";
import { Roadmap } from "./base/Roadmap";
import { RoadmapService } from "./roadmap.service";

@graphql.Resolver(() => Roadmap)
export class RoadmapResolver extends RoadmapResolverBase {
  constructor(protected readonly service: RoadmapService) {
    super(service);
  }
}
