import { ITrail } from "../../interfaces/trail-interface";

export interface PTrailService {
  execute(topic: string, trailId: string): Promise<ITrail>;
}
