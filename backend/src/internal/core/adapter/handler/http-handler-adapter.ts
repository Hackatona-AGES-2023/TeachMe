import { SetTrailProgressRequestDto } from "../../dto/set-trail-progress-request-dto";
import { TrailRequestDto } from "../../dto/trail-request-dto";
import { TrailRequestModel } from "../../model/trail-request-model";
import { PHttpErrorHandler } from "../../port/http-error-handler-port";
import { PHttpHandler } from "../../port/http-handler-port";
import { PLogger } from "../../port/logger-port";
import { PTeachMeService } from "../../port/teach-me-service-port";

export class AHttpHandler implements PHttpHandler {
  constructor(
    private _logger: PLogger,
    private readonly _teachMeService: PTeachMeService,
    private readonly _httpErrorHandler: PHttpErrorHandler
  ) {}
  async setTrailProgress(req: any, res: any): Promise<void> {
    try {
      this._logger.info({
        event: "AHttpHandler.setTrailProgress",
        details: "Process started",
      });

      const setTrailProgressRequestDto = new SetTrailProgressRequestDto(
        req.body,
        req.params
      );

      await this._teachMeService.setTrailProgress(setTrailProgressRequestDto);

      res.StatusCode = 204;
      res.json({});
    } catch (err) {
      this._logger.error({
        error: err.message,
        event: "AHttpHandler.setTrailProgress",
      });
    }
  }
  async createTrail(req: any, res: any): Promise<void> {
    try {
      this._logger.info({
        event: "AHttpHandler.createStudyTrail",
        details: "Process started",
      });

      const trailRequestDto = new TrailRequestDto(req.body, req.params);

      const trail = await this._teachMeService.createTrail(trailRequestDto);

      res.json(trail);
    } catch (err) {
      this._logger.error({
        error: err.message,
        event: "AHttpHandler.createStudyTrail",
      });
    }
  }
  async getTrail(req: any, res: any): Promise<void> {
    try {
      this._logger.info({
        event: "AHttpHandler.getStudyTrailProgress",
        details: "Process started",
      });

      const studentId = req.params?.studentId;
      const trailId = req.query?.trailId;

      const trail = await this._teachMeService.getTrail(studentId, trailId);

      res.json(trail);
    } catch (err) {
      this._logger.error({
        error: err.message,
        event: "AHttpHandler.getStudyTrailProgress",
      });
    }
  }
  async getTrails(req: any, res: any): Promise<void> {
    try {
      this._logger.info({
        event: "AHttpHandler.getTrails",
        details: "Process started",
      });

      const studentId = req.params?.studentId;

      const trails = await this._teachMeService.getTrails(studentId);

      res.json(trails);
    } catch (err) {
      this._logger.error({
        error: err.message,
        event: "AHttpHandler.getTrails",
      });
    }
  }
}
