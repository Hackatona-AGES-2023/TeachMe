import { ITrail } from "../../interfaces/trail-interface";
import { SetTrailProgressRequestDto } from "../dto/set-trail-progress-request-dto";
import { TrailRequestDto } from "../dto/trail-request-dto";
import { PAi } from "../port/ai-port";
import { PDatabase } from "../port/database-port";
import { PLogger } from "../port/logger-port";
import { PTeachMeService } from "../port/teach-me-service-port";

export class TeachMeService implements PTeachMeService {
  constructor(
    private readonly _logger: PLogger,
    private readonly _database: PDatabase,
    private readonly _ai: PAi
  ) {}
  setTrailProgress(
    SetTrailProgressRequestDto: SetTrailProgressRequestDto
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  createTrail(trailRequestDto: TrailRequestDto): Promise<ITrail> {
    throw new Error("Method not implemented.");
  }
  getTrail(trailId: string): Promise<ITrail> {
    throw new Error("Method not implemented.");
  }
  getTrails(studentId: string): Promise<ITrail[]> {
    throw new Error("Method not implemented.");
  }
}
