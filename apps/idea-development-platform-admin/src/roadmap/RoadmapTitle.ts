import { Roadmap as TRoadmap } from "../api/roadmap/Roadmap";

export const ROADMAP_TITLE_FIELD = "id";

export const RoadmapTitle = (record: TRoadmap): string => {
  return record.id?.toString() || String(record.id);
};
