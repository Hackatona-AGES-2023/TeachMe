import { Router } from "express";
import { AAi } from "../core/adapter/ai/ai-adapter";
import { ADatabaseMock } from "../core/adapter/database/database-mock";
import { HttpErrorHandler } from "../core/adapter/handler/http-error-handler";
import { AHttpHandler } from "../core/adapter/handler/http-handler-adapter";
import { ALogger } from "../core/adapter/logger/logger-adapter";
import { TrailBuilder } from "../core/builder/trail-builder";
import { PAi } from "../core/port/ai-port";
import { PDatabase } from "../core/port/database-port";
import { PHttpErrorHandler } from "../core/port/http-error-handler-port";
import { PHttpHandler } from "../core/port/http-handler-port";
import { PLogger } from "../core/port/logger-port";
import { PTeachMeService } from "../core/port/teach-me-service-port";
import { PTrailService } from "../core/port/trail-service-port";
import { TeachMeService } from "../core/service/teach-me-service";
import { TrailService } from "../core/service/trail-service";

export class DependencyInjector {
  database: PDatabase;
  httpHandler: PHttpHandler;
  logger: PLogger;
  teachMeService: PTeachMeService;
  trailService: PTrailService;
  ai: PAi;
  httpErrorHandler: PHttpErrorHandler;
  trailBuilder: TrailBuilder;

  private static _instance: DependencyInjector;
  static GetInstance(): DependencyInjector {
    if (!this._instance) {
      this._instance = new DependencyInjector();
    }

    return this._instance;
  }

  private constructor() {}

  wireDependencies(): DependencyInjector {
    if (!this.logger) {
      this.logger = new ALogger();
    }
    if (!this.database) {
      this.database = new ADatabaseMock();
    }
    if (!this.ai) {
      this.ai = new AAi(this.logger);
    }

    if (!this.trailBuilder) {
      this.trailBuilder = new TrailBuilder(this.logger);
    }
    if (!this.trailService) {
      this.trailService = new TrailService(
        this.logger,
        this.ai,
        this.trailBuilder
      );
    }
    if (!this.teachMeService) {
      this.teachMeService = new TeachMeService(
        this.logger,
        this.database,
        this.trailService
      );
    }
    if (!this.httpErrorHandler) {
      this.httpErrorHandler = new HttpErrorHandler();
    }

    if (!this.httpHandler) {
      this.httpHandler = new AHttpHandler(
        this.logger,
        this.teachMeService,
        this.httpErrorHandler
      );
    }

    return this;
  }
}
