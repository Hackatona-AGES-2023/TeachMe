import { Router } from "express";
import { AAi } from "../core/adapter/ai/ai-adapter";
import { ADatabaseMock } from "../core/adapter/database/database-mock";
import { AHttpHandler } from "../core/adapter/handler/http-handler-adapter";
import { ALogger } from "../core/adapter/logger/logger-adapter";
import { PAi } from "../core/port/ai-port";
import { PDatabase } from "../core/port/database-port";
import { PHttpErrorHandler } from "../core/port/http-error-handler-port";
import { PHttpHandler } from "../core/port/http-handler-port";
import { PLogger } from "../core/port/logger-port";
import { PTeachMeService } from "../core/port/teach-me-service-port";
import { TeachMeService } from "../core/service/teach-me-service";

export class DependencyInjector {
  database: PDatabase;
  httpHandler: PHttpHandler;
  logger: PLogger;
  teachMeService: PTeachMeService;
  ai: PAi;
  httpErrorHandler: PHttpErrorHandler;

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
    if (!this.teachMeService) {
      this.teachMeService = new TeachMeService(
        this.logger,
        this.database,
        this.ai
      );
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
