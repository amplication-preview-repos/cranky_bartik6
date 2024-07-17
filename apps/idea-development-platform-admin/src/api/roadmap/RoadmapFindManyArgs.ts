import { RoadmapWhereInput } from "./RoadmapWhereInput";
import { RoadmapOrderByInput } from "./RoadmapOrderByInput";

export type RoadmapFindManyArgs = {
  where?: RoadmapWhereInput;
  orderBy?: Array<RoadmapOrderByInput>;
  skip?: number;
  take?: number;
};
