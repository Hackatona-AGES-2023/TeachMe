import { randomUUID } from "crypto";
import { ITrail } from "../../interfaces/trail-interface";
import { TrailBuilder } from "../builder/trail-builder";
import { SetTrailProgressRequestDto } from "../dto/set-trail-progress-request-dto";
import { TrailRequestDto } from "../dto/trail-request-dto";
import { TrailNotFoundError } from "../errors/errors";
import { PAi } from "../port/ai-port";
import { PDatabase } from "../port/database-port";
import { PLogger } from "../port/logger-port";
import { PTeachMeService } from "../port/teach-me-service-port";
import { PTrailService } from "../port/trail-service-port";

export class TeachMeService implements PTeachMeService {
  constructor(
    private readonly _logger: PLogger,
    private readonly _database: PDatabase,
    private readonly _trailService: PTrailService
  ) {}
  async setTrailProgress(
    setTrailProgressRequestDto: SetTrailProgressRequestDto
  ): Promise<void> {
    try {
      this._logger.info({
        event: "TeachMeService.setTrailProgress",
        details: "Process started",
        setTrailProgressRequestDto,
      });

      const trail = await this.getTrail(
        setTrailProgressRequestDto.studentId,
        setTrailProgressRequestDto.trailId
      );

      trail.progress = setTrailProgressRequestDto.progress;

      await this._database.putTrail(
        setTrailProgressRequestDto.studentId,
        trail
      );
    } catch (err) {
      this._logger.error({
        event: "TeachMeService.setTrailProgress",
        details: "Process error",
        error: err.message,
      });
      throw err;
    }
  }
  async createTrail(trailRequestDto: TrailRequestDto): Promise<ITrail> {
    try {
      this._logger.info({
        event: "TeachMeService.createTrail",
        details: "Process started",
        trailRequestDto,
      });
      const trailId = randomUUID();

      const trail = await this._trailService.execute(
        trailRequestDto.topic,
        trailId
      );

      await this._database.putTrail(trailRequestDto.studentId, trail);

      return trail;
    } catch (err) {
      this._logger.error({
        event: "TeachMeService.createTrail",
        details: "Process error",
        error: err.message,
      });
      throw err;
    }
  }
  async getTrail(studentId, trailId: string): Promise<ITrail> {
    try {
      this._logger.info({
        event: "TeachMeService.getTrail",
        details: "Process started",
        trailId,
        studentId,
      });

      const trails = await this._database.getTrails(studentId);

      let trail: any;

      for (let t of trails) {
        if (t.id === trailId) {
          trail = t;
          break;
        }
      }

      if (!trail) {
        this._logger.warn({
          event: "TeachMeService.getTrail",
          details: "Process warn",
          warn: "trail not found",
        });
        throw new TrailNotFoundError("trail not found");
      }

      return trail;
    } catch (err) {
      this._logger.error({
        event: "TeachMeService.getTrail",
        details: "Process error",
        error: err.message,
      });
      throw err;
    }
  }
  async getTrails(studentId: string): Promise<ITrail[]> {
    try {
      this._logger.info({
        event: "TeachMeService.getTrails",
        details: "Process started",
        studentId,
      });

      const trails = await this._database.getTrails(studentId);

      return trails;
    } catch (err) {
      this._logger.error({
        event: "TeachMeService.getTrails",
        details: "Process error",
        error: err.message,
      });
      throw err;
    }
  }
}
