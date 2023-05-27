import { ITrail } from "../../interfaces/trail-interface";
import { SetTrailProgressRequestDto } from "../dto/set-trail-progress-request-dto";
import { TrailRequestDto } from "../dto/trail-request-dto";

export interface PTeachMeService {
  createTrail(trailRequestDto: TrailRequestDto): Promise<ITrail>;
  getTrail(studentId: string, trailId: string): Promise<ITrail>;
  getTrails(studentId: string): Promise<Array<ITrail>>;
  setTrailProgress(
    SetTrailProgressRequestDto: SetTrailProgressRequestDto
  ): Promise<void>;
}
